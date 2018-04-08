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
    this.handleCreateJob = this.handleCreateJob.bind(this);
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
          <div className="job-content">
            <Link to={{ pathname: `/jobs/${job.id}`}}>See Results</Link>
            {job.name}
          </div>
        </div>
      ))
    }
    return null;
  }
  handleCreateJob(job){
    this.toggleForm();
    this.props.createJob(job);
  }
  render() {
    const { formIsActive } = this.state;
    const buttonText = !this.state.formIsActive ? 'Create New Job' : 'Cancel';
    return (
      <div className="jobs-list">
        <h1>All jobs</h1>
        {this.renderJobs()}
        <div
          className="create-job-button"
          onClick={() => this.toggleForm()}
        >{buttonText}</div>
        {formIsActive && <JobForm runSimulation={this.handleCreateJob} />}
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
