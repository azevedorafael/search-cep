import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import SearchCep from './search-cep'
import { get } from 'axios'
import { updateAddress } from 'reducers/address/action-creators'

class SearchCepContainer extends PureComponent {
  constructor() {
    super()
    this.state = {
      isFetching: false
    }
  }

  //  Auto binding due Arrow Function this scope lexical  
  handleSubmit = async (e) => {
    e.preventDefault()
    this.setState({ isFetching: true })
    const cep = e.target.cep.value
    await get(`http://apps.widenet.com.br/busca-cep/api/cep.json?code=${cep}`)
      .then((response) => {
        // handle success
        this.setState({ isFetching: false })
        this.props.updateAddress(response.data)
      })
      .catch((error) => {
        // handle error
        this.setState({ isFetching: false })
      })
  }

  render() {
    return (
      <SearchCep
        {...this.state}
        {...this.props.address}
        handleSubmit={this.handleSubmit}
      />
    )
  }
}

const mapStateToProps = (state) => ({
  address: state.address
})

// const mapDispatchToProps = (dispatch) => ({
//   updateAddress: (data) => dispatch(updateAddress(data))
// })

const mapDispatchToProps = { updateAddress }

export default connect(mapStateToProps, mapDispatchToProps)(SearchCepContainer)