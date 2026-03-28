window.onload = function() {
    const contactBtn = document.getElementById("whatsapp-btn");
    const today = new Date();
    const curHr = today.getHours();
    let messagePrefix;

    if (curHr < 18) {
        messagePrefix = "Bonjour";
    } else {
        messagePrefix = "Bonsoir";
    }

    const base_url = "https://wa.me/224623770166"; 
    const full_message = `${messagePrefix} MHD-TECH, j’ai besoin d’une assistance pour...`;
    
    contactBtn.href = `${base_url}?text=${encodeURIComponent(full_message)}`;
};
