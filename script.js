const galleryImages = {
  "living-room": ["img1.webp", "img2.webp", "img3.webp", "img4.webp", "img5.webp", "img6.webp", "img7.webp", "img8.webp",
     "img9.webp", "img10.webp", "img11.webp", "img12.webp", "img13.webp", "img14.webp"],
  "Kitchen": ["DSC00974 (1).webp", "DSC00980.webp", "DSC00983.webp", "DSC01056 (1).webp", "IMG-20250729-WA0005.webp"],
  "Wardrobe": ["DSC01002 (1).webp", "DSC01010 (1).webp", "DSC01028 (1).webp", "DSC01064.webp", "IMG-20250729-WA0006.webp", 
    "IMG-20250729-WA0007.webp", "IMG-20250729-WA0009.webp", "IMG-20250729-WA0011.webp", "IMG-20250729-WA0016.webp", 
    "IMG-20250729-WA0019.webp", "IMG-20250729-WA0021.webp", "IMG-20250729-WA0023.webp", "DSC00827.webp", "DSC00834.webp"],
  "Office": [""],
  "Bedroom": ["DSC00988.webp", "DSC00993 (1).webp", "DSC01003.webp", "DSC01022.webp", "DSC01060.webp", "IMG-20250729-WA0025.webp"]
};
  
document.addEventListener("DOMContentLoaded", () => {
  // Contact form
  const form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const formData = new URLSearchParams(new FormData(form));
      try {
        await fetch("", {
          method: "POST",
          mode: "no-cors",
          body: formData
        });
        document.getElementById("form-status").innerText = "Message sent, thanks!";
        form.reset();
      } catch (err) {
        console.error(err);
        document.getElementById("form-status").innerText = "Error sending. Try again.";
      }
    });
  }

  // Gallery viewer
  document.querySelectorAll(".project-card").forEach(card => {
    const folder = card.dataset.folder;
    if (!folder) return;
    card.addEventListener("click", () => openGallery(folder));
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

  // Carousel scroll buttons
  document.querySelector(".scroll-btn.left").addEventListener("click", () => {
    document.getElementById("carousel").scrollBy({ left: -300, behavior: 'smooth' });
  });

  document.querySelector(".scroll-btn.right").addEventListener("click", () => {
    document.getElementById("carousel").scrollBy({ left: 300, behavior: 'smooth' });
  });

  // Hamburger toggle
  const hamburger = document.getElementById('hamburger');
  const nav = document.querySelector('nav');
  hamburger.addEventListener('click', () => {
    nav.classList.toggle('active');
  });
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 768) {
        nav.classList.remove('active');
      }
    });
  });
});
