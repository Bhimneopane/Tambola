function generateTicket() {
    const ticketDiv = document.getElementById('ticket');
    ticketDiv.innerHTML = ''; // Clear previous ticket

    let numbers = [];
    while (numbers.length < 25) {
        let num = Math.floor(Math.random() * 90) + 1;
        if (!numbers.includes(num)) {
            numbers.push(num);
        }
    }

    numbers.forEach(number => {
        let div = document.createElement('div');
        div.className = 'number';
        div.innerText = number;
        div.onclick = () => div.classList.toggle('marked'); // Mark numbers when clicked
        ticketDiv.appendChild(div);
    });
}
