import React, { useState,useEffect } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

const News = (props) =>  {
  const [articles, setarticles] = useState([])
  const [loading, setloading] = useState(true)
  const [page, setpage] = useState(1)
  const [totalResults, settotalResults] = useState(0)

  const capitalize =(string)=>{
    return string.charAt(0).toUpperCase()+string.slice(1);
  }
 
  const updateNews = async () =>{
    let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=6974e70222e8472fa16bbf2db7d81c6b&page=${page}&pageSize=${props.pageSize}`;
    setloading(true)
    let data=await fetch(url);
    let parseddata= await data.json()
    console.log(parseddata);
    setarticles(parseddata.articles)
    settotalResults(parseddata.totalResults)
    setloading(false)
    
  }
  useEffect(() => {
    updateNews();      //run 1 time
    }, [])
  

    const handlePrevClick = async () =>{
      setpage(page-1)
      updateNews();
    }  

    const handleNextClick = async () =>{
      setpage(page+1)
      console.log("Next")
    }   
    
    const fetchMoreData = async () => {   
      const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&&apikey=6974e70222e8472fa16bbf2db7d81c6b&page&page=${page+1}&pageSize=${props.pageSize}`;
      setpage(page+1) 
      let data = await fetch(url);
      let parsedData = await data.json()
      setarticles(articles.concat(parsedData.articles))
      settotalResults(parsedData.totalResults)
    }
 
    return (
        <div className='container my-3' >
            <h2 style={{marginTop:'59px', textTransform:"uppercase"}}>Top {props.category} Headlines </h2>
            {loading && <Spinner/>}
            <div className='row'>
            
            
              {!loading && articles.map((element)=>{

                return <div className='col-md-4' key={element.url}>
                <NewsItem  title={element.title?element.title.slice(0,40):" "} description={element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} publishedAt={element.publishedAt} source={element.source.name}/>       
            </div>
            })}
            </div>
            <div className='container d-flex justify-content-between'>
                <button disabled={page<=1} type="button" className="btn btn-dark" onClick={handlePrevClick}>&larr;Previos</button>
                <button disabled={page + 1 > Math.ceil(totalResults / props.pageSize)} type="button" onClick={handleNextClick} className="btn btn-dark" >Next &rarr;</button>
            </div>
    
        </div>
     
    )
  }


//News.defaultProps={
//    country: 'in' ,
//    pageSize:12,
//  }
//News.PropTypes={
//    country: PropTypes.string,
//    pageSize:PropTypes.number,
//  }
export default News