var React = require('react');

var LogIn = React.createClass({

	render: function() {
		return (
			<div className="container">
				<div className="col-sm-4 col-sm-offset-4">
					<form>
						<div className="form-group">
						    <label for="exampleInputEmail1">Email address</label>
						    <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter email" />
						 </div>
						 <div className="form-group">
						    <label for="exampleInputEmail1">Password</label>
						    <input type="password" className="form-control" id="exampleInputEmail1" placeholder="Enter password" />
						 </div>
						 <button className="btn btn-primary btn-block btn-wide"> Log in </button>
	 
					</form>
				</div>
			</div>
		);
	}

});

module.exports = LogIn;