var React =  require('react');

var AddCity =  React.createClass({
    render: function(){
        return (
            <div className="ui raised basic form segment">
                <a className="ui orange right ribbon label">Add city</a> 
                <div className="ui container">
                    <form class="ui basic form">
                        <div className="ui field">
                            <label>City</label>
                            <input name="city" placeholder="City" type="text"/>
                        </div>
                        <div className=" field">
                            <label>Description</label>
                            <input name="Description" placeholder="Description" type="text"/>
                        </div>
                        <div className="field">
                            <label>Country</label>
                            <input name="Country" placeholder="Country" type="text"/>
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