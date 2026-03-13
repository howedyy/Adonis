import { useEffect, useRef } from 'react';
import { useApp } from '../context/AppContext';

function PackageDetailsModal() {
    const { language, t, selectedDetails, setSelectedDetails, setBookingPackage, setShowBookingModal } = useApp();
    const modalRef = useRef(null);
    const bsModal = useRef(null);
    const carouselRef = useRef(null);

    // Init Bootstrap modal once
    useEffect(() => {
        if (modalRef.current && window.bootstrap) {
            bsModal.current = new window.bootstrap.Modal(modalRef.current, { backdrop: true });
            modalRef.current.addEventListener('hidden.bs.modal', () => {
                setSelectedDetails(null);
            });
        }
    }, [setSelectedDetails]);

    // Show/hide based on selectedDetails state
    useEffect(() => {
        if (!bsModal.current) return;
        if (selectedDetails) {
            bsModal.current.show();
            // Re-init carousel for new images whenever modal opens
            if (carouselRef.current && window.bootstrap) {
                new window.bootstrap.Carousel(carouselRef.current, { interval: 3500, ride: 'carousel' });
            }
        } else {
            bsModal.current.hide();
        }
    }, [selectedDetails]);

    // Variables derived from selectedDetails
    const d = selectedDetails;
    const images = d?.images || [];

    function openBooking() {
        if (!d) return;
        setSelectedDetails(null);
        const title = language === 'ar' ? d.title?.ar : d.title?.en;
        setBookingPackage(title || '');
        setShowBookingModal(true);
    }

    return (
        <div className="modal fade" id="packageDetailsModal" ref={modalRef} aria-modal="true" role="dialog">
            <div className="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
                <div className="modal-content">
                    {!d ? (
                        <div className="modal-body text-center py-5">
                            <i className="fas fa-spinner fa-spin fa-3x text-primary"></i>
                        </div>
                    ) : (
                        <>
                            <div className="modal-header">
                                <h5 className="modal-title">
                                    <i className="fas fa-info-circle me-2"></i>
                                    {language === 'ar' ? d.title?.ar : d.title?.en}
                                </h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>

                            <div className="modal-body">
                                <div className="row">
                                    {/* Image Gallery Carousel */}
                                    {images.length > 0 && (
                                        <div className="col-lg-6 mb-4 mb-lg-0">
                                            <div id="detailsCarousel" className="carousel slide" ref={carouselRef} data-bs-ride="carousel">
                                                <div className="carousel-inner rounded-3 overflow-hidden">
                                                    {images.map((src, i) => (
                                                        <div key={i} className={`carousel-item ${i === 0 ? 'active' : ''}`}>
                                                            <img src={src} className="d-block w-100" alt={`Gallery ${i + 1}`}
                                                                style={{ height: '300px', objectFit: 'cover' }} />
                                                        </div>
                                                    ))}
                                                </div>
                                                {images.length > 1 && (
                                                    <>
                                                        <button className="carousel-control-prev" type="button" data-bs-target="#detailsCarousel" data-bs-slide="prev">
                                                            <span className="carousel-control-prev-icon"></span>
                                                        </button>
                                                        <button className="carousel-control-next" type="button" data-bs-target="#detailsCarousel" data-bs-slide="next">
                                                            <span className="carousel-control-next-icon"></span>
                                                        </button>
                                                    </>
                                                )}
                                            </div>

                                            {/* Quick stats */}
                                            <div className="row mt-3 text-center">
                                                <div className="col-4">
                                                    <div className="detail-stat">
                                                        <i className="fas fa-clock text-primary d-block mb-1"></i>
                                                        <strong>{t(d.duration?.en, d.duration?.ar) || d.duration}</strong>
                                                        <small className="d-block text-muted">{t('Duration', 'المدة')}</small>
                                                    </div>
                                                </div>
                                                <div className="col-4">
                                                    <div className="detail-stat">
                                                        <i className="fas fa-users text-primary d-block mb-1"></i>
                                                        <strong>{t(d.capacity?.en, d.capacity?.ar) || d.capacity}</strong>
                                                        <small className="d-block text-muted">{t('Capacity', 'السعة')}</small>
                                                    </div>
                                                </div>
                                                <div className="col-4">
                                                    <div className="detail-stat">
                                                        <i className="fas fa-tag text-primary d-block mb-1"></i>
                                                        <strong>{d.price}</strong>
                                                        <small className="d-block text-muted">{t('Price', 'السعر')}</small>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {/* Details Content */}
                                    <div className={images.length > 0 ? 'col-lg-6' : 'col-12'}>
                                        <p className="text-muted mb-4">
                                            {language === 'ar' ? d.description?.ar : d.description?.en}
                                        </p>

                                        {d.highlights && (
                                            <>
                                                <h6 className="fw-bold mb-3">
                                                    <i className="fas fa-list-check me-2 text-primary"></i>
                                                    {t('Highlights', 'أبرز المميزات')}
                                                </h6>
                                                <ul className="highlights-list list-unstyled">
                                                    {(language === 'ar' ? d.highlights.ar : d.highlights.en).map((item, i) => (
                                                        <li key={i} className="mb-2">
                                                            <i className="fas fa-check-circle text-success me-2"></i>
                                                            {item}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                                    {t('Close', 'إغلاق')}
                                </button>
                                <button type="button" className="btn btn-primary" onClick={openBooking}>
                                    <i className="fas fa-paper-plane me-2"></i>
                                    {t('Book This Service', 'احجز هذه الخدمة')}
                                </button>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default PackageDetailsModal;
