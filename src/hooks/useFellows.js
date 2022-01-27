import { useQuery } from "react-query";
import http from '../utils/axios-common'

const getFellows = async () => {
    const { data } = await http.get('/fellows/lists')
    return data;
};

export function useFellowsList() {
    return useQuery("fellows-list", getFellows);
}

const getParticipants = async () => {
    const { data } = await http.get('/fellows/participants')
    return data;
};

export function useSelectParticipants() {
    return useQuery("fellows-list", getParticipants);
}
