// =============================================
// GOOGLE SHEETS URLS
// =============================================
const GOOGLE_SHEETS_CONFIG = {
    bookingUrl: 'https://script.google.com/macros/s/AKfycbwbfyqWXuqjzTyBQQZZmex1pQfyhkbykzowOXXnNzsVQoxLmxE7mO8r1qGV_nkIwVwy/exec',
    feedbackUrl: 'https://script.google.com/macros/s/AKfycbwYSUTrNSD9PnjGh6vQ7idv8yPeb3oXWkYutX8tfbvJm_L1lJk63vt5VWhmF076dD8/exec',
};

export function useGoogleSheets() {
    async function submit(type, data) {
        const url = type === 'booking'
            ? GOOGLE_SHEETS_CONFIG.bookingUrl
            : GOOGLE_SHEETS_CONFIG.feedbackUrl;

        if (!url) return;

        try {
            await fetch(url, {
                method: 'POST',
                mode: 'no-cors', // Required for Google Apps Script
                headers: { 'Content-Type': 'text/plain;charset=utf-8' },
                body: JSON.stringify(data),
            });
            console.log(`Data (${type}) sent to Google Sheets successfully.`);
        } catch (err) {
            console.error('Google Sheets error:', err);
        }
    }

    return { submit };
}
