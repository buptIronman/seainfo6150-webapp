import React,{useState} from 'react'
import HTMLText from "../HTMLText/HTMLText";
import ArticleTextToggleButton from "../ArticleTextToggleButton/ArticleTextToggleButton";
import styles from './ArticleListItem.module.css';

const ArticleListItem = (article) => {
    const [status, setStatus] = useState(false);

    const onClick = (buttonState) => {
        console.log(buttonState+ "item")
        setStatus(!buttonState);
    }

    if(status){
        return (<div className={styles.item}>
            <h1 className={styles.title}>{article.title}</h1>
            <HTMLText className={styles.text} text={article.shortText} >{article.shortText}</HTMLText>
            <time dateTime={article.displayDate} className={styles.time}>{article.displayDate}</time>
            <ArticleTextToggleButton onClick={onClick} ButtonText="show less"></ArticleTextToggleButton>
        </div>)}
    else
        return(<div className={styles.item}>
            <h1 className={styles.title}>{article.title}</h1>
            <ArticleTextToggleButton  onClick={onClick} ButtonText="show more"></ArticleTextToggleButton>
        </div>)


}

export default ArticleListItem