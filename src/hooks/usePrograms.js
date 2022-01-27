import { useQuery } from "react-query";
import http from '../utils/axios-common'

const getPrograms = async () => {
    const { data } = await http.get('/programs/lists')
    return data;
};

const getPIC = async () => {
    const { data } = await http.get('/users/piclists')
    return data;
};

const getProgramOptions = async () => {
    const { data } = await http.get('/programs/selectoptions')
    return data;
};

export function useProgramsList() {
    return useQuery("programs-list", getPrograms);
}

export function usePICLists() {
    return useQuery("piclists", getPIC);
}

export function useProgramsOptions() {
    return useQuery("program-options", getProgramOptions);
}
