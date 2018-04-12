import React, { Component } from 'react';
import '../css/App.css';
import {VideoItem} from './VideoItem.js'
import  _ from 'lodash'
import {videos} from '../Data/videos.js'

export class VideoContainer extends Component {
    constructor(props ){
        super (props);
            this.state = {
                    isEditing : false
            };
    }
    renderItem (vid){  
        return (
            <div className = "videoItem" style = {{
                backgroundImage:  "url("+vid.thumbnail+")"
            }} >   
            <h2 className = "vidName">{vid.name} </h2>
            <h5 className = "vidDes"> {vid.description} </h5>
           </div>
        )
       }

    renderVideos(){
        return (_.map(window.videos,this.renderItem) )
    }
    render(){
    return (
    <div className = "VideoContainer">
        {this.renderVideos()}

   </div>
        );
    }
}   

export default VideoContainer;


