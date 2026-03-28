window.onload = function() {
    // Bouton WhatsApp principal (Accueil)
    const contactBtnMain = document.getElementById("whatsapp-btn-main");
    // Bouton "Voir plus" (Portfolio)
    const portfolioMoreLink = document.querySelector(".portfolio-more a");
    
    const today = new Date();
    const curHr = today.getHours();
    let messagePrefix;

    if (curHr < 18) {
        messagePrefix = "Bonjour";
    } else {
        messagePrefix = "Bonsoir";
    }

    // Le numéro de confiance (le premier donné)
    const base_num = "224623770166";
    const base_url = `https://wa.me/${base_num}`; 
    
    // Message personnalisé pour l'accueil
    const full_message_main = `${messagePrefix} MHD-TECH, j’ai besoin d’une assistance pour mon PC.`;
    contactBtnMain.href = `${base_url}?text=${encodeURIComponent(full_message_main)}`;

    // Message personnalisé pour le Portfolio ("Voir plus")
    const full_message_portfolio = `${messagePrefix} MHD-TECH, j’aimerais voir plus de vos réalisations.`;
    portfolioMoreLink.href = `${base_url}?text=${encodeURIComponent(full_message_portfolio)}`;
};
