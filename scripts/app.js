'use strict';

var React = require('react');
var Nav = require('./navbar')
var Login = require('./login');
var Savings = require('./savings');


var App = React.createClass({
  render() {
    return (
      <div>
	      <Nav />
	      <Login />
	      <Savings />
	      
      </div>
    );
  }
});

module.exports = App;