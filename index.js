

function searchProductColor() {
    const glassesColor = document.getElementById("srcInput").value.trim();
    const image = document.getElementById("myImg");

    const availableColors = new Set(["red", "black", "green", "brown"]);

    const colorImages = new Map([
        ["red", "images/red.webp"],
        ["black", "images/black.avif"],
        ["green", "images/green.webp"],
        ["brown", "images/brown.webp"]
    ]);
    if (glassesColor === "") {
        alert("Please input any color of glasses.");
        return;
    }

    if (availableColors.has(glassesColor)) {
        image.src = colorImages.get(glassesColor);
    } 

    else {
        alert("Sorry, this color is out of stock!");
    }
}


