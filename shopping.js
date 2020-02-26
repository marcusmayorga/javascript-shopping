// Amazon shopping
function cart () {
const user = {
    name: 'Kim',
    active: true,
    cart: [],
    purchases: []
  }
 cartItem(user);
 buyItem(user);
 // refunds(user);
 console.log('my cart', user.cart);
 console.log('my buys', user.purchases);
}
  function cartItem (user) {
     let item = [
          {name: 'Darts',
          price: 20},
          {name: 'Pool',
        price: 50}
  ]
      let cartItems = user;
      cartItems.cart = item;
      let tax = user.cart;
      for (let i = 0; i < tax.length; i++){
      let taxPrice = tax[i].price * 0.03;
      console.log('taxPrice', taxPrice);
      tax[i].price = tax[i].price + taxPrice;
      console.log('taxAdded', tax[i].price);
      }
  }
  

  function buyItem (user) {
    let cartItems = user.cart;
    for (item in cartItems){
    let purchaseItems = user.purchases;
        purchaseItems.push(cartItems[item]);
        if (purchaseItems == cartItems.length) {
          cartItems.length = 0;
        }
    }
  }
 cart();
 
  // function refunds(user) {
  //   let user = user;
  //   let refund = {refunds: []};
  //   user.push(refund);
    
  // }
  //Implement a cart feature:
  // 1. Add items to cart.
  // 2. Add 3% tax to item in cart
  // 3. Buy item: cart --> purchases
  // 4. Empty cart
  
  //Bonus:
  // accept refunds.
  // Track user history.

  // create new array for history??
  // create new array for refund amount??