  document.addEventListener("DOMContentLoaded", function () {
  const nav = document.getElementById("mainNav");
  const queryModal = document.getElementById("queryModal");
  const queryForm = document.getElementById("btnSendQuery");
  const pdfContainer = document.getElementById("pdfContainer");
  const btnCancel = document.getElementById("queryModalCancel");

  // Sticky header
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }
  });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  // Lazy loading images
  const images = document.querySelectorAll("img[data-src]");
  const config = {
    rootMargin: "50px 0px",
    threshold: 0.01,
  };

  let observer = new IntersectionObserver((entries, self) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        preloadImage(entry.target);
        self.unobserve(entry.target);
      }
    });
  }, config);

  images.forEach((image) => {
    observer.observe(image);
  });

  function preloadImage(img) {
    const src = img.getAttribute("data-src");
    if (!src) {
      return;
    }
    img.src = src;
  }

  queryForm.addEventListener("click", function (e) {
    e.preventDefault();

    // Simular la generación del PDF (reemplazar con tu lógica real)
    setTimeout(function () {
      pdfContainer.classList.add("mx-auto");
      pdfContainer.style = "height:400px;";

      // Supongamos que esta es la URL del PDF generado
      const pdfUrl = "assets/pdf/test.pdf";

      // Actualizar el src del iframe
      pdfViewer.src = pdfUrl;

    }, 1000); // Simula un retraso de 1 segundo para la generación del PDF
  });

  btnCancel.addEventListener("click",(e)=>{
    e.preventDefault();
    pdfContainer.style = "height:0px;";
  })
});

