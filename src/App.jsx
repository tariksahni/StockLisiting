import React, { Component } from 'react';
import './App.css';
import SearchPage from './SearchPage.jsx';
import StocksDisplay from './StocksDisplay.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search : '' ,
      showStock : false 
    } ;

    this.handleChangeText =this.handleChangeText.bind(this);
    this.handleCheckBox =this.handleCheckBox.bind(this);
  }

  handleChangeText ( newText ) {
    this.setState ( { search: newText } ) ;
  }

  handleCheckBox (showStock) {
    this.setState ( {showStock : showStock } ) ;
  }

  render() {
    console.log(this.state.showStock)
    return (
      <div className="App">
        <h1 className = "mainHeading">STOCKS</h1>
        <SearchPage searchValue = {this.state.search} 
                    onChangeText = {this.handleChangeText} 
                    checkBoxValue = {this.state.showStock} 
                    onSelectCheckBox = {this.handleCheckBox} />
        <StocksDisplay stocks = {this.props.stocks} 
                       showInStock = {this.state.showStock} 
                       searchText = {this.state.search} />
      </div>
    );
  }
}

export default App ;
