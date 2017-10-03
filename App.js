
 import React from 'react';
 import {StyleSheet ,  Text ,View , TextInput,ScrollView ,TouchableOpacity } from 'react-native';
 import Note from "./components/Note"

export default class App extends React.Component {
  state = {
    noteArray:[],
    noteText : '',
  }
  constructor(){
    super();
    this.addNote = this.addNote.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
  }
  addNote(){
    if(this.state.noteText){
      var d = new Date();
      var min = d.getMinutes();
      var sec = d.getSeconds();
      if(min<10){
        min = "0"+min;
      }
      if(sec<10){
        sec = "0"+sec;
      }
      this.state.noteArray.push({'date' : d.getFullYear() +  "/" + (d.getMonth() + 1) + "/" + d.getDate() + "  " + (d.getHours()+9) + ":" + min+ ":" +sec , 'note' : this.state.noteText}) 
      this.setState({noteArray : this.state.noteArray});
      this.setState({noteText : ''});
    }
  }
  deleteNote(index){
    noteArray = this.state.noteArray;
    noteArray.splice(index,1);
    this.setState({
      noteArray : noteArray
    })
  }
  
  render() {
    let notes = this.state.noteArray.map((val,key ,index)=>{
      return(<Note key={key} keyval={key}  val={val} index={index} deleteMethod={this.deleteNote} />)
    });
    return (    
      <View style = {styles.container}>
        
        <View style = {styles.header}>
          <Text style = {styles.headerText}>--NOTER--</Text>
        </View>
        
        <ScrollView style = {styles.scrollContainer}>
          {notes}
        </ScrollView>
        
        <View style = {styles.footer}>
          
          <TouchableOpacity  onPress={this.addNote}  style = {styles.addBtn} >
            <Text  style = {styles.addBtnTxt}>+</Text>
          </TouchableOpacity>
          <TextInput onChangeText={(noteText)=>{this.setState({noteText})}} value={this.state.noteText} 
            style = {styles.textInput} placeholder=" >Write note here" 
            placeholderTextColor="white" >            
          </TextInput>
        </View>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex : 1,
  },
  header:{
    backgroundColor: "#800080",
    alignItems: "center",
    justifyContent : "center",
    borderBottomWidth : 8,
    borderBottomColor : "#000" ,
  },
  headerText:{
    color : "white" ,
    fontSize : 18 ,
    padding :40,
  },
  scrollContainer:{
    flex : 1,
    marginBottom : 100,
  },
  footer:{
    position : "absolute",
    alignItems : "center",
    justifyContent : "center",
    bottom : 0 ,
    right: 0,
    left : 0, 
  },
  addBtn:{
    backgroundColor : "#800080",
    width : 90 ,
    height : 90 ,
    borderRadius: 50 , 
    // borderColor: "#ccc" ,
    alignItems: "center" ,
    justifyContent: "center" ,
    elevation: 100,
    marginBottom: -45 ,
  },
  addBtnTxt :{
    color :"#000" ,
    fontSize : 48,
    fontWeight: "bold"
  },
  textInput:{
    alignSelf : "stretch",
    fontSize:22,
    color : "#fff",
    padding : 20,
    paddingTop: 46,
    backgroundColor:"#252525" ,
    borderTopWidth : 6 ,
    borderTopColor: "#000"
  }
});




// import React, { Component } from 'react';
// import { Image } from 'react-native';

// export default class Bananas extends Component {
//   render() {
//     let pic = {
     
//     };
//     return (
//       <view>

//       </view>
//     );
//   }
// }


































