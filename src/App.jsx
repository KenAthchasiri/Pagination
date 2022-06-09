import { useEffect, useState } from 'react'
import './App.css'
import FoodComponent from './components/FoodComponent'
import MenuData from './data/MenuData'

function App() {
  const [foodData, setFoodData] = useState(MenuData)
  const [dataInpage, setDataInpage] = useState([])
  const [page,setPage] = useState(0)

  const pagination = () => {
    const foodPerPage = 3
    const pages = Math.ceil(MenuData.length / foodPerPage)
    const newFood = Array.from({length:pages},(data,i)=>{
      const start = i * foodPerPage
      return MenuData.slice(start,start+foodPerPage)
    })
    return newFood
    
  }
  const handlePage = (index) => {
    setPage(index)
  }
  useEffect(()=>{
    const paginate = pagination()
    setDataInpage(paginate)
    setFoodData(paginate[page])
  },[page])

  return (
    <div className='App'>
      <h1>FoodCard | Pagination</h1>
      <div className='container'>
        {foodData.map((element,i)=>{
          return <FoodComponent key={i} {...element}/>
        })}
      </div>
      <div className='pagination-container'>
        {dataInpage.map((element,i)=>{
          return <button className={i === page ? 'page-btn active' : 'page-btn'} key={i} onClick={()=>handlePage(i)}>{i+1}</button>
        })}
      </div>
      
      
    </div>
  )
}

export default App
