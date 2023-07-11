import React, { useEffect, useState } from 'react'
import "./Post.css"
import axios from '../../axios'
import {imageUrl} from '../../constants/constants'

function Post(props) {
  const [movies, setMovies] = useState([])
    useEffect(() => {
      axios.get(props.url).then((response)=>{
        console.log(response.data)
        setMovies(response.data.results)
      })
      
    }, )
    
  return (
    
    <div className='row'>
        <h1 >{props.title}</h1>
        <div className= 'posters'>
          {movies.map((obj)=>
          
          <img className={props.isSmall ? 'smallPoster' : 'poster'} src={`${imageUrl+obj.backdrop_path}`} alt=""  />         
          
)}

          <div className='movieTitle'>
           <p>{movies ? movies.title : "Movie"}</p>
           </div>
            

        </div>
    </div>
  )
}

export default Post