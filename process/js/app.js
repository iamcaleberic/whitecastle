var React =  require('react');
var ReactDOM = require('react-dom');

//import external subcomponent
var CityList = require('./CityList');

var MainInterface = React.createClass({
    getInitialState: function(){
        return {
        data: [
                {
                    "name":"Stockholm",
                    "description":"I could almost call it a port city of the scandinavia with the sea breeze",
                    "country":"Sweden",
                    "language":"Swedish"
                },
                {
                    "name":"London",
                    "description":"Located in the heart of Europre its a magnificent city",
                    "country":"England",
                    "language":"English"
                },
                {
                    "name":"Berlin",
                    "description":"The beer the charm the modern Berlin seems to have it all",
                    "country":"Germany",
                    "language":"German"
                },

                {
                    "name":"Osaka",
                    "description":"A city filled with bamboo plantations",
                    "country":"Japan",
                    "language":"Japanese"
                },
                {
                    "name":"Hong Kong",
                    "description":"A sea city made of amazing sky scrappers and glitsening sea",
                    "country":"China",
                    "language":"English/Chinese"
                }, 
                {
                    "name":"St. Petersburg",
                    "description":"The orthdox church feel and old day communist syle of buildings being brought into new",
                    "country":"Russia",
                    "language":"Russian"
                }
              ]
        }
    },
    render: function(){
        var allCities = this.state.data;
        // iterate/map through all cities
        allCities = allCities.map(function(item , index){
            return(
                 <CityList key ={index}
                singleItem = {item}/> 
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
    document.getElementById('city') // target element
);