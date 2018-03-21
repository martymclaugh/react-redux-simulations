import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getSoftware, getHardware, getJobs, getSpecificJob, createJob } from '../actions/index';

class App extends Component {
  constructor(props) {
    super(props);
    this.createJob = this.createJob.bind(this);
    this.getSpecificJob = this.getSpecificJob.bind(this);
  }

  componentDidMount() {
    this.props.getSoftware()
    this.props.getHardware()
    this.props.getJobs()    
  }
  
  createJob() {
    const data = {
      'name': 'newName',
      'softwareId': 'cfd',
      'applicationId': 'icing',
      'hardwareId': 'e4',
      'cores': 32,
    }
    this.props.createJob(data)
  }
  
  getSpecificJob() {
    const jobId = 'rJK69pItf';
    this.props.getSpecificJob(jobId)
  }
  

  render() {
    console.log('software');
    console.log(this.props.software);
    console.log('hardware');
    console.log(this.props.hardware);
    console.log('jobs');
    console.log(this.props.jobs);
    return (
      <div className="fe-app">
        <button onClick={this.createJob} className="regular-button">
          Create Job
        </button>
        <button onClick={this.getSpecificJob} className="regular-button">
          Get Specific Job
        </button>
      </div>
    );
  }
}

function mapStateToProps({ software, hardware, jobs }){
  return { software, hardware, jobs };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ getSoftware, getHardware,
    getJobs, getSpecificJob, createJob }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
