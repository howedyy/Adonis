import { useEffect } from 'react';
import { useApp } from '../context/AppContext';

const slides = [
    { src: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=1600', alt: 'Swiss Alps' },
    { src: 'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&q=80&w=1600', alt: 'Pyramids of Giza' },
    { src: 'https://images.unsplash.com/photo-1641128324972-af3212f0f6bd?auto=format&fit=crop&q=80&w=1600', alt: 'Turkey' },
    { src: 'https://images.unsplash.com/photo-1539768942893-daf53e448371?auto=format&fit=crop&q=80&w=1600', alt: 'Luxor Temple' },
    { src: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=1600', alt: 'Dubai Skyline' },
    { src: 'https://images.unsplash.com/photo-1431274172761-fca41d930114?auto=format&fit=crop&q=80&w=1600', alt: 'Eiffel Tower Paris' },
    { src: 'https://images.unsplash.com/photo-1552832230-c01977dd311b5?auto=format&fit=crop&q=80&w=1600', alt: 'Rome Italy' },
    { src: 'https://images.unsplash.com/photo-1583422409516-2895a77efded?auto=format&fit=crop&q=80&w=1600', alt: 'Barcelona Spain' },
    { src: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=1600', alt: 'London UK' },
];

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
                <div className="scroll-indicator animate__animated animate__fadeInUp animate__delay-3s">
                    <div className="mouse">
                        <div className="wheel"></div>
                    </div>
                </div>
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
                    <div className="col-lg-8 mx-auto text-center">
                        <h1 className="hero-title animate__animated animate__fadeInDown">
                            {t('Discover Your Dream Destination', 'اكتشف وجهتك المثالية')}
                        </h1>
                        <p className="hero-subtitle animate__animated animate__fadeInUp animate__delay-1s">
                            {t(
                                'Embark on unforgettable journeys with Adonis.travel - Your gateway to extraordinary experiences',
                                'انطلق في رحلات لا تُنسى مع أدونيس.سفر - بوابتك لتجارب استثنائية'
                            )}
                        </p>
                        <div className="hero-buttons animate__animated animate__fadeInUp animate__delay-2s">
                            <a href="#packages" className="btn btn-primary btn-lg me-3">
                                <i className="fas fa-compass"></i> {t('Explore Packages', 'استكشف الباقات')}
                            </a>
                            <a href="#about" className="btn btn-outline-light btn-lg">
                                <i className="fas fa-info-circle"></i> {t('Learn More', 'اعرف المزيد')}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;
