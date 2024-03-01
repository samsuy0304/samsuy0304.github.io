document.addEventListener('DOMContentLoaded', function () {
    const rotatingImage = document.getElementById('rotatingImage');
    let rotationValue = 0;

    function updateRotation() {
        rotationValue = -window.scrollY / 5; // Adjusted for opposite direction
        rotatingImage.style.transform = `rotate(${rotationValue}deg)`;
    }

    function animate() {
        updateRotation();
        requestAnimationFrame(animate);
    }

    window.addEventListener('scroll', function () {
        if (!rotatingImage.style.transition) {
            rotatingImage.style.transition = 'transform 0.3s ease-out'; // Adjust the duration and timing function as needed
        }
        updateRotation();
    });

    animate(); // Start the animation loop
});


document.addEventListener('DOMContentLoaded', function () {
    const rotatingImage = document.getElementById('rotatingImage2');
    let rotationValue = 0;

    function updateRotation() {
        rotationValue = -window.scrollY / 5; // Adjusted for opposite direction
        rotatingImage.style.transform = `rotate(${rotationValue}deg)`;
    }

    function animate() {
        updateRotation();
        requestAnimationFrame(animate);
    }

    window.addEventListener('scroll', function () {
        if (!rotatingImage.style.transition) {
            rotatingImage.style.transition = 'transform 0.3s ease-out'; // Adjust the duration and timing function as needed
        }
        updateRotation();
    });

    animate(); // Start the animation loop
});

