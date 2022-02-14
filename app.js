function updateProductNumber(product, totalPrice, isIncrease) {
  const productInput = document.getElementById(product + "-number");
  let productNumber = productInput.value;
  if (isIncrease) {
    productNumber = parseInt(productNumber) + 1;
  } else if (productNumber > 0) {
    productNumber = parseInt(productNumber) - 1;
  }
  productInput.value = productNumber;

  const totalProductPrice = document.getElementById(product + "-price");
  totalProductPrice.innerText = productNumber * totalPrice;
}
function updateNewProductNumber(
  productId,
  productName,
  ProductPrice,
  negOrPositive
) {
  document.getElementById(productId).addEventListener("click", function () {
    updateProductNumber(productName, ProductPrice, negOrPositive);
    calculateTotal();
  });
}
updateNewProductNumber("phone-plus-btn", "phone", 1219, true);
updateNewProductNumber("phone-minus-btn", "phone", 1219, false);
updateNewProductNumber("case-plus-btn", "case", 59, true);
updateNewProductNumber("case-minus-btn", "case", 59, false);

// Total Calculation
function productInputValue(product) {
  const inputProduct = document.getElementById(product + "-number");
  const inputProductNumber = parseFloat(inputProduct.value);
  return inputProductNumber;
}
function calculateTotal() {
  const phoneTotal = productInputValue("phone") * 1219;
  const caseTotal = productInputValue("case") * 59;
  const subTotal = phoneTotal + caseTotal;
  const tax = subTotal / 10;
  const totalBill = subTotal + tax;

  // update balances
  document.getElementById("sub-total").innerText = subTotal;
  document.getElementById("tax").innerText = tax;
  document.getElementById("total-bill").innerText = totalBill;
}
