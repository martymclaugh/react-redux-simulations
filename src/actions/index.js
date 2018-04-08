import axios from 'axios';

const ROOT_URL = 'http://localhost:3000/api';

export const types = {
  FETCH_ALL_JOBS: 'FETCH_ALL_JOBS',
  FETCH_JOB: 'FETCH_JOB',
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
