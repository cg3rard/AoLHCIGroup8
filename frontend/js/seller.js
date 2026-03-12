// Modal Functions
function openModal() {
  document.getElementById("productModal").classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  document.getElementById("productModal").classList.remove("active");
  document.body.style.overflow = "";
}

function scrollToProducts() {
  document
    .getElementById("products-section")
    .scrollIntoView({ behavior: "smooth" });
}

function handleSubmit(event) {
  event.preventDefault();
  // Handle form submission
  alert("Produk berhasil ditambahkan!");
  closeModal();
}

// Close modal when clicking outside
document.getElementById("productModal").addEventListener("click", function (e) {
  if (e.target === this) {
    closeModal();
  }
});

// Filter buttons
document.querySelectorAll(".filter-btn").forEach((btn) => {
  btn.addEventListener("click", function () {
    document
      .querySelectorAll(".filter-btn")
      .forEach((b) => b.classList.remove("active"));
    this.classList.add("active");
  });
});
