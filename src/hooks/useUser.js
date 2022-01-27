import { useQuery } from "react-query";
import http from '../utils/axios-common'

const getUserById = async (fellowId) => {
    const { data } = await http.get(`/users/viewdetails/${fellowId}`);
    return data;
};

export const useUser = (userId) => {

    return useQuery(['fellow-profile-header', userId],
        () => getUserById(userId))
};

const getUser = async (userId) => {
    const { data } = await http.get(`/users/view/${userId}`);
    return data;
};

export const useViewUser = (userId) => {

    return useQuery(['view-user', userId],
        () => getUser(userId))
};