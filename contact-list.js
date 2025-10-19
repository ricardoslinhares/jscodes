let contacts = [{
name: "Maxwell Wright",
phone: "(0191) 719 6495",
email: "Curabitur.egestas.nunc@nonummyac.co.uk"
}, {
name: "Raja Villarreal",
phone: "0866 398 2895",
email: "posuere.vulputate@sed.com"
}, {
name: "Helen Richards",
phone: "0800 1111",
email: "libero@convallis.edu"
}];

function showContact(arr, index) {
    
    if (!Array.isArray(arr)) {
        alert('Is not an array.');
        return;
    };
    
    if (arr.length === 0) {
        alert('No contacts available.');
        return;
    };
    
    if (Number.isNaN(index)) {
        alert('Is not an index.');
        return;
    };
    
    if (index < 0 || index >= arr.length) {
        alert('Contact not found.');
        return;
    };
    
    let result = '';
    result += `Name: ${arr[index].name}\n`;
    result += `Phone: ${arr[index].phone}\n`;
    result += `Email: ${arr[index].email}\n\n`;
    
    return alert(result.trim());
};

function showAllContacts(arr) {
    if (!Array.isArray(arr)) {
        alert('Is not an array.');
        return;
    };
    
    if (arr.length === 0) {
        alert('No contacts available.');
        return;
    };
    
    let result = '';
    for (let contact of arr) {
        result += `Name: ${contact.name}\n`;
        result += `Phone: ${contact.phone}\n`;
        result += `Email: ${contact.email}\n\n`;
    };
    return alert(result.trim());
};

function addNewContact() {
    let newContact = {};
    
    let name;
    
    while (true) {
        name = prompt('Type the name:');
        if (name === '' || name === null) {
            alert('Name cannot be empty.');
            continue;
        };
        break;
    };
    
    let phone;
    while (true) {
        phone = prompt('Type the phone number:');
        if (phone === '' || phone === null) {
            alert('Phone cannot be empty.');
            continue;
        };
        break;
    };
    
    let email;
    while (true) {
        email = prompt('Type the email:');
        if (email === '' || email === null) {
            alert('Email cannot be empty.');
            continue;
        };
        break;
    };
        
    newContact.name = name;
    newContact.phone = phone;
    newContact.email = email;
        
    contacts.push(newContact);
    
    alert('Success. New contact added.');
};
        
        
function getChoice() {
    
    let choice;
    
    while (true) {
        choice = Number(prompt(`Select an option:
        1 - Show first contact;
        2 - Show last contact;
        3 - Show all contacts;
        4 - Add a new contact;
        5 - Exit the program;`));
        
        if (Number.isNaN(choice) || choice < 1 || choice > 5) {
            alert('Please select a valid option (1-5)');
            continue;
        };
        
        break;
        
    };
    
    return choice;
};

function actionChoice(choice) {
    
    switch (choice) {
        
        case 1:
            showContact(contacts, 0);
            break;
        case 2:
            showContact(contacts, contacts.length-1);
            break;
        case 3:
            showAllContacts(contacts);
            break;
        case 4:
            addNewContact();
            break;
    };
};

let startProgram = getChoice();

while (startProgram !== 5) {
    actionChoice(startProgram);
    startProgram = getChoice();
};
