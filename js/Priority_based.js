let streaming = false;
let streamingInterval;
let firstinstance = true;
function generateData() {
    const tableBody = document.querySelector("#data-table tbody");
    tableBody.innerHTML = "";
    for (let i = 0; i < 5; i++) {
        
        
        const newRow = tableBody.insertRow();
        const cellID = newRow.insertCell(0);
        const cellName = newRow.insertCell(1);
        const cellDetails = newRow.insertCell(2);
        const cellError = newRow.insertCell(3);
        const randomID = generateRandomID();
        const randomName = generateRandomName();
        const randomDetails = generateRandomDetails();
        
        cellID.textContent = randomID;
        cellName.textContent = randomName;
        cellDetails.textContent = randomDetails;

        const randomError = generateRandomError();
        cellError.textContent = randomError;
    }
    setColorBasedOnError()
    sortTable(3); // Sort based on the Error column
}

function updateErrors(columnIndex) {
    const tableBody = document.querySelector("#data-table tbody");

    for (let i = 0; i <tableBody.rows.length; i++){
        const targetRow = tableBody.rows[i];

        const targetCell = targetRow.cells[columnIndex];
        const updateE = generateRandomError();
        targetCell.textContent = updateE;
    }
    setColorBasedOnError()
    sortTable(3);
}


function generateStream() {
    streaming = true;
    generateData()
    streamingInterval = setInterval(() => {
        updateErrors(3);
    }, 1000); // Adjust the interval based on your desired update frequency
    stoppingInterval = setTimeout(stopStream, 10000);

}

function stopStream() {
    streaming = false;
    clearInterval(streamingInterval);
    clearInterval(stoppingInterval);
}

function resetStream() {
    streaming = false;
    clearInterval(streamingInterval);
    clearInterval(stoppingInterval);
    const tableBody = document.querySelector("#data-table tbody");
    tableBody.innerHTML = "";

}

function sortTable(columnIndex) {
    const table = document.querySelector("#data-table");
    const rows = Array.from(table.rows).slice(1);

    rows.sort((a, b) => {
        const valueA = parseFloat(a.cells[columnIndex].textContent);
        const valueB = parseFloat(b.cells[columnIndex].textContent);
        return valueA - valueB;
    });

    const tableBody = document.querySelector("#data-table tbody");
    tableBody.innerHTML = "";
    rows.forEach(row => tableBody.appendChild(row));
}


function setColorBasedOnError() {
    // Select the table body
    const tableBody = document.querySelector("#data-table tbody");

    // Loop through each row in the table
    for (let i = 0; i < tableBody.rows.length; i++) {
        // Access the error cell in the current row (assuming error column is at index 3)
        const errorCell = tableBody.rows[i].cells[3];

        // Get the error value
        const errorValue = Number(errorCell.textContent.trim()); // Assuming the error value is a string

        // Set color based on error value
        if (errorValue <35) {
            tableBody.rows[i].style.backgroundColor = "#FF9898";
        } else if (errorValue >=35 && errorValue<60 ) {
            tableBody.rows[i].style.backgroundColor = "#FFF498";
        } else {
            // Set a default color if needed
            tableBody.rows[i].style.backgroundColor = "#BCFF98";
        }
    }
}

function generateRandomID() {
    return Math.floor(Math.random() * 1000) + 1;
}

function generateRandomName() {
    const names = ["John", "Alice", "Bob", "Eva", "Charlie"];
    return names[Math.floor(Math.random() * names.length)];
}

function generateRandomDetails() {
    return "Lorem ipsum details";
}

function generateRandomError() {
    return Math.floor(Math.random() * 101);
}
