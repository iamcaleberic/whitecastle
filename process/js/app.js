var React =  require('react');
var ReactDOM = require('react-dom');

var MainInterface = React.createClass({
    getInitialState: function(){
        return {
        theCities: []
        }
    },
    render: function(){
        var allCities = this.state.theCities;
        // iterate/map through all cities
        allCities = allCities.map(function(item , index){
            return(
                  <div className="item"  key= {index} >
                        <div className="header">  {this.state.theCities[index].name}</div>
                        <div className="description" >{this.state.theCities[index].description}</div> 
                        <div className="right floated" >{this.state.theCities[index].country}</div>
                  </div>
            )// return

        }.bind(this));
        return (
            <div className="World">
                <div className="ui relaxed divided list" >
                    {allCities}
                </div>
            </div>
            )
    }
});

ReactDOM.render(
    <MainInterface/>,
    document.getElementById('theCities') // target element
);