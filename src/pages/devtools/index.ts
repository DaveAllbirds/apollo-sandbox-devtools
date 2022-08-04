try {
  chrome.devtools.panels.create(
    "Apollo Sandbox",
    "icon-34.png",
    "src/pages/panel/index.html"
  );
} catch (e) {
  console.error(e);
}
