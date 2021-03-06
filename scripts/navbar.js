var React = require('react');

var Nav = React.createClass({

	render: function() {
		return (
			<div>
				<nav className="navbar navbar-default" role="navigation">
				  <div className="navbar-header">
				    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-collapse-01">
				      <span className="sr-only">Toggle navigation</span>
				    </button>
				    <a className="navbar-brand" href="#">Stash Roulette</a>
				  </div>
				  <div className="collapse navbar-collapse" id="navbar-collapse-01">
				    <ul className="nav navbar-nav">
				      <li className="active"><a href="#fakelink">Foo</a></li>
				      <li><a href="#fakelink">Features</a></li>
				    </ul>
				    <form className="navbar-form navbar-right" action="#" role="search">
				      <div className="form-group">
				        <div className="input-group">
				          <input className="form-control" id="navbarInput-01" type="search" placeholder="Search" />
				          <span className="input-group-btn">
				            <button type="submit" className="btn"><span className="fui-search"></span></button>
				          </span>
				        </div>
				      </div>
				    </form>
				  </div>
				</nav>
			</div>
		);
	}

});

module.exports = Nav;