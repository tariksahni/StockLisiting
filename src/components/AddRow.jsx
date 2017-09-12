import React, { Component } from 'react';
import '../App.css';

class AddRow extends Component {
  render() {
    let title = this.props.content.stocked ? (<p className = "inStock">{this.props.content.name} </p>) : (<p className = "outOfStock">{this.props.content.name} </p>)
    return (
        <div className = "App" >
            <div className = "row" >
                <div  className = "col"> {title} </div>  
                <div className = "col"> {this.props.content.price} </div>  
            </div>    
        </div>
    );
  }
}

export default AddRow ;