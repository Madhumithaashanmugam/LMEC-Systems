$(document).ready(function(){
  $("#mobileMenuButton").click(function(){
      $("#mobileMenu").css("right", "0");
  });

  $("#closeMenu").click(function(){
      $("#mobileMenu").css("right", "-250px");
  });

  // Close mobile menu on link click
  $("#mobileMenu a").click(function(){
      $("#mobileMenu").css("right", "-250px");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const teamImage = document.querySelector(".about-content img");

  if (!teamImage) {
    console.error("Image not found");
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        teamImage.classList.add("visible");
      } else {
        teamImage.classList.remove("visible");
      }
    });
  }, {
    threshold: 0.1
  });

  observer.observe(teamImage);
});



//gallery
const items = document.querySelectorAll('.gallery-item');
const leftArrow = document.querySelector('.arrow.left');
const rightArrow = document.querySelector('.arrow.right');

let current = 0;

function updateGallery() {
  items.forEach((item, index) => {
    item.classList.remove('active');
    item.style.zIndex = 1;
    item.style.transform = `translateX(${(index - current) * 100}%) scale(0.8)`;
    item.style.opacity = 0.5;
  });

  const activeItem = items[current];
  activeItem.classList.add('active');
  activeItem.style.zIndex = 10;
  activeItem.style.transform = `translateX(-50%) scale(1)`;
  activeItem.style.opacity = 1;
}

function nextImage() {
  current = (current + 1) % items.length;
  updateGallery();
}

function prevImage() {
  current = (current - 1 + items.length) % items.length;
  updateGallery();
}

leftArrow.addEventListener('click', prevImage);
rightArrow.addEventListener('click', nextImage);

// Auto-play
setInterval(nextImage, 3000);

updateGallery(); // initialize



//careers

  function toggleDescription(id, header) {
    const desc = document.getElementById(id);
    const isVisible = desc.style.display === 'block';
    
    // Close all descriptions
    document.querySelectorAll('.job-description').forEach(d => d.style.display = 'none');
    document.querySelectorAll('.job-header').forEach(h => h.classList.remove('active'));

    // Toggle current one
    if (!isVisible) {
      desc.style.display = 'block';
      header.classList.add('active');
    }
  }

