import React, { useState } from 'react'
import { StyleSheet, Text, View, ScrollView, Image, ImageBackground } from 'react-native'
import { Button, InputItem, Toast } from 'antd-mobile-rn'
import Icon from 'react-native-vector-icons/FontAwesome'
import { StatusBar } from 'expo-status-bar'


const Login = () => {

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState({
        login: false,
        password: false
    })

    const onFinish = () => {
        if(login === '' || password === ''){
            if(login === ''){
                setError({...error, login: true})
            }
            if(password === ''){
                setError({...error, password: true})
            }
        }else{
            // failToast()
            // navigation.navigate('Profile')
        }
    }

    function failToast() {
        Toast.fail('Логин или пароль неверный!')
    }


    const styles = StyleSheet.create({
        container: {
          flex: 1,
          alignItems: 'center',
          // marginTop: '50%',
          justifyContent: 'center',
          margin: 20,
          padding: 20,
        },
        input: {
          flex: 1,
          alignItems: 'center',
          borderRadius: 20,
          marginTop: 20,
          backgroundColor: error.login ? 'pink' : 'rgba(255, 255, 255, 0.9)',
        },
        input_password: {
          flex: 1,
          alignItems: 'center',
          borderRadius: 20,
          marginTop: 20,
          backgroundColor: error.password ? 'pink' : 'rgba(255, 255, 255, 0.9)',
        },
        button: {
          marginTop: 30,
          width: 150,
          backgroundColor: '#5b10a9', 
          width: '100%', 
          borderRadius: 20
        },
        image: {
          flex: 1,
          resizeMode: "cover",
          justifyContent: "center"
        },
    })

    return (
        <ImageBackground source={require('../../assets/login_bg.png')} style={styles.image}>
            <ScrollView
                automaticallyAdjustContentInsets={false}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.container}>
                    <Image style={{marginTop: '30%', height: 100, width: 250, marginBottom: '60%'}} source={require('../../assets/logo_sm.png')}/>

                    <View style={styles.input}>
                        <InputItem
                        error={error.login}
                        clear
                        value={login}
                        last
                        onChange={value => {
                            setLogin(value)
                        }}
                        onFocus={() => {
                            if(error.login){
                                setError({...error, login: false})
                            }
                        }}
                        placeholder="Логин"
                        ><Icon name="user" size='20' /></InputItem>
                    </View>

                    <View style={styles.input_password}>
                        <InputItem
                        error={error.password}
                        clear
                        type="password"
                        value={password}
                        last
                        onChange={value => {
                            setPassword(value)
                        }}
                        onFocus={() => {
                            if(error.password){
                                setError({...error, password: false})
                            }
                        }}
                        placeholder="Пароль"
                        ><Icon name="lock" size='20' /></InputItem>
                    </View>

                    <Button style={styles.button} onClick={onFinish}><Text style={{color: '#fff'}}>Войти</Text></Button>

                </View>
            </ScrollView>

            <StatusBar style="auto" />
        </ImageBackground>
    )
}

export default Login