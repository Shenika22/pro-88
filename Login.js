import React,{Component} from 'react';
import {View, Button} from 'react-native';

export default class LoginScreen extends Component{
    signInWithGoogleAsync = async () => {
        try{
            const result = await Google.logInAsync({
                behaviour: "web",
                androidClientId:
                "512716633783-rkrc8tpbrknrpnt0akjbqqo0v4ukafkc.apps.googleusercontent.com",
                iosClientId
                "512716633783-n6qco4smqeh9g64ffalebfrsepq0nvlf.apps.googleusercontent.com",

                scopes: ['profile', 'email'],
        });
        }
    }
    render(){
        retuern(
            <View
            style ={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center"
                }}>
                    <Text>Login</Text>
                    </View>
        )
    }
}