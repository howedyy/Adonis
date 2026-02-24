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
                    <div className="col-lg-6 mb-4 mb-lg-0">
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
                                <span>{t('10+ Years Experience', 'أكثر من 10 سنوات خبرة')}</span>
                            </div>
                        </motion.div>
                    </div>
                    <div className="col-lg-6">
                        <motion.div
                            className="about-content"
                            variants={itemVariants}
                        >
                            <h2 className="section-title">
                                {t('About Adonis Travel Egypt', 'عن أدونيس للسفر مصر')}
                            </h2>
                            <div className="about-text-wrapper">
                                <p className="about-text mb-3">
                                    {t(
                                        "At Adonis Travel Egypt, we are committed to redefining the art of travel. Adonis was established to expand our reach and offer a wider range of premium travel solutions, tailored to both individual and group travelers.",
                                        "في أدونيس للسفر مصر، نحن ملتزمون بإعادة تعريف فن السفر. تأسست أدونيس لتوسيع نطاقنا وتقديم مجموعة أوسع من حلول السفر المتميزة، المصممة خصيصاً للمسافرين الأفراد والمجموعات."
                                    )}
                                </p>
                                <p className="about-text mb-3">
                                    {t(
                                        "With a solid foundation in both the Egyptian and international travel markets, Adonis Travel Egypt brings a forward-thinking and client-centric approach to the industry. We specialize in leisure travel, corporate services, MICE (Meetings, Incentives, Conferences, and Events), as well as tailor-made travel experiences across Egypt and worldwide—delivering exceptional service, customized solutions, and memorable journeys every step of the way.",
                                        "بفضل أساس قوي في أسواق السفر المصرية والدولية، تقدم أدونيس للسفر مصر نهجاً استشرافياً يركز على العميل في الصناعة. نحن متخصصون في السفر الترفيهي، وخدمات الشركات، واجتماعات الحوافز والمؤتمرات والمعارض (MICE)، بالإضافة إلى تجارب السفر المصممة خصيصاً في جميع أنحاء مصر والعالم - مقدمين خدمة استثنائية وحلولاً مخصصة ورحلات لا تُنسى في كل خطوة على الطريق."
                                    )}
                                </p>
                                <p className="about-text">
                                    {t(
                                        "Our team of professionals brings deep industry knowledge, destination expertise, and a passion for excellence to every journey we plan. From luxurious vacations to efficient corporate logistics, Adonis Travel is your trusted partner for seamless travel experiences.",
                                        "يقدم فريقنا من المحترفين معرفة عميقة بالصناعة، وخبرة في الوجهات، وشغفاً بالتميز في كل رحلة نخطط لها. من الإجازات الفاخرة إلى الخدمات اللوجستية الفعالة للشركات، أدونيس للسفر هي شريكك الموثوق لتجارب سفر سلسة."
                                    )}
                                </p>
                            </div>
                            <div className="about-features">
                                {['Expert Travel Guides', 'Best Price Guarantee', '24/7 Customer Support', 'Safe & Secure Service'].map((feat, idx) => (
                                    <div className="feature-item" key={idx}>
                                        <i className="fas fa-check-circle"></i>
                                        <span>{t(feat, feat === 'Expert Travel Guides' ? 'مرشدون سياحيون خبراء' : feat === 'Best Price Guarantee' ? 'ضمان أفضل سعر' : feat === '24/7 Customer Support' ? 'دعم العملاء على مدار الساعة' : 'خدمة آمنة ومضمونة')}</span>
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
