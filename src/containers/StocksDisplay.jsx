import React, { Component } from 'react';
import '../App.css';
import AddCategory from '../components/AddCategory.jsx';
import AddRow from '../components/AddRow.jsx';


class StocksDisplay extends Component {
    views = [] ;

    componentWillReceiveProps= ( nextProps ) => { 
        let existingCategory = '' ; 
        let newStock = nextProps.stocks.updateProducts[0];
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
            <div className = "App">
                <div className = "namePriceRow" >
                    <div  className = "nameHeading"> NAME </div>  
                    <div  className = " priceHeading "> PRICE </div>
                </div>    
                <hr />
                {this.views}
            </div>
        );
    }
}

export default StocksDisplay ;