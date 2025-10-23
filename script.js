// Basic interactivity: subscribe CTA, simple contact handler and dynamic year
document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('subscribeBtn').addEventListener('click', function(){
  // quick CTA — opens YouTube channel in new tab (replace with real channel URL)
  window.open('https://www.youtube.com/channel/REPLACE_WITH_CHANNEL_ID', '_blank');
});

function openOrder(item, price){
  const subject = encodeURIComponent('Order request: ' + item);
  const body = encodeURIComponent(`Hi Jahanvi,\n\nI want to order: ${item}\nPrice shown: ₹${price}\nQuantity: \nDelivery address: \n\nPlease confirm.\n\nThanks!`);
  window.location.href = `mailto:your-email@example.com?subject=${subject}&body=${body}`;
}

function submitContact(e){
  e.preventDefault();
  const form = e.target;
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();
  if(!name || !email || !message){ alert('Please fill all fields'); return; }
  const subject = encodeURIComponent('Contact from website — ' + name);
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
  // opens email client with filled content; replace with API endpoint if you want server storage
  window.location.href = `mailto:your-email@example.com?subject=${subject}&body=${body}`;
}
