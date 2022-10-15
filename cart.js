
var cart = JSON.parse(localStorage.getItem("CartArray")) || [];

populate(cart);

function populate(cart) {

  document.querySelector("#container2").innerHTML = "";


  cart.map(function (elem, i) {
    var div1 = document.createElement("div");
    div1.setAttribute("class", "card2");

    var image = document.createElement("img");
    image.setAttribute("src", elem.link);

    var cartItem = document.createElement("div");
    cartItem.setAttribute("class", "cartItem")

    var name = document.createElement("h4");
    name.setAttribute("class", "nameCart");
    name.textContent = elem.title;

    var div2 = document.createElement("div");
    div2.setAttribute("class", "flex");

    var p1 = document.createElement("p");
    p1.setAttribute("class", "priceCart");
    p1.textContent = "$" + elem.price;



    var p2 = document.createElement("p");
    p2.setAttribute("class", "cashBackCart");
    p2.textContent = "$" + elem.cashBack;

    var sizeCart = document.createElement("p");
    sizeCart.setAttribute("class", "sizeCart");
    sizeCart.textContent = "Size: M";

    var colorCart = document.createElement("p");
    colorCart.setAttribute("class", "colorCart");
    colorCart.textContent = "Color: Black";


    var quantDiv = document.createElement("div");
    quantDiv.setAttribute("class", "quantDiv");


    var quantity = document.createElement("p");
    quantity.setAttribute("class", "quantity");
    quantity.textContent = ("Quantity:");

    var quantityCounter = document.createElement("input");
    quantityCounter.setAttribute("class", "quantityInput");
    quantityCounter.value = 1;

    quantDiv.append(quantity, quantityCounter);

    var remove = document.createElement("button");
    remove.setAttribute("class", "removeBtn");
    remove.textContent = "Remove Item";
    remove.addEventListener("click", function () {
      removeElement(i);
    })



    // div2.append(p1, p2);

    cartItem.append(name, div2, p1, p2, sizeCart, colorCart, quantDiv);
    div1.append(image, cartItem, remove);
    document.querySelector("#container2").append(div1);
  });
}

function removeElement(i) {
  cart.splice(i, 1);
  console.log(i)
  populate(cart);
  localStorage.setItem("CartArray", JSON.stringify(cart));
  location.reload();
}

var total = cart.reduce(function (acc, cv) {
  return Number((acc + Number(cv.price)).toFixed(2));
}, 0);

document.querySelector(
  ".totalprice"
).textContent = `Subtotal: $${total}`;





document.querySelector("form").addEventListener("submit", getData)

function getData() {
  event.preventDefault()


  window.location.href = './payment.html'
}

