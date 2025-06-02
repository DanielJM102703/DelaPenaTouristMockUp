const galleryImages = [
    "images/canuba1.jpg",
    "images/canuba2.jpg",
    "images/canuba3.jpg"
  ];
  
  const testimonials = [
    { name: "Maria", feedback: "A peaceful place to unwind. The waters are so clear!" },
    { name: "John", feedback: "Amazing experience! The locals are friendly and the view is breathtaking." },
    { name: "Liza", feedback: "Best hidden beach I’ve visited in Bohol. Highly recommended!" }
  ];
  
  function loadGallery() {
    const container = document.getElementById("gallery-container");
    galleryImages.forEach(src => {
      const img = document.createElement("img");
      img.src = src;
      img.alt = "Can-uba Beach Photo";
      container.appendChild(img);
    });
  }
  
  function loadTestimonials() {
    const container = document.getElementById("testimonial-slider");
    testimonials.forEach(t => {
      const div = document.createElement("div");
      div.innerHTML = `<strong>${t.name}</strong><p>${t.feedback}</p>`;
      container.appendChild(div);
    });
  }
  
  function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  }
  
  window.onload = () => {
    loadGallery();
    loadTestimonials();
  };
  