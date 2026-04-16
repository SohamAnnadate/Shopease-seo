/* ========================================
   Lab 4: SEO + Email Marketing - Script
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
        alert('🛍️ Redirecting to checkout...\n\n(This is a demo page.)');
    });
}

// ---- Newsletter Signup Form ----
const newsletterForm = document.getElementById('newsletterForm');
const successMessage = document.getElementById('successMessage');

if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('mcName').value.trim();
        const email = document.getElementById('mcEmail').value.trim();

        if (!name || !email) {
            alert('Please fill in both your name and email!');
            return;
        }

        // Hide form, show success message
        document.querySelector('.newsletter-container').style.display = 'none';
        successMessage.style.display = 'block';

        // Log to console (in real Mailchimp, this data goes to their API)
        console.log('=== New Subscriber ===');
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Time:', new Date().toLocaleString());
        console.log('======================');
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
