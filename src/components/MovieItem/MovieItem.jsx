import React, { useContext } from 'react';
import './MovieItem.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';

const MovieItem = ({ id, name, price, description, image }) => {
    const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

    const isInCart = cartItems[id] > 0; // Check if the item is in the cart

    return (
        <div className='movie-item'>
            <div className="food-item-img-container">
                <img className='food-item-image' src={image} alt={name} />
                {!isInCart ? (
                    <img 
                        className='add' 
                        onClick={() => addToCart(id)} 
                        src={assets.add_icon_white} 
                        alt='Add to cart' 
                    />
                ) : (
                    <div className='food-item-counter'>
                        <img 
                            onClick={() => removeFromCart(id)} 
                            src={assets.remove_icon_red} 
                            alt="Remove from cart" 
                        />
                        <p className='food-item-counter-p'>{cartItems[id]}</p>
                        <img 
                            onClick={() => addToCart(id)} 
                            src={assets.add_icon_green} 
                            alt="Add more" 
                        />
                    </div>
                )}
            </div>
            <div className="food-item-info">
                <div className="food-item-name-rating">
                    <p>{name}</p>
                    <img src={assets.rating_starts} alt="Rating stars" />
                </div>
                <p className="food-item-desc">{description}</p>
                <p className="food-item-price">${price}</p>
            </div>
        </div>
    );
};

export default MovieItem;
