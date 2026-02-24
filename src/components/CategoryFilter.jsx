import { useApp } from '../context/AppContext';

const filterButtons = [
    { key: 'all', en: 'All Services', ar: 'جميع الخدمات' },
    { key: 'accommodation', en: 'Accommodation', ar: 'الإقامة' },
    { key: 'flight', en: 'Flights', ar: 'الطيران' },
    { key: 'transfers', en: 'Transfers', ar: 'الانتقالات' },
    { key: 'visa', en: 'Visa', ar: 'التأشيرات' },
    { key: 'vip', en: 'VIP', ar: 'كبار الشخصيات' },
    { key: 'packages', en: 'Packages', ar: 'الباقات' },
    { key: 'hajj-umrah', en: 'Hajj & Umrah', ar: 'الحج والعمرة' },
    { key: 'excursions', en: 'Excursions', ar: 'رحلات سياحية' },
];

function CategoryFilter() {
    const { activeCategory, setActiveCategory, t } = useApp();

    return (
        <div className="category-filter">
            {filterButtons.map(btn => (
                <button
                    key={btn.key}
                    className={`btn btn-filter${activeCategory === btn.key ? ' active' : ''}`}
                    onClick={() => setActiveCategory(btn.key)}
                >
                    {t(btn.en, btn.ar)}
                </button>
            ))}
        </div>
    );
}

export default CategoryFilter;
