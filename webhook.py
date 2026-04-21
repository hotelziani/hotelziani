#!/usr/bin/env python3
"""
🏨 RÉSIDENCE ZIANI - CHARGILY PAYMENT WEBHOOK
Integrated Flask server for handling Chargily payments and updating Supabase
"""

from flask import Flask, request, jsonify
from flask_cors import CORS
import os
import hmac
import hashlib
import requests
from datetime import datetime

app = Flask(__name__)
CORS(app)

# =====================================================
# CONFIGURATION
# =====================================================

# Supabase Configuration
SUPABASE_URL = "https://rzxlebrnpinxhljwrukm.supabase.co"
SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ6eGxlYnJucGlueGhsandydWttIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQzNzk4NzAsImV4cCI6MjA0OTk1NTg3MH0.sb_publishable_IZgIqBv_tcX8EIttAarRjQ_fklag9fr"

# Chargily Configuration (Replace with your actual keys)
CHARGILY_API_KEY = os.getenv('CHARGILY_API_KEY', 'YOUR_CHARGILY_API_KEY')
CHARGILY_SECRET = os.getenv('CHARGILY_SECRET', 'YOUR_CHARGILY_SECRET')
CHARGILY_API_URL = "https://pay.chargily.net/api/v2"

# =====================================================
# SUPABASE HELPER FUNCTIONS
# =====================================================

def supabase_request(method, endpoint, data=None):
    """Make request to Supabase"""
    url = f"{SUPABASE_URL}/rest/v1/{endpoint}"
    headers = {
        "apikey": SUPABASE_KEY,
        "Authorization": f"Bearer {SUPABASE_KEY}",
        "Content-Type": "application/json",
        "Prefer": "return=representation"
    }
    
    try:
        if method == "GET":
            response = requests.get(url, headers=headers)
        elif method == "POST":
            response = requests.post(url, headers=headers, json=data)
        elif method == "PATCH":
            response = requests.patch(url, headers=headers, json=data)
        
        response.raise_for_status()
        return response.json()
    except Exception as e:
        print(f"Supabase Error: {str(e)}")
        return None

def update_booking_status(booking_id, status):
    """Update booking payment status in Supabase"""
    endpoint = f"bookings?id=eq.{booking_id}"
    data = {
        "payment_status": status,
        "updated_at": datetime.utcnow().isoformat()
    }
    return supabase_request("PATCH", endpoint, data)

def get_booking(booking_id):
    """Get booking details from Supabase"""
    endpoint = f"bookings?id=eq.{booking_id}"
    result = supabase_request("GET", endpoint)
    return result[0] if result and len(result) > 0 else None

# =====================================================
# CHARGILY PAYMENT FUNCTIONS
# =====================================================

def create_chargily_checkout(booking_data):
    """Create Chargily checkout session"""
    headers = {
        "Authorization": f"Bearer {CHARGILY_API_KEY}",
        "Content-Type": "application/json"
    }
    
    payload = {
        "amount": booking_data["total_price"],
        "currency": "dzd",
        "customer": {
            "name": booking_data["full_name"],
            "email": booking_data["email"],
            "phone": booking_data["phone"]
        },
        "metadata": {
            "booking_id": booking_data["id"],
            "room_type": booking_data["room_type"],
            "check_in": booking_data["check_in"],
            "check_out": booking_data["check_out"]
        },
        "success_url": f"https://hotelziani.github.io/hotelziani/profile.html?payment=success",
        "failure_url": f"https://hotelziani.github.io/hotelziani/booking.html?payment=failed",
        "webhook_url": f"{request.url_root}webhook/chargily"
    }
    
    try:
        response = requests.post(
            f"{CHARGILY_API_URL}/checkouts",
            headers=headers,
            json=payload
        )
        response.raise_for_status()
        return response.json()
    except Exception as e:
        print(f"Chargily Error: {str(e)}")
        return None

def verify_chargily_signature(payload, signature):
    """Verify Chargily webhook signature"""
    computed_signature = hmac.new(
        CHARGILY_SECRET.encode(),
        payload.encode(),
        hashlib.sha256
    ).hexdigest()
    
    return hmac.compare_digest(computed_signature, signature)

# =====================================================
# API ROUTES
# =====================================================

@app.route('/')
def index():
    """Health check endpoint"""
    return jsonify({
        "status": "online",
        "service": "Résidence Ziani Payment Gateway",
        "version": "1.0.0"
    })

