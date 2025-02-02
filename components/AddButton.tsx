import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { Link } from "expo-router";

export const AddButton = (props: {link: any}) => {
    return(
        <View style={styles.add_container}>
            <Link href={props.link} asChild>
                <Pressable style={styles.add_btn}>
                    <Text style={{fontSize: 30, textAlign: "center", fontWeight: "bold"}}>  +  </Text>
                </Pressable>
            </Link>
        </View>
    )
}

const styles = StyleSheet.create({
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
});