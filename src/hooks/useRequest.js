import { useQuery } from "react-query";
import http from '../utils/axios-common'

//hooks for pending activity
const getActivityReqbyFID = async (fellowId) => {
    const { data } = await http.get(`/activity-request/fellow/${fellowId}`);
    return data;
};

export const useActivityReqbyFID = (fellowId) => {

    return useQuery(['activity-reqs-byFID', getActivityReqbyFID],
        () => getActivityReqbyFID(fellowId))
};

//hooks for pending program

const getProgramReqByID = async (fellowId) => {
    const { data } = await http.get(`/program-request/fellow/${fellowId}`);
    return data;
};

export const useProgramReqByID = (fellowId) => {

    return useQuery(['program-request-fid', getProgramReqByID],
        () => getProgramReqByID(fellowId))
};
