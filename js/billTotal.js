const billSplitter = (subTotal, friends) => {
  let tip = subTotal * 0.15;
  let tax = subTotal * 0.0825;
  let billTotal = subTotal + tip + tax;
  let splitTotal = billTotal / friends;
  return '$' + splitTotal.toFixed(2);
};

console.log(billSplitter(42.68, 5));
