import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    signText: {
        marginLeft: -10,
        fontSize: 30,
        fontWeight: "bold",
        marginHorizontal: 40,
    },
    inputText: {
        paddingTop: 20,
        fontSize: 20,
        marginBottom: 5,
    },
    inputBox: {
        borderWidth: 1,
        height: 40,
        padding: 7,
    },
    signButton: { 
        backgroundColor: "#0482F5",
        paddingVertical: 10,
        alignItems: "center",
        marginTop: 40,
        borderRadius: 10,
    },
    signButtonText:{
        color: "white",
        fontWeight: "bold",
        fontSize: 19,
    },
    bottonContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginBottom: 10,
    },
    forgotPassword: {
        fontSize: 20,
    },
    register: {
        fontSize: 20,
    }
})