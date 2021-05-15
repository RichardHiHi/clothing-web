import {
  ADD_TO_WISHLIST,
  REMOVE_WISHLIST,
  SET_USER,
  UPDATE_WISHLIST,
} from '../actions';
const user_reducer = (state, action) => {
  if (action.type === ADD_TO_WISHLIST) {
    return {
      ...state,
      wishList: [...state.wishList, action.payload.idProduct],
    };
  }
  if (action.type === REMOVE_WISHLIST) {
    const newWishList = state.wishList.filter(
      (item) => item !== action.payload.idProduct
    );
    return { ...state, wishList: newWishList };
  }
  if (action.type === SET_USER) {
    let newUser;
    const { email, nickname, picture } = action.payload.user;

    newUser = {
      email,
      nickname,
      picture,
      wishList: action.payload.wishList,
      recordId: action.payload.recordId,
    };

    if (!action.payload.user) {
      newUser = null;
    }
    return { ...state, myUser: newUser };
  }
  if (action.type === UPDATE_WISHLIST) {
    return { ...state, wishList: action.payload.wishList };
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};
export default user_reducer;
