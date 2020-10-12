import React from "react";
import HTMLText from "../HTMLText/HTMLText";

const DynamicArticle = (props) => {

  return (
    <article>
      {/* this is an example of how you insert props into a react component */}
      <div>
          <h1>{props.article.title}</h1>
          <address>{props.article.author}</address>
          <address>{props.article.authorEmail}</address>
      <HTMLText text={props.article.text} /></div>
        <time dateTime={props.article.displayDate}>{props.article.displayDate}</time>
        <br/>
        <time dateTime={props.article.timeStamp}>{props.article.timeStamp}</time>
    </article>
  );
};

export default DynamicArticle;
