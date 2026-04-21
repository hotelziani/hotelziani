// Price data (سيتم تحديثها من قاعدة البيانات)
        let roomPrices = {
            'studio': { name: 'شقة استوديو', price: 2500, maxGuests: 2 },
            'one-bedroom': { name: 'شقة بغرفة نوم واحدة', price: 4000, maxGuests: 4 },
            'family': { name: 'الشقة العائلية', price: 6500, maxGuests: 6 }
        };

        // دالة جلب الأسعار المباشرة
        async function fetchLiveRoomSettings() {
            if(window.supabaseClient) {
                const { data, error } = await window.supabaseClient.from('rooms_settings').select('*');
                if(!error && data) {
                    data.forEach(room => {
                        // تحديث الأسعار في الذاكرة
                        roomPrices[room.room_type] = {
                            name: room.name_ar,
                            price: room.price_per_night,
                            maxGuests: room.max_guests
                        };
                    });

                    // تحديث قائمة الاختيار (القائمة المنسدلة)
                    const select = document.getElementById('roomType');
                    Array.from(select.options).forEach(option => {
                        if(option.value && roomPrices[option.value]) {
                            option.textContent = `${roomPrices[option.value].name} - ${roomPrices[option.value].price} د.ج/ليلة`;
                        }
                    });

                    // تحديث الملخص
                    updateSummary();
                }
            }
        }
        
        // تشغيل الدالة فوراً
        fetchLiveRoomSettings();