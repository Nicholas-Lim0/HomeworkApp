import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Fontisto from "@expo/vector-icons/Fontisto";
import Foundation from "@expo/vector-icons/Foundation";
import IonIcons from "@expo/vector-icons/Ionicons";
import MatComIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MatIcons from "@expo/vector-icons/MaterialIcons";

// Hey, idiot, switch these to switch/case statements for better performance

export const Icon = (props: {source: any, name: any, style?: any, size?: any, color? : any}) => {
    if (props.source == "AntDesign") { return <AntDesign name={props.name} style={props.style} size={props.size} color={props.color} /> }
    else if (props.source == "Entype") { return <Entypo name={props.name} style={props.style} size={props.size} color={props.color} /> }
    else if (props.source == "EvilIcons") { return <EvilIcons name={props.name} style={props.style} size={props.size} color={props.color} /> }
    else if (props.source == "Feather") { return <Feather name={props.name} style={props.style} size={props.size} color={props.color} /> }
    else if (props.source == "FontAwesome") { return <FontAwesome name={props.name} style={props.style} size={props.size} color={props.color} /> }
    else if (props.source == "FontAwesome5") { return <FontAwesome5 name={props.name} style={props.style} size={props.size} color={props.color} /> }
    else if (props.source == "FontAwesome6") { return <FontAwesome6 name={props.name} style={props.style} size={props.size} color={props.color} /> }
    else if (props.source == "Fontisto") { return <Fontisto name={props.name} style={props.style} size={props.size} color={props.color} /> }
    else if (props.source == "Foundation") { return <Foundation name={props.name} style={props.style} size={props.size} color={props.color} /> }
    else if (props.source == "MaterialCommunityIcons") { return <MatComIcons name={props.name} style={props.style} size={props.size} color={props.color} /> }
    else if (props.source == "IonIcons") { return <IonIcons name={props.name} style={props.style} size={props.size} color={props.color} /> }
    else if (props.source == "MaterialIcons") { return <MatIcons name={props.name} style={props.style} size={props.size} color={props.color} /> }
}