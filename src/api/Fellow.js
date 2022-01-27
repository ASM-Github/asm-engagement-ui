import axios from "axios";

const FELLOW_URL = 'http://localhost:8080/api/fellows'

export function FetchFellowById({ fellowId }) {
    return axios.get('http://localhost:8080/api/fellows/' + fellowId)
}
