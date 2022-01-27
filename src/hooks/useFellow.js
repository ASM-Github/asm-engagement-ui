import { useQuery } from "react-query";
import http from '../utils/axios-common'

const getFellowScore = async (fellowId) => {
    const { data } = await http.get(`/fellows/score/${fellowId}`);
    return data;
};

const getFellowPrograms = async (fellowId) => {
    const { data } = await http.get(`/fellows/programs/${fellowId}`);
    return data;
};

const getProgramsByFID = async (fellowId) => {
    const { data } = await http.get(`/fellows/programs-select/${fellowId}`);
    return data;
};

const getFellowById = async (fellowId) => {
    const { data } = await http.get(`/fellows/${fellowId}`);
    return data;
};

const getInvolvementByFID = async (fellowId) => {
    const { data } = await http.get(`/fellows/programs/${fellowId}`);
    return data;
};

export const useFellowScore = (fellowId) => {
    return useQuery(['fellow-score', getFellowScore],
        () => getFellowScore(fellowId))
};

export const useFellowPrograms = (fellowId) => {
    return useQuery(['fellow-programs', getFellowPrograms],
        () => getFellowPrograms(fellowId))
};

export const useFellowListByFID = (fellowId) => {
    return useQuery(['fellowlist-by-FID', getProgramsByFID],
        () => getProgramsByFID(fellowId))
};

export const useFellowById = (fellowId) => {
    return useQuery(['fellowByID', getFellowById],
        () => getFellowById(fellowId))
};

export const useInvolvementByFID = (fellowId) => {
    return useQuery(['involvementByFID', getInvolvementByFID],
        () => getInvolvementByFID(fellowId))
};



