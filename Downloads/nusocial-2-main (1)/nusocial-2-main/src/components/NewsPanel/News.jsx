import React from 'react'
import "./news.css"
import NewsFeed from'./NewsFeed'
import { NewsData } from '../TestData/TestData'

//Change props of NewsFeed to alter content of News panel
const News = () => {
  return (
    <div className = "News">
    {NewsData.map(news => (
      <NewsFeed key = {news.id} img = {news.img} profileIcon = {news.profileIcon} title = {news.title} link = {news.link} />
    ))}
    </div>
  )
}

export default News;



