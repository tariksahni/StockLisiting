import React, { Component } from 'react';
import '../App.css';

class AddCategory extends Component {
  render() {
    return (
        <div className = "App" >
            <div className = "category" >
                {this.props.title}
            </div>   
        </div>
    );
  }
}

export default AddCategory ;