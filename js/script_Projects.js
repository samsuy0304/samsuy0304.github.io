function showProjectInfo(title, description, imagePath, URL) {
    // Create a pop-up window with project information and image
    var popup = document.createElement('div');
    popup.className = 'popup';
    popup.innerHTML = `
        <img src="${imagePath}" alt="${title} Image">
        <div class = "popinfo">
            <h3>${title}</h3>
            <a href="${URL}" target=”_blank” class="fa fa-github"></a>
            <p>${description}</p>
        </div>
        <button onclick="closePopup()">Close</button>
    `;

    // Append the pop-up window to the body
    document.body.appendChild(popup);
}

function closePopup() {
    // Remove the pop-up window when the close button is clicked
    var popup = document.querySelector('.popup');
    if (popup) {
        document.body.removeChild(popup);
    }
}
