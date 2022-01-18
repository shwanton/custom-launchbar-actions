// LaunchBar Action Script

function run(...args) {
  return runWithPaths(args);
}

function runWithPaths(paths) {
  LaunchBar.debugLog(JSON.stringify(paths));

  if (paths == null || paths.length === 0) {
    LaunchBar.alert("No path was passed to the action");
  }

  try {
    const [path] = paths;
    const results = path.match(/([\w\s-]+).app/);
    // LaunchBar.debugLog(JSON.stringify(results));

    const [appWithExtension, appName] = results;
    const pid = LaunchBar.execute("/usr/bin/pgrep", appName);
    // LaunchBar.debugLog(`${appName}: ${pid}`);

    LaunchBar.displayNotification({
      string: `Relaunching ${appWithExtension}`,
    });
    LaunchBar.execute("/usr/bin/killall", appName);
    LaunchBar.execute("/usr/bin/open", path);

    return;
  } catch (e) {
    LaunchBar.debugLog(JSON.stringify(e));
    LaunchBar.alert(`${e}`);

    return;
  }
}
