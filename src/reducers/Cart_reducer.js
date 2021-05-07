import { ADD_TO_CART, CLEAR_CART, CART_TOTAL } from '../actions';
const button_reducer = (state, action) => {
  if (action.type === ADD_TO_CART) {
    //id of edit product
    let { id } = action.payload;
    const { productCart } = action.payload;
    let newCart = state.cart;
    //có id nhưng id không trùng vs idcart trong cart nên k thay đổi
    //xóa id cần edit
    if (id) {
      if (!state.cart.some((itemCar) => itemCar.idCart === id)) {
        return { ...state };
      }
      newCart = newCart.filter((itemCart) => itemCart.idCart !== id);
    }
    //ktra xem trong cart có cartproduct trùng không
    const checkUnique = newCart.some((itemCart) => {
      return (
        itemCart.singleProduct.id === productCart.singleProduct.id &&
        itemCart.colorIndex === productCart.colorIndex &&
        itemCart.size === productCart.size
      );
    });
    //no id or id and  not unique
    if (checkUnique) {
      newCart = newCart.map((itemCart) => {
        if (
          itemCart.singleProduct.id === productCart.singleProduct.id &&
          itemCart.colorIndex === productCart.colorIndex &&
          itemCart.size === productCart.size
        ) {
          return {
            ...itemCart,
            itemCount: itemCart.itemCount + productCart.itemCount,
          };
        }
        return itemCart;
      });
      return { ...state, cart: newCart };
    }
    // id and not unique
    if (id && !checkUnique) {
      return { ...state, cart: [...newCart, productCart] };
    }
    return { ...state, cart: [...state.cart, productCart] };
  }
  //caculate total cart
  if (action.type === CART_TOTAL) {
    const { amountTotal, totalItem } = state.cart.reduce(
      (total, cartItem) => {
        const { itemCount } = cartItem;
        const { price } = cartItem.singleProduct;
        total.amountTotal += price * itemCount;
        total.totalItem += itemCount;
        return total;
      },
      { amountTotal: 0, totalItem: 0 }
    );
    return { ...state, amountTotal, totalItem };
  }
  //clear cart
  if (action.type === CLEAR_CART) {
    return { ...state, cart: [] };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};
export default button_reducer;
