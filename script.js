// Expandable items
function toggleItems(button){
const ul = button.nextElementSibling;
if(ul.style.display === "block"){
ul.style.display = "none";
button.innerText = "Show Items";
}else{
ul.style.display = "block";
button.innerText = "Hide Items";
}
}

// Add to Cart buttons
const cart = [];
document.querySelectorAll('.cart-btn').forEach(btn => {
btn.addEventListener('click', function(){
const productCard = btn.parentElement;
const name = productCard.querySelector('h3').innerText;
const price = productCard.querySelector('p').innerText;
const packaging = productCard.querySelector('select').value;
cart.push({name, price, packaging});
alert(`${name} added to cart!`);
});
});
