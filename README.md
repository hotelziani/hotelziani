# 🏨 RÉSIDENCE ZIANI - ULTRA-LUXURY BOOKING PLATFORM

<div align="center">

**A world-class hotel booking platform with glassmorphism design and integrated payment system**

[![Website](https://img.shields.io/badge/Website-Live-gold)](https://hotelziani.github.io/hotelziani/)
[![Supabase](https://img.shields.io/badge/Database-Supabase-green)](https://supabase.com)
[![Payment](https://img.shields.io/badge/Payment-Chargily-blue)](https://chargily.com)

</div>

---

## ✨ Features

### 🎨 **Ultra-Luxury Design**
- Modern glassmorphism UI with smooth animations
- Mobile-first responsive design
- Scroll-reveal effects with AOS library
- Multi-language support (Arabic, French, English)

### 🔐 **Advanced Authentication**
- Email/Password authentication
- OAuth integration (Google & Facebook)
- Protected admin dashboard
- User profile management

### 💳 **Payment Integration**
- Chargily API v2 (CIB/Edahabia)
- Secure webhook handling
- Real-time payment status updates
- Automatic booking confirmation

### 📊 **Booking Management**
- Real-time price calculation
- Dynamic room pricing
- Booking history
- Admin dashboard with statistics

---

## 🗂️ Project Structure

```
residence-ziani/
├── index.html              # Homepage with hero section
├── booking.html            # Booking form with price calculator
├── login.html              # Login page with OAuth
├── register.html           # Registration page
├── profile.html            # User dashboard
├── admin.html              # Admin panel (hotelziani@gmail.com only)
├── supabase.js             # Supabase client & API functions
├── translations.js         # Multi-language system
├── webhook.py              # Flask payment webhook server
├── requirements.txt        # Python dependencies
└── README.md               # This file
```

---

## 🚀 Quick Start

### 1️⃣ **Upload to GitHub Pages**

```bash
# Clone or download all files to your repository
git clone https://github.com/hotelziani/hotelziani.git
cd hotelziani

# Add all files
git add .
git commit -m "Initial commit - Résidence Ziani Platform"
git push origin main

# Enable GitHub Pages in repository settings
# Settings → Pages → Source: main branch
```

Your site will be live at: `https://hotelziani.github.io/hotelziani/`

### 2️⃣ **Configure Supabase Database**

#### Create Tables:

**Table 1: `rooms_settings`**
```sql
CREATE TABLE rooms_settings (
    id INTEGER PRIMARY KEY DEFAULT 1,
    studio_price INTEGER NOT NULL DEFAULT 8000,
    one_bedroom_price INTEGER NOT NULL DEFAULT 12000,
    family_price INTEGER NOT NULL DEFAULT 16000,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Insert default prices
INSERT INTO rooms_settings (id, studio_price, one_bedroom_price, family_price)
VALUES (1, 8000, 12000, 16000);
```

**Table 2: `bookings`**
```sql
CREATE TABLE bookings (
    id BIGSERIAL PRIMARY KEY,
    user_id UUID NOT NULL REFERENCES auth.users(id),
    room_type TEXT NOT NULL,
    check_in DATE NOT NULL,
    check_out DATE NOT NULL,
    guests INTEGER NOT NULL,
    total_price INTEGER NOT NULL,
    payment_status TEXT DEFAULT 'pending',
    full_name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    special_requests TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

-- Policy: Users can view their own bookings
CREATE POLICY "Users can view own bookings"
ON bookings FOR SELECT
USING (auth.uid() = user_id);

-- Policy: Users can create bookings
CREATE POLICY "Users can create bookings"
ON bookings FOR INSERT
WITH CHECK (auth.uid() = user_id);

-- Policy: Admin can view all bookings
CREATE POLICY "Admin can view all bookings"
ON bookings FOR SELECT
USING (auth.email() = 'hotelziani@gmail.com');

-- Policy: Admin can update bookings
CREATE POLICY "Admin can update all bookings"
ON bookings FOR UPDATE
USING (auth.email() = 'hotelziani@gmail.com');
```

#### Enable Authentication:
- Go to Supabase Dashboard → Authentication → Providers
- Enable **Email** provider
- Enable **Google** OAuth (add your credentials)
- Enable **Facebook** OAuth (add your credentials)

### 3️⃣ **Deploy Payment Webhook (Python)**

#### Option A: Deploy to Heroku

```bash
# Install Heroku CLI and login
heroku login

# Create new app
heroku create residence-ziani-webhook

# Set environment variables
heroku config:set CHARGILY_API_KEY=your_api_key
heroku config:set CHARGILY_SECRET=your_secret_key

# Deploy
git push heroku main
```

#### Option B: Deploy to Railway.app

1. Connect your GitHub repository
2. Add environment variables:
   - `CHARGILY_API_KEY`
   - `CHARGILY_SECRET`
3. Deploy automatically

#### Option C: Run Locally

```bash
# Install dependencies
pip install -r requirements.txt

# Set environment variables
export CHARGILY_API_KEY=your_api_key
export CHARGILY_SECRET=your_secret_key

# Run server
python webhook.py
```

### 4️⃣ **Configure Chargily**

1. Sign up at [Chargily](https://pay.chargily.net)
2. Get your API credentials
3. Set webhook URL to your deployed endpoint:
   - `https://your-webhook-domain.com/webhook/chargily`

---

## 🔧 Configuration

### Update Supabase Credentials

In `supabase.js`, update with your actual credentials:

```javascript
const SUPABASE_URL = 'YOUR_SUPABASE_URL';
const SUPABASE_KEY = 'YOUR_SUPABASE_ANON_KEY';
```

### Update Webhook Configuration

In `webhook.py`, replace:

```python
CHARGILY_API_KEY = 'YOUR_CHARGILY_API_KEY'
CHARGILY_SECRET = 'YOUR_CHARGILY_SECRET'
```

---

## 📱 Pages Overview

### 🏠 **Homepage** (`index.html`)
- Hero section with call-to-action
- Features showcase
- Room types with dynamic pricing
- Contact information
- Multi-language switcher

### 📅 **Booking Page** (`booking.html`)
- Room type selection
- Date picker with validation
- Real-time price calculation
- Guest information form
- Special requests field

### 🔐 **Authentication**
- **Login** (`login.html`): Email/Password + OAuth
- **Register** (`register.html`): Account creation

### 👤 **User Dashboard** (`profile.html`)
- User information
- Booking history
- Cancel pending bookings
- Payment status tracking

### 🛡️ **Admin Panel** (`admin.html`)
- Statistics dashboard
- All bookings management
- Dynamic price settings
- Revenue tracking

---

## 🎨 Design System

### Colors
```css
--primary-gold: #D4AF37
--dark-navy: #0A192F
--glass-bg: rgba(255, 255, 255, 0.1)
--glass-border: rgba(255, 255, 255, 0.2)
```

### Typography
- **Headings**: Playfair Display
- **Body**: Poppins

---

## 🔒 Security Features

- Row Level Security (RLS) on Supabase
- Admin-only access to dashboard
- Secure webhook signature verification
- HTTPS-only connections
- CORS protection

---

## 📧 Contact Information

**Résidence Ziani**
- **Address**: N7A, Marsa Ben M'Hidi, Algeria
- **Phone**: 0771 57 10 10 / 0555 87 86 64
- **Email**: hotelziani@gmail.com
- **Fax**: 043 51 09 01 / 02 / 03
- **Facebook**: [Visit Page](https://www.facebook.com/profile.php?id=100094520373011)

---

## 📄 License

© 2024 Résidence Ziani. All rights reserved.

---

## 🙏 Credits

Built with ❤️ using:
- [Supabase](https://supabase.com) - Backend & Auth
- [Chargily](https://chargily.com) - Payment Gateway
- [AOS](https://michalsnik.github.io/aos/) - Scroll Animations
- [Font Awesome](https://fontawesome.com) - Icons

---

<div align="center">

**Made with 💎 for Résidence Ziani**

[Website](https://hotelziani.github.io/hotelziani/) • [Facebook](https://www.facebook.com/profile.php?id=100094520373011)

</div>
