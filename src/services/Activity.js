import http from "../utils/http-comman";

const getAll = () => {
    return http.get("/programs/lists");
};

const get = id => {
    return http.get(`/users/lists/${id}`);
};

const create = data => {
    return http.post("/activities/create", data);
};

const assign = (id, data) => {
    return http.put(`/programs/${id}`, data);
};

const remove = id => {
    return http.delete(`/activities/${id}`);
};

const removeAll = () => {
    return http.delete(`/users/lists`);
};

const findByTitle = title => {
    return http.get(`/users/lists?name=${title}`);
};

export default {
    getAll,
    get,
    create,
    assign,
    remove,
    removeAll,
    findByTitle
};
