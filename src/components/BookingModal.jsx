import { useState, useEffect, useRef } from 'react';
import { useApp } from '../context/AppContext';
import { useGoogleSheets } from '../hooks/useGoogleSheets';

const initialForm = {
    name: '', email: '', phone: '', startDate: '', endDate: '', requests: '',
};

function BookingModal() {
    const { language, t, showBookingModal, setShowBookingModal, bookingPackage, setToast } = useApp();
    const { submit } = useGoogleSheets();
    const [form, setForm] = useState(initialForm);
    const [submitting, setSubmitting] = useState(false);
    const modalRef = useRef(null);
    const bsModal = useRef(null);

    // Initialize Bootstrap modal once on mount
    useEffect(() => {
        if (modalRef.current && window.bootstrap) {
            bsModal.current = new window.bootstrap.Modal(modalRef.current, { backdrop: true });
            // When Bootstrap closes the modal (via X or backdrop click), sync React state
            modalRef.current.addEventListener('hidden.bs.modal', () => {
                setShowBookingModal(false);
            });
        }
    }, [setShowBookingModal]);

    // Show / hide modal when React state changes
    useEffect(() => {
        if (!bsModal.current) return;
        if (showBookingModal) {
            bsModal.current.show();
        } else {
            bsModal.current.hide();
        }
    }, [showBookingModal]);

    function setField(field, value) {
        setForm(prev => ({ ...prev, [field]: value }));
    }

    async function handleSubmit(e) {
        e.preventDefault();

        // Date validation
        if (form.startDate && form.endDate && new Date(form.startDate) >= new Date(form.endDate)) {
            alert(t('End date must be after start date.', 'يجب أن يكون تاريخ الانتهاء بعد تاريخ البدء.'));
            return;
        }

        setSubmitting(true);
        await submit('booking', {
            timestamp: new Date().toISOString(),
            name: form.name,
            email: form.email,
            phone: form.phone,
            package: bookingPackage,
            startDate: form.startDate,
            endDate: form.endDate,
            specialRequests: form.requests,
        });
        setSubmitting(false);
        setShowBookingModal(false);
        setForm(initialForm);
        setToast(t('Your inquiry has been submitted! We will contact you shortly.', 'تم إرسال استفسارك! سنتواصل معك قريباً.'));
    }

    return (
        <div className="modal fade" id="bookingModal" ref={modalRef} aria-labelledby="bookingModalLabel" aria-modal="true" role="dialog">
            <div className="modal-dialog modal-lg modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="bookingModalLabel">
                            <i className="fas fa-paper-plane me-2"></i>
                            {t('Contact Us', 'تواصل معنا')}
                            {bookingPackage && <span className="ms-2 badge bg-primary">{bookingPackage}</span>}
                        </h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>

                    <div className="modal-body">
                        <form id="bookingForm" onSubmit={handleSubmit}>
                            <div className="row">
                                {/* Name */}
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">{t('Full Name', 'الاسم الكامل')} *</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={form.name}
                                        onChange={e => setField('name', e.target.value)}
                                        placeholder={t('Your full name', 'اسمك الكامل')}
                                        required
                                    />
                                </div>
                                {/* Email */}
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">{t('Email Address', 'البريد الإلكتروني')} *</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        value={form.email}
                                        onChange={e => setField('email', e.target.value)}
                                        placeholder="email@example.com"
                                        required
                                    />
                                </div>
                                {/* Phone */}
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">{t('Phone Number', 'رقم الهاتف')} *</label>
                                    <input
                                        type="tel"
                                        className="form-control"
                                        value={form.phone}
                                        onChange={e => setField('phone', e.target.value)}
                                        placeholder="+20 100 000 0000"
                                        required
                                    />
                                </div>
                                {/* Package (read-only, pre-filled) */}
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">{t('Selected Service', 'الخدمة المختارة')}</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={bookingPackage}
                                        readOnly
                                    />
                                </div>
                                {/* Start Date */}
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">{t('Start Date', 'تاريخ البدء')}</label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        value={form.startDate}
                                        min={new Date().toISOString().split('T')[0]}
                                        onChange={e => setField('startDate', e.target.value)}
                                    />
                                </div>
                                {/* End Date */}
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">{t('End Date', 'تاريخ الانتهاء')}</label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        value={form.endDate}
                                        min={form.startDate || new Date().toISOString().split('T')[0]}
                                        onChange={e => setField('endDate', e.target.value)}
                                    />
                                </div>
                                {/* Special Requests */}
                                <div className="col-12 mb-3">
                                    <label className="form-label">{t('Special Requests', 'طلبات خاصة')}</label>
                                    <textarea
                                        className="form-control"
                                        rows="3"
                                        value={form.requests}
                                        onChange={e => setField('requests', e.target.value)}
                                        placeholder={t('Any special requirements or questions...', 'أي متطلبات خاصة أو أسئلة...')}
                                    />
                                </div>
                            </div>
                        </form>
                    </div>

                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                            {t('Close', 'إغلاق')}
                        </button>
                        <button
                            type="submit"
                            form="bookingForm"
                            className="btn btn-primary"
                            disabled={submitting}
                        >
                            {submitting
                                ? <><i className="fas fa-spinner fa-spin me-2"></i>{t('Sending...', 'جارٍ الإرسال...')}</>
                                : <><i className="fas fa-paper-plane me-2"></i>{t('Send Inquiry', 'إرسال الاستفسار')}</>
                            }
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BookingModal;
