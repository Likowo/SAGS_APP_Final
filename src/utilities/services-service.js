// Import all named exports attached to a usersAPI object
// This syntax can be helpful documenting where the methods come from
import * as servicesAPI from './services-api';

export async function create(serviceData) {
  // Delegate the network request code to the users-api.js API module
  // which will ultimately return a JSON Web Token (JWT)
 const data = await servicesAPI.create(serviceData);

  // Baby step by returning whatever is sent back by the server
  return data;
}

export async function read(getById) {
  // Delegate the network request code to the users-api.js API module
  // which will ultimately return a JSON Web Token (JWT)
 const data = await servicesAPI.read(getById);

  // Baby step by returning whatever is sent back by the server
  return data;
}

export async function edit(editById) {
  // Delegate the network request code to the users-api.js API module
  // which will ultimately return a JSON Web Token (JWT)
 const data = await servicesAPI.edit(editById);

  // Baby step by returning whatever is sent back by the server
  return data;
}



