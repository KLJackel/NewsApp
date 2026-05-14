import { useState } from 'react'
import Header from '../src/components/Header'
import Footer from './components/Footer'
import MainSection from './components/MainSection'
import AddNews from './components/AddNews'
import './App.css'



function App() {
  const [news, setNews] = useState([
  {id:1, heading: 'War in Iran', category: 'Politics', description: 'A breakdown of the conflict so far'},
  {id:2, heading: 'Virus on Ship', category: 'News', description: 'Details of how the cruise ship is dealing with a viral outbreak'},
  {id:3, heading: 'War in Iran', category: 'Politics', description: 'A breakdown of the conflict so far'},
  {id:4, heading: 'Virus on Ship', category: 'News', description: 'Details of how the cruise ship is dealing with a viral outbreak'}
])

const [searchTerm, setSearchTerm] = useState('')
const [hideAll, setHideAll] = useState(true)

const [newHeading, setNewHeading] = useState('')
const [newDescription, setNewDescription] = useState('')

  return (
    <>
      <Header 
        onSearchTerm={e => setSearchTerm(e.target.value)}
        onClickSearch={() => {
          if (searchTerm !==``) {
            const filteredNews = news.filter(item => item.heading.toLowerCase().includes(searchTerm.toLowerCase()))
            setNews(filteredNews)
            } else {
              setNews([
                {id:1, heading: 'War in Iran', category: 'Politics', description: 'A breakdown of the conflict so far'},
                {id:2, heading: 'Virus on Ship', category: 'News', description: 'Details of how the cruise ship is dealing with a viral outbreak'},
                {id:3, heading: 'War in Iran', category: 'Politics', description: 'A breakdown of the conflict so far'},
                {id:4, heading: 'Virus on Ship', category: 'News', description: 'Details of how the cruise ship is dealing with a viral outbreak'}
              ])   
          }
        }}
        onClickShowAll={() => {
          setNews([
            {id:1, heading: 'War in Iran', category: 'Politics', description: 'A breakdown of the conflict so far'},
            {id:2, heading: 'Virus on Ship', category: 'News', description: 'Details of how the cruise ship is dealing with a viral outbreak'},
            {id:3, heading: 'War in Iran', category: 'Politics', description: 'A breakdown of the conflict so far'},
            {id:4, heading: 'Virus on Ship', category: 'News', description: 'Details of how the cruise ship is dealing with a viral outbreak'}  
          ])
        }}
        onClickHideAll={() => setHideAll(!hideAll)}
      />
      <div class="flex flex-wrap items-center justify-center mt-8 ">
        {hideAll && news.map((item) => {
          return <MainSection className={item.category==='Politics' ? 'politicsClass' : 'newsClass'} key={item.id} heading={item.heading} description={item.description} />
        })}
      </div>
      <AddNews  class="mt-8"
        onHeadingChange={(e) => setNewHeading(e.target.value)}
        onDescriptionChange={(e) => setNewDescription(e.target.value)}
        onSubmitNews={() => {
          if (newHeading && newDescription !== '') {
            setNews([
              ...news,
              { id: news.length + 1, heading: newHeading, category: 'News', description: newDescription }
            ])
            setNewHeading('')
            setNewDescription('')
          }
        }}
      />

      <Footer />
    </>
  )
}

export default App
