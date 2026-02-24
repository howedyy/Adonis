import { useState } from 'react';

function StarRating({ value, onChange, label }) {
    const [hovered, setHovered] = useState(0);

    return (
        <div className="star-rating-wrapper">
            {label && <label className="form-label text-dark fw-bold mb-2">{label}</label>}
            <div className="star-rating d-flex gap-2" role="group" aria-label={label || 'Rating'}>
                {[1, 2, 3, 4, 5].map(star => (
                    <i
                        key={star}
                        className={`${(hovered || value) >= star ? 'fas' : 'far'} fa-star`}
                        style={{
                            cursor: 'pointer',
                            fontSize: '1.8rem',
                            color: (hovered || value) >= star ? '#FFD700' : '#DEE2E6',
                            transition: 'all 0.2s ease'
                        }}
                        onClick={() => onChange(star)}
                        onMouseEnter={() => setHovered(star)}
                        onMouseLeave={() => setHovered(0)}
                        role="button"
                        aria-label={`Rate ${star} out of 5`}
                        tabIndex="0"
                        onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                                e.preventDefault();
                                onChange(star);
                            }
                        }}
                    />
                ))}
            </div>
        </div>
    );
}

export default StarRating;
