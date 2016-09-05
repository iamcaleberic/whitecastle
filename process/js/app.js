var React =  require('react');
var ReactDOM = require('react-dom');

var MainInterface = React.createClass({
    render: function(){
        return (
            <div className="World">
            <h1 > World Cities </h1>
            
                <ul>
                    <li>London (BST)</li>
                </ul>
            </div>
            )
    }
});

ReactDOM.render(
    <MainInterface/>,
    document.getElementById('cities')
);