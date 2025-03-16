document.addEventListener("DOMContentLoaded", function() {
    var botSettingsForm = document.getElementById("botSettingsForm");

    // Load existing bot settings from local storage
    var botSettings = JSON.parse(localStorage.getItem("botSettings")) || {};

    if (botSettings) {
        document.getElementById("botName").value = botSettings.name || "";
        document.getElementById("botDescription").value = botSettings.description || "";
        document.getElementById("botIcon").value = botSettings.icon || "";
        document.getElementById("botStatusInput").value = botSettings.status || "Coded with Botify!";
    }

    botSettingsForm.onsubmit = function(event) {
        event.preventDefault();

        var botName = document.getElementById("botName").value;
        var botDescription = document.getElementById("botDescription").value;
        var botIcon = document.getElementById("botIcon").value;
        var botStatus = document.getElementById("botStatusInput").value;

        // Save bot settings to local storage
        var botSettings = {
            name: botName,
            description: botDescription,
            icon: botIcon,
            status: botStatus
        };

        localStorage.setItem("botSettings", JSON.stringify(botSettings));
        alert("Bot settings saved successfully!");
    };
});
