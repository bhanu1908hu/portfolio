function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("active");
}

const skillsData = {
  frontend: {
    title: "Frontend",
    skills: [
      ["HTML and CSS", "85%"],
      ["JavaScript", "75%"],
      ["Responsive Design", "80%"],
      ["Bootstrap", "75%"]
    ]
  },
  backend: {
    title: "Backend",
    skills: [
      ["Python", "85%"],
      ["Flask", "80%"],
      ["MySQL", "75%"],
      ["SQLite", "75%"]
    ]
  },
  tools: {
    title: "Tools",
    skills: [
      ["Git & GitHub", "80%"],
      ["VS Code", "85%"],
      ["PythonAnywhere", "75%"],
      ["Railway", "65%"]
    ]
  }
};

document.querySelectorAll(".skill-tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".skill-tab").forEach(t => t.classList.remove("active"));
    tab.classList.add("active");

    const type = tab.dataset.type;
    const data = skillsData[type];

    const box = document.querySelector(".skill-details");
    box.innerHTML = `<h3>${data.title}</h3>`;

    data.skills.forEach(skill => {
      box.innerHTML += `
        <div class="skill-item">
          <div class="skill-top">
            <span>${skill[0]}</span>
            <span>${skill[1]}</span>
          </div>
          <div class="progress">
            <div class="bar" style="--w:${skill[1]}"></div>
          </div>
        </div>
      `;
    });

    box.classList.remove("show");
    setTimeout(() => box.classList.add("show"), 50);
  });
});

const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  reveals.forEach((item) => {
    if (item.getBoundingClientRect().top < window.innerHeight - 120) {
      item.classList.add("show");
    }
  });
}
const roleText = document.querySelector(".typing-role");

const roles = [
  "Python Full Stack Developer",
  "Web Developer",
  "Flask Developer",
  "Frontend Developer",
  "Backend Developer"
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeRole() {
  const currentRole = roles[roleIndex];

  if (isDeleting) {
    roleText.textContent = currentRole.substring(0, charIndex - 1);
    charIndex--;
  } else {
    roleText.textContent = currentRole.substring(0, charIndex + 1);
    charIndex++;
  }

  let speed = isDeleting ? 60 : 100;

  if (!isDeleting && charIndex === currentRole.length) {
    speed = 1200;
    isDeleting = true;
  }

  if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    speed = 400;
  }

  setTimeout(typeRole, speed);
}

typeRole();

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
