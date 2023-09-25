const newMessage = document.getElementById("message");
const newMessageButton = document.getElementById("contactButton");

newMessageButton.addEventListener("click", function(){
    console.log(newMessage.value);
});