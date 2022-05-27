import React, {useEffect, useState} from "react";
import styled from 'styled-components';
import {getPopularMovies, getGenres, searchMovies} from "../../fetcher";
import { debounce } from "../../debounce";
import SearchFilters from "../../components/searchfilter";
import MovieList from "../../components/movielist";

const Discover = () => {
  
  const [keyword, setKeyword] = useState('')
  const [year, setYear] = useState(0)
  const [results, setResults] = useState([])
  const [totalCount, setTotalCount] = useState(0)
  const [genreOptions, setGenreOptions] = useState([])
  const [ratingOptions, ] = useState([
    { id: 7.5, name: 7.5 },
    { id: 8, name: 8 },
    { id: 8.5, name: 8.5 },
    { id: 9, name: 9 },
    { id: 9.5, name: 9.5 },
    { id: 10, name: 10 }
  ])
  const [languageOptions, ] = useState([
    { id: 'GR', name: 'Greek' },
    { id: 'EN', name: 'English' },
    { id: 'RU', name: 'Russian' },
    { id: 'PO', name: 'Polish' }
  ])

  useEffect(()=>{
    const fetchData = async () => {
      const popularResults = await getPopularMovies();
      setResults(popularResults?.results)
      setTotalCount(popularResults?.total_results)

      const genresResults = await getGenres();
      setGenreOptions(genresResults)
    }

    fetchData()
  }, [])

  useEffect(()=>{
    const search = async () => {
      if(keyword!=='' || year!==0){
        const searchResults = await searchMovies(keyword, year);
        setResults(searchResults?.results)
        setTotalCount(searchResults?.total_results)
      }
      
    }

    debounce(() => search())()
  }, [year, keyword])

  // TODO: Preload and set the popular movies and movie genres when page loads

  // TODO: Update search results based on the keyword and year inputs

    return (
      <>
      <TotalCount>{totalCount} results</TotalCount>
      <DiscoverWrapper>
        <MobilePageTitle>Discover</MobilePageTitle> {/* MobilePageTitle should become visible on mobile devices via CSS media queries*/}
        <MovieResults>
          <MovieList 
            movies={results || []}
            genres={genreOptions || []}
          />
        </MovieResults>
        <MovieFilters>
          <SearchFilters 
            genres={genreOptions} 
            ratings={ratingOptions}  
            languages={languageOptions}
            searchKeyword={(keyword)=>setKeyword(keyword)}
            keyword={keyword}
            searchYear={(year)=>setYear(year)} 
            year={year}
          />
        </MovieFilters>
        
      </DiscoverWrapper>
      </>
    )
}

const DiscoverWrapper = styled.main`
  display:flex;
  padding: 10px 35px;
  justify-content: space-between;

  @media (max-width: 977px) { 
    flex-direction: column;
    width: 100%;
  }
`

const MovieResults = styled.div`
  width: calc(100% - 295px);
`

const MovieFilters = styled.div`
  width: 280px;
  margin-top: 15px;
`

const MobilePageTitle = styled.h1`
  display: none;
  @media (max-width: 480px) { 
    display: block;
  }
`

const TotalCount = styled.strong`
  display: block;
  padding: 0 35px;
  margin-top: 10px;
`

export default Discover;