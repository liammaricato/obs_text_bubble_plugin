const textInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input button");

$(document).ready(function(){
    $('#text-input').keypress(function(e){
        if(e.keyCode==13) {
            $('#send-btn').trigger("click");
            return false;
        }
    });
});

let sentMessage;

const handleChat = () => {
    sentMessage = textInput.value.trim();
    if(!sentMessage) return;
    localStorage.setItem('message', sentMessage);
    textInput.value = '';
}

sendChatBtn.addEventListener("click", handleChat);