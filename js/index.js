// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  const subtotal = product.querySelector('.subtotal span');

  return (subtotal.innerText = price.innerText * quantity.value);
}

function calculateAll() {
  const singleProduct = document.getElementsByClassName('product');

  // ITERATION 2

  let totalProduct = 0;
  for (let product of singleProduct) {
    totalProduct += updateSubtotal(product);
  }

  // ITERATION 3

  document.querySelector('#total-value span').innerText = totalProduct;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
