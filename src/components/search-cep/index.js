import React, { PureComponent } from 'react'
import SearchCep from './search-cep'
import { get } from 'axios'

class SearchCepContainer extends PureComponent {
    constructor() {
        super()
        this.state = {
            address: '',
            city: '',
            code: '',
            district: '',
            state: '',
            status: 1
        }
    }

    //Auto binding due Arrow Function this scope lexical  
    handleSubmit = async (e) => {
        e.preventDefault()
        const cep = e.target.cep.value
        await get(`http://apps.widenet.com.br/busca-cep/api/cep.json?code=${cep}`)
            .then((response) => {
                // handle success
                this.setState(response.data)
            })
            .catch((error) => {
                // handle error
                console.log(error)
            })
    }

    render() {
        return (
            <SearchCep
                {...this.state}
                handleSubmit={this.handleSubmit}
            />
        )
    }
}

export default SearchCepContainer