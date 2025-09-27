let nameInp = document.querySelector(".input-name");
let surenameInp = document.querySelector(".input-surename");
let phonenumInp = document.querySelector(".input-phoneNumber");
let emailInp = document.querySelector(".input-email");
let createContactBtn = document.querySelector(".create-contact");
let contactList = document.querySelector(".contactList");

createContactBtn.addEventListener("click", function () {
    const li = document.createElement("li");
    let contactName = nameInp.value;
    let contactSurename = surenameInp.value;
    let contactPhoneNumber = phonenumInp.value;
    let contactEmail = emailInp.value;
    li.innerHTML = `Ім'я: <p>${contactName}</p> Призвіще: <p>${contactSurename}</p> Номер телефону: <p>${contactPhoneNumber}</p> Email: <p>${contactEmail}</p> <button class="delete">Delete</button> <button class="edit">Edit</button>`;
    contactList.appendChild(li);
    localStorage.setItem("Name", JSON.stringify(contactName));
    localStorage.setItem("Surename", JSON.stringify(contactSurename));
    localStorage.setItem("Phone Number", JSON.stringify(contactPhoneNumber));
    localStorage.setItem("Email", JSON.stringify(contactEmail));

    nameInp.value = ' ';
    surenameInp.value = ' ';
    phonenumInp.value = ' ';
    emailInp.value = ' ';
});

contactList.addEventListener("click", function (event) {
    const target = event.target;
    if (target.classList.contains("delete")) {
        localStorage.removeItem("Name");
        localStorage.removeItem("Surename");
        localStorage.removeItem("Phone Number");
        localStorage.removeItem("Email");
        let thiuse = event.target.closest("li");
        thiuse.remove();
    }

    if (target.classList.contains("edit")) {
        let thiuse = event.target.closest("li");
        const name = thiuse.querySelectorAll("p")[0].textContent;
        const surename = thiuse.querySelectorAll("p")[1].textContent;
        const phone = thiuse.querySelectorAll("p")[2].textContent;
        const email = thiuse.querySelectorAll("p")[3].textContent;

        nameInp.value = name;
        surenameInp.value = surename;
        phonenumInp.value = phone;
        emailInp.value = email;

        thiuse.remove();
    }
});

let clearStorage = () => {
localStorage.clear();
}



// localStorage.clear()
