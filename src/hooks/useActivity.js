import { useQuery } from "react-query";
import http from '../utils/axios-common'

const getUserById = async (fellowId) => {
    const { data } = await http.get(`/activities/viewdetails/${fellowId}`);
    return data;
};

export const useUser = (userId) => {

    return useQuery(['fellow-profile-header', userId],
        () => getUserById(userId))
};

//get activity byID

const getActivityById = async (activityId) => {
    const { data } = await http.get(`/activities/${activityId}`);
    return data;
};

export const useActivityById = (activityId) => {

    return useQuery(['activitybyId', activityId],
        () => getActivityById(activityId))
};
