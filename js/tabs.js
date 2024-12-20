document.addEventListener("DOMContentLoaded", function () {
  // Map tab IDs to external HTML files
  const tabContentMap = {
    "v-pills-home": "home.html",
    "v-pills-experience": "experience.html",
    "v-pills-ed-cert": "ed_cert.html",
    "v-pills-patents": "patents.html",
    "v-pills-tech": "technology.html",
    "v-pills-languages": "languages.html",
    "v-pills-viz": "viz.html"
  };

  // Function to load content into the tab pane
  function loadTabContent(tabId) {
    const pane = document.getElementById(tabId);
    const url = tabContentMap[tabId];

    if (pane && url) {
      fetch(url)
        .then((response) => response.text())
        .then((html) => {
          pane.innerHTML = html;
        })
        .catch((error) => {
          console.error("Error loading tab content:", error);
        });
    }
  }

  // Load the active tab's content on page load
  loadTabContent("v-pills-home");

  // Add event listeners to tabs
  document.querySelectorAll('[data-bs-toggle="pill"]').forEach((tab) => {
    tab.addEventListener("shown.bs.tab", function (event) {
      const tabId = event.target.getAttribute("data-bs-target").substring(1);
      loadTabContent(tabId);
    });
  });
});
