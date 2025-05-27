import React from 'react';


function WishlistToast({ message = "Added to Wishlist!", show, onClose, duration = 2000 }) {
    React.useEffect(() => {
        if (show) {
            const timer = setTimeout(() => {
                onClose && onClose();
            }, duration);
            return () => clearTimeout(timer);
        }
    }, [show, onClose, duration]);

    if (!show) return null;

    return (
        <div
            className="toast show position-fixed bottom-0 end-0 m-4"
            role="alert"
            aria-live="assertive"
            aria-atomic="true"
            style={{ zIndex: 9999, minWidth: 220 }}
        >
            <div className="toast-header">
                <span className="me-2" role="img" aria-label="wishlist" style={{ fontSize: 20 }}>💖</span>
                <strong className="me-auto">Wishlist</strong>
                <button
                    type="button"
                    className="btn-close"
                    aria-label="Close"
                    onClick={onClose}
                ></button>
            </div>
            <div className="toast-body">
                {message}
            </div>
        </div>
    );
}

export default WishlistToast;

