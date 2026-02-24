import { useState } from 'react';
import { useApp } from '../context/AppContext';
import { useGoogleSheets } from '../hooks/useGoogleSheets';
import StarRating from './StarRating';

const initialForm = {
    name: '',
    email: '',
    country: '',
    serviceRating: 0,
    hostingRating: 0,
    overallExperience: 0,
    comments: '',
};

function FeedbackSection() {
    const { t, language, setToast } = useApp();
    const { submit } = useGoogleSheets();
    const [form, setForm] = useState(initialForm);
    const [submitting, setSubmitting] = useState(false);

    function setField(field, value) {
        setForm(prev => ({ ...prev, [field]: value }));
    }

    async function handleSubmit(e) {
        e.preventDefault();
        if (form.serviceRating === 0 || form.hostingRating === 0 || form.overallExperience === 0) {
            alert(t('Please provide all star ratings before submitting.', 'يرجى تقديم جميع التقييمات قبل الإرسال.'));
            return;
        }
        setSubmitting(true);
        await submit('feedback', {
            timestamp: new Date().toISOString(),
            name: form.name,
            email: form.email,
            country: form.country,
            serviceRating: form.serviceRating,
            hostingRating: form.hostingRating,
            overallExperience: form.overallExperience,
            comments: form.comments,
        });
        setForm(initialForm);
        setSubmitting(false);
        setToast(t('Thank you for your feedback!', 'شكراً لتقييمك!'));
    }

    return (
        <section id="feedback" className="feedback-section py-5">
            <div className="container">
                <div className="row align-items-center">
                    {/* Left Column: Testimonials & Title */}
                    <div className="col-lg-6 mb-5 mb-lg-0">
                        <div className="pe-lg-5 animate__animated animate__fadeInLeft">
                            <h2 className="section-title text-white mb-4">
                                {t('We Value Your Feedback', 'نحن نقدر رأيك')}
                            </h2>
                            <p className="lead text-white-50 mb-5">
                                {t('Help us serve you better', 'ساعدنا لنقدم لك خدمة أفضل')}
                            </p>

                            <div className="testimonial-item p-4 mb-4">
                                <div className="stars mb-3">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                </div>
                                <p className="testimonial-text text-white opacity-75 fs-5">
                                    {t(
                                        'Amazing experience! The team at Adonis.travel made our dream vacation come true.',
                                        'تجربة مذهلة! فريق أدونيس للسفر جعل عطلة أحلامنا حقيقة.'
                                    )}
                                </p>
                                <span className="testimonial-author d-block mt-3 text-primary fw-bold">
                                    - Mohamed Howedy
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Feedback Form */}
                    <div className="col-lg-6">
                        <div className="feedback-form-wrapper p-4 p-md-5 animate__animated animate__fadeInRight">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-4">
                                    <label className="form-label text-dark fw-bold">{t('Your Name', 'الاسم الكامل')}</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={form.name}
                                        onChange={e => setField('name', e.target.value)}
                                        required
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="form-label text-dark fw-bold">{t('Email Address', 'البريد الإلكتروني')}</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        value={form.email}
                                        onChange={e => setField('email', e.target.value)}
                                    />
                                </div>

                                <div className="mb-4">
                                    <StarRating
                                        label={t('Rate Our Service', 'تقييم الخدمة')}
                                        value={form.serviceRating}
                                        onChange={v => setField('serviceRating', v)}
                                    />
                                </div>

                                <div className="mb-4">
                                    <StarRating
                                        label={t('Rate Our Hosting', 'تقييم الضيافة')}
                                        value={form.hostingRating}
                                        onChange={v => setField('hostingRating', v)}
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="form-label text-dark fw-bold">{t('Your Feedback', 'ملاحظاتك')}</label>
                                    <textarea
                                        className="form-control"
                                        rows="4"
                                        value={form.comments}
                                        onChange={e => setField('comments', e.target.value)}
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="btn btn-primary w-100 py-3 d-flex align-items-center justify-content-center gap-2"
                                    disabled={submitting}
                                >
                                    {submitting ? (
                                        <><i className="fas fa-spinner fa-spin"></i> {t('Submitting...', 'جارٍ الإرسال...')}</>
                                    ) : (
                                        <><i className="fas fa-paper-plane"></i> {t('Submit Feedback', 'إرسال التقييم')}</>
                                    )}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FeedbackSection;
