import sendRequest from './send-request';
const BASE_URL = '/api/services';

export function create(serviceData) {
    return sendRequest(`${BASE_URL}/create`, 'POST',serviceData);
  }