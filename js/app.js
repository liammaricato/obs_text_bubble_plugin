const baloonsContainer = document.querySelector(".baloons-container");

const notificationSound = new Audio('sounds/notification.mp3');

const deleteBaloon = (baloonElement) => {
    baloonElement.classList.add("removed");

    baloonElement.addEventListener("transitionend", () => { 
      baloonElement.remove(); 
    });
}

const scheduleDeletion = (baloonElement) => {
    setTimeout(deleteBaloon, 15000, baloonElement);
}

const drawMainBaloon = (message) => {
    const baloonDiv = document.createElement("div");
    baloonDiv.classList.add("baloon", "main");
    let baloonContent = `<p>${message}</p>`;
    baloonDiv.innerHTML = baloonContent;
    baloonsContainer.appendChild(baloonDiv);
}

const updateLateBaloons = () => {
    let baloons = document.querySelectorAll(".baloon");

    if(baloons.length > 5)
        baloons[0].remove()
}

const sendMessage = (message) => {
    const currentMainBaloon = document.querySelector(".main");

    if(currentMainBaloon) {
        currentMainBaloon.classList.remove("main");
        scheduleDeletion(currentMainBaloon);
    }

    drawMainBaloon(message);
    updateLateBaloons();
}

window.addEventListener('storage', () => {
    sendMessage(localStorage.getItem('message'));
    notificationSound.play();
})