import React from "react";
import { Alert } from "react-native";
import { sort_by_due_date } from "@/functions/filter_funcs";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Exports
export let assignments: Array<Object> = [];

export function sort_ass(type: any) {
  const storeData = async (value: any, name: string) => {
    // Check if value is object or string
    if (typeof(value) == "object") {
      try {
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem(name, jsonValue);
      } catch(e: any) {
        Alert.alert(e);
      }
    } else {
      try {
        await AsyncStorage.setItem(name, value);
      } catch(e: any) {
        Alert.alert(e);
      }
    }
  }


  let filtered_ass: any = [];
  let output: any = [];

  if (type == "Due Date") {
    // Sort assignments by due date

    let dates: Array<Object> = [];

    for (let i = 0; i < assignments.length; i++) { dates.push(Object.values(assignments[i])[2]) }
    
    filtered_ass = sort_by_due_date(dates);

    // Match assignment list to filtered list
    for (let i = 0; i < filtered_ass.length; i++) {
      // Find matching date in filtered array
      for (let j = 0; j < assignments.length; j++) {
        let date = Object.values(assignments[j])[2];
        if (date == filtered_ass[i]) {
          output.push(assignments[j]);
        }
      }
    }

    output.reverse();
  } else if (type == "Creation") {
    // Sort assignments by creation order

    // Get creation order and sort it ascending
    let orders = [];
    for (let i = 0; i < assignments.length; i++) { orders.push(Object.values(assignments[i])[3]) }
    orders.sort((a: any, b: any) => a - b);

    for (let i = 0; i < orders.length; i++) {
        for (let j = 0; j < assignments.length; j++) {
            let ass_order = Object.values(assignments[j])[3];
            if (ass_order == orders[i]) {
                output.push(assignments[j]);
            }
        }
    }

  } else {
    Alert.alert("ya done did messed up");
  }

  // Make assignments sorted
  if (output) {
    assignments = output;
  }
}

export function reset_ass() {
  assignments = [];
}

export const delete_ass = (index: any) => {
  assignments.splice(index, 1);
  // It won't work without this for some reason...
  assignments = Array.of(...assignments);
}