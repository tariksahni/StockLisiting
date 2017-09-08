const initState = {
    products : [] 
}

const addProducts = (state = initState , action ) => {
    switch( action.type ) {
        case 'UPDATE_PRODUCTS' :
            return [
                ...state , action.products
            ]
        default :
            return state ;    
    }
}

export default addProducts 