import { useEffect, useRef } from 'react';
import { useApp } from '../context/AppContext';

function Toast() {
    const { toast, setToast } = useApp();
    const toastRef = useRef(null);

    useEffect(() => {
        if (!toast || !toastRef.current || !window.bootstrap) return;
        const bsToast = new window.bootstrap.Toast(toastRef.current, { delay: 4000 });
        bsToast.show();
        // Clear message from context after Bootstrap hides it
        const el = toastRef.current;
        const onHidden = () => setToast('');
        el.addEventListener('hidden.bs.toast', onHidden, { once: true });
        return () => el.removeEventListener('hidden.bs.toast', onHidden);
    }, [toast, setToast]);

    return (
        <div
            className="position-fixed bottom-0 end-0 p-3"
            style={{ zIndex: 9999 }}
            aria-live="polite"
            aria-atomic="true"
        >
            <div
                id="successToast"
                className="toast align-items-center text-white border-0"
                ref={toastRef}
                role="alert"
            >
                <div className="d-flex">
                    <div className="toast-body d-flex align-items-center gap-2">
                        <i className="fas fa-check-circle fa-lg"></i>
                        {toast}
                    </div>
                    <button
                        type="button"
                        className="btn-close btn-close-white me-2 m-auto"
                        data-bs-dismiss="toast"
                        aria-label="Close"
                    ></button>
                </div>
            </div>
        </div>
    );
}

export default Toast;
