import { useApp } from '../context/AppContext';

const reasons = [
    {
        number: '01',
        icon: 'fa-user-check',
        en: { title: 'Tailored Experiences', desc: 'Personalized service with attention to detail' },
        ar: { title: 'تجارب مخصصة', desc: 'خدمة شخصية مع الاهتمام بالتفاصيل' },
    },
    {
        number: '02',
        icon: 'fa-handshake',
        en: { title: 'Exclusive Access', desc: 'Strategic partnerships with top hotels and service providers' },
        ar: { title: 'وصول حصري', desc: 'شراكات استراتيجية مع أفضل الفنادق ومزودي الخدمات' },
    },
    {
        number: '03',
        icon: 'fa-globe',
        en: { title: 'Holistic Solutions', desc: 'Comprehensive travel management for individuals, groups, and organizations' },
        ar: { title: 'حلول شاملة', desc: 'إدارة سفر شاملة للأفراد والمجموعات والمؤسسات' },
    },
    {
        number: '04',
        icon: 'fa-chart-line',
        en: { title: 'Expanding Horizons', desc: 'A growing portfolio of destinations and services' },
        ar: { title: 'آفاق متوسعة', desc: 'محفظة متنامية من الوجهات والخدمات' },
    },
];

function WhyChooseUs() {
    const { t, language } = useApp();

    return (
        <section id="why-choose-us" className="why-choose-us py-5">
            <div className="container">
                <div className="text-center mb-5">
                    <h2 className="section-title animate__animated animate__fadeInUp"
                        style={{ color: '#E31E24' }}>
                        {t('Why Choose Adonis Travel?', 'لماذا تختار أدونيس للسفر؟')}
                    </h2>
                </div>
                <div className="row">
                    {reasons.map(({ number, icon, en, ar }, index) => (
                        <div key={number} className="col-lg-3 col-md-6 mb-4">
                            <div className={`feature-box animate__animated animate__fadeInUp animate__delay-${index}s`}>
                                <div className="box-header">
                                    <div className="icon-wrapper">
                                        <i className={`fas ${icon}`}></i>
                                    </div>
                                    <span className="box-number">{number}</span>
                                </div>
                                <h3 className="box-title">{t(en.title, ar.title)}</h3>
                                <p className="box-text">{t(en.desc, ar.desc)}</p>
                                <div className="box-line"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default WhyChooseUs;
