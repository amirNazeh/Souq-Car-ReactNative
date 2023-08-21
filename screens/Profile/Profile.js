import { StyleSheet, Text , Pressable, Image ,View} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import { Ionicons } from "@expo/vector-icons";
import {
  faChevronRight,
  faCreditCard,
  faHeart,
  faLocationPin,
  faReceipt,
  faUser,
  
  
} from '@fortawesome/free-solid-svg-icons';
import {signOutUser} from '../../firebase/firebase'
import { useNavigation } from "@react-navigation/native";
const Profile = () => {
  const  navigation = useNavigation()
  const signOut = async()=>{
    await signOutUser().then(()=>navigation.navigate('Login'))
  }
  return (
    <SafeAreaView>
    <View>
<View style={styles.profile}>
<Image
  style={{width: 150, height: 150}}
  source={{
    uri: 'https://dl.memuplay.com/new_market/img/com.vicman.newprofilepic.icon.2022-06-07-21-33-07.png',
  }}
/>
<Text style={styles.profileName}>Musabbiha Noor</Text>
</View>

<View style={styles.menuOptions}>
<Pressable style={styles.menuOption}>
  <FontAwesomeIcon color="#ccc" icon={faUser} />
  <Text style={styles.menuText}>Edit Profile</Text>
  <FontAwesomeIcon color="#ccc" icon={faChevronRight} />
</Pressable>

<Pressable style={styles.menuOption}>
  <FontAwesomeIcon color="#ccc" icon={faLocationPin} />
  <Text style={styles.menuText}>Shopping Address</Text>
  <FontAwesomeIcon color="#ccc" icon={faChevronRight} />
</Pressable>

<Pressable style={styles.menuOption}>
  <FontAwesomeIcon color="#ccc" icon={faHeart} />
  <Text style={styles.menuText}>Wishlist</Text>
  <FontAwesomeIcon color="#ccc" icon={faChevronRight} />
</Pressable>

<Pressable style={styles.menuOption}>
  <FontAwesomeIcon color="#ccc" icon={faReceipt} />
  <Text style={styles.menuText}>Orders</Text>
  <FontAwesomeIcon color="#ccc" icon={faChevronRight} />
</Pressable>

<Pressable style={styles.menuOption} onPress={()=>signOut()}>
  <Ionicons  color="#ccc"  size={24} name="log-out"/>
  <Text style={styles.menuText}>Log Out</Text>
  
</Pressable>
</View>
</View>
  </SafeAreaView>
  )
}

export default Profile
const styles = StyleSheet.create({
  profile: {
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  menuOptions: {
    height: '100%',
    backgroundColor: '#fff',
    paddingVertical: 20,
  },

  menuOption: {
    flexDirection: 'row',
    paddingVertical: 20,
    marginHorizontal: 20,
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
    alignItems: 'center',
  }, menuText: {
    fontFamily: 'Poppins-SemiBold',
    color: '#000',
    marginLeft: 10,
    flex: 1,
  },
  menuText: {
    fontFamily: 'Poppins-SemiBold',
    color: '#000',
    marginLeft: 10,
    flex: 1,
  },profileName: {
    fontFamily: 'Poppins-Regular',
    fontSize: 20,
    color: '#000',
  },
});



