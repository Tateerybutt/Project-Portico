const images = ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg", "image5.jpg", "image6.jpg", "image7.jpg", "image8.jpg", "image9.jpg", "image10.jpg", "image11.jpg", "image12.jpg", "image13.jpg", "image14.jpg", "image15.jpg", "image16.jpg", "image17.jpg", "image18.jpg", "image19.jpg", "image20.jpg", "image21.jpg", "image22.jpg", "image23.jpg", "image24.jpg", "image25.jpg"];

const gallery = document.getElementById("gallery");

// Populate gallery with images
images.forEach(image => {
    const img = document.createElement("img");
    img.src = `images/${image}`;
    img.alt = "Image";
    img.addEventListener("click", () => openModal(img.src));
    gallery.appendChild(img);
});

// Function to open modal with full-size image
function openModal(src) {
    const modal = document.createElement("div");
    modal.classList.add("modal");
    modal.innerHTML = `
    <div class="modal-content">
      <span class="close">&times;</span>
      <img src="${src}" alt="Full-size Image">
    </div>
  `;
    document.body.appendChild(modal);

    const closeModal = () => modal.remove();

    modal.querySelector(".close").addEventListener("click", closeModal);
    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });
}
