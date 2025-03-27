// Remove the opening curly brace at the beginning
console.log("home.js is running!");

// This code should be inside DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM fully loaded and parsed");

    // Smooth Scrolling for Navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    const images = document.querySelectorAll("img");

    if (images.length > 0) {
        images.forEach((img, index) => {
            console.log(`Image ${index + 1}:`, img.src);
        });
    } else {
        console.log("No images found on the page.");
    }

    // Detect broken images
    images.forEach((img) => {
        img.onerror = () => {
            console.log("Error loading image:", img.src);
        };
    });

    // Auto-Change Placeholder in Search Bar
    const searchInput = document.querySelector("input[type='search']");
    if (searchInput) {
        const placeholders = [
            "Search for medicines...",
            "Find pain relief...",
            "Looking for prescriptions?",
            "Check cough syrups..."
        ];
        let index = 0;

        setInterval(() => {
            searchInput.setAttribute("placeholder", placeholders[index]);
            index = (index + 1) % placeholders.length;
        }, 3000);
    }

    // Fade-in Animation on Page Load - moved inside the same DOMContentLoaded
    document.body.style.opacity = 0;
    setTimeout(() => {
        document.body.style.transition = "opacity 1.5s ease-in";
        document.body.style.opacity = 1;
    }, 200);
});
// Remove the closing curly brace at the end
