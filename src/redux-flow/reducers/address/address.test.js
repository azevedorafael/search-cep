import { expect } from 'chai'
import deepFreeze from 'deep-freeze'
import address from './index'
import { FETCHING, SUCCESS } from './actions'

// it('address should be a function', () => {
//     expect(address).to.be.a('function')
// })

it('should action UPDATE_ADDRESS update address', () => {
    const before = deepFreeze({
        address: '',
        city: '',
        code: '',
        district: '',
        state: '',
        status: 1,
        isFetching: true
    })

    const action = deepFreeze({
        type: SUCCESS,
        payload: {
            address: 'Rua Japurá',
            city: 'Rio de Janeiro',
            code: '21320-000',
            district: 'Praça Seca',
            state: 'RJ',
            status: 1
        }
    })

    const after = {
        address: 'Rua Japurá',
        city: 'Rio de Janeiro',
        code: '21320-000',
        district: 'Praça Seca',
        state: 'RJ',
        status: 1,
        isFetching: false
    }

    expect(address(before, action)).to.be.deep.equal(after)
})