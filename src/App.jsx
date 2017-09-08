import React, { Component } from 'react';
import './App.css';
import SearchPage from './SearchPage.jsx';
import StocksDisplay from './StocksDisplay.jsx';
import {connect} from 'react-redux';
import data from './data.js';
import {uploadProducts} from './actions/index.js'

class App extends Component {

  state = {
    search : '' ,
    showStock : false 
  } ;

  componentWillMount = () => {
    this.props.dispatch((uploadProducts(data)));
  };
  
  handleChangeText = ( newText ) => {
    this.setState ( { search: newText } ) ;
  }

  handleCheckBox = (showStock) => {
    this.setState ( {showStock : showStock } ) ;
  }

  render() {
    return (
      <div className="App" >
        <h1 className = "mainHeading" > STOCKS </h1>
        <SearchPage searchValue = {this.state.search} 
                    onChangeText = {this.handleChangeText} 
                    checkBoxValue = {this.state.showStock} 
                    onSelectCheckBox = {this.handleCheckBox} />
        <StocksDisplay stocks = {this.props.products} 
                       showInStock = {this.state.showStock} 
                       searchText = {this.state.search} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  
  return {
    products : state 
  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     updateProducts : (data) => {
//       dispatch(uploadProducts)
//     }
//   }
// }

export default connect( mapStateToProps )( App ) ;
