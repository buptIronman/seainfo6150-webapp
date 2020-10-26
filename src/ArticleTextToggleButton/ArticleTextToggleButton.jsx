import React, {useState} from 'react';

const ArticleTextToggleButton = ({ButtonText, onClick}) => {

    const [buttonState, setButtonState] = useState(false);


    return (<div>
        <button onClick={() => {
            console.log(1)
            onClick(buttonState);
            setButtonState(!buttonState);
            console.log(buttonState);
        }}>{ButtonText}</button>
    </div>)
}


export default ArticleTextToggleButton;