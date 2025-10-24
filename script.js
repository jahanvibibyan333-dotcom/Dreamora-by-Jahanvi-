function toggleItems(btn) {
  const list = btn.nextElementSibling;
  list.classList.toggle("show");
  btn.textContent = list.classList.contains("show") ? "Hide Items" : "Show Items";
}

const buttons = document.querySelectorAll(".cart-btn");
buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const card = btn.closest(".product-card");
    const name = card.querySelector("h3").innerText;
    const price = parseInt(card.querySelector("p").innerText.replace(/\D/g, ""));
    const packaging = card.querySelector("select") ? card.querySelector("select").value : "Default";

    if (card.querySelector("select") && !packaging) {
      alert("Please select packaging before adding to cart!");
      return;
    }

    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push({ name, price, packaging });
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(name + " added to cart!");
  });
});
