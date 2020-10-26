import React,{useState} from 'react'
import HTMLText from "../HTMLText/HTMLText";
import ArticleTextToggleButton from "../ArticleTextToggleButton/ArticleTextToggleButton";

const ArticleListItem = (article) => {

    const [status, setStatus] = useState(false);

    const onClick = (buttonState) => {
        console.log(buttonState+ "item")
        setStatus(!buttonState);
    }

    if(status){
        return (<div>
            <h1>{article.title}</h1>
            <time dateTime={article.displayDate} >{article.displayDate}</time>
            <br/><br/>
            <HTMLText text={article.shortText} >{article.shortText}</HTMLText>
            <ArticleTextToggleButton onClick={onClick} ButtonText="show less"></ArticleTextToggleButton>
        </div>)}
    else
        return(<div>
            <h1>{article.title}</h1>
            <ArticleTextToggleButton  onClick={onClick} ButtonText="show more"></ArticleTextToggleButton>
        </div>)


}

export default ArticleListItem