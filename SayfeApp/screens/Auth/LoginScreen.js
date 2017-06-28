import React from 'react';
import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default class LoginScreen extends React.Component 
{
  static navigationOptions = {
    header: null,
  };
    render()
    {
	return (
	    <View style = {styles.container}>
		<ScrollView style = {styles.formContainer}>
		    <Text>Sayfe</Text>
		</ScrollView>
	    </View>
	);
    }

}

const styles = StyleSheet.create
({
    container: 
    {
	flex: 1,
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center',
    },
    formContainer:
    {
	paddingTop: 80,
    }
});

