import axios from 'axios'

const youtube = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
})

export const getVideosFromPlaylist = async (playlistId: string) => (
  await youtube.get('/playlistItems', {
    params: {
      part: 'snippet',
      playlistId,
      maxResults: 25,
      key: import.meta.env.VITE_YOUTUBE_API_KEY,
    },   
}))

export const getVideos = () => {
  (
    youtube.get('/videos', {
      params: {
        part: ['snippet', 'contentDetails'],
        videoCategoryId: 44,
        myRating: 'none',
        key: import.meta.env.VITE_YOUTUBE_API_KEY,
      },
    })
  )
}