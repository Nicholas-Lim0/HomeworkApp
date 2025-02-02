import React from "react";
import { StyleSheet, View, TextInput, Text, Alert } from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

export const AssignmentMenu = (props: {delete_func: any, delete_target: any, edit_func: any}) => {
    const menu_options = [
        {title: "Delete", icon: "trash-can"},
        {title: "Edit", icon: "pencil-ruler"}
    ];

    return(
        <View>
            <SelectDropdown 
            dropdownStyle={styles.dropdown}
            data={menu_options}
            onSelect={(item) => {
                if (item.title == "Delete") {
                    props.delete_func(props.delete_target);
                } else if (item.title == "Edit") {
                    props.edit_func(item);
                }
            }}
            renderButton={() => {
                return(
                    <View style={styles.icon_container}>
                        <Icon name="text" size={30} style={styles.icon} />
                    </View>
                );
            }}
            renderItem={(item, index, selected) => {
                return(
                    <View style={styles.dropdown_item}>
                        <Text style={styles.dropdown_text}> {item.title} </Text>
                        <Icon style={styles.dropdown_icon} name={item.icon} size={20} />
                    </View>
                );
            }} 
            />
        </View>
    );
}

const styles = StyleSheet.create({
    icon_container: {
        position: "absolute",
        left: 240,
        bottom: 20,
        width: 100,
    },
    icon: {
        textAlign: "right",
    },
    dropdown: {
        borderRadius: 5,
        width: 110,
    },
    dropdown_item: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "flex-start",
        flexDirection: "row",
        paddingVertical: 5,
        paddingHorizontal: 3,
    },
    dropdown_text: {
        fontSize: 16,
    },
    dropdown_icon: {
        marginTop: 0.5,
        marginLeft: 1,
    },
});

/*
        <View>
            <SelectDropdown 
            dropdownStyle={styles.dropdown}
            data={menu_options}
            onSelect={() => {}}
            renderButton={() => {
                return(
                    <>
                        <Icon name={"text"} style={styles.icon} size={25} />
                    </>
                );
            }}
            renderItem={(item, index, selected) => {
                return(
                    <View style={selected ? styles.dropdown_item : styles.dropdown_item}>
                        <Text style={styles.dropdowntext}> {item.title} </Text>
                        <Icon name={item.icon} size={15} />
                    </View>
                );
            }}
            ></SelectDropdown>
        </View>
*/