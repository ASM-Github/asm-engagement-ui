import { useQuery } from "react-query";
import http from '../utils/axios-common'

//hooks for pending activities
const getScores = async () => {
    const { data } = await http.get('/scores/lists')
    return data;
};

export function useScores() {
    return useQuery("scores-list", getScores);
}