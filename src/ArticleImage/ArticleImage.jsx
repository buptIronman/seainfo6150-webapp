import React from 'react';
import styles from './ArticleImage.module.css';

const ArticleImage = ({url, title}) => {

    return (<img className={styles.image} src={url} title={title}errorMessage="something bad happen" />);

}

export default ArticleImage;