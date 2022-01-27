import { useQuery } from "react-query";
import http from '../utils/axios-common'

const getProgramById = async (program_id) => {
    const { data } = await http.get(`/programs/${program_id}`);
    return data;
};

export const useProgram = (id) => {

    return useQuery(['programByID', id],
        () => getProgramById(id))
};
