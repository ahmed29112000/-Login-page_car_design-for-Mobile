import React from 'react';
import {View, Text, Touchable, TouchableOpacity,ImageBackground} from 'react-native';
import Background from './Background';
import Btn from './Btn';
import {darkGreen} from './Constants';
import Field from './Field';

const Signup = props => {
  return (
    <View>
    <ImageBackground source={require("./1000_F_418917963_yvvRGRosS2UwUB1CrQrrZshZvTEXXD8L.jpg")} style={{ height: '100%'}} />
      <View style={{alignItems: 'center', width: 460,position: "absolute"}}>
        <Text
          style={{
            color: 'white',
            fontSize: 64,
            fontWeight: 'bold',
            marginVertical: 30,
            textAlign:'center'
          }}>
          Register
        </Text>
        
        <View
          style={{
            backgroundColor: '#ffffffd1',
            height: 700,
            width: 460,
            borderTopLeftRadius: 130,
            paddingTop: 50,
            alignItems: 'center',
          }}>
          <Text
          style={{
            color: '#009CF9',
            fontSize: 25,
            fontWeight: 'bold',
            marginBottom: 20,
          }}>
          Create a new account
        </Text>
          <Field placeholder="First Name" />
          <Field placeholder="Last Name" />
          <Field
            placeholder="Email / Username"
            keyboardType={'email-address'}
          />
          <Field placeholder="Contact Number" keyboardType={'number'} />
          <Field placeholder="Password" secureTextEntry={true} />
          <Field placeholder="Confirm Password" secureTextEntry={true} />

        
          <Btn
            textColor="white"
            bgColor='#2196F3'
            btnLabel="Signup"
            Press={() => {
              alert('Accoutn created');
              props.navigation.navigate('Status');
            }}
          />
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>
                Already have an account ?{'   '}
            </Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Login')}>
              <Text
                style={{color: '#009CF9', fontWeight: 'bold', fontSize: 16}}>
                  Login  </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Signup;