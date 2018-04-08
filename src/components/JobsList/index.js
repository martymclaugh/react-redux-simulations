import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  fetchAllJobs,
  fetchAllHardware,
  fetchAllSoftware,
  createJob,
} from '../../actions';
import { Link, withRouter } from 'react-router-dom';
import JobForm from '../JobForm';

class JobsList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formIsActive: false,
      newJobName: '',
    };

    this.renderJobs = this.renderJobs.bind(this);
  }
  componentDidMount() {
    this.props.fetchAllJobs();
    this.props.fetchAllSoftware();
    this.props.fetchAllHardware();
  }
  toggleForm() {
    this.setState({ formIsActive: !this.state.formIsActive });
  }
  renderJobs() {
    if (this.props.jobs) {
      return this.props.jobs.map(job => (
        <div key={job.id} className="job">
          {job.name}
          <Link to={{ pathname: `/jobs/${job.id}`}}>Run Job</Link>
        </div>
      ))
    }
    return null;
  }
  render() {
    const { formIsActive } = this.state;
    const buttonText = !this.state.formIsActive ? 'Create New Job' : 'Cancel';
    return (
      <div className="jobs-list">
        <h1>All jobs</h1>
        {this.renderJobs()}
        <div
          onClick={() => this.toggleForm()}
        >{buttonText}</div>
        {formIsActive && <JobForm runSimulation={this.props.createJob} />}
      </div>
    )
  }
}

const mapStateToProps = ({ jobs }) => ({ jobs });
export default withRouter(connect(mapStateToProps, {
  fetchAllJobs,
  fetchAllHardware,
  fetchAllSoftware,
  createJob,
})(JobsList));
