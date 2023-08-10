function toggleCard() {
    var cardInput = document.getElementById("cardInput");
    if (cardInput.style.display === "none") {
        cardInput.style.display = "flex";
    } else {
        cardInput.style.display = "none";
    }
}

function toggleCoupon() {
    var couponInput = document.getElementById("couponInput");
    if (couponInput.style.display === "none") {
        couponInput.style.display = "block";
    } else {
        couponInput.style.display = "none";
    }
}

function selectPaymentMethod(method) {
    var methods = document.getElementsByClassName("payment-method");
    for (var i = 0; i < methods.length; i++) {
        methods[i].classList.remove("selected");
    }
    method.classList.add("selected");
}