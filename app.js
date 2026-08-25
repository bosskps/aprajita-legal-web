const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzBvO056innZdlOeIyuhpUsaAQ7kQZlZRgMohP93rpD_LGg7bmkEQVdyXl83M_M2Y2SbQ/exec"; // Paste your Web App URL

// BCI Disclaimer Modal State Handler
window.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('bci_accepted') === 'true') {
        document.getElementById('bciModal').classList.add('hidden');
        document.body.classList.remove('no-scroll');
    }
});

function acceptBCI() {
    localStorage.setItem('bci_accepted', 'true');
    document.getElementById('bciModal').classList.add('hidden');
    document.body.classList.remove('no-scroll');
}

function declineBCI() {
    window.location.href = "https://www.google.com";
}

// Clean Form Submission Handler
async function handleFormSubmit(event) {
    event.preventDefault();
    const submitBtn = document.getElementById('submitBtn');
    const statusMsg = document.getElementById('statusMsg');

    submitBtn.disabled = true;
    submitBtn.innerText = "Submitting Case Request...";
    statusMsg.innerText = "";

    const formData = {
        name: document.getElementById('userName').value,
        phone: document.getElementById('userPhone').value,
        message: document.getElementById('userMessage').value
    };

    try {
        await fetch(APPS_SCRIPT_URL, {
            method: "POST",
            mode: "no-cors",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData)
        });

        statusMsg.className = "mt-6 text-center text-xs font-bold text-green-700";
        statusMsg.innerText = "Inquiry registered successfully. Advocates will contact you shortly.";
        document.getElementById('contactForm').reset();
    } catch (error) {
        statusMsg.className = "mt-6 text-center text-xs font-bold text-red-700";
        statusMsg.innerText = "Submission error. Please try again or call directly.";
    } finally {
        submitBtn.disabled = false;
        submitBtn.innerText = "Submit Case Request";
    }
}
