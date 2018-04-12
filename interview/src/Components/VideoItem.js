import React, { Component } from 'react';
import '../css/App.css';


export class VideoItem extends Component {
    constructor(props ){
        super (props);
            this.state = {
                    isEditing : false
            }
    }
  
    renderVideoSection(){
        const {video} = this.props
        return (
            <h3> {video}  </h3>
        )
    }
    render(){
        
        return (
            <div className = "VideoItem">
                {this.renderVideoSection}
                </div>
        )
    }
}
   


export default VideoItem;
