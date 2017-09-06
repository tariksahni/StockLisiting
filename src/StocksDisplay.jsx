import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import './App.css';
import AddCategory from './AddCategory.jsx';
import AddRow from './AddRow.jsx';


class StocksDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {} ;
  }

  render() {
    let existingCategory = '' ; 
    let views = [] ;
    this.props.stocks.map( stock => {
        
        if( ( this.props.showInStock && !stock.stocked ) || ( stock.name.indexOf(this.props.searchText) === -1 ) )
            return ;

        if( stock.category !== existingCategory){
            views.push( < AddCategory title = {stock.category} />)
        }

        views.push( < AddRow  content = {stock} />)
        existingCategory = stock.category ;

    });
    return (
        <div className = "App" >
            <Row>
                <Col xs='6' className = "nameHeading"> NAME </Col>  
                <Col xs ='6' className = " priceHeading "> PRICE </Col>  
           </Row>
           <hr />
           {views}
        </div>
    );
  }
}

export default StocksDisplay ;