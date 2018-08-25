import { UPDATE_ADDRESS } from "./actions";
import { get } from 'axios'

export const fetchAddress = (cep) => async (dispatch, getState) => {
    await get(`http://apps.widenet.com.br/busca-cep/api/cep.json?code=${cep}`)
        .then((response) => {
            // handle success
            dispatch(updateAddress(response.data))
        })
        .catch((error) => {
            // handle error
            this.setState({ isFetching: false })
        })
}

export const updateAddress = (data) => ({
    type: UPDATE_ADDRESS,
    payload: data
})