// LaunchBar Action Script

function run(argument) {
  if (argument == null) {
    LaunchBar.alert("No argument was passed to the action");
  }

  // LaunchBar.debugLog(JSON.stringify(argument));
  LaunchBar.setClipboardString(argument);

  LaunchBar.displayNotification({
    title: "Copied to Clipboard",
    string: argument,
  });
}
