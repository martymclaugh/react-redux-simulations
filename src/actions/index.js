import axios from 'axios';

const ROOT_URL = 'http://localhost:3000/api';

export const types = {
  FETCH_ALL_JOBS: 'FETCH_ALL_JOBS',
  FETCH_JOB: 'FETCH_JOB',
  FETCH_ALL_SOFTWARE: 'FETCH_ALL_SOFTWARE',
  FETCH_ALL_HARDWARE: 'FETCH_ALL_HARDWARE',
  CREATE_JOB: 'CREATE_JOB',
}

export const fetchAllJobs = () => {
  const request = axios.get(`${ROOT_URL}/jobs`);

  return {
    type: types.FETCH_ALL_JOBS,
    payload: request,
  }
}

export const fetchJob = (jobId) => {
  const request = axios.get(`${ROOT_URL}/jobs/${jobId}`);

  return {
    type: types.FETCH_JOB,
    payload: request,
  }
}

export const fetchAllSoftware = () => {
  const request = axios.get(`${ROOT_URL}/software`);

  return {
    type: types.FETCH_ALL_SOFTWARE,
    payload: request,
  }
}

export const fetchAllHardware = () => {
  const request = axios.get(`${ROOT_URL}/hardware`);

  return {
    type: types.FETCH_ALL_HARDWARE,
    payload: request,
  }
}

export const createJob = (job) => {
  const request = axios.post(`${ROOT_URL}/create`, job);

  return {
    type: types.CREATE_JOB,
    payload: request,
  }
}
