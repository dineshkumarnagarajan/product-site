import axios from 'axios';
import { baseUrl } from "./endpoints"

export function getAllProds() {
    return (dispatch) => {
        dispatch({ type: "ALL_PRODUCTS_GET_INIT" })

        let getUrl = `${baseUrl}/getall_products/0`
        axios.get(getUrl).then((res) => {
            dispatch({
                type: "ALL_PRODUCTS_GET_SUCCESS",
                payload: res.data
            })
            console.log(res)
        }).catch((err) => {
            dispatch({ type: "ALL_PRODUCTS_GET_FAILED" })

        })
    }


}