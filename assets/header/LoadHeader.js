
// Function to load an HTML file into a specific element
function loadHTML(url, elementId) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        });
}

// Load header, content, and footer
loadHTML("header.html", "header-placeholder");
loadHTML("footer.html", "footer-placeholder");