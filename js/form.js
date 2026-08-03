/* ============================================
   DIVYA MAKEUP STUDIO — FORM JS
   ============================================ */

const form = document.getElementById('booking-form');
if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const name    = document.getElementById('booking-name').value.trim();
    const phone   = document.getElementById('booking-phone').value.trim();
    const email   = document.getElementById('booking-email').value.trim();
    const service = document.getElementById('booking-service').value;
    const date    = document.getElementById('booking-date').value;
    const time    = document.getElementById('booking-time').value;

    // Validation
    if (!name || !phone || !service || !date || !time) {
      showMsg('⚠️ Please fill all required fields.', 'error'); return;
    }
    if (!/^(\+91|91|0)?[6-9]\d{9}$/.test(phone.replace(/\s/g, ''))) {
      showMsg('⚠️ Please enter a valid Indian phone number.', 'error'); return;
    }
    if (new Date(date) < new Date(new Date().toDateString())) {
      showMsg('⚠️ Please select a future date.', 'error'); return;
    }

    // WhatsApp message
    const msg = `Hello Divya Makeup Studio! 🌸%0A%0ABooking Request:%0AName: ${encodeURIComponent(name)}%0APhone: ${phone}%0AService: ${service}%0ADate: ${date}%0ATime: ${time}`;
    showMsg('✅ Booking confirmed! Redirecting to WhatsApp...', 'success');
    setTimeout(() => { window.open(`https://wa.me/919876543210?text=${msg}`, '_blank'); }, 1500);
  });
}

function showMsg(msg, type) {
  let el = document.getElementById('form-message');
  if (!el) {
    el = document.createElement('div');
    el.id = 'form-message';
    el.style.cssText = 'margin-top:15px;padding:14px 20px;border-radius:10px;font-size:.9rem;font-weight:500;text-align:center;';
    form.appendChild(el);
  }
  el.textContent = msg;
  el.style.background = type === 'success' ? 'rgba(46,204,113,.15)' : 'rgba(231,76,60,.12)';
  el.style.color = type === 'success' ? '#27ae60' : '#e74c3c';
  el.style.border = `1px solid ${type === 'success' ? '#27ae60' : '#e74c3c'}`;
}