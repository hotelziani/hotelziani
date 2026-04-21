/**
 * 🏨 RÉSIDENCE ZIANI - SUPABASE CORE MODULE
 * Centralized database configuration and API handlers
 */

const SUPABASE_URL = 'https://rzxlebrnpinxhljwrukm.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ6eGxlYnJucGlueGhsandydWttIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQzNzk4NzAsImV4cCI6MjA0OTk1NTg3MH0.sb_publishable_IZgIqBv_tcX8EIttAarRjQ_fklag9fr';

// Initialize Supabase Client
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

/**
 * Authentication Functions
 */
const Auth = {
    // Sign up new user
    async signUp(email, password, fullName) {
        try {
            const { data, error } = await supabase.auth.signUp({
                email,
                password,
                options: {
                    data: {
                        full_name: fullName
                    }
                }
            });
            
            if (error) throw error;
            return { success: true, data };
        } catch (error) {
            return { success: false, error: error.message };
        }
    },

    // Sign in existing user
    async signIn(email, password) {
        try {
            const { data, error } = await supabase.auth.signInWithPassword({
                email,
                password
            });
            
            if (error) throw error;
            return { success: true, data };
        } catch (error) {
            return { success: false, error: error.message };
        }
    },

    // Sign in with Google
    async signInWithGoogle() {
        try {
            const { data, error } = await supabase.auth.signInWithOAuth({
                provider: 'google',
                options: {
                    redirectTo: window.location.origin + '/profile.html'
                }
            });
            
            if (error) throw error;
            return { success: true, data };
        } catch (error) {
            return { success: false, error: error.message };
        }
    },

    // Sign in with Facebook
    async signInWithFacebook() {
        try {
            const { data, error } = await supabase.auth.signInWithOAuth({
                provider: 'facebook',
                options: {
                    redirectTo: window.location.origin + '/profile.html'
                }
            });
            
            if (error) throw error;
            return { success: true, data };
        } catch (error) {
            return { success: false, error: error.message };
        }
    },

    // Get current user
    async getCurrentUser() {
        try {
            const { data: { user }, error } = await supabase.auth.getUser();
            if (error) throw error;
            return user;
        } catch (error) {
            console.error('Error getting user:', error);
            return null;
        }
    },

    // Sign out
    async signOut() {
        try {
            const { error } = await supabase.auth.signOut();
            if (error) throw error;
            return { success: true };
        } catch (error) {
            return { success: false, error: error.message };
        }
    }
};

/**
 * Room Settings Functions
 */
const RoomSettings = {
    // Get all room prices
    async getPrices() {
        try {
            const { data, error } = await supabase
                .from('rooms_settings')
                .select('*')
                .single();
            
            if (error) throw error;
            return data;
        } catch (error) {
            console.error('Error fetching prices:', error);
            return null;
        }
    },

    // Update room price (admin only)
    async updatePrice(roomType, price) {
        try {
            const { data, error } = await supabase
                .from('rooms_settings')
                .update({ [roomType]: price })
                .eq('id', 1);
            
            if (error) throw error;
            return { success: true, data };
        } catch (error) {
            return { success: false, error: error.message };
        }
    }
};

/**
 * Booking Functions
 */
const Bookings = {
    // Create new booking
    async create(bookingData) {
        try {
            const { data, error } = await supabase
                .from('bookings')
                .insert([{
                    user_id: bookingData.userId,
                    room_type: bookingData.roomType,
                    check_in: bookingData.checkIn,
                    check_out: bookingData.checkOut,
                    guests: bookingData.guests,
                    total_price: bookingData.totalPrice,
                    payment_status: 'pending',
                    full_name: bookingData.fullName,
                    email: bookingData.email,
                    phone: bookingData.phone,
                    special_requests: bookingData.specialRequests || ''
                }])
                .select();
            
            if (error) throw error;
            return { success: true, data: data[0] };
        } catch (error) {
            return { success: false, error: error.message };
        }
    },

    // Get user bookings
    async getUserBookings(userId) {
        try {
            const { data, error } = await supabase
                .from('bookings')
                .select('*')
                .eq('user_id', userId)
                .order('created_at', { ascending: false });
            
            if (error) throw error;
            return data;
        } catch (error) {
            console.error('Error fetching bookings:', error);
            return [];
        }
    },

    // Get all bookings (admin only)
    async getAllBookings() {
        try {
            const { data, error } = await supabase
                .from('bookings')
                .select('*')
                .order('created_at', { ascending: false });
            
            if (error) throw error;
            return data;
        } catch (error) {
            console.error('Error fetching all bookings:', error);
            return [];
        }
    },

    // Update booking status
    async updateStatus(bookingId, status) {
        try {
            const { data, error } = await supabase
                .from('bookings')
                .update({ payment_status: status })
                .eq('id', bookingId);
            
            if (error) throw error;
            return { success: true, data };
        } catch (error) {
            return { success: false, error: error.message };
        }
    },

    // Cancel booking
    async cancel(bookingId) {
        try {
            const { data, error } = await supabase
                .from('bookings')
                .update({ payment_status: 'cancelled' })
                .eq('id', bookingId);
            
            if (error) throw error;
            return { success: true, data };
        } catch (error) {
            return { success: false, error: error.message };
        }
    }
};

/**
 * Utility Functions
 */
const Utils = {
    // Check if user is admin
    async isAdmin(email) {
        return email === 'hotelziani@gmail.com';
    },

    // Format date
    formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString('fr-FR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    },

    // Calculate nights between dates
    calculateNights(checkIn, checkOut) {
        const start = new Date(checkIn);
        const end = new Date(checkOut);
        const diffTime = Math.abs(end - start);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return diffDays;
    },

    // Format currency
    formatCurrency(amount) {
        return new Intl.NumberFormat('fr-DZ', {
            style: 'currency',
            currency: 'DZD',
            minimumFractionDigits: 0
        }).format(amount);
    }
};

// Export all modules
window.ResidenceZiani = {
    supabase,
    Auth,
    RoomSettings,
    Bookings,
    Utils
};
