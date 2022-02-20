import useSWR from 'swr'
import fetcher from './fetcher'

export const useMe = ()=>{
    const {data, error}= useSWR('/me', fetcher) //its a library to do data fetching and stores it locally and dynamically(?) update the data

    return {
        user:data,
        isLoading: !data && !error
    }
}

export const usePlaylist = ()=>{
    const{ data, error} = useSWR('/playlist', fetcher)
    return {
        playlists: (data as any) || [],
        isLoading: !data && !error,
        isError:console.error,
        
    }
}