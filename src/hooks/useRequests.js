import { useQuery } from "react-query";
import http from '../utils/axios-common'

//hooks for pending activities
const getActivityReqs = async () => {
    const { data } = await http.get('/activity-request/lists')
    return data;
};

export function useActivityReqs() {
    return useQuery("pending-activities", getActivityReqs);
}

//hooks for pending programs
const getProgramReqs = async () => {
    const { data } = await http.get('/program-request/lists')
    return data;
};

export function useProgramReqs() {
    return useQuery("pending-programs", getProgramReqs);
}



