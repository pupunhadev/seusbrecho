import React from 'react';
import {View, Text} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import styles from './styles';

import {useNavigation} from '@react-navigation/native';

function LoginPage(){
    const {navigate} = useNavigation();

    function handleNavigationtoAppPages(){
        navigate('AppTabs');
    }   
    
    return (

        <View style={styles.container}>
             <RectButton onPress={handleNavigationtoAppPages}
              style={styles.connectButton}
              >
                <Text> Conectar-se </Text>

             </RectButton>

        </View>
    );
}
export default LoginPage;