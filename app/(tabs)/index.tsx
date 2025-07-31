import React, { useState } from 'react'; 
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
import * as Clipboard from 'expo-clipboard';

export default function HomeScreen() {
  const [password, setPassword] = useState('');
  const [bgColor, setBgColor] = useState('#7d7f9aff'); // initial color
  const [showBtnMode, setShowBtnMode] = useState(true);
  const [showBtnMode2, setShowBtnMode2] = useState(false);

  const num = [1, 2, 3, 4, 5, 6, 7, 9, 0];
  const letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m',
                   'n','o','p','q','r','s','t','u','v','w','x','y','z'];
  const caracters = ['!', '@', '#', '%', '&', '.'];
  const text = [...num, ...letters, ...caracters];

  const generatePassword = (length = 15) => {
    let result = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * text.length);
      result += text[randomIndex];
    }
    return result;
  };

  const handleGeneratePress = () => {
    const newPassword = generatePassword();
    setPassword(newPassword);
  };

  const handleBtnModePress = () => {
    setBgColor('#121212');  // dark mode
    setShowBtnMode(false);
    setShowBtnMode2(true);
  };

  const handleBtnMode2Press = () => {
    setBgColor('#7d7f9aff'); // original light color
    setShowBtnMode(true);
    setShowBtnMode2(false);
  };

  // This function copies the password to clipboard
  const handleCopyPress = () => {
    if (password) {
      Clipboard.setString(password);
      
    } else {
      Alert.alert('Nothing to copy', 'Please generate a password first.');
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
      <Text style={styles.text}>Password Generator</Text>

      <TextInput
        style={styles.input}
        placeholder="Generated password appears here"
        placeholderTextColor="#ccc"
        value={password}
        editable={false}
      />

      <TouchableOpacity style={styles.btngen} onPress={handleGeneratePress}>
        <Text style={styles.btngenText}>Generate</Text>
      </TouchableOpacity>

      {showBtnMode && (
        <TouchableOpacity style={styles.btnmode} onPress={handleBtnModePress}>
          <Image
            source={require('../../assets/images/night-mode.png')}
            style={styles.icon}
          />
        </TouchableOpacity>
      )}

      {showBtnMode2 && (
        <TouchableOpacity style={styles.btnmode2} onPress={handleBtnMode2Press}>
          <Image
            source={require('../../assets/images/brightness (1).png')}
            style={styles.icon}
          />
        </TouchableOpacity>
      )}

      {/* COPY BUTTON */}
      <TouchableOpacity style={styles.btncopy} onPress={handleCopyPress}>
        <Image
          source={require('../../assets/images/copy.png')}
          style={styles.icon}
        />
      </TouchableOpacity>
      <Text style={styles.copyright}>Developed by Armando Mabunda Júnior</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  text: {
    fontSize: 28,
    textAlign: 'left',
    fontWeight: 'bold',
    marginTop: 20,
    color:'blue',
  },
  input: {
    width: '80%',
    height: 50,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    paddingLeft: 20,
    fontSize: 25,
    borderWidth: 1,
    borderColor: '#ccc',
    marginTop: 100,
  },
  btngen: {
    width: '100%',
    height: 50,
    backgroundColor: '#000000',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  btngenText: {
    color: '#ffffff',
    fontSize: 16,
  },
 btnmode: {
  width: 35,
  height: 35,
  borderRadius: 10,
  backgroundColor: 'white',
  position: 'absolute',      // position absolutely
  top: 45,                  // adjust top position as needed
  right: 30,                // adjust right position as needed
  justifyContent: 'center', // center icon vertically
  alignItems: 'center',     // center icon horizontally
  elevation: 3,             // optional: shadow for Android
  shadowColor: '#000',      // optional: shadow for iOS
  shadowOffset: { width: 0, height: 1 },
  shadowOpacity: 0.2,
  shadowRadius: 1.5,
},

btnmode2: {
  width: 35,
  height: 35,
  borderRadius: 10,
  backgroundColor: 'white',
  position: 'absolute',
top: 45,                  // adjust top position as needed
  right: 30, 
  justifyContent: 'center',
  alignItems: 'center',
  elevation: 3,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 1 },
  shadowOpacity: 0.2,
  shadowRadius: 1.5,
},

icon: {
  width: 25,
  height: 25,
  resizeMode: 'contain',
},
btncopy:{
 width: 50,
  height: 50,
  borderRadius: 10,
  backgroundColor: 'white',
  position: 'absolute',      // position absolutely
  top: 178,                  // adjust top position as needed
  right: 30,                // adjust right position as needed
  justifyContent: 'center', // center icon vertically
  alignItems: 'center',     // center icon horizontally
  elevation: 3,             // optional: shadow for Android
  shadowColor: '#000',      // optional: shadow for iOS
  shadowOffset: { width: 0, height: 1 },
  shadowOpacity: 0.2,
  shadowRadius: 1.5,

},

copyright:{

  position: 'absolute',
  top: 645,                  // adjust top position as needed
  right: 50, 
  fontSize:15,
  textAlign:'center',
  fontStyle:'italic'
}
});
