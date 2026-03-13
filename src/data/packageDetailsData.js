// Full package details data (from packageDetailsData + serviceDetailsData in main.js)
// Keyed by the package title string used in the booking modal.

export const packageDetailsData = {
    'VIP Travel': {
        category: { en: 'VIP Services', ar: 'خدمات كبار الشخصيات' },
        price: 'On Request',
        duration: { en: 'Customized', ar: 'مخصص' },
        capacity: { en: 'Exclusive', ar: 'حصري' },
        description: { 
            en: 'Experience travel in ultimate comfort and exclusivity with our premium VIP services. We provide personalized airport assistance (Meet & Assist), fast-track services, private transfers, luxury vehicle arrangements, and tailored concierge support to ensure a seamless and distinguished travel experience from arrival to departure.', 
            ar: 'استمتع بتجربة سفر بأقصى درجات الراحة والخصوصية مع خدماتنا المتميزة لكبار الشخصيات. نحن نقدم مساعدة شخصية في المطار (استقبال ومساعدة)، وخدمات المسار السريع، وانتقالات خاصة، وترتيبات مركبات فاخرة، ودعم كونسيرج مخصص لضمان تجربة سفر سلسة ومتميزة من الوصول إلى المغادرة.' 
        },
        highlights: {
            en: [
                'Personalized travel planning and luxury itineraries ✨',
                'Priority airport services, including fast-track check-in and lounge access',
                'Private transfers, chauffeur services, and luxury vehicles 🚗',
                'Exclusive accommodations and premium hotel arrangements 🏨',
                'Customized experiences and tailored activities for individuals or groups',
                'Attention to every detail for comfort, privacy, and convenience',
                'Seamless and stress-free travel from start to finish'
            ],
            ar: [
                'تخطيط سفر شخصي ومسارات رحلات فاخرة ✨',
                'خدمات مطار ذات أولوية، بما في ذلك تسجيل الوصول السريع والوصول إلى الصالات',
                'انتقالات خاصة، وخدمات سائق، ومركبات فاخرة 🚗',
                'أماكن إقامة حصرية وترتيبات فندقية متميزة 🏨',
                'تجارب مخصصة وأنشطة مصممة للأفراد أو المجموعات',
                'اهتمام بكل التفاصيل من أجل الراحة والخصوصية والسهولة',
                'سفر سلس وخالٍ من الإجهاد من البداية إلى النهاية'
            ],
        },
        images: [
            'assets/images/vip_1.jpg',
            'assets/images/vip_2.jpg',
            'assets/images/vip_3.jpg',
        ],
    },
    'Airport Transfers': {
        category: { en: 'Airport Transfers', ar: 'انتقالات المطار' },
        price: 'From $49',
        duration: { en: '24/7 Service', ar: 'خدمة 24/7' },
        capacity: { en: 'Max 4 Persons', ar: 'حد أقصى 4 أشخاص' },
        description: {
            en: 'Enjoy safe, reliable, and comfortable airport transfer services. We arrange private and group transfers with professional drivers to ensure timely pickups and smooth transportation between airports, hotels, and other destinations.',
            ar: 'استمتع بخدمات انتقال مطار آمنة وموثوقة ومريحة. نحن ننظم انتقالات خاصة وجماعية مع سائقين محترفين لضمان الاستلام في الوقت المحدد والنقل السلس بين المطارات والفنادق والوجهات الأخرى.'
        },
        highlights: {
            en: [
                'Reliable transfers to and from airports',
                'Private, shared, and luxury vehicle options',
                'Professional and experienced drivers',
                'Timely pick-up and drop-off services',
                'Comfortable and safe transportation',
                'Flexible scheduling to match flight timings',
                'Assistance with luggage and travel arrangements',
                '24/7 customer support for seamless travel'
            ],
            ar: [
                'انتقالات موثوقة من وإلى المطارات',
                'خيارات مركبات خاصة ومشتركة وفاخرة',
                'سائقون محترفون وذوو خبرة',
                'خدمات استلام وتوصيل في الوقت المحدد',
                'وسائل نقل مريحة وآمنة',
                'جدولة مرنة تتناسب مع توقيت الرحلات',
                'المساعدة في الأمتعة وترتيبات السفر',
                'دعم عملاء على مدار الساعة لتجربة سفر سلسة'
            ],
        },
        images: [
            'assets/images/transfers_1.jpg',
            'assets/images/11.png', // Fallback for failed download
            'assets/images/10.png', // Fallback for failed download
        ],
    },
    'Adventure & Cultural Tour': {
        category: { en: 'Excursions', ar: 'رحلات سياحية' },
        price: 'From $75',
        duration: { en: 'Full Day', ar: 'يوم كامل' },
        capacity: { en: 'Groups', ar: 'مجموعات' },
        description: { 
            en: 'We offer a wide range of carefully organized excursions and sightseeing tours designed to showcase the best of each destination. From cultural and historical tours to desert safaris, sea trips, and city explorations, our excursions are guided by experienced professionals to ensure safety, comfort, and unforgettable experiences', 
            ar: 'نحن نقدم مجموعة واسعة من الرحلات والجولات السياحية المنظمة بعناية والمصممة لاستعراض أفضل ما في كل وجهة. من الجولات الثقافية والتاريخية إلى رحلات السفاري الصحراوية والرحلات البحرية واستكشاف المدن، تتم قيادة رحلاتنا من قبل محترفين ذوي خبرة لضمان السلامة والراحة وتجارب لا تُنسى.' 
        },
        highlights: {
            en: [
                'Curated day trips and sightseeing tours to popular destinations',
                'Guided tours with knowledgeable guides',
                'Flexible itineraries for individuals, families, and groups',
                'Transportation arrangements for easy and comfortable travel',
                'Cultural, historical, and adventure-focused excursions',
                'Options for private or shared tour experiences',
                'Hassle-free booking and professional support',
                'Memorable experiences designed to enrich every journey'
            ],
            ar: [
                'رحلات يومية وجولات سياحية منسقة إلى الوجهات الشهيرة',
                'جولات إرشادية مع مرشدين ذوي معرفة واسعة',
                'مسارات رحلات مرنة للأفراد والعائلات والمجموعات',
                'ترتيبات النقل لسفر سهل ومريح',
                'رحلات ثقافية وتاريخية وتركز على المغامرة',
                'خيارات لتجارب جولات خاصة أو مشتركة',
                'حجز خالٍ من المتاعب ودعم احترافي',
                'تجارب لا تُنسى مصممة لإثراء كل رحلة'
            ],
        },
        images: [
            'assets/images/excursions_1.jpg',
            'assets/images/excursions_2.jpg',
            'assets/images/excursions_3.jpg',
        ],
    },
    'Express Visa Processing': {
        category: { en: 'Visa', ar: 'التأشيرات' },
        price: '$199',
        duration: { en: '3-5 Days', ar: '3-5 أيام' },
        capacity: { en: 'Guaranteed', ar: 'مضمون' },
        description: { en: 'We offer professional visa assistance services to simplify the travel process. Our team provides guidance on requirements, documentation, and application procedures.', ar: 'نقدم خدمات مساعدة تأشيرات احترافية لتبسيط عملية السفر. يوفر فريقنا إرشادات حول المتطلبات والمستندات وإجراءات التقديم.' },
        highlights: {
            en: [
                'Guidance on visa requirements for different countries 🌍',
                'Support with completing visa application forms',
                'Assistance in preparing and submitting required documents',
                'Follow-up on visa processing status',
                'Advice on travel regulations and entry requirements',
                'Fast-track services for urgent visa applications',
                'Professional support for individuals, families, and groups',
                'Ensuring a smooth and hassle-free visa process'
            ],
            ar: [
                'إرشادات حول متطلبات التأشيرة لمختلف الدول 🌍',
                'الدعم في استكمال نماذج طلبات التأشيرة',
                'المساعدة في إعداد وتقديم المستندات المطلوبة',
                'متابعة حالة معالجة التأشيرة',
                'نصائح حول لوائح السفر ومتطلبات الدخول',
                'خدمات المسار السريع لطلبات التأشيرة العاجلة',
                'دعم احترافي للأفراد والعائلات والمجموعات',
                'ضمان عملية تأشيرة سلسة وخالية من المتاعب'
            ],
        },
        images: [
            'assets/images/visa_1.jpg',
            'assets/images/visa_2.jpg',
        ],
    },
    'Ancient Egypt Discovery': {
        category: { en: 'Cultural', ar: 'ثقافية' },
        price: '$1,699',
        duration: { en: '9 Days', ar: '9 أيام' },
        capacity: { en: 'Max 15', ar: 'حد أقصى 15' },
        description: { 
            en: 'Explore the beauty and history of Egypt through our carefully designed travel packages. We offer well-planned itineraries that combine comfortable accommodations, convenient transportation, and memorable sightseeing experiences. Whether you are looking to discover ancient landmarks, relax by the Red Sea, or enjoy a cultural getaway, our Egypt travel packages provide a smooth and enjoyable journey.', 
            ar: 'استكشف جمال وتاريخ مصر من خلال باقات السفر المصممة بعناية. نحن نقدم مسارات رحلات مخططة جيداً تجمع بين الإقامة المريحة والنقل المريح وتجارب مشاهدة المعالم التي لا تُنسى. سواء كنت تبحث عن اكتشاف المعالم القديمة، أو الاسترخاء على شاطئ البحر الأحمر، أو الاستمتاع بملاذ ثقافي، فإن باقات السفر إلى مصر توفر رحلة سلسة وممتعة.' 
        },
        highlights: {
            en: [
                'Customized travel packages to Egypt’s top destinations including Cairo, Luxor, Aswan, Sharm El Sheikh, and Hurghada',
                'Comfortable hotel and resort accommodations',
                'Organized sightseeing tours and cultural experiences',
                'Transportation and airport transfer services',
                'Packages suitable for individuals, families, and groups',
                'Flexible itineraries tailored to different travel needs',
                'Professional travel assistance and support throughout the trip'
            ],
            ar: [
                'باقات سفر مخصصة لأهم الوجهات في مصر بما في ذلك القاهرة والأقصر وأسوان وشرم الشيخ والغردقة',
                'أماكن إقامة مريحة في الفنادق والمنتجعات',
                'جولات سياحية منظمة وتجارب ثقافية',
                'خدمات النقل وانتقالات المطار',
                'باقات مناسبة للأفراد والعائلات والمجموعات',
                'مسارات رحلات مرنة مصممة لتناسب احتياجات السفر المختلفة',
                'مساعدة سفر احترافية ودعم طوال الرحلة'
            ],
        },
        images: [
            'assets/images/1.png',
            'assets/images/2.png',
            'assets/images/3.png',
            'assets/images/4.png',
            'assets/images/5.png',
            'assets/images/6.png',
            'assets/images/7.png',
            'assets/images/8.png',
        ],
    },
    'International Flight Inquiry': {
        category: { en: 'Flight', ar: 'الرحلات الجوية' },
        price: 'From $299',
        duration: { en: 'Worldwide', ar: 'عالمي' },
        capacity: { en: 'Best Price', ar: 'أفضل سعر' },
        description: { 
            en: 'We provide competitive flight bookings with major international and regional airlines. Our team assists with reservations, reissues, cancellations, and special requests to ensure a seamless travel experience. We always aim to secure the best available fares and convenient routes for our clients.', 
            ar: 'نحن نوفر حجوزات طيران تنافسية مع كبرى شركات الطيران الدولية والإقليمية. يقدم فريقنا المساعدة في الحجوزات، وإعادة إصدار التذاكر، والإلغاءات، والطلبات الخاصة لضمان تجربة سفر سلسة. نهدف دائماً إلى تأمين أفضل الأسعار المتاحة والمسارات المريحة لعملائنا.' 
        },
        highlights: {
            en: [
                'Domestic and international flight reservations',
                'Access to a wide network of trusted airlines',
                'Competitive fares and special travel deals',
                'Flexible booking options to suit different travel needs',
                'Assistance with flight schedules and route planning',
                'Support with ticket changes and rebooking when required',
                'Quick and secure booking process',
                'Professional customer support for a smooth travel experience'
            ],
            ar: [
                'حجوزات طيران داخلية ودولية',
                'الوصول إلى شبكة واسعة من شركات الطيران الموثوقة',
                'أسعار تنافسية وعروض سفر خاصة',
                'خيارات حجز مرنة لتناسب مختلف احتياجات السفر',
                'المساعدة في جداول الرحلات وتخطيط المسارات',
                'دعم في تغيير التذاكر وإعادة الحجز عند الحاجة',
                'عملية حجز سريعة وآمنة',
                'دعم عملاء احترافي لتجربة سفر سلسة'
            ],
        },
        images: [
            'assets/images/flight_1.jpg',
            'assets/images/flight_2.jpg',
            'assets/images/flight_3.jpg',
        ],
    },

    'WorldWide Accommodation': {
        category: { en: 'Accommodation', ar: 'الإقامة' },
        price: 'From $199/night',
        duration: { en: 'Worldwide', ar: 'عالمي' },
        capacity: { en: 'Premium', ar: 'بريميوم' },
        description: { en: 'Explore a wide range of carefully selected hotels in top international destinations. We offer comfortable accommodation options, competitive rates, and reliable booking services to ensure a smooth and enjoyable stay wherever you travel.', ar: 'استكشف مجموعة واسعة من الفنادق المختارة بعناية في أهم الوجهات الدولية. نحن نقدم خيارات إقامة مريحة بأسعار تنافسية وخدمات حجز موثوقة لضمان إقامة سلسة وممتعة أينما سافرت.' },
        highlights: {
            en: [
                'Wide selection of international hotels in top global destinations',
                'Competitive rates and exclusive deals with trusted hotel partners',
                'Boutique, luxury, and business hotel options available',
                'Easy and secure booking process',
                'Personalized recommendations based on traveler preferences',
                '24/7 customer support for booking assistance',
                'Flexible accommodation options for individuals, families, and groups',
                'Reliable partnerships with leading international hotel providers'
            ],
            ar: [
                'مجموعة واسعة من الفنادق الدولية في أهم الوجهات العالمية',
                'أسعار تنافسية وعروض حصرية مع شركاء فنادق موثوقين',
                'خيارات فنادق بوتيك، فاخرة، وللأعمال متاحة',
                'عملية حجز سهلة وآمنة',
                'توصيات مخصصة بناءً على تفضيلات المسافر',
                'دعم عملاء على مدار الساعة للمساعدة في الحجز',
                'خيارات إقامة مرنة للأفراد والعائلات والمجموعات',
                'شراكات موثوقة مع كبار مزودي الفنادق الدوليين'
            ],
        },
        images: [
            'assets/images/accom_ww_1.jpg',
            'assets/images/accom_ww_2.jpg',
            'assets/images/accom_ww_3.jpg',
        ],
    },
    'Egypt Accommodation': {
        category: { en: 'Accommodation', ar: 'الإقامة' },
        price: 'From $99/night',
        duration: { en: 'Egypt', ar: 'مصر' },
        capacity: { en: 'Top Rated', ar: 'الأعلى تقييماً' },
        description: { en: 'Discover a wide range of hotel options across Egypt’s most popular destinations, offering comfort, quality service, and excellent locations. Whether traveling for leisure or business, we provide carefully selected accommodations to ensure a pleasant and memorable stay.', ar: 'اكتشف مجموعة واسعة من خيارات الفنادق في أشهر الوجهات المصرية، والتي توفر الراحة والخدمة عالية الجودة والمواقع الممتازة. سواء كنت تسافر للترفيه أو العمل، فإننا نوفر أماكن إقامة مختارة بعناية لضمان إقامة ممتعة لا تُنسى.' },
        highlights: {
            en: [
                'Wide selection of hotels across major destinations including Cairo, Sharm El Sheikh, Hurghada, Luxor, and Aswan',
                'Competitive rates with trusted local hotel partners',
                'Options ranging from luxury resorts to budget-friendly accommodations',
                'Hotels suitable for leisure travelers, families, and business trips',
                'Easy booking and flexible accommodation options',
                'Special deals for holidays and peak travel seasons',
                'Reliable customer support and booking assistance',
                'Access to beachfront resorts, city hotels, and cultural destination stays'
            ],
            ar: [
                'مجموعة واسعة من الفنادق في الوجهات الرئيسية بما في ذلك القاهرة وشرم الشيخ والغردقة والأقصر وأسوان',
                'أسعار تنافسية مع شركاء فنادق محليين موثوقين',
                'خيارات تتراوح من المنتجعات الفاخرة إلى أماكن الإقامة الاقتصادية',
                'فنادق مناسبة للمسافرين بغرض الترفيه والعائلات ورحلات العمل',
                'حجز سهل وخيارات إقامة مرنة',
                'عروض خاصة للأعياد ومواسم الذروة السياحية',
                'دعم عملاء موثوق ومساعدة في الحجز',
                'الوصول إلى منتجعات شاطئية وفنادق المدن وأماكن الإقامة في الوجهات الثقافية'
            ],
        },
        images: [
            'assets/images/accom_eg_1.jpg',
            'assets/images/accom_eg_2.jpg',
            'assets/images/accom_eg_3.jpg',
        ],
    },
    'Premium Hajj & Umrah Package': {
        category: { en: 'Hajj & Umrah', ar: 'الحج والعمرة' },
        price: '$3,500',
        duration: { en: '15 Days', ar: '15 يوم' },
        capacity: { en: 'Family', ar: 'عائلة' },
        description: { 
            en: 'We provide comprehensive Hajj and Umrah services designed to ensure a smooth and spiritually fulfilling journey. Our packages include visa processing, flight reservations, hotel accommodation in Makkah and Madinah, transportation, and full on-ground assistance to guarantee comfort and peace of mind throughout your pilgrimage.', 
            ar: 'نحن نقدم خدمات الحج والعمرة الشاملة المصممة لضمان رحلة سلسة ومليئة بالإيمان. تشمل باقاتنا معالجة التأشيرات، وحجوزات الطيران، والإقامة الفندقية في مكة المكرمة والمدينة المنورة، والنقل، والمساعدة الميدانية الكاملة لضمان الراحة وراحة البال طوال رحلتك الإيمانية.' 
        },
        highlights: {
            en: [
                'Complete Hajj and Umrah packages with travel, accommodation, and transport included',
                'Assistance with visa processing and required documentation',
                'Guided religious tours and spiritual support',
                'Comfortable hotels near holy sites in Makkah and Madinah',
                'Transportation between holy sites with reliable and safe vehicles',
                'Group and individual packages tailored to different needs',
                '24/7 customer support throughout the journey',
                'Focus on a smooth, safe, and spiritually fulfilling pilgrimage experience'
            ],
            ar: [
                'باقات حج وعمرة كاملة تشمل السفر والإقامة والنقل',
                'المساعدة في معالجة التأشيرات والمستندات المطلوبة',
                'جولات دينية إرشادية ودعم روحاني',
                'فنادق مريحة بالقرب من الحرمين في مكة والمدينة',
                'انتقالات بين المشاعر المقدسة بمركبات موثوقة وآمنة',
                'باقات جماعية وفردية مصممة لتناسب الاحتياجات المختلفة',
                'دعم عملاء على مدار الساعة طوال الرحلة',
                'التركيز على تجربة حج سلسة وآمنة ومجزية روحياً'
            ],
        },
        images: [
            'assets/images/hajj_makkah.png',
            'assets/images/madinah_prophet.png',
        ],
    },

    'Travel The World With Adonis': {
        category: { en: 'Packages', ar: 'الباقات' },
        price: '$3,299',
        duration: { en: '12 Days', ar: '12 يوم' },
        capacity: { en: 'Max 20', ar: 'حد أقصى 20' },
        description: { 
            en: 'Discover a variety of carefully designed travel packages to some of the world’s most exciting destinations. Our international packages combine comfortable accommodations, convenient flights, and well-planned itineraries to ensure a smooth and enjoyable travel experience. Whether you are traveling for leisure, adventure, or relaxation, we provide flexible options tailored to meet different travel preferences and budgets.', 
            ar: 'اكتشف مجموعة متنوعة من باقات السفر المصممة بعناية إلى بعض أكثر الوجهات إثارة في العالم. تجمع باقاتنا الدولية بين الإقامة المريحة والرحلات الجوية المريحة ومسارات الرحلات المخططة جيداً لضمان تجربة سفر سلسة وممتعة. سواء كنت تسافر للترفيه أو المغامرة أو الاسترخاء، فإننا نوفر خيارات مرنة مصممة لتلبية تفضيلات وميزانيات السفر المختلفة.' 
        },
        highlights: {
            en: [
                'Carefully designed travel packages to top international destinations',
                'Flexible itineraries to suit different travel preferences',
                'Hotel accommodation with trusted international partners',
                'International flight arrangements',
                'Optional guided tours and sightseeing experiences',
                'Airport transfers and transportation services',
                'Packages suitable for individuals, families, and groups',
                'Professional travel support and assistance throughout the journey.'
            ],
            ar: [
                'باقات سفر مصممة بعناية لأهم الوجهات الدولية',
                'مسارات رحلات مرنة لتناسب تفضيلات السفر المختلفة',
                'إقامة فندقية مع شركاء دوليين موثوقين',
                'ترتيبات الرحلات الجوية الدولية',
                'جولات إرشادية اختيارية وتجارب مشاهدة معالم المدينة',
                'انتقالات المطار وخدمات النقل',
                'باقات مناسبة للأفراد والعائلات والمجموعات',
                'دعم سفر احترافي ومساعدة طوال الرحلة'
            ],
        },
        images: [
            'assets/images/9.png',
            'assets/images/10.png',
            'assets/images/11.png',
            'assets/images/12.png',
        ],
    },
    'Security Clearance Services': {
        category: { en: 'Security Clearance', ar: 'التصاريح الأمنية' },
        price: 'Consultation',
        duration: { en: 'Variable', ar: 'متغير' },
        capacity: { en: 'Official', ar: 'رسمي' },
        description: { 
            en: 'We provide specialized assistance for travelers who require official security clearances to enter or work in certain countries. Our team guides you through the complex application processes, ensuring all legal and regulatory requirements are met for a smooth approval.', 
            ar: 'نقدم مساعدة متخصصة للمسافرين الذين يتطلبون تصاريح أمنية رسمية للدخول أو العمل في دول معينة. يوجهك فريقنا خلال إجراءات التقديم المعقدة، مع ضمان تلبية جميع المتطلبات القانونية والتنظيمية للحصول على موافقة سلسة.' 
        },
        highlights: {
            en: [
                'Guidance on security clearance requirements by country',
                'Assistance with background checks and documentation',
                'Coordination with official government channels',
                'Support for specialized work and travel permits',
                'Expert advice on local regulations and security protocols',
                'Application tracking and status updates',
                'Confidential and professional handling of information',
                'Tailored support for individuals and corporate clients'
            ],
            ar: [
                'إرشادات حول متطلبات التصريح الأمني حسب الدولة',
                'المساعدة في إجراءات التدقيق الأمني والتوثيق',
                'التنسيق مع القنوات الحكومية الرسمية',
                'دعم تصاريح العمل والسفر المتخصصة',
                'نصائح خبير حول اللوائح المحلية والبروتوكولات الأمنية',
                'متابعة الطلبات وتحديثات الحالة',
                'التعامل بسرية واحترافية مع المعلومات',
                'دعم مخصص للأفراد وعملاء الشركات'
            ],
        },
        images: [
            'assets/images/visa_2.jpg',
            'assets/images/visa_1.jpg',
        ],
    },
};
