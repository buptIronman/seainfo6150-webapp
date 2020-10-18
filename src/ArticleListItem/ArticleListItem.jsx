import React from 'react'
import HTMLText from "../HTMLText/HTMLText";

const ArticleListItem = (article) => {
    return (<div>
            <h1>{article.title}</h1>
        <time dateTime={article.displayDate}>{article.displayDate}</time>
        <br/><br/>
        <HTMLText text={article.shortText}>{article.shortText}</HTMLText></div>)
}

export default ArticleListItem