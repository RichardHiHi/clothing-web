import {
  ADD_TO_CART,
  CLEAR_CART,
  CART_TOTAL,
  TOGGLE_ITEM_CART,
  REMOVE_ITEM_CART,
} from '../actions';
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
          let newItemCount = itemCart.itemCount + productCart.itemCount;
          if (newItemCount > itemCart.singleProduct.stock) {
            newItemCount = itemCart.singleProduct.stock;
          }
          return {
            ...itemCart,
            itemCount: newItemCount,
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
  //toggle cart item
  if (action.type === TOGGLE_ITEM_CART) {
    const { idCart, value } = action.payload;
    //if another condition , newItemCount equal 0
    let newItemCount;
    //find cart item that need edit
    let newProductCart = state.cart.find(
      (cartItem) => cartItem.idCart === idCart
    );
    if (value === 'inc') {
      newItemCount = newProductCart.itemCount + 1;
      if (newItemCount > newProductCart.singleProduct.stock) {
        newItemCount = newProductCart.singleProduct.stock;
      }
      newProductCart = { ...newProductCart, itemCount: newItemCount };
    }
    if (value === 'dec') {
      newItemCount = newProductCart.itemCount - 1;
      if (newItemCount < 1) {
        newItemCount = 1;
      }
      newProductCart = { ...newProductCart, itemCount: newItemCount };
    }
    if (typeof value === 'number') {
      newItemCount = value;
      if (newItemCount > newProductCart.singleProduct.stock) {
        newItemCount = newProductCart.singleProduct.stock;
      }
      if (newItemCount < 1) {
        newItemCount = 1;
      }
      newProductCart = { ...newProductCart, itemCount: newItemCount };
    }
    //change new cart item
    const newCart = state.cart.map((cartItem) => {
      if (cartItem.idCart === idCart) {
        return newProductCart;
      }
      return cartItem;
    });
    return { ...state, cart: newCart };
  }
  //clear cart
  if (action.type === CLEAR_CART) {
    return { ...state, cart: [] };
  }
  //remove cart item
  if (action.type === REMOVE_ITEM_CART) {
    const newCart = state.cart.filter(
      (cartItem) => cartItem.idCart !== action.payload.idCart
    );
    return { ...state, cart: newCart };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};
export default button_reducer;
