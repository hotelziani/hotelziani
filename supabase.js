// supabase.js
// ملف الربط المركزي مع قاعدة بيانات Supabase

const supabaseUrl = 'https://rzxlebrnpinxhljwrukm.supabase.co';
const supabaseAnonKey = 'sb_publishable_IZgIqBv_tcX8EIttAarRjQ_fklag9fr';

// تأكد من أن المكتبة تم تحميلها قبل استدعاء createClient
if (typeof window.supabase !== 'undefined') {
    window.supabaseClient = window.supabase.createClient(supabaseUrl, supabaseAnonKey);
} else {
    console.error("Supabase library not loaded. Make sure to include the script tag.");
}