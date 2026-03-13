import { useEffect } from 'react';
import { useApp } from '../context/AppContext';

const slides = [
    { src: 'assets/images/hero_orig_1.jpg', alt: 'Swiss Alps' },
    { src: 'assets/images/hero_orig_2.jpg', alt: 'Pyramids of Giza' },
    { src: 'assets/images/hero_orig_3.jpg', alt: 'Turkey' },
    { src: 'assets/images/hero_orig_4.jpg', alt: 'Luxor Temple' },
    { src: 'assets/images/hero_orig_5.jpg', alt: 'Dubai Skyline' },
    { src: 'assets/images/hero_orig_6.jpg', alt: 'Eiffel Tower Paris' },
    { src: 'assets/images/hero_orig_8.jpg', alt: 'Barcelona Spain' },
    { src: 'assets/images/hero_orig_9.jpg', alt: 'London UK' },
];

import { motion } from 'framer-motion';

function HeroSection() {
    const { t } = useApp();

    useEffect(() => {
        const carouselEl = document.getElementById('heroCarousel');
        if (carouselEl && window.bootstrap) {
            new window.bootstrap.Carousel(carouselEl, {
                interval: 5000,
                ride: 'carousel',
                pause: false,
            });
        }
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.5
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }
        }
    };

    return (
        <section id="home" className="hero-section">
            {/* Hero Background Slider */}
            <div id="heroCarousel" className="carousel slide carousel-fade hero-slider"
                data-bs-ride="carousel" data-bs-pause="false" data-bs-interval="5000">
                <div className="carousel-inner">
                    {slides.map((slide, i) => (
                        <div key={i} className={`carousel-item ${i === 0 ? 'active' : ''}`}>
                            <img src={slide.src} className="d-block w-100" alt={slide.alt} />
                        </div>
                    ))}
                </div>

                {/* Scroll Indicator */}
                <motion.div 
                    className="scroll-indicator"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 0.8, y: 0 }}
                    transition={{ delay: 2.5, duration: 1 }}
                >
                    <div className="mouse">
                        <div className="wheel"></div>
                    </div>
                </motion.div>
            </div>

            <div className="hero-overlay"></div>

            {/* Slider Controls */}
            <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">{t('Previous', 'السابق')}</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">{t('Next', 'التالي')}</span>
            </button>

            {/* Hero Content */}
            <div className="container hero-content">
                <div className="row align-items-center min-vh-100">
                    <motion.div 
                        className="col-lg-8 mx-auto text-center"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.h1 className="hero-title" variants={itemVariants}>
                            {t('Discover Your Dream Destination', 'اكتشف وجهتك المثالية')}
                        </motion.h1>
                        <motion.p className="hero-subtitle" variants={itemVariants}>
                            {t(
                                'Embark on unforgettable journeys with Adonis.travel - Your gateway to extraordinary experiences',
                                'انطلق في رحلات لا تُنسى مع أدونيس.سفر - بوابتك لتجارب استثنائية'
                            )}
                        </motion.p>
                        <motion.div className="hero-buttons" variants={itemVariants}>
                            <a href="#packages" className="btn btn-primary btn-lg me-3">
                                <i className="fas fa-compass"></i> {t('Explore Packages', 'استكشف الباقات')}
                            </a>
                            <a href="#about" className="btn btn-outline-light btn-lg">
                                <i className="fas fa-info-circle"></i> {t('Learn More', 'اعرف المزيد')}
                            </a>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;
