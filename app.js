let shirtDesc = {
  id: 1,
  stock: 4,
  price: 100,
  name: "shirt",
  image: "shirt.jpeg",
  class: "add-cart",
  span: "shirtNo",
};
let shortDesc = {
  id: 2,
  stock: 7,
  price: 200,
  name: "short",
  image: "short.jpeg",
  class: "add-cart",
  span: "shortNo",
};
let skirtDesc = {
  id: 3,
  stock: 9,
  price: 100,
  name: "skirt",
  image: "skirt.jpeg",
  class: "add-cart",
  span: "skirtNo",
};

const products = [shirtDesc, shortDesc, skirtDesc];

const show = document.querySelector(".show");
const carts = document.querySelectorAll(".add-cart");
let cartNo = document.querySelector(".cartNo");

let remove = document.querySelector(".rem");

products.forEach((product) => {
  show.innerHTML += `

  <div>
  <img src=${product.image} alt="">
  <p>${product.name}</p>
  <button id= ${product.id} class= ${product.class}>add cart</button>
 
  </div>




  `;
});
const shirt = document.getElementById("1");
const short = document.getElementById("2");
const skirt = document.getElementById("3");
let shirtNo = document.querySelector(".shirtNo");
let shortNo = document.querySelector(".shortNo");
let skirtNo = document.querySelector(".skirtNo");
let totalStock = shirtDesc.stock + shortDesc.stock + skirtDesc.stock;
let priceShirt = document.querySelector('.priceShirt')
let priceShort = document.querySelector('.priceShort')
let priceSkirt = document.querySelector('.priceSkirt')

shirt.addEventListener("click", function () {
  if (shirtNo.innerHTML >= shirtDesc.stock) {
    shirtNo.innerHTML = shirtDesc.stock;
  } else {
    ++shirtNo.innerHTML;
  }
});

short.addEventListener("click", function () {
  if (shortNo.innerHTML >= shortDesc.stock) {
    shortNo.innerHTML = shortDesc.stock;
  } else {
    ++shortNo.innerHTML;
    
   

  }
});
skirt.addEventListener("click", function () {
  if (skirtNo.innerHTML >= skirtDesc.stock) {
    skirtNo.innerHTML = skirtDesc.stock;
  } else {
    ++skirtNo.innerHTML;
  }
});

alert(skirtNo.innerHTML)

carts.forEach((cart) => {
  cart.addEventListener("click", function () {
    if (cartNo.innerHTML >= totalStock) {
      cartNo.innerHTML = totalStock;
    } else {
      ++cartNo.innerHTML;
      localStorage.setItem("product no", cartNo.innerHTML);
    }
    alert(67);
  });
});

// remove.addEventListener("click", function () {

//   if (cartNo.innerHTML <= 0) {
//     cartNo.innerHTML = 0;
//   } else {
//     --cartNo.innerHTML;
//     localStorage.setItem("product no", cartNo.innerHTML);
//   }
// });
