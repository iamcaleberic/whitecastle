var React = require('react');

var CityList = React.createClass({
    
    handleDelete: function(){
        this.props.onDelete(this.props.whichItem)
    },

    render:function(){

        return(
             <div className="item"  >
             
                <div className="left floated">
                    <button onClick={this.handleDelete} className=" circular ui red icon button">
                        <i className="ban icon"></i>
                    </button>
                </div>
                <div className="header">  {this.props.singleItem.name}</div>
                <div className="description" >{this.props.singleItem.description}</div> 
                <div className="right floated" >{this.props.singleItem.country}</div>
            </div>
        )
    }
})

module.exports = CityList