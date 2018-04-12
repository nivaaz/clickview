import React, { Component } from 'react'
import _ from 'lodash'
export  class SearchBar extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         Catgegory:[], 
         level: 1
      }
    }
updateCatgegory(){
    var Catgegory = this.getLevelCatgegory(this.props.level)
    Catgegory = _.map(window.videos, this.getLevelCatgegory)
}
/*finds the cats for the current level*/
  getLevelCatgegory(video, level){
//will only return how mnay you need for the level
    var levels =  _.split(video.Catgegory, '->', this.state); // gets cats
    var curCat =levels[level]
        
    _.map(this.state.Catgegory, this.pushCatgegory(curCat))
    
}
/*works out if cat is new and should be put into state*/
pushCatgegory(cat){
  var i = 0;
  var len = this.state.length;
    while (i <len  )
    if (cat === this.state.Catgegory[i]){
        this.state.Catgegory.push(cat)
        this.setState={
            Catgegory: this.state.Catgegory
        }
        i++;
    }else {
        i++;
    }
}
levelup(){
    this.state.level ++;
    this.setState = {
        level : this.state.level
    }
    this.updateCatgegory()

}
/*what will display in the dom*/
renderCat(){
    var cats = _.map(this.state.Catgegory, this.returnCat)
    return cats;
}
/*will return Catgegory item * */
returnCat(cat){
    return (
        <div>
        <h2> {cat} </h2>
        </div>
    )
}
render() {
    return (
    <div className = "searchBar">
        {this.renderCat()}
        </div> 
    
    )
  }
}

export default  SearchBar;
