import Ember from 'ember';

export default Ember.Service.extend({
  cart: [],
  addToCart(color, size, price) {
    this.cart.push({
      itemColor: color,
      itemSize: size,
      itemPrice: price
    });
  },
  getCartItems() {
    return this.get('cart');
  }
});
