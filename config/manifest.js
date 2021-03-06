'use strict';

module.exports = function(/* environment, appConfig */) {
  // See https://zonkyio.github.io/ember-web-app for a list of
  // supported properties

  return {
    name: "octane-notes",
    short_name: "octane-notes",
    description: "notes - an simple Ember Octane apllication",
    start_url: "/demo-notes/",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#fff",
    icons:[{"src":"/demo-notes/android-chrome-192x192.png","sizes":"192x192","type":"image/png"},{"src":"/demo-notes/android-chrome-512x512.png","sizes":"512x512","type":"image/png"}],
    ms: {
      tileColor: '#fff'
    }
  };
}
