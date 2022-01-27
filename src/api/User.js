import axios from "axios";
import { useQuery, useQueryClient } from "react-query";

const USER_URL = 'http://localhost:8080/api/users/viewdetails/'
const fetchFellowById = ({ queryKey }) => {
    const fellowId = queryKey[1]
    return axios.get(`${USER_URL}/view-details/${fellowId}`)
}

export const useFellowById = (fellowId) => {
    const queryClient = useQueryClient()
    return useQuery(['fellow-profile-header', fellowId], fetchFellowById)
}
