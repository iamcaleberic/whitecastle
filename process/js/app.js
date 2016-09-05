var React =  require('react');
var ReactDOM = require('react-dom');

var MainInterface = React.createClass({
    getInitialState: function(){
        return {
            title: 'Famous Cities' 
        }
    },
    render: function(){
        return (
            <div className="World">
            <h1 > { this.state.title } </h1>
            
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