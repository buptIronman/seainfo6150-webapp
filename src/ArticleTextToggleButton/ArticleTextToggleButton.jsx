import React, {useState} from 'react';
import styles from './ArticleTextToggleButton.module.css';

const ArticleTextToggleButton = ({ButtonText, onClick}) => {

    const [buttonState, setButtonState] = useState(false);


    return (<div>
        <button onClick={() => {
            console.log(1)
            onClick(buttonState);
            setButtonState(!buttonState);
            console.log(buttonState);
        }} className={styles.button}>{ButtonText}</button>
    </div>)
}


export default ArticleTextToggleButton;