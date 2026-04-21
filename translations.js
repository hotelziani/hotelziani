/**
 * 🌍 RÉSIDENCE ZIANI - MULTI-LANGUAGE SYSTEM
 * Support for Arabic, French, and English
 */

const translations = {
    ar: {
        // Navigation
        nav_home: 'الرئيسية',
        nav_booking: 'الحجز',
        nav_about: 'من نحن',
        nav_contact: 'اتصل بنا',
        nav_login: 'تسجيل الدخول',
        nav_register: 'إنشاء حساب',
        nav_profile: 'حسابي',
        nav_logout: 'تسجيل الخروج',

        // Hero Section
        hero_title: 'إقامة زياني',
        hero_subtitle: 'تجربة فاخرة على شاطئ مرسى بن مهيدي',
        hero_cta: 'احجز الآن',
        hero_explore: 'اكتشف المزيد',

        // Features
        features_title: 'لماذا تختار إقامة زياني؟',
        feature_luxury: 'فخامة لا مثيل لها',
        feature_luxury_desc: 'غرف مصممة بأرقى المعايير العالمية',
        feature_location: 'موقع استراتيجي',
        feature_location_desc: 'على بعد خطوات من الشاطئ والمرافق',
        feature_service: 'خدمة 24/7',
        feature_service_desc: 'فريق محترف لخدمتك على مدار الساعة',
        feature_wifi: 'إنترنت فائق السرعة',
        feature_wifi_desc: 'WiFi مجاني في جميع الغرف',

        // Room Types
        rooms_title: 'أنواع الغرف',
        room_studio: 'ستوديو',
        room_studio_desc: 'مساحة مريحة لشخصين مع كل المرافق',
        room_onebedroom: 'غرفة نوم واحدة',
        room_onebedroom_desc: 'مثالية للعائلات الصغيرة - حتى 4 أشخاص',
        room_family: 'عائلية',
        room_family_desc: 'مساحة واسعة للعائلات - حتى 6 أشخاص',
        room_night: 'ليلة',
        room_book: 'احجز الآن',

        // Booking Form
        booking_title: 'احجز إقامتك',
        booking_roomtype: 'نوع الغرفة',
        booking_checkin: 'تاريخ الدخول',
        booking_checkout: 'تاريخ الخروج',
        booking_guests: 'عدد الضيوف',
        booking_fullname: 'الاسم الكامل',
        booking_email: 'البريد الإلكتروني',
        booking_phone: 'رقم الهاتف',
        booking_special: 'طلبات خاصة (اختياري)',
        booking_nights: 'عدد الليالي',
        booking_total: 'المبلغ الإجمالي',
        booking_submit: 'تأكيد الحجز',
        booking_processing: 'جاري المعالجة...',

        // Login/Register
        login_title: 'تسجيل الدخول',
        login_email: 'البريد الإلكتروني',
        login_password: 'كلمة المرور',
        login_submit: 'دخول',
        login_google: 'تسجيل الدخول بجوجل',
        login_facebook: 'تسجيل الدخول بفيسبوك',
        login_noaccount: 'ليس لديك حساب؟',
        login_register: 'سجل الآن',
        
        register_title: 'إنشاء حساب جديد',
        register_fullname: 'الاسم الكامل',
        register_email: 'البريد الإلكتروني',
        register_password: 'كلمة المرور',
        register_confirm: 'تأكيد كلمة المرور',
        register_submit: 'إنشاء حساب',
        register_hasaccount: 'لديك حساب بالفعل؟',
        register_login: 'سجل الدخول',

        // Profile
        profile_title: 'حسابي',
        profile_welcome: 'مرحباً',
        profile_mybookings: 'حجوزاتي',
        profile_nobookings: 'لا توجد حجوزات حالياً',
        profile_booking_id: 'رقم الحجز',
        profile_room: 'الغرفة',
        profile_dates: 'التواريخ',
        profile_status: 'الحالة',
        profile_total: 'المبلغ',
        profile_cancel: 'إلغاء',

        // Admin
        admin_title: 'لوحة الإدارة',
        admin_bookings: 'جميع الحجوزات',
        admin_settings: 'إعدادات الأسعار',
        admin_update: 'تحديث',

        // Status
        status_pending: 'قيد الانتظار',
        status_paid: 'مدفوع',
        status_cancelled: 'ملغي',

        // Contact
        contact_title: 'اتصل بنا',
        contact_address: 'العنوان',
        contact_phone: 'الهاتف',
        contact_email: 'البريد الإلكتروني',
        contact_fax: 'الفاكس',

        // Footer
        footer_about: 'عن إقامة زياني',
        footer_about_text: 'وجهتك الفاخرة على ساحل البحر المتوسط',
        footer_links: 'روابط سريعة',
        footer_contact: 'معلومات الاتصال',
        footer_rights: 'جميع الحقوق محفوظة',

        // Messages
        msg_success: 'تمت العملية بنجاح',
        msg_error: 'حدث خطأ، يرجى المحاولة مرة أخرى',
        msg_booking_success: 'تم إنشاء حجزك بنجاح! سيتم توجيهك للدفع...',
        msg_login_success: 'تم تسجيل الدخول بنجاح',
        msg_logout_success: 'تم تسجيل الخروج',
        msg_password_mismatch: 'كلمات المرور غير متطابقة',
        msg_fill_required: 'يرجى ملء جميع الحقول المطلوبة',
        msg_invalid_dates: 'التواريخ غير صحيحة'
    },

    fr: {
        // Navigation
        nav_home: 'Accueil',
        nav_booking: 'Réservation',
        nav_about: 'À propos',
        nav_contact: 'Contact',
        nav_login: 'Connexion',
        nav_register: 'S\'inscrire',
        nav_profile: 'Mon compte',
        nav_logout: 'Déconnexion',

        // Hero Section
        hero_title: 'Résidence Ziani',
        hero_subtitle: 'Une expérience de luxe sur la plage de Marsa Ben M\'Hidi',
        hero_cta: 'Réserver maintenant',
        hero_explore: 'Découvrir plus',

        // Features
        features_title: 'Pourquoi choisir Résidence Ziani?',
        feature_luxury: 'Luxe incomparable',
        feature_luxury_desc: 'Chambres conçues selon les plus hauts standards',
        feature_location: 'Emplacement stratégique',
        feature_location_desc: 'À quelques pas de la plage et des commodités',
        feature_service: 'Service 24/7',
        feature_service_desc: 'Équipe professionnelle à votre service',
        feature_wifi: 'Internet ultra-rapide',
        feature_wifi_desc: 'WiFi gratuit dans toutes les chambres',

        // Room Types
        rooms_title: 'Types de chambres',
        room_studio: 'Studio',
        room_studio_desc: 'Espace confortable pour deux avec toutes les commodités',
        room_onebedroom: 'Une chambre',
        room_onebedroom_desc: 'Idéal pour petites familles - jusqu\'à 4 personnes',
        room_family: 'Familiale',
        room_family_desc: 'Grand espace pour familles - jusqu\'à 6 personnes',
        room_night: 'nuit',
        room_book: 'Réserver',

        // Booking Form
        booking_title: 'Réservez votre séjour',
        booking_roomtype: 'Type de chambre',
        booking_checkin: 'Date d\'arrivée',
        booking_checkout: 'Date de départ',
        booking_guests: 'Nombre de personnes',
        booking_fullname: 'Nom complet',
        booking_email: 'Email',
        booking_phone: 'Téléphone',
        booking_special: 'Demandes spéciales (optionnel)',
        booking_nights: 'Nombre de nuits',
        booking_total: 'Total',
        booking_submit: 'Confirmer la réservation',
        booking_processing: 'Traitement en cours...',

        // Login/Register
        login_title: 'Connexion',
        login_email: 'Email',
        login_password: 'Mot de passe',
        login_submit: 'Se connecter',
        login_google: 'Continuer avec Google',
        login_facebook: 'Continuer avec Facebook',
        login_noaccount: 'Pas de compte?',
        login_register: 'S\'inscrire',
        
        register_title: 'Créer un compte',
        register_fullname: 'Nom complet',
        register_email: 'Email',
        register_password: 'Mot de passe',
        register_confirm: 'Confirmer le mot de passe',
        register_submit: 'Créer un compte',
        register_hasaccount: 'Déjà un compte?',
        register_login: 'Se connecter',

        // Profile
        profile_title: 'Mon compte',
        profile_welcome: 'Bienvenue',
        profile_mybookings: 'Mes réservations',
        profile_nobookings: 'Aucune réservation pour le moment',
        profile_booking_id: 'N° réservation',
        profile_room: 'Chambre',
        profile_dates: 'Dates',
        profile_status: 'Statut',
        profile_total: 'Total',
        profile_cancel: 'Annuler',

        // Admin
        admin_title: 'Panneau d\'administration',
        admin_bookings: 'Toutes les réservations',
        admin_settings: 'Paramètres des prix',
        admin_update: 'Mettre à jour',

        // Status
        status_pending: 'En attente',
        status_paid: 'Payé',
        status_cancelled: 'Annulé',

        // Contact
        contact_title: 'Contactez-nous',
        contact_address: 'Adresse',
        contact_phone: 'Téléphone',
        contact_email: 'Email',
        contact_fax: 'Fax',

        // Footer
        footer_about: 'À propos de Résidence Ziani',
        footer_about_text: 'Votre destination de luxe sur la côte méditerranéenne',
        footer_links: 'Liens rapides',
        footer_contact: 'Informations de contact',
        footer_rights: 'Tous droits réservés',

        // Messages
        msg_success: 'Opération réussie',
        msg_error: 'Une erreur est survenue, veuillez réessayer',
        msg_booking_success: 'Votre réservation a été créée! Redirection vers le paiement...',
        msg_login_success: 'Connexion réussie',
        msg_logout_success: 'Déconnexion réussie',
        msg_password_mismatch: 'Les mots de passe ne correspondent pas',
        msg_fill_required: 'Veuillez remplir tous les champs requis',
        msg_invalid_dates: 'Dates invalides'
    },

    en: {
        // Navigation
        nav_home: 'Home',
        nav_booking: 'Booking',
        nav_about: 'About',
        nav_contact: 'Contact',
        nav_login: 'Login',
        nav_register: 'Register',
        nav_profile: 'My Account',
        nav_logout: 'Logout',

        // Hero Section
        hero_title: 'Résidence Ziani',
        hero_subtitle: 'A luxury experience on Marsa Ben M\'Hidi beach',
        hero_cta: 'Book Now',
        hero_explore: 'Explore More',

        // Features
        features_title: 'Why Choose Résidence Ziani?',
        feature_luxury: 'Unmatched Luxury',
        feature_luxury_desc: 'Rooms designed to the highest standards',
        feature_location: 'Strategic Location',
        feature_location_desc: 'Steps away from beach and amenities',
        feature_service: '24/7 Service',
        feature_service_desc: 'Professional team at your service',
        feature_wifi: 'High-Speed Internet',
        feature_wifi_desc: 'Free WiFi in all rooms',

        // Room Types
        rooms_title: 'Room Types',
        room_studio: 'Studio',
        room_studio_desc: 'Comfortable space for two with all amenities',
        room_onebedroom: 'One Bedroom',
        room_onebedroom_desc: 'Ideal for small families - up to 4 guests',
        room_family: 'Family',
        room_family_desc: 'Large space for families - up to 6 guests',
        room_night: 'night',
        room_book: 'Book Now',

        // Booking Form
        booking_title: 'Book Your Stay',
        booking_roomtype: 'Room Type',
        booking_checkin: 'Check-in Date',
        booking_checkout: 'Check-out Date',
        booking_guests: 'Number of Guests',
        booking_fullname: 'Full Name',
        booking_email: 'Email',
        booking_phone: 'Phone',
        booking_special: 'Special Requests (optional)',
        booking_nights: 'Number of Nights',
        booking_total: 'Total Amount',
        booking_submit: 'Confirm Booking',
        booking_processing: 'Processing...',

        // Login/Register
        login_title: 'Login',
        login_email: 'Email',
        login_password: 'Password',
        login_submit: 'Sign In',
        login_google: 'Continue with Google',
        login_facebook: 'Continue with Facebook',
        login_noaccount: 'No account?',
        login_register: 'Register',
        
        register_title: 'Create Account',
        register_fullname: 'Full Name',
        register_email: 'Email',
        register_password: 'Password',
        register_confirm: 'Confirm Password',
        register_submit: 'Create Account',
        register_hasaccount: 'Already have an account?',
        register_login: 'Sign In',

        // Profile
        profile_title: 'My Account',
        profile_welcome: 'Welcome',
        profile_mybookings: 'My Bookings',
        profile_nobookings: 'No bookings yet',
        profile_booking_id: 'Booking ID',
        profile_room: 'Room',
        profile_dates: 'Dates',
        profile_status: 'Status',
        profile_total: 'Total',
        profile_cancel: 'Cancel',

        // Admin
        admin_title: 'Admin Dashboard',
        admin_bookings: 'All Bookings',
        admin_settings: 'Price Settings',
        admin_update: 'Update',

        // Status
        status_pending: 'Pending',
        status_paid: 'Paid',
        status_cancelled: 'Cancelled',

        // Contact
        contact_title: 'Contact Us',
        contact_address: 'Address',
        contact_phone: 'Phone',
        contact_email: 'Email',
        contact_fax: 'Fax',

        // Footer
        footer_about: 'About Résidence Ziani',
        footer_about_text: 'Your luxury destination on the Mediterranean coast',
        footer_links: 'Quick Links',
        footer_contact: 'Contact Information',
        footer_rights: 'All rights reserved',

        // Messages
        msg_success: 'Operation successful',
        msg_error: 'An error occurred, please try again',
        msg_booking_success: 'Your booking has been created! Redirecting to payment...',
        msg_login_success: 'Login successful',
        msg_logout_success: 'Logged out successfully',
        msg_password_mismatch: 'Passwords do not match',
        msg_fill_required: 'Please fill all required fields',
        msg_invalid_dates: 'Invalid dates'
    }
};

