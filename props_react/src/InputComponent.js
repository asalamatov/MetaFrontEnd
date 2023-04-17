import {useState} from 'react';
export default function InputComponent() {
    const [inputText, setText] = useState("hello");

    function handleChange(e) {
        setText(e.target.value);
    }

    return (
        <>
            <input onChange={handleChange} value={inputText}/>
            <p>You typed: {inputText}</p>
            <button onClick={() => setText("hello")}>Reset</button>
        </>
    );
}