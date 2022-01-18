// LaunchBar Action Script

function runWithURL(URL, details) {
  // The details Object has properties for all of the URL’s properties, like
  // scheme, host, port, user, password, path, query, fragment, parameterString.
  // Additionally, the query and fragment are parsed as key-value-pairs and
  // passed as the queryParameters and fragmentParameters, respectively. Any of
  // these properties may be undefined if the URL does not contain that information.
  // return fetchResults();

  LaunchBar.performAction("Anycomplete");
}
