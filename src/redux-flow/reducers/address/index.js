import createReducer from '../create-reducer'
import { FETCHING, SUCCESS, ERROR } from './actions';

const initialState = {
    address: '',
    city: '',
    code: '',
    district: '',
    state: '',
    status: 1,
    isFetching: false
}

const address = createReducer(initialState, {
    [FETCHING]: (state, action) => ({
        ...state,
        isFetching: true
    }),
    [SUCCESS]: (state, action) => ({
        ...action.payload,
        isFetching: false
    }),
    [ERROR]: (state) => ({
        ...state,
        isFetching: false
    })
})

export default address