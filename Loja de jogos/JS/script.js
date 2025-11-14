function showNotification() {
  const notification = document.getElementById("notification");
  notification.style.display = "block";
  setTimeout(() => {
    notification.style.display = "none";
  }, 3000);
}

let total = 0;

function addToCart(value) {
  total += value;
  document.getElementById("total").innerText = "R$" + total;
}

function toggleCart() {
  const cart = document.getElementById("carrinho");
  if (cart.style.display === "none" || cart.style.display === "") {
    cart.style.display = "block";
  } else {
    cart.style.display = "none";
  }
}

function resetTotal() {
  total = 0;
  document.getElementById("total").innerText = "R$0";
}

function showNotification() {
  const notification = document.getElementById("notification");
  notification.style.display = "block";
  setTimeout(() => {
    notification.style.display = "none";
  }, 3000);
}
