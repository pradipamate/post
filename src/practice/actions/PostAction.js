
export function initialData() {
    return dispatch => {
        return fetch("https://jsonplaceholder.typicode.com/posts")
            .then(result => result.json())
            .then((result) => {
                dispatch(datafetchsuccessfully(result))
            })
            .catch((err) => {
                console.error('err', err);
            });
     }
 }

export const datafetchsuccessfully = (data) => ({
    type: "DATA_FETCH",
    payload: data
})

