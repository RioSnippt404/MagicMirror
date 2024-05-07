Module.register("MMM-Action", {
    // Module defaults
    defaults: {},

    // Override dom generator
    getDom: function() {
        var wrapper = document.createElement("div");
        var button = document.createElement("button");
        button.textContent = "Click Me"; // Set button text
        button.addEventListener("click", () => {
            // Send the "EXECUTE_Shell_CODE" socket notification when the button is clicked
            this.sendSocketNotification("EXECUTE_Shell_CODE");
            // Delay sending "XDDD" notification by 20 seconds you can send any notification to any module
            setTimeout(() => {
                this.sendNotification("XDDD");
            }, 20000); // 20 seconds delay
        });
        wrapper.appendChild(button);
        return wrapper;
    },

    // Notification handler
    notificationReceived: function(notification, payload) {
        // Handle any notifications from the Node helper
    }
});
