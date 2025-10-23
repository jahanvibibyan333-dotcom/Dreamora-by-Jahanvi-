// Load cart
const cartContainer = document.getElementById('cart');
if(cartContainer){
let cart = JSON.parse(localStorage.getItem('cart')) || [];
if(cart.length===0){cartContainer.innerHTML="<p>No items in cart yet.</p>";}
else{
cartContainer.innerHTML="";
cart.forEach((item,index)=>{
let div = document.createElement('div');
div.className="card";
div.innerHTML=`<p><strong>${item.name}</strong><br>Price: ₹${item.price}<br>Packaging: ${item.packaging}</p>`;
cartContainer.appendChild(div);
});
}
}

// Checkout form
const checkoutForm = document.getElementById('checkout-form');
if(checkoutForm){
checkoutForm.addEventListener('submit',function(e){
e.preventDefault();
alert("Order placed successfully! We will contact you soon.");
checkoutForm.reset();
localStorage.removeItem('cart');
window.location.href="cart.html";
});
}
