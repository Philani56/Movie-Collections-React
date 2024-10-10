import React from 'react'
import './ExploreMore.css'
import { menu_list } from '../../assets/assets'

const ExploreMore = ({category,setCategory}) => {

  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore our movies</h1>
        <p className='explore-menu-text'>Choose from a wide selection of genres, including action, drama, comedy, and romance. Whether you're in the mood for a thrilling adventure or a heartfelt story, we have the perfect film for you!</p>
        <div className="explore-menu-list">
            {menu_list.map((item,index)=>{
                return (
                <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)}     key={index}    className='explore-menu-list-item'>
                    <img className={category===item.menu_name?"active":""}   src={item.menu_image} alt="" />
                    <p>{item.menu_name}</p>
                </div>
                )
            })}
        </div>
        <hr/>
    </div>
  )
}

export default ExploreMore