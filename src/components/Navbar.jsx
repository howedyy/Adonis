import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useApp } from '../context/AppContext';

const navCategories = [
    ['accommodation', 'fa-hotel', 'Accommodation', ' الإقامة'],
    ['flight', 'fa-plane', 'Flight Bookings', 'حجز طيران'],
    ['transfers', 'fa-shuttle-van', 'Airport Transfers', 'انتقالات المطار'],
    ['visa', 'fa-passport', 'Visa', ' التأشيرات'],
    ['vip', 'fa-crown', 'VIP', 'كبار الشخصيات'],
    ['packages', 'fa-box-open', 'Travel Packages', 'الباقات السياحية'],
    ['hajj-umrah', 'fa-kaaba', 'Hajj & Umrah', ' الحج والعمرة'],
    ['excursions', 'fa-map-marked-alt', 'Excursions', ' الرحلات السياحية'],
];

function Navbar() {
    const { language, toggleLanguage, setActiveCategory, t } = useApp();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    // Navbar scroll effect
    useEffect(() => {
        function handleScroll() {
            const nav = document.getElementById('mainNav');
            if (nav) nav.classList.toggle('scrolled', window.scrollY > 50);
        }
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Active section highlighting on scroll
    useEffect(() => {
        function handleScroll() {
            const sections = document.querySelectorAll('section[id]');
            const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
            let current = '';
            sections.forEach(section => {
                if (window.pageYOffset >= section.offsetTop - 100) {
                    current = section.getAttribute('id');
                }
            });
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.add('active');
                }
            });
        }
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    function handleDropdownClick(e, category) {
        e.preventDefault();
        setActiveCategory(category);
        const packagesSection = document.getElementById('packages');
        if (packagesSection) {
            const offsetTop = packagesSection.offsetTop - 80;
            window.scrollTo({ top: offsetTop, behavior: 'smooth' });
        }
        // Close mobile menu if open
        const collapse = document.querySelector('.navbar-collapse');
        if (collapse && collapse.classList.contains('show')) {
            document.querySelector('.navbar-toggler')?.click();
            setIsMenuOpen(false);
        }
    }

    function handleNavClick(e) {
        const href = e.currentTarget.getAttribute('href');
        if (href && href.startsWith('#') && href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                window.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' });
            }
        }
        // Close mobile menu if open
        const collapse = document.querySelector('.navbar-collapse');
        if (collapse && collapse.classList.contains('show')) {
            document.querySelector('.navbar-toggler')?.click();
            setIsMenuOpen(false);
        }
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
            <div className="container">
                <a className="navbar-brand animate__animated animate__fadeInLeft" href="#home" onClick={handleNavClick}>
                    <img src="assets/images/Adonis_logo_1.png" alt="Adonis.travel Logo" className="logo-img" />
                </a>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded={isMenuOpen}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto align-items-center">
                        <li className="nav-item">
                            <a className="nav-link" href="#home" onClick={handleNavClick}>{t('Home', 'الرئيسية')}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#about" onClick={handleNavClick}>{t('About', 'من نحن')}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#why-choose-us" onClick={handleNavClick}>{t('Why Choose Us', 'لماذا تختارنا')}</a>
                        </li>
                        <li className={`nav-item dropdown${isDropdownOpen ? ' show' : ''}`}>
                            <a
                                className={`nav-link dropdown-toggle${isDropdownOpen ? ' show' : ''}`}
                                href="#"
                                id="servicesDropdown"
                                role="button"
                                onClick={(e) => {
                                    e.preventDefault();
                                    setIsDropdownOpen(!isDropdownOpen);
                                }}
                                aria-expanded={isDropdownOpen}
                            >
                                {t('Our Services', 'خدماتنا')}
                            </a>
                            <AnimatePresence>
                                {isDropdownOpen && (
                                    <motion.ul
                                        className="dropdown-menu show"
                                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                                        transition={{ duration: 0.2, ease: "easeOut" }}
                                        style={{ display: 'block' }}
                                    >
                                        {navCategories.map(([cat, icon, en, ar]) => (
                                            <li key={cat}>
                                                <a className="dropdown-item" href="#" onClick={e => {
                                                    handleDropdownClick(e, cat);
                                                    setIsDropdownOpen(false);
                                                }}>
                                                    <i className={`fas ${icon}`}></i> {t(en, ar)}
                                                </a>
                                            </li>
                                        ))}
                                    </motion.ul>
                                )}
                            </AnimatePresence>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#feedback" onClick={handleNavClick}>{t('Feedback', 'التقييمات')}</a>
                        </li>
                        <li className="nav-item">
                            <button className="btn btn-language" id="langToggle" onClick={toggleLanguage}>
                                <i className="fas fa-language"></i>{' '}
                                <span id="langText">{language === 'en' ? 'العربية' : 'English'}</span>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
