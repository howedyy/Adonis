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

import ScrollReveal from '../components/ScrollReveal';

function Home() {
    return (
        <>
            {/* Navigation */}
            <Navbar />

            {/* Page Sections */}
            <main>
                <HeroSection />
                <ScrollReveal direction="up">
                    <AboutSection />
                </ScrollReveal>
                <ScrollReveal direction="up" delay={0.2}>
                    <WhyChooseUs />
                </ScrollReveal>
                <ScrollReveal direction="up">
                    <PackagesSection />
                </ScrollReveal>
                <ScrollReveal direction="up">
                    <FeedbackSection />
                </ScrollReveal>
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
