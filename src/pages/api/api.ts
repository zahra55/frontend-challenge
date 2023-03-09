import useSWR from 'swr'
import axios from 'axios'

export const fetcher = (url: string) => axios.get(url).then(response => response.data)
export const apiURL = `https://pre-prod.harbour.space/api/v1/scholarship_pages`


export const useApi = () => {


  // const {data, error} =   useSWR(url, fetcher)

}
