console.log("hello world");
const cart = document.getElementById("cart_container");
console.log("cart");

const CART__TOTAL = document.getElementById("cart__total");
console.log("CART__TOTAL");
let PRODUCTS = [
  {
    productid: 1234,
    productImage:
      "https://w7.pngwing.com/pngs/60/414/png-transparent-iphone-14-thumbnail.png",
    productName: "iphone 15 pro max",
    productPrice: 999,
    productQuantity: 1,
  },

  {
    productid: 5678,
    productImage:
      "https://w7.pngwing.com/pngs/60/414/png-transparent-iphone-14-thumbnail.png",
    productName: "iphone 15 pro",
    productPrice: 888,
    productQuantity: 1,
  },

  {
    productid: 91011,
    productImage:
      "https://w7.pngwing.com/pngs/60/414/png-transparent-iphone-14-thumbnail.png",
    productName: "iphone 15 plus",
    productPrice: 777,
    productQuantity: 1,
  },

  {
    productid: 12131415,
    productImage:
      "https://w7.pngwing.com/pngs/60/414/png-transparent-iphone-14-thumbnail.png",
    productName: "iphone 15",
    productPrice: 660,
    productQuantity: 1,
  },
];

const CHECKOUT__BTN = document.getElementById("checkout__btn");
// console.log("CHECKOUT__BTN");
// function to display cart product
const displaycartproduct = (productToDisplay) => {
  let result = [];
  for (let i = 0; i < productToDisplay.length; i++) {
    result.push(`<div class="flex gap-6 p-2 rounded-md shadow-md items-center">
        <img src=${productToDisplay[i].productImage} alt="cart container" class="w-[100px]" />
        <div>
          <h3 class="font-bold">${productToDisplay[i].productName}</h3>
          <p class="text-gray-400">${productToDisplay[i].productPrice}</p>
          <button
          onclick=" deleteItemFromCart(${productToDisplay[i].productid})"
            class="bg-red-600 text-white text-xs p-1 rounded-md shadow-inner"
          >
            Remove Item
          </button>
        </div>

        <div class="flex gap-2 items-center">
          <button
          onclick="increaseQuantity(${productToDisplay[i].productid})"
            class="font-semibold text-white bg-black p-[0.2rem] rounded-md"
          >
            +
          </button>

          <p>${productToDisplay[i].productQuantity}</p>

          <button
          onclick="decreaseQuantity(${productToDisplay[i].productid})"
            class="font-semibold text-white bg-gray-400 p-[0.2rem] rounded-md"
          >
            -
          </button>
        </div>
      </div>`);
  }
  cart.innerHTML = result.join("");
};
window.addEventListener("DOMContentLoaded", () => {
  displaycartproduct(PRODUCTS);
  calculateCartTotal(PRODUCTS);
});

function increaseQuantity(productid) {
  PRODUCTS.forEach((item) => {
    if (item.productid === productid) {
      item.productQuantity = item.productQuantity + 1;
    }
  });
  displaycartproduct(PRODUCTS);
  calculateCartTotal(PRODUCTS);
}

function decreaseQuantity(productid) {
  PRODUCTS.forEach((item) => {
    if (item.productid === productid && item.productQuantity >= 2) {
      item.productQuantity = item.productQuantity - 1;
    }
  });
  displaycartproduct(PRODUCTS);
  calculateCartTotal(PRODUCTS);
}

function calculateCartTotal(productToCalculate) {
  let total = 0;

  productToCalculate.forEach((item) => {
    total = total + item.productQuantity * item.productPrice;
  });
  CART__TOTAL.textContent = total;
}

function deleteItemFromCart(productid) {
  let result = [];
  for (let i = 0; i < PRODUCTS.length; i++) {
    if (PRODUCTS[i].productid !== productid) {
      result.push(PRODUCTS[i]);
    }
  }
  PRODUCTS = result;
  displaycartproduct(PRODUCTS);
  calculateCartTotal(PRODUCTS);
}

function processOrder() {
  console.log(PRODUCTS);
  alert("your order was successful");
}
CHECKOUT__BTN.addEventListener("click", processOrder);
