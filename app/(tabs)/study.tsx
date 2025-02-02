import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { AddButton } from "@/components/AddButton";

const study = () => {
    return(
        <View style={styles.scr_container}><ScrollView>
                <View>
                  <View style={styles.fill_container}>
                    <Text style={styles.fill_text}> No Study Sets </Text>
                    <Text style={styles.sub_fill_text}> To create a study set, click the "+" button </Text>
                 </View>
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
    modal: {
        width: 200,
        height: 200,
        borderRadius: 25,
        backgroundColor: "grey"
    }
});

export default study;