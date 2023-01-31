import Image from 'next/image';
import * as React from 'react';
import { Movie } from '../types';

interface IThumbnailProps {
    movie:Movie
}

const Thumbnail: React.FunctionComponent<IThumbnailProps> = ({movie}) => {
    // const [currentMovie, setCurrentMovie] = useRecoilState(movieState)
    // const [showModal, setShowModal] = useRecoilState(modalState)
  
    return (
      <div
        className={`relative h-28 min-w-[180px] scrollebar-hide cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105`}
        // onClick={() => {
        //   setCurrentMovie(movie)
        //   setShowModal(true)
        // }}
      >
        <Image
          alt=''
          src={`https://image.tmdb.org/t/p/w500${
            movie.backdrop_path || movie.poster_path
          }`}
          className="rounded-sm object-cover md:rounded"
         fill
        />
      </div>
    )
};

export default Thumbnail;
