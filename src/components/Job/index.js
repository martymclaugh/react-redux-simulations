import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchJob } from '../../actions';

class Job extends Component {
  constructor(props) {
    super(props);

    this.renderResults = this.renderResults.bind(this);
  }
  componentDidMount() {
    this.props.fetchJob(this.props.match.params.id);
  }
  componentWillReceiveProps(nextProps) {
    const { id } = nextProps.match.params;

    if (id !== this.props.match.params.id) {
      this.props.fetchJob(id);
    }
  }
  renderResults() {
    const { results } = this.props.job;

    return  results.images.map(image => (
      <div className="simulation">
        <img src={image} alt=""/>
      </div>
    ))
  }
  render() {
    const { label, hardware, software, results } = this.props.job;
    if (!label) { return <div>loading...</div>; }

    return (
      <div className="job-screen">
        <h1 className="job-details job__title"> Results For: {label}</h1>
        <div className="job-details job__software">Software Used: {software.type.label}</div>
        <div className="job-details job__hardware">Hardware Used: {hardware.type.label}</div>
        <div className="job-details job__duration">Duration: {results.duration}</div>
        {this.renderResults()}
      </div>
    )
  }
}

const mapStateToProps = ({ job }) => ({ job });

export default connect(mapStateToProps, { fetchJob })(Job);
