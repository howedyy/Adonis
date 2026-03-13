// Full package details data (from packageDetailsData + serviceDetailsData in main.js)
// Keyed by the package title string used in the booking modal.

export const packageDetailsData = {
    'VIP Airport Concierge': {
        category: { en: 'VIP Services', ar: 'خدمات كبار الشخصيات' },
        price: '$299',
        duration: { en: '24/7', ar: '24/7' },
        capacity: { en: 'Premium', ar: 'بريميوم' },
        description: { en: 'Experience seamless travel with our exclusive VIP airport concierge service. Enjoy fast-track immigration, premium lounge access, personal assistance, and priority boarding for a stress-free journey.', ar: 'اختبر السفر السلس مع خدمة كونسيرج المطار VIP الحصرية. استمتع بالهجرة السريعة، والوصول إلى الصالة المتميزة، والمساعدة الشخصية، والصعود ذو الأولوية لرحلة خالية من الإجهاد.' },
        highlights: {
            en: ['Fast-track immigration and security', 'Premium airport lounge access', 'Personal meet and greet service', 'Priority boarding assistance', 'Luggage handling support', 'Flight status monitoring', 'VIP transfer arrangements', 'Available at major airports worldwide'],
            ar: ['الهجرة والأمن السريع', 'الوصول إلى صالة المطار المتميزة', 'خدمة الاستقبال والترحيب الشخصية', 'مساعدة الصعود ذات الأولوية', 'دعم التعامل مع الأمتعة', 'مراقبة حالة الرحلة', 'ترتيبات النقل VIP', 'متاح في المطارات الرئيسية في جميع أنحاء العالم'],
        },
        images: [
            'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800',
            'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800',
            'https://images.unsplash.com/photo-1464207687429-7505649dae38?w=800',
        ],
    },
    'Private Jet Charter': {
        category: { en: 'VIP Services', ar: 'خدمات كبار الشخصيات' },
        price: '$15,000',
        duration: { en: 'Flexible', ar: 'مرن' },
        capacity: { en: 'Max 12', ar: 'حد أقصى 12' },
        description: { en: 'Travel in ultimate luxury with our private jet charter services. Enjoy complete privacy, flexible scheduling, gourmet catering, and personalized service to any destination worldwide.', ar: 'سافر بأقصى درجات الفخامة مع خدمات استئجار الطائرات الخاصة. استمتع بالخصوصية الكاملة، والجدولة المرنة، والطعام الفاخر، والخدمة الشخصية إلى أي وجهة في العالم.' },
        highlights: {
            en: ['Luxury private jet fleet', 'Flexible departure times', 'Gourmet in-flight catering', 'Complete privacy and comfort', 'Professional flight crew', 'Ground transportation included', 'Custom flight routes', 'Worldwide destinations'],
            ar: ['أسطول طائرات خاصة فاخرة', 'أوقات مغادرة مرنة', 'طعام فاخر على متن الطائرة', 'خصوصية وراحة كاملة', 'طاقم طيران محترف', 'النقل البري متضمن', 'مسارات طيران مخصصة', 'وجهات في جميع أنحاء العالم'],
        },
        images: [
            'https://images.unsplash.com/photo-1464207687429-7505649dae38?w=800',
            'https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=800',
            'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800',
        ],
    },
    'Private VIP Airport Transfer': {
        category: { en: 'Airport Transfers', ar: 'انتقالات المطار' },
        price: 'From $49',
        duration: { en: '24/7 Service', ar: 'خدمة 24/7' },
        capacity: { en: 'Max 4 Persons', ar: 'حد أقصى 4 أشخاص' },
        description: { en: 'Enjoy safe, reliable, and comfortable airport transfer services. We arrange private and group transfers with professional drivers to ensure timely pickups and smooth transportation.', ar: 'استمتع بخدمات انتقال مطار آمنة وموثوقة ومريحة. ننظم انتقالات خاصة وجماعية مع سائقين محترفين لضمان الاستلام في الوقت المحدد.' },
        highlights: {
            en: ['Professional multi-lingual drivers', 'Meet & Greet at arrivals', 'Luxury air-conditioned vehicles', 'Luggage assistance included', 'Real-time flight tracking', 'Complimentary bottled water', 'Child seats available on request', 'Available 24/7'],
            ar: ['سائقون محترفون يتحدثون لغات متعددة', 'استقبال وترحيب عند الوصول', 'مركبات فاخرة مكيفة', 'المساعدة في الأمتعة مشمولة', 'تتبع الرحلات الجوية في الوقت الفعلي', 'مياه معبأة مجانية', 'مقاعد أطفال متاحة عند الطلب', 'متاح على مدار الساعة'],
        },
        images: [
            'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800',
            'https://images.unsplash.com/photo-1549467794-023b93258485?w=800',
            'https://images.unsplash.com/photo-1543160732-2269d1232822?w=800',
        ],
    },
    'Adventure & Cultural Tour': {
        category: { en: 'Excursions', ar: 'رحلات سياحية' },
        price: 'From $75',
        duration: { en: 'Full Day', ar: 'يوم كامل' },
        capacity: { en: 'Groups', ar: 'مجموعات' },
        description: { en: "Immerse yourself in a blend of excitement and history. Our Adventure & Cultural Tour takes you through famous landmarks and hidden local gems, offering a deep dive into the region's rich heritage.", ar: 'انغمس في مزيج من الإثارة والتاريخ. تأخذك جولتنا للمغامرة والثقافة عبر المعالم الشهيرة والكنوز المحلية المخفية.' },
        highlights: {
            en: ['Certified expert local guides', 'Visit to 3+ historical sites', 'Traditional lunch included', 'Comfortable transportation', 'Entrance fees covered', 'Interactive cultural experiences', 'Plenty of photo opportunities', 'Small group personalized feel'],
            ar: ['مرشدون محليون خبراء معتمدون', 'زيارة أكثر من 3 مواقع تاريخية', 'غداء تقليدي مشمول', 'وسائل نقل مريحة', 'رسوم الدخول مغطاة', 'تجارب ثقافية تفاعلية', 'الكثير من فرص التصوير', 'طابع شخصي لمجموعات صغيرة'],
        },
        images: [
            'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?w=800',
            'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800',
            'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800',
        ],
    },
    'Express Visa Processing': {
        category: { en: 'Visa', ar: 'التأشيرات' },
        price: '$199',
        duration: { en: '3-5 Days', ar: '3-5 أيام' },
        capacity: { en: 'Guaranteed', ar: 'مضمون' },
        description: { en: 'We offer professional visa assistance services to simplify the travel process. Our team provides guidance on requirements, documentation, and application procedures.', ar: 'نقدم خدمات مساعدة تأشيرات احترافية لتبسيط عملية السفر. يوفر فريقنا إرشادات حول المتطلبات والمستندات وإجراءات التقديم.' },
        highlights: {
            en: ['Express visa processing (3-5 days)', 'Expert visa consultants', 'Document preparation assistance', 'Application tracking system', 'Guaranteed approval or refund', 'Support for all visa types', 'Multiple country visas', '24/7 customer support'],
            ar: ['معالجة التأشيرة السريعة (3-5 أيام)', 'مستشارو تأشيرات خبراء', 'مساعدة في إعداد المستندات', 'نظام تتبع الطلبات', 'ضمان القبول أو استرداد الأموال', 'دعم لجميع أنواع التأشيرات', 'تأشيرات متعددة الدول', 'دعم العملاء على مدار الساعة'],
        },
        images: [
            'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800',
            'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800',
        ],
    },
    'Ancient Egypt Discovery': {
        category: { en: 'Cultural', ar: 'ثقافية' },
        price: '$1,699',
        duration: { en: '9 Days', ar: '9 أيام' },
        capacity: { en: 'Max 15', ar: 'حد أقصى 15' },
        description: { en: 'Journey through 5,000 years of history in Egypt. Explore the Pyramids, Valley of the Kings, ancient temples, and cruise the Nile while learning from expert Egyptologists.', ar: 'رحلة عبر 5000 عام من التاريخ في مصر. استكشف الأهرامات ووادي الملوك والمعابد القديمة وأبحر في النيل.' },
        highlights: {
            en: ['Expert Egyptologist guides', 'Pyramids and Sphinx private tour', 'Nile River cruise accommodation', 'Valley of the Kings exploration', 'Karnak and Luxor temples visits', 'Egyptian Museum with mummy rooms', 'Traditional Egyptian cuisine', 'Sound and light show at Pyramids'],
            ar: ['مرشدون خبراء في علم المصريات', 'جولة خاصة للأهرامات وأبو الهول', 'إقامة في رحلة بحرية على نهر النيل', 'استكشاف وادي الملوك', 'زيارات معابد الكرنك والأقصر', 'المتحف المصري مع غرف المومياوات', 'المطبخ المصري التقليدي', 'عرض الصوت والضوء عند الأهرامات'],
        },
        images: [
            'https://images.unsplash.com/photo-1549144511-f099e773c147?w=800',
            'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?w=800',
            'https://images.unsplash.com/photo-1539768942893-daf53e448371?w=800',
            'https://images.unsplash.com/photo-1568322445389-f64ac2515020?w=800',
        ],
    },
    'International Flight Inquiry': {
        category: { en: 'Flight', ar: 'الرحلات الجوية' },
        price: 'From $299',
        duration: { en: 'Worldwide', ar: 'عالمي' },
        capacity: { en: 'Best Price', ar: 'أفضل سعر' },
        description: { en: 'Inquire about flights to any destination worldwide with competitive prices and flexible options. Access to all major airlines, best price guarantee, and 24/7 booking support.', ar: 'احجز رحلات إلى أي وجهة في العالم بأسعار تنافسية وخيارات مرنة. الوصول إلى جميع شركات الطيران الرئيسية، وضمان أفضل سعر، ودعم الحجز على مدار الساعة.' },
        highlights: {
            en: ['Access to 500+ airlines worldwide', 'Best price guarantee', 'Flexible booking options', 'Free date changes (conditions apply)', '24/7 booking support', 'Instant confirmation', 'Seat selection included', 'Baggage allowance information'],
            ar: ['الوصول إلى أكثر من 500 شركة طيران في جميع أنحاء العالم', 'ضمان أفضل سعر', 'خيارات حجز مرنة', 'تغييرات التاريخ المجانية (تطبق الشروط)', 'دعم الحجز على مدار الساعة', 'تأكيد فوري', 'اختيار المقعد متضمن', 'معلومات بدل الأمتعة'],
        },
        images: [
            'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800',
            'https://images.unsplash.com/photo-1464219789935-c2d9d9aba644?w=800',
            'https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=800',
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
            'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800',
            'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800',
            'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800',
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
            'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800',
            'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800',
            'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800',
        ],
    },
    'Premium Hajj & Umrah Package': {
        category: { en: 'Hajj & Umrah', ar: 'الحج والعمرة' },
        price: '$3,500',
        duration: { en: '15 Days', ar: '15 يوم' },
        capacity: { en: 'Family', ar: 'عائلة' },
        description: { en: 'Experience a spiritual journey of a lifetime with our premium Hajj & Umrah package. We provide top-tier accommodation near the Holy Mosques in Makkah and Madinah, expert religious guidance, and seamless transportation for a devout experience.', ar: 'اختبر رحلة العمر الروحانية مع باقة الحج والعمرة المميزة. نوفر إقامة من الدرجة الأولى بالقرب من الحرمين الشريفين في مكة المكرمة والمدينة المنورة، وإرشاداً دينياً خبيراً، ووسائل نقل سلسة لتجربة إيمانية متكاملة.' },
        highlights: {
            en: ['5-star hotels in Makkah and Madinah', 'Strategic locations near the Holy Mosques', 'Expert religious scholars for guidance', 'Luxurious private transportation', 'All-inclusive meal plans', 'Visa processing assistance', 'Ziyarat tours in Madinah', '24/7 on-ground support'],
            ar: ['فنادق 5 نجوم في مكة والمدينة', 'مواقع استراتيجية بالقرب من الحرمين الشريفين', 'علماء دين خبراء للإرشاد', 'وسائل نقل خاصة فاخرة', 'خطط وجبات شاملة كلياً', 'المساعدة في استخراج التأشيرات', 'جولات مزارات في المدينة المنورة', 'دعم ميداني على مدار الساعة'],
        },
        images: [
            'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=800',
            'https://images.unsplash.com/photo-1564767609342-620cb1a30062?w=800',
            'https://images.unsplash.com/photo-1543160732-2269d1232822?w=800',
        ],
    },
    'Maldives Romantic Escape': {
        category: { en: 'Honeymoon', ar: 'شهر العسل' },
        price: '$4,200',
        duration: { en: '7 Days', ar: '7 أيام' },
        capacity: { en: '2 Persons', ar: 'شخصين' },
        description: { en: 'Celebrate your love in the tropical paradise of the Maldives. This exclusive honeymoon package features luxurious overwater villas, romantic candlelit dinners on the beach, and rejuvenating spa treatments for two.', ar: 'احتفل بحبكم في الجنة الاستوائية لجزر المالديف. تتميز باقة شهر العسل الحصرية هذه بفيلات فاخرة فوق الماء، وعشاء رومانسي على ضوء الشموع على الشاطئ، وعلاجات سبا مجددة للنشاط لشخصين.' },
        highlights: {
            en: ['Private overwater bungalow', 'Champagne sunset cruise', 'Romantic beachside dinner', 'Couple\'s spa and wellness sessions', 'Seaplane transfers included', 'Personal butler service', 'Private snorkeling excursion', 'Welcome honeymoon gift box'],
            ar: ['كوخ خاص فوق الماء', 'رحلة يخت عند الغروب', 'عشاء رومانسي على الشاطئ', 'جلسات سبا للعرسان', 'الانتقال بالطائرة المائية متضمن', 'خدمة الخادم الشخصي', 'رحلة غوص خاصة', 'صندوق هدايا شهر العسل الترحيبي'],
        },
        images: [
            'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800',
            'https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800',
            'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?w=800',
        ],
    },
    'Travel The World With Adonis': {
        category: { en: 'Packages', ar: 'الباقات' },
        price: '$3,299',
        duration: { en: '12 Days', ar: '12 يوم' },
        capacity: { en: 'Max 20', ar: 'حد أقصى 20' },
        description: { en: 'Embark on an extraordinary journey across continents. From the neon lights of Tokyo to the historic streets of Paris and the vibrant spirit of New York, experience the ultimate world tour.', ar: 'انطلق في رحلة استثنائية عبر القارات. من أضواء طوكيو الساطعة إلى شوارع باريس التاريخية وروح نيويورك النابضة بالحياة، اختبر جولة العالم المثالية.' },
        highlights: {
            en: ['Iconic landmarks across 3 continents', 'Luxury accommodations in major global hubs', 'Curated cultural exchange experiences', 'Private guided tours of UNESCO sites', 'Gourmet international dining', 'Premium travel and logistics', 'Expert global tour directors', 'All-inclusive destination activities'],
            ar: ['معالم بارزة عبر 3 قارات', 'إقامة فاخرة في مراكز عالمية كبرى', 'تجارب تبادل ثقافي منسقة', 'جولات خاصة في مواقع اليونسكو', 'تناول طعام فاخر عالمي', 'سفر ولوجستيات متميزة', 'مديرو جولات عالميون خبراء', 'أنشطة وجهات شاملة كلياً'],
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
        price: '$89',
        duration: { en: 'Worldwide', ar: 'عالمي' },
        capacity: { en: 'Protected', ar: 'محمي' },
        description: { en: 'Comprehensive travel insurance coverage with 24/7 emergency assistance. Medical coverage, trip cancellation, lost luggage protection, and worldwide support.', ar: 'تغطية تأمين سفر شاملة مع مساعدة طوارئ على مدار الساعة. التغطية الطبية، وإلغاء الرحلة، وحماية الأمتعة المفقودة، والدعم في جميع أنحاء العالم.' },
        highlights: {
            en: ['Medical emergency coverage up to $500,000', '24/7 emergency assistance hotline', 'Trip cancellation and interruption', 'Lost luggage compensation', 'Flight delay coverage', 'Emergency evacuation services', 'Personal liability protection', 'COVID-19 coverage included'],
            ar: ['تغطية الطوارئ الطبية حتى 500,000 دولار', 'خط ساخن للمساعدة في حالات الطوارئ على مدار الساعة', 'إلغاء الرحلة والانقطاع', 'تعويض الأمتعة المفقودة', 'تغطية تأخير الرحلة', 'خدمات الإخلاء في حالات الطوارئ', 'حماية المسؤولية الشخصية', 'تغطية COVID-19 متضمنة'],
        },
        images: [
            'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800',
            'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800',
        ],
    },
};
