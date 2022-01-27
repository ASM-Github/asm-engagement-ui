import { useQuery } from "react-query";
import http from '../utils/axios-common'

const getActivityOptions = async () => {
    const { data } = await http.get('/activities/lists/options')
    return data;
};

const getActivitiesList = async () => {
    const { data } = await http.get('/activities/lists')
    return data;
};

export function useActivityOptions() {
    return useQuery("activities_option", getActivityOptions);
}

export function useActivitiesList() {
    return useQuery("activities_list", getActivitiesList);
}
