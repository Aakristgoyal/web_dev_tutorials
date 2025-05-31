function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple login validation
    if (username === "user" && password === "password") {
        window.location.href = 'entry.html';
    } else {
        alert('Invalid login credentials!');
    }
}

document.getElementById('entryForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const vehicleNo = document.getElementById('vehicleNo').value;
    const name = document.getElementById('name').value;
    const parkingSlot = document.getElementById('parkingSlot').value;

    document.write(`Vehicle No: ${vehicleNo}\nName: ${name}\nParking Slot: ${parkingSlot}\n\nEntry submitted successfully!`);
});
