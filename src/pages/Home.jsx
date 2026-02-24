import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import WhyChooseUs from '../components/WhyChooseUs';
import PackagesSection from '../components/PackagesSection';
import FeedbackSection from '../components/FeedbackSection';
import Footer from '../components/Footer';
import BookingModal from '../components/BookingModal';
import PackageDetailsModal from '../components/PackageDetailsModal';
import Toast from '../components/Toast';

function Home() {
    return (
        <>
            {/* Navigation */}
            <Navbar />

            {/* Page Sections */}
            <main>
                <HeroSection />
                <AboutSection />
                <WhyChooseUs />
                <PackagesSection />
                <FeedbackSection />
            </main>

            {/* Footer */}
            <Footer />

            {/* Modals */}
            <BookingModal />
            <PackageDetailsModal />

            {/* Toast Notification */}
            <Toast />
        </>
    );
}

export default Home;
