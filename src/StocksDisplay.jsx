import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import './App.css';
import AddCategory from './AddCategory.jsx';
import AddRow from './AddRow.jsx';


class StocksDisplay extends Component {
    views = [] ;

    componentWillReceiveProps= ( nextProps ) => { 
        let existingCategory = '' ; 
        let newStock = nextProps.stocks[0];
        newStock.map( stock => {
            
            if( ( nextProps.showInStock && !stock.stocked ) || ( stock.name.indexOf(nextProps.searchText) === -1 ) )
                return ;

            if( stock.category !== existingCategory){
                this.views.push( < AddCategory title = {stock.category} />)
            }

            this.views.push( < AddRow  content = {stock} />)
            existingCategory = stock.category ;

        });
    }

    componentDidUpdate = () => {
        this.views = [] ;
    }

    render() {
        return (
            <div className = "App" >
                <Row>
                    <Col xs='6' className = "nameHeading"> NAME </Col>  
                    <Col xs ='6' className = " priceHeading "> PRICE </Col>  
            </Row>
            <hr />
            {this.views}
            </div>
        );
    }
}

export default StocksDisplay ;