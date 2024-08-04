document.addEventListener("DOMContentLoaded", function () {
  // Ajoutez un gestionnaire d'événement de clic à tous les liens de classe .scroll-link
  document.querySelectorAll(".scroll-link").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      // Récupérez la hauteur de la barre de navigation (peut nécessiter d'ajuster selon votre conception)
      const navbarHeight = document.querySelector(".navbar").offsetHeight;

      // Récupérez la cible du lien
      const targetId = this.getAttribute("href").substring(1);

      // Récupérez l'élément cible
      const targetElement = document.getElementById(targetId);

      // Calculez la position de défilement en tenant compte de la hauteur de la barre de navigation
      const offsetTop = targetElement.offsetTop - navbarHeight;

      // Faites défiler la page jusqu'à l'élément cible avec un décalage ajusté
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    });
  });
});
