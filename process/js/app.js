var React =  require('react');
var ReactDOM = require('react-dom');

var MainInterface = React.createClass({
    getInitialState: function(){
        return {
        
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