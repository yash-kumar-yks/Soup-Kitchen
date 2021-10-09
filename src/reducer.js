export const initialState = {
    data: [{
      "name": "mango",
      "src": "https://cdn.pixabay.com/photo/2016/04/10/15/13/mangoes-1320111__340.jpg",
      "id": 1,
      "quantity": 2
    },
    {
      "name": "salt",
      "src": "https://static.toiimg.com/photo/68483689.cms",
      "quantity": "2",
      "id": 2
    },
    {
      "name": "banana",
      "src": "https://cdn.pixabay.com/photo/2016/09/03/20/48/bananas-1642706__340.jpg",
      "quantity": 2,
      "id": 3
    },
    {
      "name": "apple",
      "src": "https://media.istockphoto.com/photos/red-apple-picture-id184276818?k=20&m=184276818&s=612x612&w=0&h=QxOcueqAUVTdiJ7DVoCu-BkNCIuwliPEgtAQhgvBA_g=",
      "quantity": 3,
      "id": 4
    }]
    
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