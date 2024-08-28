let contacts = [
    { name: "Maxwell Wright", phone: "019171916495", email: "contact1@cctb.com" },
    { name: "Raja Villarreal", phone: "0863982895", email: "contact2@cctb.com" },
    { name: "Helen Richards", phone: "080031111", email: "contact3@cctb.edu" }
];

const displayContact = (contact) => {
    const contactDiv = document.createElement('div');
    contactDiv.innerText = `Name: ${contact.name}, Phone: ${contact.phone}, Email: ${contact.email}`;
    document.getElementById('contact-list').appendChild(contactDiv);
};

const addContact = () => {
    let name = prompt("Enter contact name:");
    let phone = prompt("Enter contact phone:");
    let email = prompt("Enter contact email:");
    
    let newContact = { name, phone, email };
    contacts.push(newContact);
    displayContact(newContact);
};

const findContact = () => {
    let name = prompt("Enter the name of the contact you're looking for:");
    let foundContact = contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase());
    if (foundContact) {
        alert(`Found Contact: Name: ${foundContact.name}, Phone: ${foundContact.phone}, Email: ${foundContact.email}`);
    } else {
        alert("Contact not found.");
    }
};

const processContacts = (callback) => {
    contacts.forEach(callback);
};

const viewContacts = () => {
    document.getElementById('contact-list').innerHTML = '';
    processContacts(displayContact);
};

setTimeout(() => {
    viewContacts();
}, 2000);

setInterval(() => {
    console.log(`Total contacts: ${contacts.length}`);
}, 5000);

const searchContactRecursive = (name, index = 0) => {
    if (index >= contacts.length) {
        alert("Contact not found.");
        return;
    }
    if (contacts[index].name.toLowerCase() === name.toLowerCase()) {
        alert(`Found Contact: Name: ${contacts[index].name}, Phone: ${contacts[index].phone}, Email: ${contacts[index].email}`);
    } else {
        searchContactRecursive(name, index + 1);
    }
};

// Background color change every 5 seconds
const colors = ['#ff9999', '#66b3ff', '#ff0055'];
let colorIndex = 0;
setInterval(() => {
    document.body.style.backgroundColor = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length;
}, 5000);