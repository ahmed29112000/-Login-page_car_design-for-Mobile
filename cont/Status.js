import React from 'react';
import {View, Text, StyleSheet, FlatList, ImageBackground} from 'react-native';

class Status extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      check: true,
      user_name: 'AHMED',
      total_blinks: 0,
      is_owner: 'TRUE',
    };
  }

  render() {
    return (
      <View>
        <ImageBackground
          source={require('./1000_F_418917963_yvvRGRosS2UwUB1CrQrrZshZvTEXXD8L.jpg')}
          style={{height: '100%'}}
        />
        <View style={(styles.container, {position: 'absolute'})}>
          <Text
            style={
              (styles.textTitle,
              {
                color: 'white',
                fontSize: 54,
                fontWeight: 'bold',
                marginVertical: 50,
                textAlign: 'center',
              })
            }>
            Driver Status
          </Text>
          <View
            style={{
              backgroundColor: '#ffffffd1',
              height: 700,
              width: 460,
              borderTopLeftRadius: 130,
              paddingTop: 150,
              alignItems: 'center',
            }}>
            <View
              style={{
                borderColor: '#2196F3',
                flexDirection: 'row',
                width: '30%',
                alignSelf: 'center',
                justifyContent: 'space-around',
                width: '72.5%',
                height: 70,
                borderRadius: 100,
                marginVertical: 10,
                borderWidth: 3.5,
                backgroundColor: '#002E56d1',
              }}>
              <Text style={styles.textBody}>name : </Text>
              <Text style={styles.textBody}>{this.state.user_name}</Text>
            </View>

            <View
              style={{
                borderColor: '#2196F3',
                flexDirection: 'row',
                width: '30%',
                alignSelf: 'center',
                justifyContent: 'space-around',
                width: '72.5%',
                height: 70,
                borderRadius: 100,
                marginVertical: 10,
                borderWidth: 3.5,
                backgroundColor: '#002E56d1',
              }}>
              <Text style={styles.textBody}>Owner :</Text>
              <Text style={styles.textBody}>{this.state.is_owner}</Text>
            </View>

            <View
              style={{
                borderColor: '#2196F3',
                flexDirection: 'row',
                width: '30%',
                alignSelf: 'center',
                justifyContent: 'space-around',
                width: '72.5%',
                height: 70,
                borderRadius: 100,
                marginVertical: 10,
                borderWidth: 3.5,
                backgroundColor: '#002E56d1',
              }}>
              <Text style={styles.textBody}>Eye status : </Text>
              <Text style={styles.textBody}>
                {this.state.check ? ' Blink' : ' open'}
              </Text>
            </View>

            <View
              style={{
                borderColor: '#2196F3',
                flexDirection: 'row',
                width: '30%',
                alignSelf: 'center',
                justifyContent: 'space-around',
                width: '72.5%',
                height: 70,
                borderRadius: 100,
                marginVertical: 10,
                borderWidth: 3.5,
                backgroundColor: '#002E56d1',
              }}>
              <Text style={styles.textBody}>Total Blinks : </Text>
              <Text style={styles.textBody}>{this.state.total_blinks}</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
    color: '#2196F3',
    marginBottom: 20,
  },

  textTitle: {
    fontSize: 70,
    fontFamily: 'Foundation',
    marginVertical: 5,
    borderBottomWidth: 0,
  },
  textBody: {
    fontSize: 26,
    fontFamily: 'Foundation',
    borderColor: 'blue',
    borderRadius: 10,
    marginVertical: 10,
    borderWidth: 0,
    color: '#ffffff',
    fontWeight: 'bold',
    marginLeft: 0,
  },
});
export default Status;
