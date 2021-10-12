export const initialState = {
  data: [
    {
      "name": "mango",
      "src": "https://cdn.pixabay.com/photo/2016/04/10/15/13/mangoes-1320111__340.jpg",
      "id": 1,
      "quantity": 2
    },
    {
      "name": "Salt",
      "src": "https://static.toiimg.com/photo/68483689.cms",
      "quantity": "2",
      "id": 2
    },
    {
      "name": "Banana",
      "src": "https://cdn.pixabay.com/photo/2016/09/03/20/48/bananas-1642706__340.jpg",
      "quantity": 2,
      "id": 3
    },
    {
      "name": "Apple",
      "src": "https://post.healthline.com/wp-content/uploads/2020/09/health-benefits-of-apples-732x549-thumbnail-732x549.jpg",
      "quantity": 3,
      "id": 4
    },
    {
      "name": "Apple",
      "src": "https://cdn.mos.cms.futurecdn.net/2ogKT6pUFWDAKiTu7quhJT-480-80.jpg",
      "quantity": 7,
      "id": 9
    },
    {
      "name": "Guava",
      "src": "https://post.healthline.com/wp-content/uploads/2020/09/benefits-of-guavas-732x549-thumbnail-732x549.jpg",
      "quantity": 8,
      "id": 5
    },
    {
      "name": "Guava",
      "src": "https://m.media-amazon.com/images/I/71i7evMMxDL._SL1300_.jpg",
      "quantity": 4,
      "id": 10
    },
    {
      "name": "Watermelon",
      "src": "https://snaped.fns.usda.gov/sites/default/files/seasonal-produce/2018-05/watermelon.jpg",
      "quantity": 2,
      "id": 6
    },
    {
      "name": "Litchi",
      "src": "https://media.istockphoto.com/photos/fresh-red-and-yellow-litchi-fruits-on-the-market-also-known-as-lichee-picture-id1167831510",
      "quantity": 3,
      "id": 7
    },
    {
      "name": "Pineapple",
      "src": "https://static.toiimg.com/photo/msid-69876233/69876233.jpg?506233",
      "quantity": 2,
      "id": 8
    },
  ]

};


const reducer = (state, action) => {
  switch (action.type) {

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
        data: newBasket
      };
      break;
    default:
      return state;
  }
}

export default reducer;