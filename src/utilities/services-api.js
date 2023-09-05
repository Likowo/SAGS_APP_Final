import sendRequest from './send-request';
const BASE_URL = '/api/services';

export function create(serviceData) {
    return sendRequest(`${BASE_URL}/create`, 'POST',serviceData);
  }

export function read(id) {
    return sendRequest(`${BASE_URL}/read`, 'GET',id);
  }

export function edit(id) {
    return sendRequest(`${BASE_URL}/editservice/${id._id}`, 'PUT',id);
  }

// export function delete(id) {
//     return sendRequest(`${BASE_URL}/delete`, 'DELETE',id);
//   }