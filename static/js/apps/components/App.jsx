import React, { Component} from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { initProducts } from '../actions';
import VisibleProductList from '../containers/VisibleProductList';
import VisibleCartList from '../containers/VisibleCartList';

class App extends Component {

    constructor(props){
        super(props);
    }

    componentDidMount() {
        var initProducts = this.props.initProducts;
        axios.get('/items')
        .then(function(data) {
            initProducts(data.data.catalog);
        })
        .catch(function(error) {
            console.error(error);
        });
    }

    render () {
        return (
            <div>
                <VisibleCartList />
                <VisibleProductList />
            </div>
        )
    }    
}

const mapStateToProps = state => {
  return {
    products: state.products
  }
}

const mapDispatchToProps = dispatch => {
  return {
    initProducts: products => {
      dispatch(initProducts(products))
    }
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);