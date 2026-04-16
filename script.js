/* ========================================
   Lab 4: SEO Optimized Product Page - Script
   ======================================== */

// ---- Add to Cart Button ----
const addToCartBtn = document.getElementById('addToCartBtn');
if (addToCartBtn) {
    addToCartBtn.addEventListener('click', () => {
        addToCartBtn.textContent = '✅ Added to Cart!';
        addToCartBtn.style.background = 'linear-gradient(135deg, #16a34a, #4ade80)';
        setTimeout(() => {
            addToCartBtn.textContent = '🛒 Add to Cart';
            addToCartBtn.style.background = '';
        }, 2000);
    });
}

// ---- Buy Now Button ----
const buyNowBtn = document.getElementById('buyNowBtn');
if (buyNowBtn) {
    buyNowBtn.addEventListener('click', () => {
        alert('🛍️ Redirecting to checkout...\n\n(This is a demo page for SEO demonstration.)');
    });
}

// ---- Smooth Page Load ----
document.addEventListener('DOMContentLoaded', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    requestAnimationFrame(() => {
        document.body.style.opacity = '1';
    });
});
