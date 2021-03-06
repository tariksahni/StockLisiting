import React, { Component } from 'react';
import '../App.css';

class SearchPage extends Component {

  handleSearch = (event) => {
    this.props.onChangeText(event.target.value) ;
  }

  handleCheckBox = (event) => {
    this.props.onSelectCheckBox(event.target.checked)
  }
  
  render() {
    return (
      <div className= "searchContainer" >
        <form className = "search" >
            <input className = "searchInput" placeholder = "Search Item" value = {this.props.searchValue} onChange = {this.handleSearch} />
            <div className = "checkBox">
              <p className = "checkBox"> <input type="checkbox"  checked = {this.props.checkBoxValue} onChange = { this.handleCheckBox} /> 
                &nbsp; &nbsp;     Only show products in stock   
              </p> 
            </div>
        </form>    
      </div>
    );
  }
}

export default SearchPage ;