/**
 * Language Manager
 */
class LanguageManager {
    constructor() {
        this.currentLang = localStorage.getItem('language') || 'ar';
        this.translations = translations;
    }

    // Get translation
    t(key) {
        return this.translations[this.currentLang][key] || key;
    }

    // Set language
    setLanguage(lang) {
        if (this.translations[lang]) {
            this.currentLang = lang;
            localStorage.setItem('language', lang);
            this.updatePageLanguage();
        }
    }

    // Update all translatable elements
    updatePageLanguage() {
        // Update text content
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            element.textContent = this.t(key);
        });

        // Update placeholders
        document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
            const key = element.getAttribute('data-i18n-placeholder');
            element.placeholder = this.t(key);
        });

        // Update HTML direction
        document.documentElement.dir = this.currentLang === 'ar' ? 'rtl' : 'ltr';
        document.documentElement.lang = this.currentLang;

        // Update active language button
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelector(`[data-lang="${this.currentLang}"]`)?.classList.add('active');
    }

    // Get current language
    getCurrentLanguage() {
        return this.currentLang;
    }
}

// Initialize language manager
const langManager = new LanguageManager();

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    langManager.updatePageLanguage();

    // Add language switcher listeners
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            langManager.setLanguage(lang);
        });
    });
});

// Export for global use
window.langManager = langManager;
