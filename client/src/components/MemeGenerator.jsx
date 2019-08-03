import React, { Component } from 'react'
import Form from "./Form"
import Meme from './Meme'


class MemeGenerator extends Component {
    
    constructor() {
        super();
        this.state = {
            topText: "",
            bottomText: "",
            imgUrl: "https://imgflip.com/s/meme/Roll-Safe-Think-About-It.jpg",
            imgs:[]
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                this.setState({ imgs: response.data.memes})
            })
    }

    handleChange(event) {
        this.setState( { [event.target.name] : event.target.value} );
    }

    handleSubmit(event) {
        event.preventDefault();
        let idx = Math.floor(Math.random() * this.state.imgs.length)
        this.setState({imgUrl: this.state.imgs[idx].url});
    }

    render() {
        return (
            <div className="meme-generator">
                <Form 
                    onChange = {this.handleChange}
                    onSubmit = {this.handleSubmit}
                />
                <Meme 
                    {...this.state}
                />
            </div>
        )
    }
}

export default MemeGenerator