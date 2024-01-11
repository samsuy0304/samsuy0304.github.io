function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);
    var offsetTop = section.offsetTop;

    window.scroll({
        top: offsetTop,
        behavior: 'smooth'
    });
}
