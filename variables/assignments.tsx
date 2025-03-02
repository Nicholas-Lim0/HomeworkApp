import React from "react";
import { Alert } from "react-native";
import { sort_by_due_date } from "@/functions/filter_funcs";

// Exports
export let assignments: Array<Object> = [];

export function sort_ass(type: any) {
  let filtered_ass: any = [];
  let output: any = [];

  if (type == "Creation") {
    // OH shit
  } else if (type == "Due Date") {
    let dates = [];

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
    
    assignments = output;
  } else {
    Alert.alert("ya done did messed up");
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