@app.route('/create-payment', methods=['POST'])
def create_payment():
    """Create payment checkout session"""
    try:
        booking_id = request.json.get('booking_id')
        
        if not booking_id:
            return jsonify({"error": "Booking ID required"}), 400
        
        # Get booking details
        booking = get_booking(booking_id)
        
        if not booking:
            return jsonify({"error": "Booking not found"}), 404
        
        # Create Chargily checkout
        checkout = create_chargily_checkout(booking)
        
        if not checkout:
            return jsonify({"error": "Failed to create payment session"}), 500
        
        return jsonify({
            "success": True,
            "checkout_url": checkout.get("checkout_url"),
            "checkout_id": checkout.get("id")
        })
    
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route('/webhook/chargily', methods=['POST'])
def chargily_webhook():
    """Handle Chargily payment webhooks"""
    try:
        # Get signature from headers
        signature = request.headers.get('X-Chargily-Signature')
        
        if not signature:
            return jsonify({"error": "No signature"}), 401
        
        # Get payload
        payload = request.get_data(as_text=True)
        
        # Verify signature
        if not verify_chargily_signature(payload, signature):
            return jsonify({"error": "Invalid signature"}), 401
        
        # Parse webhook data
        data = request.json
        event_type = data.get('type')
        checkout_data = data.get('data', {})
        
        print(f"Webhook received: {event_type}")
        
        # Handle payment success
        if event_type == 'checkout.paid':
            booking_id = checkout_data.get('metadata', {}).get('booking_id')
            
            if booking_id:
                # Update booking status to paid
                result = update_booking_status(booking_id, 'paid')
                
                if result:
                    print(f"Booking #{booking_id} marked as PAID")
                    
                    # TODO: Send confirmation email to customer
                    # send_booking_confirmation_email(booking_id)
        
        # Handle payment failure
        elif event_type == 'checkout.failed':
            booking_id = checkout_data.get('metadata', {}).get('booking_id')
            
            if booking_id:
                print(f"Payment failed for booking #{booking_id}")
                # Optionally update status or send notification
        
        return jsonify({"success": True}), 200
    
    except Exception as e:
        print(f"Webhook Error: {str(e)}")
        return jsonify({"error": str(e)}), 500

@app.route('/booking/<int:booking_id>/status', methods=['GET'])
def get_booking_status(booking_id):
    """Get booking payment status"""
    try:
        booking = get_booking(booking_id)
        
        if not booking:
            return jsonify({"error": "Booking not found"}), 404
        
        return jsonify({
            "booking_id": booking["id"],
            "payment_status": booking["payment_status"],
            "total_price": booking["total_price"],
            "created_at": booking["created_at"]
        })
    
    except Exception as e:
        return jsonify({"error": str(e)}), 500

# =====================================================
# EMAIL NOTIFICATION (Optional)
# =====================================================

def send_booking_confirmation_email(booking_id):
    """
    Send booking confirmation email to customer
    TODO: Implement with your preferred email service (SendGrid, Mailgun, etc.)
    """
    booking = get_booking(booking_id)
    
    if not booking:
        return False
    
    # Example email content
    email_subject = f"Booking Confirmation - Résidence Ziani #{booking['id']}"
    email_body = f"""
    Dear {booking['full_name']},
    
    Your booking has been confirmed!
    
    Booking Details:
    - Booking ID: #{booking['id']}
    - Room Type: {booking['room_type']}
    - Check-in: {booking['check_in']}
    - Check-out: {booking['check_out']}
    - Guests: {booking['guests']}
    - Total: {booking['total_price']} DZD
    
    We look forward to welcoming you!
    
    Best regards,
    Résidence Ziani Team
    
    ---
    N7A, Marsa Ben M'Hidi, Algeria
    Phone: 0771 57 10 10 / 0555 87 86 64
    Email: hotelziani@gmail.com
    """
    
    # TODO: Implement actual email sending
    print(f"Email would be sent to: {booking['email']}")
    print(f"Subject: {email_subject}")
    print(f"Body: {email_body}")
    
    return True

# =====================================================
# RUN SERVER
# =====================================================

if __name__ == '__main__':
    port = int(os.getenv('PORT', 5000))
    app.run(
        host='0.0.0.0',
        port=port,
        debug=os.getenv('FLASK_ENV') == 'development'
    )
