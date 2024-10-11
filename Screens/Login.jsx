import React, {useState} from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  View,
} from 'react-native';
import BottomTextComponent from './Components/BottomTextComponent ';
import Loader from '../Helpers/Loader';

const logo = require('../assets/shop.png');
const facebook = require('../assets/facebook.png');
const linkedin = require('../assets/social.png');

const LoginScreen = ({ navigation }) => {
    const [click, setClick] = useState(false);
  const {username, setUsername} = useState('');
  const {password, setPassword} = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    navigation.navigate('Home');
    setLoading(false);
  }
  return (
    <KeyboardAvoidingView
      style={{flex: 1}} // Make sure the container has flex: 1 to take up available space
      behavior="padding" // Or "height" depending on your use case
    >
      <SafeAreaView style={styles.container}>
        <Image source={logo} style={styles.image} resizeMode="contain" />
        <Text style={styles.title}>Login</Text>
        <View style={styles.inputView}>
          <TextInput
            style={styles.input}
            placeholder="Email or Mobile"
            value={username}
            placeholderTextColor="#f3f3f3"
            onChangeText={setUsername}
            autoCorrect={false}
            autoCapitalize="none"
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
            placeholderTextColor="#f3f3f3"
            value={password}
            onChangeText={setPassword}
            autoCorrect={false}
            autoCapitalize="none"
          />
        </View>
        <View style={styles.rememberView}>
          <View style={styles.switch}>
            <Switch
              value={click}
              onValueChange={setClick}
              trackColor={{true: 'white', false: 'gray'}}
            />
            <Text style={styles.rememberText}>Remember Me</Text>
          </View>
          <View>
            <Pressable onPress={() => Alert.alert('Forget Password!')}>
              <Text style={styles.forgetText}>Forgot Password?</Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.buttonView}>
          <Pressable
            style={styles.button}
            onPress={handleLogin}>
            <Text style={styles.buttonText}>LOGIN</Text>
          </Pressable>
          <Text style={styles.optionsText}>OR LOGIN WITH</Text>
        </View>

        <View style={styles.mediaIcons}>
          <Image source={facebook} style={styles.icons} />
          <Image source={linkedin} style={styles.icons} />
        </View>

        <BottomTextComponent />
        {loading && (
          <Loader />
        )}
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop: 70,
    flex: 1,
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#292a51',
  },
  image: {
    height: 160,
    width: 170,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    textAlign: 'center',
    paddingVertical: 40,
    color: 'white',
  },
  inputView: {
    gap: 15,
    width: '100%',
    paddingHorizontal: 30,
    marginBottom: 5,
  },
  input: {
    height: 45,
    borderRadius: 5,
    fontSize: 18,
    paddingHorizontal: 12,
    marginTop: 5,
    color: 'white',
    borderColor: '#FFFFFF', // Correct property name
    borderWidth: 1,
    textAlign: 'left',
  },
  rememberView: {
    width: '100%',
    paddingHorizontal: 30,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 8,
  },
  switch: {
    flexDirection: 'row',
    gap: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rememberText: {
    fontSize: 13,
    color: 'white',
  },
  forgetText: {
    fontSize: 13,
    color: 'white',
  },
  button: {
    backgroundColor: 'white',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonView: {
    width: '100%',
    paddingHorizontal: 30,
  },
  optionsText: {
    textAlign: 'center',
    paddingVertical: 10,
    color: 'white',
    fontSize: 13,
    marginBottom: 6,
  },
  mediaIcons: {
    flexDirection: 'row',
    gap: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 23,
  },
  icons: {
    width: 40,
    height: 40,
  },
  footerText: {
    textAlign: 'center',
    color: 'gray',
    backgroundColor: '#675f5d',
  },
  signup: {
    color: 'red',
    fontSize: 13,
  },
});
export default LoginScreen;
