import React, {useState} from "react";
import {StyleSheet, View, ScrollView, Text, TextInput, Button, Alert} from "react-native";
import { Link } from "expo-router";
import { FormElement } from "@/components/FormElement";

const cmaker = () => {
  const [name, setName] = useState("");
  const [teach, setTeach] = useState("");
  const [room, setRoom] = useState("");
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [period, setPeriod] = useState("");

  return(
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.headertext}> Class Information </Text>
        <FormElement name={"Class Name"} inputfunc={(newText: any) => {setName(newText)}}></FormElement>
        <FormElement name={"Teacher"} inputfunc={(newText: any) => {setTeach(newText)}}></FormElement>

        <Text style={[styles.headertext, {marginTop: 50}]}>Optional/Additional Information</Text>
        <FormElement name={"Teacher Full Name"} inputfunc={(newText: any) => {setFullName(newText)}}></FormElement>
        <FormElement name={"Teacher Email"} inputfunc={(newText: any) => {setEmail(newText)}}></FormElement>
        <FormElement name={"Room Number"} inputfunc={(newText: any) => {setRoom(newText)}}></FormElement>
        <FormElement name={"Class Period"} inputfunc={(newText: any) => {setPeriod(newText)}}></FormElement>
        
        <View style={styles.othercontainer}>
          <Link href="./clist" asChild>
            <Button title="Enter" color="slategrey" onPress={() => {
              let new_class = {
                c_name: name,
                c_teach: teach,
                c_room: room,
                c_email: email,
                c_fullname: fullName,
                c_period: period,
              }

              classes.push(new_class);
              class_list.push(new_class.c_name);
            }}></Button>
          </Link>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10
  },
  text: {
    fontSize: 20,
    fontWeight: "semibold",
    textAlign: "left",
    width: 200
  },
  textinput: {
    backgroundColor: "powderblue",
    fontSize: 19,
    fontWeight: "semibold",
    borderColor: "lightgray",
    borderRadius: 15,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
    margin: 5,
    width: 275,
    color: "dimgrey"
  },
  formcontainer: {
    margin: 20,
    marginTop: 20
  },
  othercontainer: {
    margin: 20
  },
  headertext: {
    fontSize: 35,
    fontWeight: "bold",
    textAlign: "center",
    textDecorationLine: "underline",
  }
});

export let classes: Array<Object> = [];
export let class_list: Array<String> = [];

export const reset_class = () => {
  classes = [];
  class_list = [];
}

export const delete_class = (index: any) => {
  classes.splice(index, 1);
}

export default cmaker;