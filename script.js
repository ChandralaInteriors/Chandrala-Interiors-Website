document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new URLSearchParams(new FormData(form));

    try {
      await fetch("https://script.google.com/macros/s/AKfycbyupGMGKjfAP2-N8MBtlnZ46rZ5YVlm4Bx5grIkjtFTy11Zs92XljIWQoK6HxlH0SqD/exec", {
        method: "POST",
        mode: "no-cors", // for local testing if using HTTP
        body: formData
      });
      document.getElementById("form-status").innerText = "Message sent, thanks!";
      form.reset();
    } catch (err) {
      console.error(err);
      document.getElementById("form-status").innerText = "Error sending. Try again.";
    }
  });
});

const galleryImages = {
  "living-room": ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg", "img6.jpg", "img7.jpg", "img8.jpg",
     "img9.jpg", "img10.jpg", "img11.jpg", "img12.jpg", "img13.jpg", "img14.jpg"],
  "Kitchen": ["DSC00974 (1).JPG", "DSC00980.JPG", "DSC00983.JPG", "DSC01056 (1).JPG", "IMG-20250729-WA0005.JPG"],
  "Wardrobe": ["DSC01002 (1).JPG", "DSC01010 (1).JPG", "DSC01028 (1).JPG", "DSC01064.JPG", "IMG-20250729-WA0006.jpg", 
    "IMG-20250729-WA0007.jpg", "IMG-20250729-WA0009.jpg", "IMG-20250729-WA0011.jpg", "IMG-20250729-WA0016.jpg", 
    "IMG-20250729-WA0019.jpg", "IMG-20250729-WA0021.jpg", "IMG-20250729-WA0023.jpg", "DSC00827.JPG", "DSC00834.JPG"],
  "Office": [""],
  "Bedroom": ["DSC00988.JPG", "DSC00993 (1).JPG", "DSC01003.JPG", "DSC01022.JPG", "DSC01060.JPG", "IMG-20250729-WA0025.JPG"]
};
  

document.addEventListener("DOMContentLoaded", function () {

  document.querySelectorAll(".project-card").forEach(card => {
    const folder = card.dataset.folder;
    if (!folder) return;

    card.addEventListener("click", () => {
      openGallery(folder);
    });
  });

  function openGallery(folder) {
    const modal = document.getElementById("gallery-modal");
    const gallery = document.getElementById("gallery-images");
    gallery.innerHTML = '';

    const images = galleryImages[folder];
    if (!images || images.length === 0) {
      gallery.innerHTML = `<p style="color:white;">No images found.</p>`;
      modal.style.display = "block";
      return;
    }

    images.forEach(imgName => {
      const img = new Image();
      img.src = `assets/projects/${folder}/${imgName}`;
      img.alt = `${folder}`;
      gallery.appendChild(img);
    });

    modal.style.display = "block";
  }

  document.querySelector(".modal .close").addEventListener("click", () => {
    document.getElementById("gallery-modal").style.display = "none";
  });
});

document.querySelector(".scroll-btn.left").addEventListener("click", () => {
  document.getElementById("carousel").scrollBy({ left: -300, behavior: 'smooth' });
});

document.querySelector(".scroll-btn.right").addEventListener("click", () => {
  document.getElementById("carousel").scrollBy({ left: 300, behavior: 'smooth' });
});
