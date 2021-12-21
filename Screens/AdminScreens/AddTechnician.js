import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native-gesture-handler";

import DataForm from "../../Components/DataForm";

const AddTechnician = ({ navigation, route }) => {
  const { Data } = route.params;
  const [name, setName] = useState("");
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState(new Date());
  const [doj, setDoj] = useState(new Date());
  const [dol, setDol] = useState(new Date());
  const [address, setAddress] = useState("");
  const [pincode, setPincode] = useState("");
  const [addressprof, setAddressprof] = useState("");
  const [pic, setPic] = useState("");
  return (
    <View style={styles.container}>
      <View
        style={{
          marginTop: 25,
          height: 50,
          width: "95%",
          backgroundColor: "#3A8EC0",
          justifyContent: "center",
          left: 10,
        }}
      >
        <Text
          style={{ color: "white", fontWeight: "bold", fontSize: 18, left: 10 }}
        >
          Add Technician
        </Text>
      </View>
      <ScrollView>
        <View
          style={
            {
              // height: 650,
              // top: 30,
            }
          }
        >
          <DataForm
            name={name}
            setName={setName}
            phone={phone}
            setPhone={setPhone}
            email={email}
            setEmail={setEmail}
            dob={dob}
            setDob={setDob}
            doj={doj}
            setDoj={setDoj}
            dol={dol}
            setDol={setDol}
            address={address}
            setAddress={setAddress}
            pincode={pincode}
            setPincode={setPincode}
            addressprof={addressprof}
            setAddressprof={setAddressprof}
            pic={pic}
            setPic={setPic}
          />
        </View>
        <View
          style={{
            height: 50,
            width: "100%",
            // top: 35,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              Data.push({
                name: name,
                phone: phone,
                email: email,
                //   password: ,
                dob: dob,
                doj: doj,
                dol: dol,
                address: address,
                pincode: pincode,
                addressprof: addressprof,
              }),
                navigation.navigate("Technician", { Data });
            }}
            style={{
              height: 50,
              width: 100,
              backgroundColor: "#3A8EC0",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 10,
            }}
          >
            <Text style={{ color: "white", fontSize: 18 }}>Save</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};
export default AddTechnician;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
