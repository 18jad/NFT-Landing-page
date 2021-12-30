const btn = document.getElementById("opener");
(nav = document.getElementById("nav_mb")),
  (body = document.querySelector("body")),
  (btcStatus = document.getElementById("btc_status")),
  (ethStatus = document.getElementById("eth_status")),
  (solStatus = document.getElementById("sol_status")),
  (btcPrice = document.getElementById("btc_price")),
  (ethPrice = document.getElementById("eth_price")),
  (solPrice = document.getElementById("sol_price"));

var number,
  price,
  BTC = 51320,
  ETH = 4067,
  SOL = 201;

function formatNumber(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function updateStatus(attr, up) {
  if (up)
    attr.innerHTML = `<i class="fas fa-angle-double-up"></i> +${number} %`;
  else attr.innerHTML = `<i class="fas fa-angle-double-down"></i> -${number} %`;
}

function updatePriceStatus(attr) {
  var newPrice = formatNumber(price);
  attr.innerText = `$ ${newPrice}`;
}

function rand(coin, start, val, UD) {
  number = (Math.random() * start + val).toFixed(2);
  updateStatus(coin, UD);
}

function priceRand(coin, COIN, UD) {
  UD
    ? (price = (COIN + (COIN * number) / 100).toFixed(2))
    : (price = (COIN - (COIN * number) / 100).toFixed(2));
  updatePriceStatus(coin);
}

setInterval(() => {
  rand(btcStatus, 1, 0, true);
  rand(ethStatus, 1, 0, false);
  rand(solStatus, 1, 0, false);
  priceRand(btcPrice, BTC, true);
  priceRand(ethPrice, ETH, false);
  priceRand(solPrice, SOL, false);
}, 1000);

btn.addEventListener("click", () => {
  nav.classList.toggle("V");
  body.classList.toggle("OF");
});

var swiper = new Swiper(".mySwiper", {
  effect: "cards",
  grabCursor: true,
});

VanillaTilt.init(document.querySelectorAll(".card_box"), {
  max: 25,
  speed: 400,
});
