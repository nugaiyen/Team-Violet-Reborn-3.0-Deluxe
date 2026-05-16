const openChat = document.getElementById("openChat");
const closeChat = document.getElementById("closeChat");
const chatPage = document.getElementById("chatPage");

openChat.addEventListener("click", function () {
    chatPage.style.display = "flex";
});

closeChat.addEventListener("click", function () {
    chatPage.style.display = "none";
});