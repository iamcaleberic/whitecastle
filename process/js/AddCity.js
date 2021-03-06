var React =  require('react');

var AddCity =  React.createClass({
    toggleCityDisplay: function(){
            this.props.handleToggle();
        },

    handleAdd: function(e){
        var tempItem ={
            city: this.refs.City.value,
            description: this.refs.Description.value,
            country: this.refs.Country.value
        }
        e.preventDefault();
        this.props.addCity(tempItem);
    },

    render: function(){
      
        var displayCityBody = {
            display: this.props.cityBodyVisible ? 'block' : 'none'
        };

        return (
            <div className="ui raised basic form segment" >
                <a className="ui  orange right ribbon  label" onClick = { this.toggleCityDisplay }>Add city</a> 
                <div className="ui container" >
                
                    <form className="ui basic form" onSubmit={this.handleAdd} >
                        <div className="field">
                            <label>City</label>
                            <input name="City" placeholder="City" type="text" ref="City"/>
                        </div>
                        <div className=" field">
                            <label>Description</label>
                            <input name="Description" placeholder="Description" type="text" ref="Description"/>
                        </div>
                        <div className="field">
                            <label>Country</label>
                            <input name="Country" placeholder="Country" type="text" ref="Country"/>
                        </div>
                    
                        <button className="ui green icon button" type="submit">
                            <i className="add icon"/>
                             Add city
                        </button>
                    </form>
              
                </div>
              </div>
        )
    }
})//add city

module.exports = AddCity