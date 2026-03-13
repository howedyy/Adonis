import { useState } from 'react';
import { useApp } from '../context/AppContext';
import { packageDetailsData } from '../data/packageDetailsData';
import { motion } from 'framer-motion';

function PackageCard({ pkg }) {
    const { language, t, setBookingPackage, setShowBookingModal, setSelectedDetails } = useApp();
    const [wishlisted, setWishlisted] = useState(false);

    function handleContact(e) {
        e.stopPropagation();
        setBookingPackage(pkg.bookingKey);
        setShowBookingModal(true);
    }

    function handleCardClick() {
        // Open details modal if detail data exists for this package
        if (pkg.detailKey && packageDetailsData[pkg.detailKey]) {
            setSelectedDetails({ ...packageDetailsData[pkg.detailKey], title: pkg.title });
        }
    }

    function handleWishlist(e) {
        e.stopPropagation();
        setWishlisted(prev => !prev);
    }

    function handleShare(e) {
        e.stopPropagation();
        const title = language === 'ar' ? pkg.title.ar : pkg.title.en;
        if (navigator.share) {
            navigator.share({ title, url: window.location.href });
        } else {
            navigator.clipboard.writeText(`${title} - ${window.location.href}`);
            alert(t('Link copied to clipboard!', 'تم نسخ الرابط!'));
        }
    }

    const hasDetails = pkg.detailKey && packageDetailsData[pkg.detailKey];

    return (
        <motion.div 
            className="col-lg-4 col-md-6 mb-4"
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
        >
            <motion.div
                className={`package-card ${hasDetails ? 'clickable-card' : ''}`}
                onClick={hasDetails ? handleCardClick : undefined}
                style={hasDetails ? { cursor: 'pointer' } : {}}
                whileHover={{ 
                    y: -15,
                    boxShadow: "0 25px 50px -12px rgba(220, 20, 60, 0.4)",
                    transition: { duration: 0.2, ease: "easeOut" }
                }}
            >
                <div className="package-image">
                    <img src={pkg.image} alt={t(pkg.title.en, pkg.title.ar)} loading="lazy" />
                    <div className="package-badge">{t(pkg.badge.en, pkg.badge.ar)}</div>
                    <div className="package-overlay">
                        <button
                            className={`btn btn-icon${wishlisted ? ' wishlisted' : ''}`}
                            title={t('Add to wishlist', 'أضف إلى قائمة الرغبات')}
                            onClick={handleWishlist}
                        >
                            <i className={wishlisted ? 'fas fa-heart' : 'far fa-heart'}></i>
                        </button>
                        <button
                            className="btn btn-icon"
                            title={t('Share', 'مشاركة')}
                            onClick={handleShare}
                        >
                            <i className="fas fa-share-alt"></i>
                        </button>
                    </div>
                </div>
                <div className="package-content">
                    <h3 className="package-title">{t(pkg.title.en, pkg.title.ar)}</h3>
                    <p className="package-description">{t(pkg.description.en, pkg.description.ar)}</p>
                    <div className="package-details">
                        <span><i className={`fas ${pkg.detail1.icon}`}></i> {t(pkg.detail1.en, pkg.detail1.ar)}</span>
                        <span><i className={`fas ${pkg.detail2.icon}`}></i> {t(pkg.detail2.en, pkg.detail2.ar)}</span>
                        <span className="package-price">{pkg.price}</span>
                    </div>
                    <button className="btn btn-primary w-100 mt-3" onClick={handleContact}>
                        <i className="fas fa-paper-plane"></i> {t('Contact Us', 'تواصل معنا')}
                    </button>
                </div>
            </motion.div>
        </motion.div>
    );
}

export default PackageCard;
