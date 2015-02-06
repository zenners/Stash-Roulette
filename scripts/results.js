var React = require('react');

var Results = React.createClass({

	render: function() {
		var frequency;
		 if (this.props.data.frequency == 1) {
		  	frequency = <p> week </p>
		  } else if (this.props.data.frequency == 2) {
		  	frequency = <p> two weeks </p>
		  } else {
		  	frequency = <p> month </p>
		  }
		return (
			<div className="alert alert-info">
			  <h4>You will start by saving</h4>
			  <p>${this.props.data.amount}</p>
			  <h4>It will grow by</h4>
			  <p>${this.props.data.increment}</p>
			  <h4> Every </h4>
			  {frequency}

			  <h4>If you stick to the plan, you savings will be</h4>
			  <p>${this.props.data.savings}</p>
			  <h4> Your maximum contribution</h4>
			  <p> $ {this.props.data.max} </p>
			</div>
					
		);
	}

});

module.exports = Results;