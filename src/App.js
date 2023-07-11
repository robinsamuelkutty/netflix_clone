import React from 'react'
import NavBar from './Component/NavBar/NavBar'
import './App.css'
import Banner from './Component/Banner/Banner'
import Post from './Component/RowPost/Post'
import { originals,action,ComedyMovies,RomanceMovies,HorrorMovies,Documentaries} from './urls'

function App() {
  return (
    <div className='App'>
        <NavBar/>
        <Banner/>
        <Post url={originals} title='Netflix Originals'/>
        <Post url={action} title='Action' isSmall/>
        <Post url={RomanceMovies} title='Romance' isSmall/>
        <Post url={ComedyMovies} title='Comedy' isSmall/>
       
        <Post url={HorrorMovies} title='Horror' isSmall/>
        <Post url={Documentaries} title='Documentaries' isSmall/>

    </div>
  )
}

export default App