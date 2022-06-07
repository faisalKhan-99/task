import React,{useEffect,useState} from 'react';

import {View,Text,StyleSheet,Image,Dimensions,TextInput,TouchableOpacity,Alert} from 'react-native';
import auth from '@react-native-firebase/auth';


const Login = ({navigation}) =>{

    const[email,setEmail] = useState('');
    const[password,setPassword] = useState('');
    const {  height } = Dimensions.get("window");
    const {  width } = Dimensions.get("window");


    const login = async(email,password) =>{
      try{
        auth().signInWithEmailAndPassword(email,password).then((res)=>{
        
          if(res.user.uid){
            navigation.replace('MainStack')
          }
          else{
            Alert.alert('Something is wrong')
          }
        })
      }catch(e){
        console.log(e)
      }
    }

    return(
        
        <View styles={styles.container}>
            <Image
        source={require("./assets/logo.png")}
        style={{
           height: height/2.5,
           width: width,
           backgroundColor: "white",
           zIndex: 10,
           borderRadius: 10,
           top:-30
         }}
       />
           <View style={styles.loginbox}>
            <Text style = {{fontWeight:'bold',fontSize:26,marginTop:10,color:'black'}}>Login</Text>
           </View>
           
        <View style={styles.inputView}>
        <TextInput
        value={email}
          style={styles.TextInput}
          multiline
          placeholder="Enter Your Email"
          placeholderTextColor="grey"
          secureTextEntry={true}
          onChangeText={(email) => setEmail(email)}
        />
      </View>
      
      <View style={styles.inputView}>
        <TextInput
        value={password}
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="grey"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
      
      <TouchableOpacity onPress={() => {login(email,password)}}>
      <View style={{
      backgroundColor: 'blue',
      alignItems: 'center', 
      justifyContent: 'center',
      marginTop:10,
      marginHorizontal:150,
      height:25
    }}
  >
      <Text style={{ color: 'white' }}>Login</Text>
  </View>
    </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        borderColor:'red',
        borderWidth:1
      },
      loginbox:{
          justifyContent:'center',
          alignItems:'center',
          marginBottom:10

      },
      inputView: {
        backgroundColor: "white",
        alignSelf:'center',
        width: "75%",
        height: 45,
        borderColor:'grey',
        marginBottom: 20,
     
        alignItems: "center",
      },
      TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20,
      },
})
export default Login;
