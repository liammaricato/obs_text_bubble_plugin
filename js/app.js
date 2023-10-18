const baloonsContainer = document.querySelector(".baloons-container");

const notificationSound = new Audio('sounds/notification.mp3');

const drawMainBaloon = (message) => {
    const baloonDiv = document.createElement("div");
    baloonDiv.classList.add("baloon", "main");
    let baloonContent = `<p>${message}</p>`;
    baloonDiv.innerHTML = baloonContent;
    baloonsContainer.appendChild(baloonDiv);
}

const deleteLateBaloons = () => {
    let baloons = document.querySelectorAll(".baloon");

    if(baloons.length > 5)
        baloons[0].remove()
}

const sendMessage = (message) => {
    const currentMainBaloon = document.querySelector(".main");

    if(currentMainBaloon)
        currentMainBaloon.classList.remove("main");

    drawMainBaloon(message);
    deleteLateBaloons();
}

window.addEventListener('storage', () => {
    sendMessage(localStorage.getItem('message'));
    if(notificationSound) console.log('foi');
    notificationSound.play();
})