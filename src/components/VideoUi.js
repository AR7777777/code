import React from 'react'
import { useGetMovieVideoQuery } from '../features/movieApi'

const VideoUi = ({ id }) => {

  const { isError, isLoading, data, error } = useGetMovieVideoQuery(id);
  console.log(data);
  return (
    <div>
      {data && <iframe allowFullScreen className='aspect-video w-[75%]'
          src={`https://www.youtube.com/embed/${data?.results[0]?.key}`}>
        </iframe> 
      }
    </div>
  )
}

export default VideoUi