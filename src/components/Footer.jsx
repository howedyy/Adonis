import { useApp } from '../context/AppContext';

function Footer() {
    const { t, setActiveCategory } = useApp();

    function scrollTo(id) {
        const el = document.getElementById(id);
        if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
    }

    function handleServiceClick(e, cat) {
        e.preventDefault();
        setActiveCategory(cat);
        scrollTo('packages');
    }

    return (
        <footer className="footer py-5">
            <div className="container">
                <div className="row">
                    {/* Brand */}
                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="footer-brand mb-3">
                            <img src="/assets/images/Adonis_logo_1.png" alt="Adonis.travel" className="logo-img" style={{ height: '50px' }} />
                        </div>
                        <p className="footer-description">
                            {t(
                                'Your trusted partner for extraordinary travel experiences. We create memories that last a lifetime.',
                                'شريكك الموثوق لتجارب سفر استثنائية. نحن نصنع ذكريات تدوم مدى الحياة.'
                            )}
                        </p>
                        <div className="social-links mt-3">
                            {[
                                ['fa-facebook-f', 'https://www.facebook.com/adonistraveleg'],
                                ['fa-instagram', 'https://www.instagram.com/adonistravel_eg'],
                                ['fa-whatsapp', 'https://wa.me/201001391456'],
                            ].map(([icon, href]) => (
                                <a key={icon} href={href} target="_blank" rel="noopener noreferrer" className="social-link me-2">
                                    <i className={`fab ${icon}`}></i>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="col-lg-2 col-md-6 mb-4">
                        <h5 className="footer-title">{t('Quick Links', 'روابط سريعة')}</h5>
                        <ul className="footer-links">
                            {[
                                ['home', 'Home', 'الرئيسية'],
                                ['about', 'About', 'من نحن'],
                                ['why-choose-us', 'Why Us', 'لماذا نحن'],
                                ['packages', 'Services', 'الخدمات'],
                                ['feedback', 'Feedback', 'التقييمات'],
                            ].map(([id, en, ar]) => (
                                <li key={id}>
                                    <a href={`#${id}`} onClick={e => { e.preventDefault(); scrollTo(id); }}>
                                        {t(en, ar)}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="col-lg-3 col-md-6 mb-4">
                        <h5 className="footer-title">{t('Our Services', 'خدماتنا')}</h5>
                        <ul className="footer-links">
                            {[
                                ['vip', 'VIP Services', 'خدمات VIP'],
                                ['visa', 'Visa Services', 'خدمات التأشيرات'],
                                ['flight', 'Flights', 'الطيران'],
                                ['accommodation', 'Accommodation', 'الإقامة'],
                                ['transfers', 'Transfers', 'الانتقالات'],
                                ['excursions', 'Excursions', 'الرحلات السياحية'],
                                ['hajj-umrah', 'Hajj & Umrah', 'الحج والعمرة'],
                            ].map(([cat, en, ar]) => (
                                <li key={cat}>
                                    <a href="#packages" onClick={e => handleServiceClick(e, cat)}>
                                        {t(en, ar)}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="col-lg-3 col-md-6 mb-4">
                        <h5 className="footer-title">{t('Contact Us', 'تواصل معنا')}</h5>
                        <ul className="footer-contact">
                            <li>
                                <i className="fas fa-map-marker-alt"></i>
                                {t('Cairo, Egypt', 'القاهرة، مصر')}
                            </li>
                            <li>
                                <i className="fas fa-phone"></i>
                                <a href="tel:+201001391456">+20 100 139 1456</a>
                            </li>
                            <li>
                                <i className="fas fa-envelope"></i>
                                <a href="mailto:info@adonistravel.com">info@adonistravel.com</a>
                            </li>
                            <li>
                                <i className="fab fa-whatsapp"></i>
                                <a href="https://wa.me/201001391456" target="_blank" rel="noopener noreferrer">
                                    WhatsApp
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <hr className="footer-divider" />
                <div className="footer-bottom text-center">
                    <p className="mb-0">
                        &copy; {new Date().getFullYear()} Adonis.travel.{' '}
                        {t('All Rights Reserved.', 'جميع الحقوق محفوظة.')}
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
