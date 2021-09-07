const roles = [
  "Student",
  "Explorer",
  "Adventurer",
  "Person",
  "Human",
  "Astronut",
];

const role = document.getElementById("role");

let i = 0;

role.textContent = roles[i];

setInterval(() => {
  i++;

  if (roles.length === i) {
    i = 0;
  }

  role.textContent = roles[i];
}, 5000);
