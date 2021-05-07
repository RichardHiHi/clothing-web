import { ADD_TO_CART } from '../actions';
const button_reducer = (state, action) => {
  if (action.type === ADD_TO_CART) {
    //id of edit product
    let { id } = action.payload;
    const { productCart } = action.payload;
    let newCart = state.cart;
    //có id nhưng id không trùng vs idcart trong cart nên k thay đổi
    if (!state.cart.some((itemCar) => itemCar.idCart === id)) {
      return { ...state };
    }
    //xóa id cần edit
    if (id) {
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
  throw new Error(`No Matching "${action.type}" - action type`);
};
export default button_reducer;
