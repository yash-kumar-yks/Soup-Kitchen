export const initialState = {
    basket: [],
    
  };
  
  export const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0);
  
  const reducer = (state, action) => {
      switch(action.type) {
          
          case 'ADD_TO_BASKET':
          //Logic to add items into the basket
            return { 
                ...state,
                basket: [...state.basket, action.item]
            };
            break;
          case 'REMOVE_FROM_BASKET':
            let newBasket = [...state.basket];
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);
            if (index >= 0) {
              //item exists in basket, remove it...
              newBasket.splice(index, 1);
              console.log(newBasket);
  
            } else {
              console.warn(
                `Can't remove product (id: ${action.id}) as it's not in basket`
              );
            }
  
            return { 
              ...state, 
              basket: newBasket };  
            break;
          default:
              return state;
      }
  }
  
  export default reducer;