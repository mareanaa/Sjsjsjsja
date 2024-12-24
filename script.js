const tg = window.Telegram.WebApp;

document.addEventListener("DOMContentLoaded", () => {
    tg.expand(); // يوسع الصفحة لعرض كامل
    console.log("Telegram Web App initialized");

    const sendMessageButton = document.getElementById("sendMessage");
    sendMessageButton.addEventListener("click", () => {
        tg.sendData("Hello from the Web App!"); // إرسال رسالة للبوت
        alert("Message sent to the bot!");
    });
});
