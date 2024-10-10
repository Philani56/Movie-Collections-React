import React, { useContext } from 'react';
import './MovieDisplay.css';
import { StoreContext } from '../../context/StoreContext';
import MovieItem from '../MovieItem/MovieItem';

const MovieDisplay = ({ category }) => {
    const { food_list } = useContext(StoreContext);
    
    return (
        <div className='movie-display' id='movie-display'>
            <h2>Top Movies you like</h2>
            <div className="movie-display-list">
                {food_list.map((item) => {
                  if (category==="All" || category===item.category) {
                    return (
                      <MovieItem 
                          key={item._id}  // Using _id as the unique key
                          id={item._id}
                          name={item.name} 
                          description={item.description} 
                          price={item.price} 
                          image={item.image} 
                      />
                  );
                  }
                    
                })}
            </div>
        </div>
    );
}

export default MovieDisplay;
