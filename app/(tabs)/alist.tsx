import React, { useState, useContext } from "react";
import { StyleSheet, Text, View, Button, ScrollView, Alert } from "react-native";
import { AddButton } from "@/components/AddButton";
import { AssignmentMenu } from "@/components/AssignmentMenu";
import { assignments, reset_ass, delete_ass } from "../amaker";

const alist = () => {
    const [assState, setAssState] = useState(assignments);
    setInterval(() => setAssState(assignments), 500);

    return(
        <View style={styles.scr_container}>
            <ScrollView>
                <View>
                  <View style={assState.length ? {display: "none"} : styles.fill_container}>
                    <Text style={styles.fill_text}> {(assState.length) ? "" : "No Assignments"} </Text>
                    <Text style={styles.sub_fill_text}> To create an assignment, click the "+" button </Text>
                 </View>
                {assState.map(item => <Assignment name={Object.values(item)[0]} class={Object.values(item)[1]} date={Object.values(item)[2]} index={assState.indexOf(item)} key={assState.indexOf(item)}></Assignment>)}
                </View>
            </ScrollView>

            <AddButton link="/amaker"></AddButton>
        </View>
    );
}

const styles = StyleSheet.create({
    scr_container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    fill_container: {
      height: 500,
      paddingTop: 245,
    },
    fill_text: {
      textAlign: "center",
      fontSize: 35,
      fontWeight: "bold",
    },
    sub_fill_text: {
      textAlign: "center",
      fontSize: 15,
      fontWeight: "bold",
    },
    ass_container: {
      margin: 10,
      backgroundColor: "lightgrey",
      borderWidth: 3,
      borderColor: "dimgrey",
      borderRadius: 15,
      maxHeight: 300,
      width: 340,
      padding: 10,
      paddingTop: 7,
    },
    ass_header: {
      fontSize: 20,
      fontWeight: "bold",
      textDecorationLine: "underline"
    },
    text: {
      fontSize: 20,
      fontWeight: "semibold",
      width: 335,
    },
});

export const Assignment = (props: {name: any, class: any, date: any, index: any, key: any}) => {
    return(
        <View>
        <View style={styles.ass_container}>
            <Text style={styles.ass_header}>{`${props.name ? props.name : "[None]"}`}</Text>
            <Text style={styles.text}>{`${props.class ? `Class: ${props.class}` : "Class: [None]"}`}</Text>
            <Text style={styles.text}>{`${props.date ? `Due Date: ${props.date}` : "Due Date: [None]"}`}</Text>
        </View>
        <AssignmentMenu delete_func={delete_ass} delete_target={props.index} edit_func={() => {}} />
        </View>
    );
}

export default alist;