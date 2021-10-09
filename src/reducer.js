export const initialState = {
    data: []
    
  };
  
  
  const reducer = (state, action) => {
      switch(action.type) {
          
          case 'PUSH':
          
            return { 
                ...state,
                data: [...state.data, action.item]
            };
            break;
          case 'DELETE':
            let newBasket = [...state.data];
            const index = state.data.findIndex((basketItem) => basketItem.id == action.id);
            if (index >= 0) {
              newBasket.splice(index, 1);
              console.log(newBasket);
  
            } else {
              console.log(index);
              console.log(action.id);
              console.warn(
                
                `Can't remove product (id: ${action.id}) as it's not in basket`
              );
            }
  
            return { 
              ...state, 
              data: newBasket };  
            break;
          default:
              return state;
      }
  }
  
  export default reducer;