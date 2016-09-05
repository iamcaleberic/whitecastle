var React =  require('react');
var ReactDOM = require('react-dom');

var MainInterface = React.createClass({
    render: function(){
        return <h1> World Cities </h1>
    }
});

ReactDOM.render(
    <MainInterface/>,
    document.getElementById('cities')
);