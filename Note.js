
 import React from 'react';
 import {StyleSheet ,  Text ,View ,TouchableOpacity,TextInput } from 'react-native';

export default class Note extends React.Component {
    constructor(){
        super();
        this.viewList = this.viewList.bind(this);
        this.editTodo = this.editTodo.bind(this);
        this.togelState = this.togelState.bind(this);
        this.state = {
            isEditing : false
        }
    }  
    editTodo(){
        return(
            <view>
                <TextInput>{this.props.val.note}</TextInput>
                <TextInput>{this.props.val.date}</TextInput>
                <button>Update List</button>
            </view>
            
        );
        
    }
    viewList(){
        return(
            <View style = {styles.note}>
            <Text style = {styles.noteText}>{this.props.val.date}</Text>
            <Text style = {styles.noteText}>{this.props.val.note}</Text>
            <TouchableOpacity style = {styles.noteDelete} onPress={()=>{this.props.deleteMethod(this.props.index)}}>
                <Text style = {styles.noteDeleteText}>D</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.noteEdit} onPress ={()=>this.togelState()}>
                <Text style = {styles.noteDeleteText}>Edit</Text>
            </TouchableOpacity>   
        </View>
        )
    }   
    togelState(){
        const isEditing = this.state.isEditing;
        this.setState({
            isEditing : !isEditing
        })
    }
  render() {
      const isEditing = this.state.isEditing;
    return (    
        isEditing ?  this.editTodo() :  this.viewList()
    );
  }
}

const styles = StyleSheet.create({
    note:{
        position : "relative",
        padding: 20 ,
        paddingRight: 100,
        borderBottomWidth: 2,
        borderColor: "#ededed",
    },
    noteText:{
        paddingLeft: 20,
        borderLeftWidth:10,
        borderLeftColor:"#E91E63",
    },
    noteDelete:{
        position : "absolute",
        alignItems : "center",
        justifyContent : "center",
        backgroundColor:"#2980b9",
        padding: 10,
        top:10,
        bottom : 10 ,
        right: 10, 
    },
    noteEdit:{
        position : "absolute",
        alignItems : "center",
        justifyContent : "center",
        backgroundColor:"#2980b9",
        padding: 10,
        top:10,
        bottom : 10 ,
        right: 45, 
    },
    noteDeleteText:{
        color:"white",
    },
});


































