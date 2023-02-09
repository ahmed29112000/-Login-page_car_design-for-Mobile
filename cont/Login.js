import React from 'react';
import {View, Text, Touchable, TouchableOpacity,ImageBackground} from 'react-native';
import Btn from './Btn';
import Field from './Field';

const Login = (props) => {
  return (
    <View>
    <ImageBackground source={require("./1000_F_418917963_yvvRGRosS2UwUB1CrQrrZshZvTEXXD8L.jpg")} style={{ height: '100%'}} />
      <View style={{alignItems: 'center', width: 460,position: "absolute"}}>
        <Text
          style={{
            color: '#ffffff',
            fontSize: 84,
            fontWeight: 'bold',
            marginVertical: 40,
            textAlign:'center'
          }}>
          Login
        </Text>
        <View
          style={{
            backgroundColor: '#ffffffd1',
            height: 700,
            width: 460,
            borderTopLeftRadius: 130,
            paddingTop: 100,
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 45, color: '#2196F3', fontWeight: 'bold'}}>
            Welcome Back
          </Text>
          <Text
            style={{
              color: 'grey',
              fontSize: 19,
              fontWeight: 'bold',
              marginBottom: 20,
            }}>
            Login to your account
          </Text>
          <Field
            placeholder="Email / Username"
            keyboardType={'email-address'}
          />
          <Field placeholder="Password" secureTextEntry={true} />
          <View
            style={{alignItems: 'flex-end', width: '78%', paddingRight: 16, marginBottom: 100}}>
            <Text style={{color: 'grey', fontWeight: 'bold', fontSize: 16}}>
              Forgot Password ?
            </Text>
          </View>
          <Btn textColor='white' bgColor='#2196F3' btnLabel="Login" Press={
            () => {
              alert("Logged In");
              props.navigation.navigate('Status');
            }} />
          <View style={{ display: 'flex', flexDirection :'row', justifyContent: "center" }}>
            <Text style={{ fontSize: 16, fontWeight:"bold" }}>Don't have an account ? </Text>
            <TouchableOpacity onPress={() => props.navigation.navigate("Signup")}>
            <Text style={{ color: '#009CF9', fontWeight: 'bold', fontSize: 16 }}>Signup  </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Login;