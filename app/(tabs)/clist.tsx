import React, { useState }from "react";
import { StyleSheet, Text, View, Pressable, ScrollView, Modal, Alert } from "react-native";
import Icon from "@expo/vector-icons/Ionicons";
import { AddButton } from "@/components/AddButton";
import { classes, reset_class, delete_class } from "../cmaker";

const clist = () => {
    const [classState, setClassState] = useState(classes);
    setInterval(() => {setClassState(classes)}, 1500);

    const [modal, setModal] = useState(false);
    
    // Var for keeping track of class when modal pulled up
    const [num, setNum] = useState(0);

    return(
        <View style={styles.scr_container}>
            <Modal visible={modal} animationType={"slide"}>
                <Text style={styles.modal_header}>{classState.length ? String(Object.values(classState[num])[0]) : ""}</Text>

                <View style={styles.modal_container}>
                    <View style={styles.modal_info}>
                        <Text style={styles.modal_text}> {classState.length && Object.values(classState[num])[4] ? `Teacher: ${String(Object.values(classState[num])[4])}` : "Teacher: [None]"} </Text>
                        <Text style={styles.modal_text}> {classState.length && Object.values(classState[num])[3] ? `Teacher Email: ${String(Object.values(classState[num])[3])}` : "Teacher Email: [None]"} </Text>
                        <Text style={styles.modal_text}> {classState.length && Object.values(classState[num])[2] ? `Room Number: ${String(Object.values(classState[num])[2])}` : "Room Number: [None]"} </Text>
                        <Text style={styles.modal_text}> {classState.length && Object.values(classState[num])[5] ? `Class Period: ${String(Object.values(classState[num])[5])}` : "Class Period: [None]"} </Text>
                    </View>

                    <Pressable onPress={() => {
                        delete_class(num);
                        setModal(false);
                        setNum(0);
                    }} style={{...styles.modal_close, width: 200, marginTop: 10, backgroundColor: "lightcyan"}}>
                        <Text style={styles.modal_button_text}> Delete </Text>
                    </Pressable>

                    <Pressable style={{...styles.modal_close, width: 200, marginTop: 10, backgroundColor: "lightcyan"}}>
                        <Text style={styles.modal_button_text}> Edit </Text>
                    </Pressable>

                    <Pressable onPress={() => {setModal(false)}} style={styles.modal_close}>
                        <Text style={styles.modal_button_text}> Close </Text>
                    </Pressable>
                </View>
            </Modal>

            <ScrollView>
                <View>
                    <View style={classState.length ? {display: "none"} : styles.fill_container}>
                        <Text style={classState.length ? {display: "none"} : styles.fill_text}> No Classes </Text>
                        <Text style={classState.length ? {display: "none"} : styles.sub_fill_text}> To create a class, click the "+" button </Text>
                    </View>
                </View>
                {classState.map(item => <Classes
                    name={Object.values(item)[0]} 
                    teacher={Object.values(item)[1]} 
                    fullname={Object.values(item)[2]} 
                    email={Object.values(item)[3]} 
                    room={Object.values(item)[4]} 
                    period={Object.values(item)[5]}
                    modal={setModal}
                    num={classState.indexOf(item)}
                    numfunc={setNum}
                    key={classState.indexOf(item)}>
                    </Classes>)}
            </ScrollView>
            
            <AddButton link="/cmaker"></AddButton>
        </View>
    );
}

export const Classes = (props: {name: any, teacher: any, modal: any, num: Number, numfunc: any, key: any, fullname?: any, email?: any, room?: any, period?: any}) => {
    return(
        <View>
            <View style={styles.ass_container}>
                <Text style={styles.ass_header}>{props.name ? `${props.name}` : "None"}</Text>
                <Text style={styles.text}>{props.teacher ? `Teacher: ${props.teacher}` : "Teacher: None"}</Text>
            </View>
            <Pressable style={styles.info_button} onPress={() => {
                props.modal(true);
                props.numfunc(props.num);
                }}>
                <Icon name={"information-circle-outline"} size={35} />
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    scr_container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    add_container: {
        position: "absolute",
    },
    add_btn: {
        position: "relative",
        left: 130,
        top: 235,
        width: 60,
        height: 60,
        borderRadius: 100,
        borderWidth: 2,
        borderColor: "black",
        backgroundColor: "royalblue",
        paddingTop: 5,
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
    delete_btn: {
      height: 35,
      marginTop: 10,
      marginBottom: 10,
      backgroundColor: "dodgerblue",
      borderWidth: 1.5,
      borderRadius: 5,
      paddingTop: 1,
      paddingRight: 4.5,
    },
    delete_text: {
      textAlign: "center",
      fontSize: 20,
      fontWeight: "bold",
      color: "ivory",
    },
    text: {
      fontSize: 20,
      fontWeight: "semibold",
      width: 335,
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
      paddingRight: 0,
    },
    ass_header: {
      fontSize: 20,
      fontWeight: "bold",
      textDecorationLine: "underline"
    },
    info_button: {
        position: "absolute",
        left: 305,
        bottom: 15,
    },
    modal_container: {
        margin: 10,
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    modal_center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    modal_header: {
        textAlign: "center",
        fontSize: 35,
        fontWeight: "bold",
        textDecorationLine: "underline",
        marginTop: 15,
    },
    modal_info: {
        marginRight: 6,
        marginLeft: 6,
        marginTop: -25,
        height: 325,
        width: 275,
        paddingTop: 15,
        backgroundColor: "powderblue",
        borderWidth: 2,
        borderColor: "black",
        borderRadius: 10,
    },
    modal_text: {
        fontSize: 23,
        fontWeight: "500",
        marginTop: 30,
        textAlign: "center",
    },
    modal_button_text: {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 18,
    },
    modal_close: {
        marginTop: 50,
        backgroundColor: "steelblue",
        borderWidth: 2,
        borderColor: "black",
        borderRadius: 25,
        width: 70,
        height: 40,
        paddingTop: 5,
    }
});

export default clist;