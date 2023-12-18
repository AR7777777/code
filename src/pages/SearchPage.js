import React from 'react'
import { useGetSearchMovieQuery } from '../features/movieApi'
import { useParams } from 'react-router';

const SearchPage = () => {

  const {search} = useParams();

  const{isLoading, data, error, isError} = useGetSearchMovieQuery(search ?? 'perfume');
  return (
    <div>
      
    </div>
  )
}

export default SearchPage
