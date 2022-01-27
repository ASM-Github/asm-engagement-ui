import { useQuery } from "react-query";
import http from '../utils/axios-common'

const getUsers = async () => {
    const { data } = await http.get('/users/lists')
    return data;
};

const getUserChart = async () => {
    const { data } = await http.get('/users/chart')
    return data;
};


export function useUsersList() {
    return useQuery("users-list", getUsers);
}


export function useUserChart() {
    return useQuery("users-chart", getUserChart);
}

