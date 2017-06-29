import React from 'react';
import {
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    TextInput,
    Button,
} from 'react-native';

export default class LoginScreen extends React.Component 
{
    static navigationOptions = {
	header: null,
    };

    constructor(props)
    {
	super(props);

	this.state = {
	    user: {
		email: '',
		password: ''
	    }
	};
	this.submit = this.submit.bind(this);
    }

    submit()
    {
	var user = this.state.user
    }
    render()
    {
	return (
	    <View style = {styles.container}>
		<Text style = {styles.header}>Login</Text>
		<View style = {styles.formContainer}> 
		    <TextInput style = {styles.input} 
			placeholder = "email"
			onChangeText = {(email) => this.setState( { user: {email: email, password: this.state.user.password} })}	
			value = {this.state.user.email}
			keyboardType = {'email-address'}
		    />
		</View>

		<View style = {styles.formContainer}> 
		    <TextInput style = {styles.input} 
			placeholder = "Password" 
			secureTextEntry = {true}
			onChangeText = {(password) => this.setState({ user: {email: this.state.user.email, password: password} })}
			value = {this.state.user.password}
		    />
		</View>
		<Button title = "Submit" onPress = {this.submit} />
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

    },
    formContainer:
    {
	margin: 10,
    },
    header:
    {
	fontSize: 35,
	marginBottom:30,
    },
    input:
    {
	flex: 1,
	height: 40,
	borderColor: 'gray',
	borderWidth: 1,
	margin: 5,
    },
    buttonContainer:
    {
	margin: 10,
    }

});

