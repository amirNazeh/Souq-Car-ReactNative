import { Text, View, TouchableOpacity, Image, Linking } from "react-native";
import React from "react";
import styles from "./CarDetails.style";
import { Fontisto, Ionicons } from "@expo/vector-icons";
import { COLORS, SIZES } from "../../constants/index";
import { useRoute } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import saveAddchange from "../../store/actions/saveAdd";
const CarDetails = ({ navigation }) => {
  const route = useRoute();
  const { item } = route.params;

  const dispatch = useDispatch();
  const saveAdd = useSelector((state) => state.SaveAdd.SaveAdd);
  const AddId = useSelector((state) => state.SaveAdd.SaveAdd.map((f) => f.id));
  console.log(item);
  function addfav(obj) {
    dispatch(saveAddchange([...saveAdd, obj]));
    console.log(saveAdd);
  }

  const deletAdd = (id) => {
    const list = saveAdd.filter((f) => f.id !== id);
    console.log(list);
    dispatch(saveAddchange(list));
  };
  function hanedlAddDelete(item) {
    var x = AddId.includes(item.id);

    if (x) {
      deletAdd(item.id);
    } else {
      addfav(item);
    }
  }

  const openWhatsAppChat = () => {
    const phoneNumber = "01156050234";
    Linking.openURL(`https://api.whatsapp.com/send?phone=${phoneNumber}`);
  };
  const makePhoneCall = () => {
    const phoneNumber = "01156050234";
    Linking.openURL(`tel:${phoneNumber}`);
  };
  return (
    <View style={styles.container}>
      <View style={styles.upperRow}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back-circle" size={30} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <Ionicons
            name="heart"
            size={30}
            color={AddId.includes(item.id) ? COLORS.red : COLORS.gray}
            onPress={() => hanedlAddDelete(item)}
          />
        </TouchableOpacity>
      </View>
      <Image
        source={{
          uri: item.imgUrl,
        }}
        style={styles.image}
      />
      <View style={styles.details}>
        <Text style={styles.titleName}> {item.name}</Text>
        <View style={styles.titleRow}>
          <Text style={styles.title}> Details </Text>
          <View style={styles.priceWapper}>
            <Text style={styles.price}> {item.price}</Text>
          </View>
        </View>
        <View style={styles.descContair}>
         <Text style={styles.titleName}>
            {item.carBody ? `car Bady : ${item.carBody}` : ""}
          </Text> 
         <Text style={styles.titleName}>
            {item.carMaker ? `Car Maker : ${item.carMaker}` : ""}
          </Text>  
         <Text style={styles.titleName}>
          
          {item.color ? `Color: ${item.carBody}` : ""}
        </Text> 
         <Text style={styles.titleName}>
        
            {item.condition ? `Condition: ${item.condition}` : ""}
          </Text> 
         <Text style={styles.titleName}>
            {item.engine ? `Engine: ${item.engine}` : ""}
          </Text> 
         <Text style={styles.titleName}>
            {item.transmission ? `Transmission: ${item.transmission}` : ""}
          </Text>
          <Text style={styles.titleName}>
            {" "}
            {item.rentalTerm ? `Rental Term: ${item.rentalTerm}` : ""}
          </Text>
          <Text style={styles.titleName}>
            {" "}
            {item.manufactureDate ? `Manu facture Date: ${item.manufactureDate}` : ""}
          </Text>
          <Text style={styles.titleName}>
            {" "}
            {item.driverStatus ? `Driver Status: ${item.driverStatus}` : ""}
          </Text>
          
          <Text style={styles.titleName}>
            {" "}
            {item.productStatus ? `Product Status: ${item.productStatus}` : ""}
          </Text>
          <Text style={styles.titleName}>
            {" "}
            {item.productType ? `Product Type: ${item.productType}` : ""}
          </Text>
        </View>
        {item.description && (
          <View style={styles.descriptionWrapper}>
            <Text style={styles.description}>Description</Text>
            <Text style={styles.descText}>{item.description} </Text>
          </View>
        )}

        <View style={{ marginBottom: SIZES.small }}>
          <View style={styles.locatoin}>
            <View style={{ flexDirection: "row" }}>
              <Ionicons name="location-outline" size={20} />
              <Text>{item.saleLocation}</Text>
            </View>
          </View>
        </View>
        <View style={styles.cartRow}>
          <TouchableOpacity onPress={() => {}} style={styles.cartBtn}>
            <Text style={styles.cartTitle}>Contact us </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={openWhatsAppChat} style={styles.addCart}>
            <Fontisto name="whatsapp" size={22} color={COLORS.lightwhite} />
          </TouchableOpacity>
          <TouchableOpacity onPress={makePhoneCall}>
            <Fontisto name="phone" size={22} color="blue" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CarDetails;
