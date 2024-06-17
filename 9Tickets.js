class Ticket {
    constructor(destination, price, status) {
        this.destination = destination;
        this.price = parseFloat(price);
        this.status = status;
    }

    toString() {
        return `Ticket { destination: '${this.destination}', price: ${this.price.toFixed(2)}, status: '${this.status}' }`;
    }
}

function manageTickets(ticketDescriptions, sortingCriterion) {
    
    const tickets = ticketDescriptions.map(description => {
        const [destination, price, status] = description.split('|');
        return new Ticket(destination, price, status);
    });

    tickets.sort((a, b) => {
        if (sortingCriterion === 'destination') {
            return a.destination.localeCompare(b.destination);
        } else if (sortingCriterion === 'price') {
            return a.price - b.price;
        } else if (sortingCriterion === 'status') {
            return a.status.localeCompare(b.status);
        }
    });

    return tickets;
}

const ticketDescriptions1 = [
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'
];
const sortingCriterion1 = 'destination';

const ticketDescriptions2 = [
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'
];
const sortingCriterion2 = 'status';

// Output for the first sample input
const sortedTickets1 = manageTickets(ticketDescriptions1, sortingCriterion1);
console.log(sortedTickets1.map(ticket => ticket.toString()));

// Output for the second sample input
const sortedTickets2 = manageTickets(ticketDescriptions2, sortingCriterion2);
console.log(sortedTickets2.map(ticket => ticket.toString()));
