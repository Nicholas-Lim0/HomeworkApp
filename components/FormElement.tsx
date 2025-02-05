import React, { useState } from "react";
import { StyleSheet, View, TextInput, Text, Alert } from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import Icon from "@expo/vector-icons/Ionicons";

export const FormElement = (props: {name: any, inputfunc: any}) => {
    return(
        <View style={styles.formcontainer}>
            <Text style={styles.text}>{props.name}</Text>
            <TextInput style={styles.textinput} onChangeText={props.inputfunc}></TextInput>
        </View>
    );
}

export const FormDropdown = (props: {name: any, data: any, inputfunc: any}) => {
  return(
    <View style={styles.formcontainer}>
      <Text style={styles.text}>{props.name}</Text>
      <SelectDropdown 
      data={props.data}
      onSelect={(item) => {props.inputfunc(item)}}
      renderButton={(selected_item, opened) => {
        return(
          <View style={{...styles.textinput, paddingHorizontal: 3, flex: 1, flexDirection: "row"}}>
            <Text style={{...styles.text, fontWeight: "semibold"}}> {selected_item ? selected_item : "Choose a Class"} </Text>
            <Icon name={opened ? "chevron-down" : "chevron-up"} style={styles.icon} />
          </View>
        );
      }}
      renderItem={(item, index, selected) => {
        return(
          <View style={selected ? (index == 0 ? {...styles.dropdown_item, backgroundColor: "lightgrey", borderTopWidth: 0} : {...styles.dropdown_item, backgroundColor: "lightgrey"}) : (index == 0 ? {...styles.dropdown_item, borderTopWidth: 0} : styles.dropdown_item)}>
            <Text style={styles.dropdown_text}> {item} </Text>
          </View>
        );
      }}
      dropdownStyle={styles.dropdown}
      showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

export const DateForm = (props: {name: any, dayfunc: any, monthfunc: any, yearfunc: any, monthnamefunc: any, datetypefunc: any}) => {
  const [monthType, setMonthType] = useState("Month Number");

  return(
    <View style={styles.formcontainer}>
      <View style={styles.date_header}>
          <Text style={styles.text}>{props.name}</Text>
          <SelectDropdown 
          dropdownStyle={{...styles.dropdown, marginTop: -15}}
          data={["Month Number", "Month Name"]}
          onSelect={(item) => {
            setMonthType(item);
            props.datetypefunc();
          }}
          renderButton={(selected_item, opened) => {
            return(
              <View style={styles.date_dropdown_button}>
                <Text style={{fontSize: 18, fontWeight: "semibold", marginTop: -1}}> {selected_item} </Text>
                <Icon name={opened ? "chevron-down" : "chevron-up"} style={{...styles.icon, position: "absolute", left: 143, bottom: 0.01}} />
              </View>
            );
          }}
          renderItem={(item, index, selected) => {
            return(
              <View style={selected ? (index == 0 ? {...styles.dropdown_item, backgroundColor: "lightgrey", borderTopWidth: 0} : {...styles.dropdown_item, backgroundColor: "lightgrey"}) : (index == 0 ? {...styles.dropdown_item, borderTopWidth: 0} : styles.dropdown_item)}>
                <Text style={styles.dropdown_text}> {item} </Text>
              </View>
            );
          }} 
          defaultValue="Month Number" />
      </View>
        <View style={styles.dates}> 

          <View style={styles.datecontainer}>
            <Text style={styles.datetitle}>Day: </Text>
            <TextInput style={{...styles.textinput, width: 100, height: 35, borderRadius: 5}} keyboardType={"numeric"} maxLength={2} onChangeText={props.dayfunc} />
          </View> 

          <View style={monthType == "Month Number" ? styles.datecontainer : {display: "none"}}>
            <Text style={styles.datetitle}>Month: </Text>
            <TextInput style={{...styles.textinput, width: 100, height: 35, borderRadius: 5}} keyboardType={"numeric"} maxLength={2} onChangeText={props.monthfunc} />
          </View>

          <View style={monthType == "Month Name" ? {...styles.datecontainer, marginBottom: 10,} : {display: "none"}}>
            <Text style={styles.datetitle}>Month: </Text>
            <SelectDropdown
            dropdownStyle={{...styles.dropdown, height: 200}}
            data={["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]}
            onSelect={props.monthnamefunc}
            renderButton={(selected_item, opened) => {
              return(
                  <View style={styles.month_dropdown}>
                    <Text style={{fontSize: 18, fontWeight: "semibold"}}> {selected_item ? selected_item : "Choose month"} </Text>
                    <Icon name={opened ? "chevron-down" : "chevron-up"} style={{...styles.icon, position: "absolute", left: 180, top: 2}} />
                  </View>
              );
            }}
            renderItem={(item, index, selected) => {
              return(
                <View style={selected ? (index == 0 ? {...styles.dropdown_item, backgroundColor: "lightgrey", borderTopWidth: 0} : {...styles.dropdown_item, backgroundColor: "lightgrey"}) : (index == 0 ? {...styles.dropdown_item, borderTopWidth: 0} : styles.dropdown_item)}>
                  <Text style={styles.dropdown_text}> {item} </Text>
                </View>
              )
            }}
            showsVerticalScrollIndicator={false}
            />
          </View>

          <View style={styles.datecontainer}>
            <Text style={styles.datetitle}> Year: </Text>
            <TextInput style={{...styles.textinput, width: 100, height: 35, borderRadius: 5}} keyboardType={"numeric"} maxLength={4} onChangeText={props.yearfunc} />
          </View>

        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "left",
    width: 200,
  },
  textinput: {
    backgroundColor: "powderblue",
    fontSize: 19,
    fontWeight: "semibold",
    borderColor: "black",
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 5,
    margin: 5,
    width: 275,
    color: "black",
    borderWidth: 1.25,
  },
  formcontainer: {
    margin: 20,
    marginTop: 20
  },
  icon: {
    position: "relative",
    left: 35,
    fontSize: 25,
  },
  dropdown_item: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 8,
    borderColor: "black",
    borderTopWidth: 0.5,
  }, 
  dropdown_text: {
    textAlign: "center",
    fontSize: 15,
    fontWeight: "semibold",
  },
  dropdown: {
    borderRadius: 10,
  },
  date_header: {
    flex: 1,
    flexDirection: "row",
    marginBottom: 10,
  },
  date_dropdown_button: {
    position: "relative",
    right: 15,
    flex: 1,
    flexDirection: "row",
    borderWidth: 1.5,
    borderColor: "black",
    borderRadius: 10,
    textAlign: "center",
    paddingHorizontal: 5,
    marginLeft: -90,
    backgroundColor: "powderblue",
  },
  dates: {
    flex: 1,
    alignItems: "center",
  },
  datecontainer: {
    flex: 1,
    flexDirection: "row",
    marginTop: 10,
  },
  datetitle: {
    fontSize: 20,
    marginTop: 7.5,
  },
  month_dropdown: {
    position: "relative",
    top: 5,
    flex: 1,
    flexDirection: "row",
    borderWidth: 1.5,
    borderColor: "black",
    borderRadius: 10,
    textAlign: "center",
    paddingHorizontal: 5,
    paddingTop: 2,
    backgroundColor: "powderblue",
    width: 175,
  }
})