const DataFetch = [];

export default (state = DataFetch, action) => {
    switch (action.type) {
        case 'DATA_FETCH':
               return {
                ...state,DataFetch:action.payload,
            }
        default:
            return state;
     }
}