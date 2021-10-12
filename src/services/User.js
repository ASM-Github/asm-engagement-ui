import http from '../utils/http-comman';

const getAll = () => {
    return http.get("/users/lists");
};

const get = id => {
    return http.get(`/users/lists/${id}`);
};

const create = data => {
    return http.post("/users/register", data);
};

const assign = (id, data) => {
    return http.patch(`/users/assign/${id}`, data);
};

const remove = id => {
    return http.delete(`/users/delete/${id}`);
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
