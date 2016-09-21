var React = require("react");

var searchCity = React.createClass({
	render: function(){
		return(
			<div className="basic ui segment">
				<div className="ui form">
					<div className="ui floating dropdown labeled icon button">
					  <i className="filter icon"></i>
					  <span className="text">Filter Posts</span>
					  <div className="menu">
					    <div className="ui icon search input">
					      <i className="search icon"></i>
					      <input placeholder="Search ..." type="text"/>
					    </div>
					    <div className="divider"></div>
					    <div className="header">
					      <i className="tags icon"></i>
					      Tag Label
					    </div>
					    <div className="scrolling menu">
					      <div className="item">
					        <div className="ui red empty circular label"></div>
					        Important
					      </div>
					      <div className="item">
					        <div className="ui blue empty circular label"></div>
					        Announcement
					      </div>
					      <div className="item">
					        <div className="ui black empty circular label"></div>
					        Cannot Fix
					      </div>
					    </div>
					  </div>
					</div>
				</div>
			</div>
		)
	}
})

