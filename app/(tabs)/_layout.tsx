import { Tabs } from "expo-router";
import { Button, Text, View } from "react-native";
import Ionicon from "@expo/vector-icons/Ionicons";
import Icon from "@expo/vector-icons/FontAwesome5";
import { Menu } from "@/components/Menu";
import { reset_ass } from "@/variables/assignments";
import { reset_class } from "../cmaker";

const TabsLayout = () => {
    return(
        <Tabs>
            <Tabs.Screen name="alist" options={{ 
                title: "Assignments", 
                tabBarIcon: ({color, focused}) => {
                    return <Ionicon name={focused ? "create" : "create-outline"} color={color} size={25}></Ionicon>
                }, 
                headerRight: () => {
                    return <Menu filter_func={() => {}} delete_func={reset_ass} screen={"alist"} />
                }
            }} 
            />
            <Tabs.Screen name="clist" options={{title: "Classes", tabBarIcon: ({color}) => {
                return <Icon name={"chalkboard-teacher"} color={color} size={20}></Icon>
            },
            headerRight: () => {
                return <Menu filter_func={() => {}} delete_func={reset_class} screen={"clist"} />
            }
            }} />
            <Tabs.Screen name="settings" options={{title: "Settings", tabBarIcon: ({color, focused}) => {
                return <Ionicon name={focused ? "settings-sharp" : "settings-outline"} color={color} size={25}></Ionicon>
            }}} />
        </Tabs>
    );
}

export default TabsLayout;