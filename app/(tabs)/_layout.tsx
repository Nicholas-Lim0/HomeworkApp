import { Tabs } from "expo-router";
import { Button, Text, View } from "react-native";
import { Icon } from "@/components/Icon";
import { Menu } from "@/components/Menu";
import { reset_ass } from "@/variables/assignments";
import { reset_class } from "../cmaker";

const TabsLayout = () => {
    return(
        <Tabs>
            <Tabs.Screen name="alist" options={{ 
                title: "Assignments", 
                tabBarIcon: ({color, focused}) => {
                    return <Icon source={"IonIcons"} name={focused ? "create" : "create-outline"} color={color} size={25}></Icon>
                }, 
                headerRight: () => {
                    return <Menu filter_func={() => {}} delete_func={reset_ass} screen={"alist"} />
                }
            }} 
            />
            <Tabs.Screen name="clist" options={{title: "Classes", tabBarIcon: ({color}) => {
                return <Icon source={"FontAwesome5"} name={"chalkboard-teacher"} color={color} size={20}></Icon>
            },
            headerRight: () => {
                return <Menu filter_func={() => {}} delete_func={reset_class} screen={"clist"} />
            }
            }} />
            <Tabs.Screen name="settings" options={{title: "Settings", tabBarIcon: ({color, focused}) => {
                return <Icon source={"IonIcons"} name={focused ? "settings-sharp" : "settings-outline"} color={color} size={25}></Icon>
            }}} />
        </Tabs>
    );
}

export default TabsLayout;