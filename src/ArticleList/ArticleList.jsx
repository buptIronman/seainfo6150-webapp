import React from 'react'
import ArticleListItem from "../ArticleListItem/ArticleListItem";
import styles from './ArticleList.module.css';

const ArticleList = (articles) => {

    if(!articles.articles.length){
        return (<div className={styles.List}>You have no data!</div>)
    }

    return (<div className={styles.List}>{articles.articles.map((article) => {
        return <ArticleListItem key={article.title} article={article}></ArticleListItem>
    })}</div>)
}

export default ArticleList