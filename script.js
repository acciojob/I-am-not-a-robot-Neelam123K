//your code here
document.addEventListener("DOMContentLoaded", function () {
  const images = [
    "img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg"
  ];
  const repeatedIndex = Math.floor(Math.random() * 5); // Random index for repeated image
  const imageSet = [...images, images[repeatedIndex]]; // Add repeated image
  shuffle(imageSet); // Shuffle the images

  const container = document.getElementById("image-container");
  const h3 = document.getElementById("h");
  const resetButton = document.getElementById("reset");
  const verifyButton = document.getElementById("verify");
  const para = document.getElementById("para");
  
  let selectedImages = [];
  
  imageSet.forEach((src, index) => {
    const img = document.createElement("img");
    img.src = src;
    img.className = `img${index + 1}`;
    img.addEventListener("click", () => handleImageClick(img, src));
    container.appendChild(img);
  });

  function handleImageClick(img, src) {
    if (selectedImages.length < 2 && !selectedImages.includes(src)) {
      selectedImages.push(src);
      img.classList.add("selected");
    }

    if (selectedImages.length === 1) {
      resetButton.style.display = "block";
    }

    if (selectedImages.length === 2) {
      verifyButton.style.display = "block";
    }
  }

  resetButton.addEventListener("click", () => {
    selectedImages = [];
    resetButton.style.display = "none";
    verifyButton.style.display = "none";
    para.textContent = "";
    document.querySelectorAll("img").forEach((img) => img.classList.remove("selected"));
  });

  verifyButton.addEventListener("click", () => {
    if (selectedImages[0] === selectedImages[1]) {
      para.textContent = "You are a human. Congratulations!";
    } else {
      para.textContent = "We can't verify you as a human. You selected the non-identical tiles.";
    }
    verifyButton.style.display = "none";
  });

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
});
