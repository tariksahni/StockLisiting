import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import './App.css';

class AddRow extends Component {
  render() {
    let title = this.props.content.stocked ? (<p className = "inStock">{this.props.content.name} </p>) : (<p className = "outOfStock">{this.props.content.name} </p>)
    return (
        <div className = "App" >
            <div className = "row" >
                <Row>
                    <Col xs='6' className = "rowTitle"> {title} </Col>  
                    <Col xs ='6' className = "rowPrice"> {this.props.content.price} </Col>  
                 </Row>
            </div>    
        </div>
    );
  }
}

export default AddRow ;