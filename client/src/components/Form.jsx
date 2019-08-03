import React from 'react';

function Form(props) {
    return (
        <form
            onSubmit = {props.onSubmit}
        >
            <input 
                type="text"
                name="topText"
                id="top"
                placeholder="Top Text"
                onChange = {props.onChange}
            />
            <input 
                type="text"
                name="bottomText"
                id="bottom"
                placeholder="Bottom Text"
                onChange = {props.onChange}
            />
            <button type="submit">
                Gen
            </button>
        </form>
    )
}

export default Form