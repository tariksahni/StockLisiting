// export const initState = {
//     products : [] 
// }

const updateProducts = (state = [] , action ) => {
    switch( action.type ) {
        case 'UPDATE_PRODUCTS' :
            return [
                ...state , action.payload
            ]
        default :
            return state ;    
    }
}

export default updateProducts 