var React = require('react');

var CityList = React.createClass({
    render:function(){

        return(
             <div className="item"  >
                <div className="header">  {this.props.singleItem.name}</div>
                <div className="description" >{this.props.singleItem.description}</div> 
                <div className="right floated" >{this.props.singleItem.country}</div>
            </div>
        )
    }
})

module.exports = CityList