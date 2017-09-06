import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import './App.css';

class SearchPage extends Component {
  constructor(props) {
    super(props);

    this.handleSearch = this.handleSearch.bind(this);
    this.handleCheckBox = this.handleCheckBox.bind(this);
  }

  handleSearch (event) {
    this.props.onChangeText(event.target.value) ;
  }

  handleCheckBox (event) {
    this.props.onSelectCheckBox(event.target.checked)
  }
  render() {
    return (
      <div className= "searchContainer" >
        <form className = "search" >
            <input className = "searchInput" placeholder = "Search Item" value = {this.props.searchValue} onChange = {this.handleSearch} />
            <div className = "checkBox">
              <Row>
                <Col>
                  <p className = "checkBox"> <input type="checkbox"  checked = {this.props.checkBoxValue} onChange = { this.handleCheckBox} /> &nbsp; &nbsp;     Only show products in stock   </p>
                </Col>  
              </Row>
            </div>
        </form>    
      </div>
    );
  }
}

export default SearchPage ;