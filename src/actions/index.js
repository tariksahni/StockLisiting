// action constants 
export const UPDATE_PRODUCTS = 'UPDATE_PRODUCTS' ;

// action creators
export const uploadProducts = (products) => {
  return { type: UPDATE_PRODUCTS
         , products }
}

