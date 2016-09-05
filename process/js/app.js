var React =  require('react');
var ReactDOM = require('react-dom');

var MainInterface = React.createClass({
    getInitialState: function(){
        return {
            title: ' Famous Cities' ,
            show: true
        }
    },
    render: function(){
        var showTitle;
        if(this.state.show){
            showTitle = "Less"
        }

        var displayList ={
            display: this.state.show ? 'block':none,
            color: 'red'
        }
        return (
            <div className="World">
            <h1 > { showTitle }
                {this.state.title}  </h1>
            
                <ul style= {displayList}>
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