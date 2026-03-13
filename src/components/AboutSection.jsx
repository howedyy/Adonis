import { motion } from 'framer-motion';
import { useApp } from '../context/AppContext';

function AboutSection() {
    const { t } = useApp();

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    const sections = [
        {
            icon: "fa-gem",
            en: [
                "At Adonis Travel Egypt, we are committed to redefining the art of travel.",
                "Adonis was established to offer a wider range of premium travel solutions, tailored to both individual and group travelers.",
                "With a solid foundation in both the Egyptian and international travel markets, Adonis Travel Egypt brings a forward-thinking and client-centric approach to the industry."
            ],
            ar: [
                "في أدونيس للسفر مصر، نحن ملتزمون بإعادة تعريف فن السفر.",
                "تأسست أدونيس لتقديم مجموعة أوسع من حلول السفر المتميزة، المصممة خصيصاً للمسافرين الأفراد والمجموعات.",
                "بفضل أساس قوي في أسواق السفر المصرية والدولية، تقدم أدونيس للسفر مصر نهجاً استشرافياً يركز على العميل في الصناعة."
            ]
        },
        {
            icon: "fa-globe-americas",
            en: [
                "We specialize in leisure travel, corporate services, MICE (Meetings, Incentives, Conferences, and Events), as well as tailor-made travel experiences across Egypt and worldwide.",
                "We deliver exceptional service, customized solutions, and memorable journeys every step of the way."
            ],
            ar: [
                "نحن متخصصون في السفر الترفيهي، وخدمات الشركات، واجتماعات الحوافز والمؤتمرات والمعارض (MICE)، بالإضافة إلى تجارب السفر المصممة خصيصاً في جميع أنحاء مصر والعالم.",
                "نقدم خدمة استثنائية وحلولاً مخصصة ورحلات لا تُنسى في كل خطوة على الطريق."
            ]
        },
        {
            icon: "fa-handshake",
            en: [
                "Our team of professionals brings deep industry knowledge, destination expertise, and a passion for excellence to every journey we plan.",
                "From luxurious vacations to efficient corporate logistics, Adonis Travel is your trusted partner for seamless travel experiences."
            ],
            ar: [
                "يقدم فريقنا من المحترفين معرفة عميقة بالصناعة، وخبرة في الوجهات، وشغفاً بالتميز في كل رحلة نخطط لها.",
                "من الإجازات الفاخرة إلى الخدمات اللوجستية الفعالة للشركات، أدونيس للسفر هي شريكك الموثوق لتجارب سفر سلسة."
            ]
        }
    ];

    return (
        <section id="about" className="about-section py-5">
            <div className="container">
                <motion.div
                    className="row align-items-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={containerVariants}
                >
                    <div className="col-lg-5 mb-4 mb-lg-0">
                        <motion.div
                            className="about-image-wrapper"
                            variants={itemVariants}
                        >
                            <img
                                src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800"
                                alt="Travel Experience"
                                className="img-fluid rounded-custom"
                            />
                            <div className="about-badge">
                                <i className="fas fa-award"></i>
                                <span>{t('30+ Years Experience', 'أكثر من 30 سنوات خبرة')}</span>
                            </div>
                        </motion.div>
                    </div>
                    <div className="col-lg-7">
                        <motion.div
                            className="about-content ps-lg-4"
                            variants={itemVariants}
                        >
                            <h2 className="section-title mb-4">
                                {t('About Adonis Travel Egypt', 'عن أدونيس للسفر مصر')}
                            </h2>

                            <div className="about-sections-wrapper">
                                {sections.map((section, idx) => (
                                    <motion.div
                                        key={idx}
                                        className="about-info-block mb-4"
                                        variants={itemVariants}
                                    >
                                        <div className="d-flex align-items-start">
                                            <div className="info-icon me-3">
                                                <i className={`fas ${section.icon}`}></i>
                                            </div>
                                            <div className="info-text">
                                                {section.en.map((line, lIdx) => (
                                                    <p key={lIdx} className="mb-2">
                                                        {t(line, section.ar[lIdx])}
                                                    </p>
                                                ))}
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            <div className="about-features mt-5">
                                {[
                                    { en: 'Expert Travel Guides.', ar: 'مرشدون سياحيون خبراء.' },
                                    { en: 'Best Price Guarantee.', ar: 'ضمان أفضل سعر.' },
                                    { en: '24/7 Customer Support.', ar: 'دعم العملاء على مدار الساعة.' },
                                    { en: 'Safe & Secure Service.', ar: 'خدمة آمنة ومضمونة.' }
                                ].map((feat, idx) => (
                                    <div className="feature-item" key={idx}>
                                        <i className="fas fa-check-circle"></i>
                                        <span>{t(feat.en, feat.ar)}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default AboutSection;
