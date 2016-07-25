import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Login from '../components/Login';
import Users from '../components/Users';
import Loading from '../components/Loading';

class App extends React.Component {


	render() {	
		const { profile } = this.props;

		const users = !profile.loggedIn 
							? null 
							: <Users />;

		return (
			<div>				
				<Login />
				{users}
				<Loading />
			</div>
		);
	}

};

const mapStateToProps = (state, ownProps) => ({
	profile: state.profile,
});

const mapDispatchToProps = (dispatch, ownProps) => ({ 
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
