const addCart = document.querySelector("#add");
const rmvCart = document.querySelector("#rmv");
const dispay = document.querySelector("#display");
let item = 0;
dispay.innerHTML = item;

addCart.addEventListener("click", addItemCart);
rmvCart.addEventListener("click", rmvItemCart);

const bntAdd = document.querySelector(".addCart");
const itemThisCart = document.querySelector(".cartItem");
const empety = document.querySelector(".prod");
const def = document.querySelector(".default");
const del = document.querySelector(".delete");
const cart = document.querySelector(".cart");
const closeCart = document.querySelector(".openCart")

bntAdd.addEventListener("click", addToCard);
del.addEventListener('click', delCart);
cart.addEventListener('click', opentCart);

const times = document.querySelector(".times");
const total = document.querySelector(".total");
let calcTot;

function addItemCart() {
  item++;
  dispay.innerHTML = item;
}
function rmvItemCart() {
  if (item !== 0) {
    item--;
  }
  dispay.innerHTML = item;
}
setInterval(function () {
  const cards = document.querySelector(".cards_down");
  cards.addEventListener("click", selectCards);

  const divCard = document.querySelector(".cards");

  let modal = document.querySelector(".modal");
  let prev = document.querySelector(".card_prev");
  let close = document.querySelector(".close");

  close.addEventListener("click", closeModal);
  prev.addEventListener("click", addModal);

  function selectCards(e) {
    let card = e.target;
    childCards = this.children;
    arrayCards = Array.from(childCards);
    arrayCards.forEach((element, index, out) => {
      if (element.classList.contains("activeCard") === true) {
        element.classList.remove("activeCard");
      }
    });

    if (card.classList.value === "thumbnail1") {
      prev.innerHTML =
        '<img class="imgPrev" src="./images/image-product-1.jpg" alt="" />';
    } else if (card.classList.value === "thumbnail2") {
      prev.innerHTML =
        '<img class="imgPrev" src="./images/image-product-2.jpg" alt="" />';
    } else if (card.classList.value === "thumbnail3") {
      prev.innerHTML =
        '<img class="imgPrev" src="./images/image-product-3.jpg" alt="" />';
    } else if (card.classList.value === "thumbnail4") {
      prev.innerHTML =
        '<img class="imgPrev" src="./images/image-product-4.jpg" alt="" />';
    }

    card.classList.add("activeCard");
  }

  function addModal() {
    modal.innerHTML = divCard.outerHTML;
    modal.classList.remove("none");
    modal.classList.add("open");
    close.classList.remove("none");
  }

  function closeModal() {
    console.log("rafa");
    modal.classList.remove("open");
    close.classList.add("none");
    modal.classList.add("none");
    modal.innerHTML = "";
  }
}, 1000);

function addToCard() {
  if (item === 0) {
    itemThisCart.classList.add("none");
    empety.classList.add("none");
    def.classList.remove("none")
  } else {
    itemThisCart.classList.remove("none");
    itemThisCart.innerHTML = item;
    empety.classList.remove("none");
    def.classList.add("none")
  }

  times.innerHTML = item
  calcTot = 125.00 * item;

  total.innerHTML = ` $${calcTot}.00`
}

function delCart(){
  empety.classList.add("none");
  def.classList.remove("none");
  itemThisCart.classList.add("none");
  
  item = 0;
  itemThisCart.innerHTML = item;
  dispay.innerHTML = item
}

function opentCart(){
  closeCart.classList.toggle("cartOpenOn");
}