import React, { useState, createContext } from "react";
import {StyleSheet, View, ScrollView, Text, TextInput, Button, Alert} from "react-native";
import { Link } from "expo-router";
import { FormElement, FormDropdown, DateForm } from "@/components/FormElement";
import { class_list } from "./cmaker";
import { filter_option } from "@/components/Menu";

const amaker = () => {
  const [classes, setClasses] = useState<Array<String>>([]);
  setInterval(() => setClasses(class_list), 50);

  const [name, setName] = useState("")
  const [aclass, setClass] = useState("");
  // These are NOT states because states absolutely suck: why are they async????
  let day = "";
  let month = "";
  let date = "";
  let datetype = "Month Number";

  return(
    <View style={styles.container}>
      <ScrollView>
        <FormElement name="Assignment Name" inputfunc={(newText: any) => {setName(newText)}}></FormElement>
        <FormDropdown name="Class" data={class_list} inputfunc={setClass}></FormDropdown>
        <DateForm name="Due Date" dayfunc={(newText: any) => {day = newText;}} monthfunc={(newText: any) => {month = newText;}} monthnamefunc={(item: any) => {month = item}} datetypefunc={(item: any) => {datetype = item}} />
        <View style={styles.othercontainer}>
          <Link href="./alist" asChild>
            <Button title="Enter" color="slategrey" onPress={() => {
              // Combine month and day to format date
              date = (datetype == "Month Number" ? `${month}/${day}` : `${month} ${day}`);

              let new_ass = {
                a_name: name,
                a_class: aclass,
                a_date: date
              };
              
              assignments.push(new_ass);
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
    marginTop: 5
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
  ass_container: {
    margin: 10,
    backgroundColor: "lightgrey",
    borderWidth: 3,
    borderColor: "dimgrey",
    borderRadius: 15,
    height: 100,
    padding: 10,
    paddingTop: 7
  },
  ass_header: {
    fontSize: 20,
    fontWeight: "bold",
    textDecorationLine: "underline"
  }
});

function sort_ass(type: any) {
  let filtered_ass = [];

  if (type == "Creation") {
    // OH shit
  } else if (type == "Due Date") {
    /*
      *** INPUT FUNCTION TO SORT DATES ***
      let dates = [];
      
      // Place all dates into an array
      for (let i = 0; i < assignments.length; i++) {
        let date = Object.values(assignments[i])[2];
        // Turn month names into nums
        dates.push(date);
      }

      // Sort array based on dates
      for (let i = 0; i < dates.length; i++) {
        let selected = dates[i];
        let minimum = dates[i + 1];

        // Get minimum value after selected date
        for (let i = selected + 1; i < dates.length; i++) {
          if (dates[i] < minimum) {
            minimum = dates[i];
          }
        }

        // Swap values if minimum value less than selected date
        if (minimum < selected) {
          [selected, minimum] = [minimum, selected];
        }
      }
        */

  } else if (type == "Class") {
    // Sort by class :( ?
  } else {
    Alert.alert("ya done did messed up");
  }
}

// Exports
export let assignments: Array<Object> = [];

export function reset_ass() {
  assignments = [];
}

export const delete_ass = (index: any) => {
  assignments.splice(index, 1);
  // It won't work without this for some reason...
  assignments = Array.of(...assignments);
}

export default amaker;