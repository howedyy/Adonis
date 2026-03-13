import { useApp } from '../context/AppContext';
import { packages } from '../data/packagesData';
import CategoryFilter from './CategoryFilter';
import PackageCard from './PackageCard';

function PackagesSection() {
    const { activeCategory, t } = useApp();

    const filtered = activeCategory === 'all'
        ? packages
        : packages.filter(p => p.category === activeCategory);

    return (
        <section id="packages" className="packages-section py-5">
            <div className="container">
                <div className="text-center mb-5">
                    <h2 className="section-title">{t('Our Services', 'خدماتنا')}</h2>
                    <p className="section-description">
                        {t(
                            'Choose from our carefully curated collection of travel experiences',
                            'اختر من مجموعتنا المنسقة بعناية من تجارب السفر'
                        )}
                    </p>
                </div>

                <CategoryFilter />

                <div className="row justify-content-center" id="packagesGrid">
                    {filtered.length > 0 ? (
                        filtered.map(pkg => <PackageCard key={pkg.id} pkg={pkg} />)
                    ) : (
                        <div className="col-12 text-center py-5">
                            <i className="fas fa-search fa-3x text-muted mb-3 d-block"></i>
                            <p className="text-muted">{t('No services found for this category.', 'لا توجد خدمات لهذه الفئة.')}</p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}

export default PackagesSection;
