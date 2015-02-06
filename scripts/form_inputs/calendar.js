var React = require('react');

var Calendar = React.createClass({
		render: function() {
			return (
				<div className="form-group">
				  <label> Start Date </label>
				  <div className="input-group">
				    <span className="input-group-btn">
				      <button className="btn" type="button"><span className="fui-calendar"></span></button>
				    </span>
				    <input type="text" className="form-control" placeholder="Select a start date" id="datepicker-01" />
				  </div>
				</div>
			)
		}

});

module.exports = Calendar


