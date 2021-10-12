import http from "../utils/http-comman";

const getAll = () => {
    return http.get("/programs/lists");
};

const get = id => {
    return http.get(`/users/lists/${id}`);
};

const create = data => {
    return http.post("/fellows/create", data);
};

const update = (id, data) => {
    return http.put(`/users/assign/${id}`, data);
};

const remove = id => {
    return http.delete(`/fellows/delete/${id}`);
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
    update,
    remove,
    removeAll,
    findByTitle
};
