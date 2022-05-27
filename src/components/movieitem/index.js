import React from "react";
import styled from 'styled-components';
import { IMAGE_BASE_URL } from "../../constants";
import { primaryColor } from "../../colors";

export default function MovieItem ({ movie, genres }) {

  const getGenreName = (id) =>{
    const genre = genres.filter(genre=>genre.id===id)
    if(genre.length>0){
      return genre[0].name
    }
    return ''
  }

  const genreNamesArray = movie.genre_ids.map(id=>getGenreName(id))

  console.log(genreNamesArray)

  return (
    // TODO: Complete the MovieItem component
    <MovieItemWrapper>
      <LeftCont>
        <Image src={`${IMAGE_BASE_URL}${movie.poster_path}`} alt={movie.title+`image`} height={250} />
      </LeftCont>
      <RightCont>
        <RightTop>
        <TitleWrapper>
          <Title>{movie.title}</Title>
          <Rating>4.5</Rating>
        </TitleWrapper>
        <Genres>
          {genreNamesArray.join(" | ")}
        </Genres>
        <Description>
          {movie.overview}
        </Description>
        </RightTop>
        <Year>
          {movie.release_date}
        </Year>
      </RightCont>
    </MovieItemWrapper>
  )
}

const Image = styled.img`

@media (max-width: 977px) { 
  width: 100%;
}
`

const MovieItemWrapper = styled.div`
  display: flex;
  position: relative;
  background-color: white;
  border-radius: 5px;
  padding: 20px;
  margin: 15px 0;
  @media (max-width: 977px) { 
    width: 100%;
    flex-direction: column;
    flex:1;
  }

  @media (max-width: 600px) { 
    // width: 100%;
  }
`
const TitleWrapper = styled.div`
  display: flex;
`
const RightTop = styled.div`
  display: flex;
  flex-direction:column;
  flex:1;
`
const Genres = styled.div`
  color:${primaryColor};
  margin-bottom: 5px;
`

const Description = styled.div`

`

const Year = styled.div`
  align-self:bottom;
  color:${primaryColor};
`

const Rating = styled.div`
  align-self: center;
  padding: 3px;
  font-size: 1.4;
  border-radius:5px;
  color: white;
  background-color:${primaryColor};
`

const LeftCont = styled.div`

`

const RightCont = styled.div`
  display:flex;
  flex: 1;
  padding-left:10px;
  flex-direction:column;

`

const Title = styled.h2`
  font-size: 1.4;
  margin: 5px 0px;
  flex: 1;
`;