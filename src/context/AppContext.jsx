import { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

export function AppProvider({ children }) {
    const [language, setLanguage] = useState('en');
    const [activeCategory, setActiveCategory] = useState('all');
    const [showBookingModal, setShowBookingModal] = useState(false);
    const [bookingPackage, setBookingPackage] = useState('');
    const [selectedDetails, setSelectedDetails] = useState(null);
    const [toast, setToast] = useState('');

    // Load saved language on mount
    useEffect(() => {
        const saved = localStorage.getItem('preferredLanguage');
        if (saved) {
            setLanguage(saved);
            document.documentElement.lang = saved;
            document.documentElement.dir = saved === 'ar' ? 'rtl' : 'ltr';
        }
    }, []);

    function toggleLanguage() {
        const next = language === 'en' ? 'ar' : 'en';
        setLanguage(next);
        document.documentElement.lang = next;
        document.documentElement.dir = next === 'ar' ? 'rtl' : 'ltr';
        localStorage.setItem('preferredLanguage', next);
    }

    // Helper: translate en/ar string pair
    const t = (en, ar) => language === 'ar' ? ar : en;

    return (
        <AppContext.Provider value={{
            language, setLanguage, toggleLanguage, t,
            activeCategory, setActiveCategory,
            showBookingModal, setShowBookingModal,
            bookingPackage, setBookingPackage,
            selectedDetails, setSelectedDetails,
            toast, setToast,
        }}>
            {children}
        </AppContext.Provider>
    );
}

export function useApp() {
    return useContext(AppContext);
}
