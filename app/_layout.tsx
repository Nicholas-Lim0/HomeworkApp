import { Stack } from "expo-router";

const Root_Layout = () => {
    return(
        <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="amaker" options={{ title: "Create an Assignment" }} />
            <Stack.Screen name="cmaker" options={{ title: "Create a Class" }} />
        </Stack>
    );
}

export default Root_Layout;