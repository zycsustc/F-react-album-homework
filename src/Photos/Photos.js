import React, { Component } from 'react';
import './Photos.scss';
import 'regenerator-runtime/runtime';

class Photos extends Component{
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.setState({
            photos: null,
            ready: false
        })
        fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${this.props.albumId}`)
            .then(response => response.json())
            .then((data) => {
                this.setState({
                    photo1 : data[0],
                    photo2 : data[1],
                    photo3 : data[2],
                    ready: true
                })
                localStorage.setItem("key",this.state.photos);
            })
    }

    render() {
        return (
            <div className={"photos"}>
                {this.state.ready ?
                    <div>
                        <h2>{this.props.albumTitle}</h2>
                        <div className={"album__photos"}>
                            <div>
                                <img src={ this.state.photo1.thumbnailUrl } alt={"first photo"}/>
                                <p>{this.state.photo1.title}</p>
                            </div>
                            <div>
                                <img src={ this.state.photo2.thumbnailUrl} alt={"second photo"}/>
                                <p>{this.state.photo2.title}</p>
                            </div>
                            <div>
                                <img src={ this.state.photo3.thumbnailUrl } alt={"third photo"}/>
                                <p>{this.state.photo3.title}</p>
                            </div>

                        </div>
                    </div>
                    : "Data being processed."
                }
            </div>
        )
    }
}

export default Photos;

