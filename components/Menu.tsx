import React from "react";
import { StyleSheet, View, Text, Alert, Pressable } from "react-native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons"
import SelectDropdown from "react-native-select-dropdown";
import { reset_ass, sort_ass } from "@/app/amaker";
import { reset_class } from "@/app/cmaker";

export const Menu = (props: {filter_func: any, delete_func: any}) => {
    const filter_options = [
        {title: "Creation", icon: "clock-plus-outline"},
        {title: "Due Date", icon: "calendar-month"},
        {title: "Class", icon: "account"}
    ];

    let delete_word: any;

    if (props.delete_func == reset_ass) { delete_word = "assignments" } 
    else if (props.delete_func == reset_class) { delete_word = "classes" }

    const delete_alert = () => {
        Alert.alert(`Delete all ${delete_word}?`, `All ${delete_word} will be permenantly deleted`, [
            {
                text: "Cancel", 
                style: "cancel",
            }, 
            {
                text: "Ok",
                style: "default",
                onPress: () => {props.delete_func()},
            }
        ]);
    }

    return(
        <View style={styles.menu}>
            <SelectDropdown
            defaultValueByIndex={0}
            dropdownStyle={styles.dropdown}
            data={filter_options}
            onSelect={(item) => {
                filter_option = item.title
                sort_ass(filter_option);
            }}
            renderButton={() => {
                return(
                    <>
                        <Icon style={styles.filter} name={"filter-outline"} size={30} />
                    </>
                );
            }}
            renderItem={(item, index, selected) => {
                return(
                    <View style={selected ? {...styles.dropdown_item, backgroundColor: "lightgrey"} : styles.dropdown_item}>
                        <Text style={styles.dropdown_text}> {item.title} </Text>
                        <Icon style={styles.dropdown_icon} name={item.icon} size={20} />
                    </View>
                );
            }} 
            />
            <Pressable onPress={delete_alert}>
                <Icon style={styles.delete} name={"trash-can-outline"} size={30} />
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    menu: {
        flex: 1,
        flexDirection: "row-reverse",
    },
    filter: {
        marginRight: 17,
        marginTop: 13,
    },
    delete: {
        marginTop: 13,
        marginRight: 13,
    },
    dropdown: {
        borderRadius: 5,
        width: 110,
        marginLeft: -75,
        marginTop: -10,
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
    },
});

export let filter_option = "Creation";