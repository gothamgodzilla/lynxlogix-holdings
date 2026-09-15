/* Drop live Stripe Payment Links or Whop checkout URLs here. */
window.LYNX_PAY = {
  gift: "",
  retain: "",
  plus: "https://www.mangasm.app/plus"
};

(function () {
  var cfg = window.LYNX_PAY || {};
  var gift = document.getElementById("btn-gift");
  var retain = document.getElementById("btn-retain");
  if (gift && cfg.gift) gift.setAttribute("href", cfg.gift);
  if (retain && cfg.retain) retain.setAttribute("href", cfg.retain);
})();
