import { useQuery } from "react-query";
import http from '../utils/axios-common'

const getFellowScore = async (fellowId) => {
    const { data } = await http.get(`/users/viewdetails/${fellowId}`);
    return data;
};

export const useScore = (fellowId) => {

    return useQuery(['scorebyid', fellowId],
        () => getFellowScore(fellowId));
};
