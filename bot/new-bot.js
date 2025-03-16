document.addEventListener("DOMContentLoaded", function() {
    var createBotBtn = document.getElementById("createBotBtn");
    var botLimitError = document.getElementById("botLimitError");

    // Get the bot count from local storage
    var botCount = parseInt(localStorage.getItem("botCount")) || 0;

    // Check if the bot limit is reached
    if (botCount >= 8) {
        createBotBtn.disabled = true;
        botLimitError.style.display = "block";
    }

    createBotBtn.onclick = function() {
        if (botCount < 8) {
            botCount++;
            localStorage.setItem("botCount", botCount);
            alert("Bot created successfully! You now have " + botCount + " bots.");
            if (botCount >= 8) {
                createBotBtn.disabled = true;
                botLimitError.style.display = "block";
            }
        }
    }
});
