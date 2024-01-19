document.addEventListener('DOMContentLoaded', function () {
    const rotatingImage = document.getElementById('rotatingImage');
    
    window.addEventListener('scroll', function () {
        const rotationValue = window.scrollY / 5; // Adjust the divisor for the desired rotation speed
        rotatingImage.style.transform = `rotate(${rotationValue}deg)`;
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const rotatingImage = document.getElementById('rotatingImage2');
    
    window.addEventListener('scroll', function () {
        const rotationValue = window.scrollY / 5; // Adjust the divisor for the desired rotation speed
        rotatingImage.style.transform = `rotate(${rotationValue}deg)`;
    });
});