async function loadComponent(id, file) {
  const res = await fetch(file);

  const html = await res.text();

  document.getElementById(id).innerHTML = html;
}

const links = document.querySelectorAll(".nav-link");

const path = window.location.pathname;

links.forEach((link) => {
  if (link.getAttribute("href") == path) {
    link.classList.add("active");
  }
});

loadComponent("header", "/components/header.html");
loadComponent("footer", "/components/footer.html");
