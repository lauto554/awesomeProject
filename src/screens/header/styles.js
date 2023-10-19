import { StyleSheet } from "react-native";
import { windowHeight, windowWidth } from "../../../assets/constants";


export const styles = StyleSheet.create({
    logoContainer:{
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#0482F5",
        width: windowWidth * 0.45,
        height: windowWidth * 0.45,
        top: 30,
        borderRadius: 100,

    },
    logoText: {
        fontSize: 20,
        fontWeight: "500",
    },
    
})