import axios from "axios";
import {
  API_HOST_PREFIX,
  onGlobalError,
  onGlobalSuccess,
} from "./serviceHelpers";

const endpoint = `${API_HOST_PREFIX}/api`;

const addLocation = (payload) => {
  const config = {
    method: "POST",
    url: `${endpoint}/location`,
    data: payload,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };
  return axios(config)
    .then((id) => {
      payload.id = id.data.item;
      return payload;
    })
    .catch(onGlobalError);
};

const updateLocation = (payload, Id) => {
  const config = {
    method: "PUT",
    url: `${endpoint}/location/${Id}`,
    data: payload,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };
  return axios(config).then(onGlobalSuccess).catch(onGlobalError);
};

const deleteLocation = (Id) => {
  const config = {
    method: "DELETE",
    url: `${endpoint}/location/${Id}`,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };
  return axios(config).then(onGlobalSuccess).catch(onGlobalError);
};

const getOrganizations = () => {
  const config = {
    method: "GET",
    url: `${endpoint}/organizations/paginate?pageIndex=0&pageSize=10`,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };
  return axios(config).then(onGlobalSuccess).catch(onGlobalError);
};
//getOrganizations url is hard coded for now: will change once I add buttons for pagination

const getState = () => {
  const config = {
    method: "GET",
    url: `${endpoint}/states`,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };
  return axios(config).then(onGlobalSuccess).catch(onGlobalError);
};

const getLocationByUserId = () => {
  const config = {
    method: "GET",
    url: `${endpoint}/location`,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };
  return axios(config).then(onGlobalSuccess).catch(onGlobalError);
};

const locationCalls = {
  addLocation,
  updateLocation,
  deleteLocation,
  getOrganizations,
  getState,
  getLocationByUserId,
};

export default locationCalls;
