// LaunchBar Action Script

function runWithString(argument) {
  const query = encodeURIComponent(argument);
  // LaunchBar.debugLog(JSON.stringify(query));

  try {
    const result = HTTP.getJSON(`https://duckduckgo.com/ac/?q=${query}`, 5);
    // LaunchBar.debugLog(JSON.stringify(result));

    if (result == null) {
      throw new Error("HTTP.getJSON() returned undefined");
    }

    if (result.error != null) {
      throw new Error(`HTTP request error: ${result.error}`);
    }

    return result.data.map((item) => ({
      title: item["phrase"],
    }));
  } catch (exception) {
    LaunchBar.log(`Error fetching results: ${exception}`);
    return [];
  }
}
