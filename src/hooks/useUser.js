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

const getViewUser = async (userID) => {
    const { data } = await http.get(`/users/view/${userID}`);
    return data;
};

export const useViewUser = (userID) => {

    return useQuery(['view-user', getViewUser],
        () => getViewUser(userID))
};
