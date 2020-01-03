import React from 'react';
import Dashboard from '../components/dashboard/index'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
//import * as actions from '../actions/dashboard'


// For Dashboard
const DashboardConatainers = (props) => <Dashboard {...props} />



export default withRouter(connect()(DashboardConatainers))
