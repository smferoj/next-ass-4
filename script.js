document.addEventListener("DOMContentLoaded", function () {
    // Add to Cart button click event
    var addToCartButtons = document.getElementsByClassName("add-to-cart");
    for (var i = 0; i < addToCartButtons.length; i++) {
      addToCartButtons[i].addEventListener("click", function () {
        var product = this.parentElement;
        var productName = product.querySelector("h4").textContent;
        var productPrice = parseFloat(
          product.querySelector("p").textContent.substring(7)
        );
        var cartItem = document.createElement("div");
        cartItem.classList.add("cart-item");
        cartItem.textContent =
          productName + " - $" + productPrice.toFixed(2);
        document.querySelector(".cart-items").appendChild(cartItem);
        updateTotal(productPrice);
      });
    }

    // Clear Cart button click event
    var clearCartButton = document.querySelector(".btn-clear");
    clearCartButton.addEventListener("click", function () {
      var cartItems = document.querySelector(".cart-items");
      cartItems.innerHTML = "";
      document.getElementById("cart-total").textContent = "0";
    });

    // Update the total amount
    function updateTotal(price) {
      var currentTotal = parseFloat(
        document.getElementById("cart-total").textContent
      );
      var newTotal = currentTotal + price;
      document.getElementById("cart-total").textContent =
        newTotal.toFixed(2);
    }
    console.log(
      "%c [  ]-86",
      "font-size:13px; background:pink; color:#bf2c9f;"
    );
  });