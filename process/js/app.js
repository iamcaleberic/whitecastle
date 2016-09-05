var React =  require('react');
var ReactDOM = require('react-dom');

var MainInterface = React.createClass({
    getInitialState: function(){
        return {
        data: [
                {
                    "name":"Stockholm",
                    "country":"Sweden",
                    "language":"Swedish"
                },
                {
                    "name":"London",
                    "country":"England",
                    "language":"English"
                },
                {
                    "name":"Berlin",
                    "country":"Germany",
                    "language":"German"
                },

                {
                    "name":"Osaka",
                    "country":"Japan",
                    "language":"Japanese"
                },
                {
                    "name":"Hong Kong",
                    "country":"China",
                    "language":"English/Chinese"
                }, 
                {
                    "name":"St. Petersburg",
                    "country":"Russia",
                    "language":"Russian"
                }
              ]
        }
    },
    render: function(){
        
        return (
            <div className="World">
            
            </div>
            )
    }
});

ReactDOM.render(
    <MainInterface/>,
    document.getElementById('cities')
);