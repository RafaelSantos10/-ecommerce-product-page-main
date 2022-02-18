let indexImg = 0;
let imgPrev = document.querySelector(".imgPrev");
const next = document.querySelector(".next");
const previous = document.querySelector(".previous");
const closeCart = document.querySelector(".openCart");
const addCart = document.querySelector("#add");
const rmvCart = document.querySelector("#rmv");
const dispay = document.querySelector("#display");
let item = 0;

dispay.innerHTML = item;
addCart.addEventListener("click", addItemCart);
rmvCart.addEventListener("click", rmvItemCart);

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

function opentCart() {
  closeCart.classList.toggle("cartOpenOn");
}

function nextImg() {
  if (indexImg < 3) {
    indexImg = ++indexImg;
  }
  setInterval(() => {
    if (indexImg === 0) {
      imgPrev.src = "./images/image-product-1.jpg";
    } else if (indexImg === 1) {
      imgPrev.src = "./images/image-product-2.jpg";
    } else if (indexImg === 2) {
      imgPrev.src = "./images/image-product-3.jpg";
    } else if (indexImg === 3) {
      imgPrev.src = "./images/image-product-4.jpg";
    }

    console.log(indexImg);
  }, 500);
}

function previousImg() {
  if (indexImg !== 0) {
    indexImg = indexImg - 1;
  }
}

setInterval(function () {
  const cards = document.querySelector(".cards_down");
  let modal = document.querySelector(".modal");
  const wind = window.window;
  const divCard = document.querySelector(".cards");
  let imgPrev = document.querySelector(".imgPrev");
  let prev = document.querySelector(".card_prev");
  let close = document.querySelector(".close");
  const bntAdd = document.querySelector(".addCart");
  const itemThisCart = document.querySelector(".cartItem");
  const empety = document.querySelector(".prod");
  const def = document.querySelector(".default");
  const del = document.querySelector(".delete");
  const cart = document.querySelector(".cart");

  const times = document.querySelector(".times");
  const total = document.querySelector(".total");
  let calcTot;
  const mobileMenu = document.querySelector(".mobile_menu");
  const menu = document.querySelector(".menu");
  const buttonX = document.querySelector(".close_menu");

  bntAdd.addEventListener("click", addToCard);
  del.addEventListener("click", delCart);
  cart.addEventListener("click", opentCart);
  mobileMenu.addEventListener("click", openMenuMobile);
  buttonX.addEventListener("click", closeMenu);
  close.addEventListener("click", closeModal);
  prev.addEventListener("click", addModal);
  cards.addEventListener("click", selectCards);
  wind.addEventListener("click", closeAll);
  next.addEventListener("click", nextImg);
  previous.addEventListener("click", previousImg);

  function selectCards(e) {
    if (screen.width >= 768) {
      let card = e.target;
      childCards = this.children;
      arrayCards = Array.from(childCards);
      arrayCards.forEach((element, index, out) => {
        if (element.classList.contains("activeCard") === true) {
          element.classList.remove("activeCard");
        }
      });

      if (card.classList.value === "thumbnail1") {
        imgPrev.src = "./images/image-product-1.jpg";
      } else if (card.classList.value === "thumbnail2") {
        imgPrev.src = "./images/image-product-2.jpg";
      } else if (card.classList.value === "thumbnail3") {
        imgPrev.src = "./images/image-product-3.jpg";
      } else if (card.classList.value === "thumbnail4") {
        imgPrev.src = "./images/image-product-4.jpg";
      }

      card.classList.add("activeCard");
    }
  }

  function addModal() {
    if (screen.width > 768) {
      modal.innerHTML = divCard.outerHTML;
      modal.classList.remove("none");
      modal.classList.add("open");
      close.classList.remove("none");
    }
  }

  function closeModal() {
    modal.classList.remove("open");
    close.classList.add("none");
    modal.classList.add("none");
    modal.innerHTML = "";
  }

  function closeAll({ target }) {
    if (
      target.classList[0] !== "cart_icon" &&
      target.classList[0] !== "delete_icon"
    ) {
      closeCart.classList.remove("cartOpenOn");
    }

    if (
      target.classList[0] !== "imgPrev" &&
      target.classList[1] !== "activeCard"
    ) {
      modal.classList.remove("open");
      close.classList.add("none");
      modal.classList.add("none");
      modal.innerHTML = "";
    }
  }

  function addToCard() {
    if (item === 0) {
      itemThisCart.classList.add("none");
      empety.classList.add("none");
      def.classList.remove("none");
    } else {
      itemThisCart.classList.remove("none");
      itemThisCart.innerHTML = item;
      empety.classList.remove("none");
      def.classList.add("none");
    }

    times.innerHTML = item;
    calcTot = 125.0 * item;

    total.innerHTML = ` $${calcTot}.00`;
  }

  function delCart() {
    empety.classList.add("none");
    def.classList.remove("none");
    itemThisCart.classList.add("none");
    item = 0;
    itemThisCart.innerHTML = item;
    dispay.innerHTML = item;
  }

  function openMenuMobile() {
    menu.classList.add("menu_open");
    modal.classList.add("open");
  }

  function closeMenu() {
    menu.classList.remove("menu_open");
    modal.classList.remove("open");
  }
}, 1000);
