import http from "./axios-common";
const USER = "/users";
//const FELLOW = "/fellows"
const ACTIVITY = "/activities";
const PROGRAM = "/programs";
export const activityPOST = (activities) => {
  return http.post(`${ACTIVITY}/create`, activities);
};

export const createUser = (users) => {
  return http.post("/users/register", users);
};

export const createProgram = (programs) => {
  return http.post(`${PROGRAM}/create`, programs);
};

export const fellowPOST = (fellows) => {
  return http.post(`${USER}/createfellow`, fellows);
};

export const postPendingAct = (activity) => {
  return http.post("/pending-activities/new", activity);
};

export const updateProfile = (id, details) => {
  return http.post(`/fellows/update/${id}`, details);
};

//programs here

export const requestProgram = (details) => {
  return http.post("/program-request/new", details);
};

export const updateProgram = (programId, data) => {
  return http.post(`/programs/update/${programId}`, data);
};

//approve program
export const approveProgram = (id, data) => {
  return http.put(`/program-request/approve/${id}`, data);
};

//approve activity
export const approveActivity = (id, data) => {
  return http.put(`/activity-request/approve/${id}`, data);
};

// delete pending-program by id
export const deletePendingProgram = (id) => {
  return http.delete(`/program-request/delete/${id}`);
};

// delete pending-program by id
export const deletePendingActivtiy = (id) => {
  return http.delete(`/activity-request/delete/${id}`);
};

//endpoints for activities

//update activity
export const updateActivity = (activityId, data) => {
  return http.put(`/activities/update/${activityId}`, data);
};

//endpoints for activities requests

//batch requests
export const requestActivities = (fellowId, programId, activities) => {
  return http.post(
    `/activity-request/batchcreate/${fellowId}/${programId}`,
    activities
  );
};

// delete fellow by id
export const deleteFellow = (id) => {
  return http.delete(`/fellows/${id}`);
};

// delete program by id
export const deleteProgram = (id) => {
  return http.delete(`/programs/${id}`);
};

// delete Activity by id
export const deleteActivity = (id) => {
  return http.delete(`/activity/${id}`);
};
