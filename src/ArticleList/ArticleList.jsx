import React from 'react'
import ArticleListItem from "../ArticleListItem/ArticleListItem";

const ArticleList = (articles) => {
    console.log(articles.articles)
    if(!articles.articles.length){
        return (<div>You have no data!</div>)
    }

    return (<ul>{articles.articles.map((article) => {
        return <li>{ArticleListItem(article)}</li>
    })}</ul>)
}

export default ArticleList