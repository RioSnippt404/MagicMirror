const NodeHelper = require("node_helper");
const { exec } = require("child_process");

module.exports = NodeHelper.create({
  // Start method
  start: function() {
    console.log("Starting module: " + this.name);
  },

  // Socket notification handler
  socketNotificationReceived: function(notification, payload) {
    if (notification === "EXECUTE_Shell_CODE") {
      // Execute Bash Shell code
      exec("/path/ to /the shell file", (error, stdout, stderr) => {
        if (error) {
          console.error(`Error executing Shell Script code: ${error.message}`);
          return;
        }
        if (stderr) {
          console.error(`Shell script returned an error: ${stderr}`);
          return;
        }
        console.log(`Shell script output: ${stdout}`);
        // Send any output back to the module if needed
      });
    }
  }
});
