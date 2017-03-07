import React from 'react';
import List from './List';

export default class Search extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      initialItems: [
         "Apples",
         "Broccoli",
         "Chicken",
         "Duck",
         "Eggs",
         "Fish",
         "Granola",
         "Hash Browns"
       ],
       items: []
    }
    this.filterList = this.filterList.bind(this);
  }
  
  componentWillMount() {
    this.setState({items: this.state.initialItems})
  }
  
  filterList(event) {
    var updatedList = this.state.initialItems;
    updatedList = updatedList.filter(function(item){
      return item.toLowerCase().search(
        event.target.value.toLowerCase()) !== -1;
    });
    this.setState({items: updatedList});
  }
  
  render() {
    return (
      <div>
        <input type="text" placeholder="Search" onChange={this.filterList}/>
        <List items={this.state.items}/>
      </div>
    );
  }
}