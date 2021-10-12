import http from "./common-axios";

const create = data => {
    return http.post("/programs", data)
}

export default create;