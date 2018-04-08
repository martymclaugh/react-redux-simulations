import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAllJobs } from '../../actions';
import { Link, withRouter } from 'react-router-dom';

class JobsList extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };

    this.renderJobs = this.renderJobs.bind(this);
  }
  componentDidMount() {
    this.props.fetchAllJobs();
  }
  renderJobs() {
    if (this.props.jobs) {
        return this.props.jobs.map(job => (
          <div className="job">
          {console.log(job)}
          {job.name}
          <Link to={{ pathname: `/jobs/${job.id}`}}>Run Job</Link>
        </div>
      ))
    }
    return null;
  }
  render() {
    console.log(this.props);
    return (
      <div className="jobs-list">
        <h1>All jobs</h1>
        {this.renderJobs()}
      </div>
    )
  }
}

const mapStateToProps = ({ jobs }) => ({ jobs });
export default withRouter(connect(mapStateToProps, { fetchAllJobs })(JobsList));
