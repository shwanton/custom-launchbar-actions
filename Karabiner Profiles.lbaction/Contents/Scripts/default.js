// LaunchBar Action Script

function run() {
  const profiles = LaunchBar.execute(
    "/Library/Application Support/org.pqrs/Karabiner-Elements/bin/karabiner_cli",
    "--list-profile-names"
  )
    .trim()
    .split("\n");

  const result = profiles.map((profile) => ({
    title: profile,
    action: "onSelectProfile",
    actionRunsInBackground: true,
    actionReturnsItems: false,
  }));

  // LaunchBar.debugLog(JSON.stringify(result));

  return result;
}

function onSelectProfile(item) {
  // LaunchBar.debugLog(JSON.stringify(item));

  LaunchBar.execute(
    "/Library/Application Support/org.pqrs/Karabiner-Elements/bin/karabiner_cli",
    "--select-profile",
    item.title
  );

  // LaunchBar.displayNotification({
  //   string: "Current Karabiner Profile is: " + item.title,
  // });

  LaunchBar.hide();

  return;
}
