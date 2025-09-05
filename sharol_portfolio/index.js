const roles = ["Full Stack Developer", "Web Designer", "UI/UX Designer", "Video Editor"];
let i = 0, j = 0, isDeleting = false;
const typewriter = document.getElementById("typewriter");

function typeEffect() {
  const currentRole = roles[i];

  if (!isDeleting) {
    typewriter.textContent = currentRole.substring(0, j + 1);
    j++;
    if (j === currentRole.length) {
      isDeleting = true;
      setTimeout(typeEffect, 1500);
      return;
    }
  } else {
    typewriter.textContent = currentRole.substring(0, j - 1);
    j--;
    if (j === 0) {
      isDeleting = false;
      i = (i + 1) % roles.length;
    }
  }
  setTimeout(typeEffect, isDeleting ? 60 : 100);
}

typeEffect();

function showTab(tabId) {
  // Remove active class from all tabs
  document.querySelectorAll(".tab").forEach(btn => btn.classList.remove("active"));
  document.querySelectorAll(".content-box").forEach(box => box.classList.remove("active"));

  // Add active class to clicked tab and content
  document.querySelector(`[onclick="showTab('${tabId}')"]`).classList.add("active");
  document.getElementById(tabId).classList.add("active");
}

