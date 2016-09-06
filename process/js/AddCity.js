var React =  require('react');

var AddCity =  React.createClass({
    render: function(){
        return (
            <div className="ui basic segemnt"> 
                <div className="ui container">
                    <form class="ui form">
                        <div className="field">
                            <label>City</label>
                            <input name="city" placeholder="City" type="text"/>
                        </div>
                        <div className="field">
                            <label>Description</label>
                            <input name="Description" placeholder="Description" type="text"/>
                        </div>
                        <div className="field">
                            <label>Country</label>
                            <input name="Country" placeholder="Country" type="text"/>
                        </div>
                    
                        <button className="ui button" type="submit">Submit</button>
                    </form>
                </div>
              </div>
        )
    }
})//add city

module.exports = AddCity