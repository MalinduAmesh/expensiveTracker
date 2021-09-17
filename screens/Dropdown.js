import DropDownPicker from 'react-native-dropdown-picker';
import React, { Component } from 'react';

export default class App extends Component {
    constructor(props) {
      super(props);
      
      this.state = {
        open: false,
        value: null,
        items: [{},]
      };
  
      this.setValue = this.setValue.bind(this);
    }
  
    setOpen(open) {
      this.setState({
        open
      });
    }
  
    setValue(callback) {
      this.setState(state => ({
        value: callback(state.value)
      }));
    }
  
    setItems(callback) {
      this.setState(state => ({
        items: callback(state.items)
      }));
    }
  
    render() {
      const { open, value, items } = this.state;
  
      return (
        <DropDownPicker
          open={open}
          value={value}
          items={items}
        //   this.setOpen={setOpen}
        //   setValue={setValue}
        //   setItems={setItems}
      
        />
      );
    }
  }