import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  fetchAllJobs,
  fetchHardware,
  fetchSoftware,
} from '../../actions';

class JobForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      software: null,
      hardware: null,
      softwareInfo: null,
    };

    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.renderHardware = this.renderHardware.bind(this);
    this.renderSoftware = this.renderSoftware.bind(this);
    this.renderApplications = this.renderApplications.bind(this);
    this.handleSelectSoftware = this.handleSelectSoftware.bind(this);
  }
  componentDidMount(){
    this.handleHardWardClick(this.props.hardware[0])
  }
  handleKeyPress(event) {
    const targetValue = event.target.value;
    this.setState({ name: targetValue });
  }
  handleHardWardClick(hardware){
    this.setState({ hardware });
  }
  renderHardware() {
     return this.props.hardware.map(item => (
      <option
        key={item.id}
        className="hardware"
        onSelect={() => this.handleHardWardClick(item)}
      >
        {item.label}
      </option>
    ));
  }
  renderSoftware() {
    return this.props.software.map(soft => {

      const isSelected = this.state.software === soft.id;
      return (
        <div
          key={soft.id}
          onClick={() => this.handleSelectSoftware(soft)}
          className="software"
          style={this.state.software === soft ? { backgroundColor: 'red' } : {}}
        >
          {soft.label}
        </div>
      );
    });
  }
  renderApplications() {
    if (!this.state.software) { return null; }

    const applications = this.state.software.applications.map(app => (
      <div
        key={app.id}
        onClick={() => this.setState({ application: app })}
        className="application"
        style={this.state.application === app ? { backgroundColor: 'green' } : {}}
      >{app.label}</div>
    ));

    return (
      <div className="applications">
        <h2>Choose Application: </h2>
        {applications}
      </div>
    )
  }
  handleSelectSoftware(software) {
    this.setState({
      software: software,
      application: null,
    })
  }
  runSimulation(event){
    event.preventDefault();
    const { name, software, hardware, application } = this.state;
    const job = {
      name,
      softwareId: software.id,
      applicationId: application.id,
      hardwareId: hardware.id,
      cores: hardware.max,
    };
    this.props.runSimulation(job);
  }
  render() {
    const { software, hardware, application, name } = this.state;
    const submitButton = software && hardware && application && name && (
      <button onClick={(e) => this.runSimulation(e)}>Run Simulation</button>
    );

    return (
      <form action=".">
        <label>Name</label>
        <input
          onChange={(e) => this.handleKeyPress(e)}
          value={this.state.newJobName}
          type="text"
        />
        <label>Hardware</label>
        <select name="" id="">
          {this.renderHardware()}
        </select>
        <h2>Software</h2>
        {this.renderSoftware()}
        <div className="software__info">{software && software.info}</div>
        {this.renderApplications()}
        {submitButton}
      </form>
    )
  }
}

const mapStateToProps = ({ hardware, software }) => ({ hardware, software });
export default connect(mapStateToProps, {
  fetchAllJobs,
  fetchHardware,
  fetchSoftware,
})(JobForm);
