// Expandable items
function toggleItems(button){
const ul = button.nextElementSibling;
if(ul.style.display === "block"){ul.style.display="none";button.innerText="Show Items";}
else{ul.style.display="block";button.innerText="Hide Items";}
}

// Add to Cart with localStorage
document.querySelectorAll('.cart-btn').forEach(btn=>{
btn.addEventListener('click',function(){
const card = btn.parentElement;
const name = card.querySelector('h3').innerText;
const price = card.querySelector('p').innerText.replace('Price: ₹','');
const packaging = card.querySelector('select').value;
let cart = JSON.parse(localStorage.getItem('cart')) || [];
cart.push({name,price,packaging});
localStorage.setItem('cart',JSON.stringify(cart));
alert(`${name} added to cart!`);
});
});
