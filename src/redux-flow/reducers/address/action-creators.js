import { FETCHING, SUCCESS, ERROR} from "./actions";
import { get } from 'axios'

export const fetchAddress = (cep) => async (dispatch) => {
    dispatch({ type: FETCHING })

    await get(`http://apps.widenet.com.br/busca-cep/api/cep.json?code=${cep}`)
        .then((response) => {
            // handle success
            dispatch(updateAddress(response.data))
        })
        .catch((error) => {
            // handle error
            dispatch({ type: ERROR })
        })

    dispatch({
        type: SUCCESS,
        payload: response
    })
}
