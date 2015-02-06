var React = require('react/addons');
var Results = require('./results');
var Calendar = require('./fields').Calendar;




var Savings = React.createClass({
	
	mixins: [React.addons.LinkedStateMixin],
	getInitialState: function() {
		return {
			savings: '',
			amount: 1,
			increment: 1,
			frequency: 1,
			schedule: [],
			max: ''
		};
	},

	getPlan: function(amount, increment,frequency) {
		var weekArr = [];
		var times = 52 / frequency;
		for (var i = 0; i < times; i++) {
          weekArr.push(i);
        };
        var schedule = weekArr.map(function(day){
      		
        	if (day == 0) {
        		return parseInt(amount);
    		} else {
    			return parseInt(day) * parseInt(increment) + parseInt(amount)
    		}
        });

        var sum = schedule.reduce(function(prev,next){
        	return prev + next
        });

        this.setState({
        	schedule: schedule, 
        	max: this.findMax(schedule),
        	savings: sum
        });
	},

	findMax: function (array) {
		var max = 0;
		for (var i = 0; i <= array.length; i++) {
			if (array[i] > max) {
				max = array[i]
			}
		}
		return max;
	},

	handleChange: function(name, e){
		this.state[name] = e.target.value;
		this.setState(this.state);
		this.getPlan(this.state.amount, this.state.increment, this.state.frequency);
	},

	

	render: function() {
		console.log(this.state);
		return (
			<div className='container'>
				<div className="col-sm-6">
					<form>
						<Calendar />
						<div>
							<div className="form-group">
							  <label> Starting Amount </label>
							  <div className="input-group">
							    <span className="input-group-btn">
							      <button className="btn" type="button"><span className="fui-dollar"></span></button>
							    </span>
							    <input type="number" onChange={this.handleChange.bind(null, 'amount')} value={this.state.amount} className="form-control" placeholder="Enter a starting amount" id="" />
							  </div>
							</div>
						</div>
						<div>
							<div className="form-group">
							  <label> Select Frequency </label>
							  <div className="input-group">
							    <select onChange={this.handleChange.bind(null, 'frequency')} value={this.state.frequency} className="form-control select select-primary select-block mbl">
								    <option value="1">Once a week</option>
								    <option value="2">Every two weeks</option>
								    <option value="4">Once a month</option>
								</select>
							  </div>
							</div>
						</div>

						<div>

						<div className="form-group">
						  <label> Increment by </label>
						  <div className="input-group">
						    <select onChange={this.handleChange.bind(null, 'increment')} value={this.state.increment} className="form-control select select-primary select-block">
							    <option value="1">1</option>
							    <option value="2">2</option>
							    <option value="3">3</option>
							    <option value="5">5</option>
							    <option value="10">10</option>
							</select>
						  </div>
						</div>
						</div>
					</form>
				</div>

				<div className="col-sm-6"> 
					<Results data={this.state} />
					<button className='btn btn-primary' type='submit'> Play Stash Roulette </button>
				</div>
					
			</div>
		);
	}

});

module.exports = Savings;