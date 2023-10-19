import { TextInput, Text, View, Button, TouchableOpacity, Alert } from "react-native";
import { styles } from "./styles";
import InputText from "../../components/inputText";

function Form () {
    return(
        <View style={{marginTop: 80,flex:1, justifyContent:"space-between"}}>
            <Text style={styles.signText}>Sign in</Text>
            <InputText label={"Usuario"}/>
            <InputText label={"Contraseña"}/>
            <TouchableOpacity 
                style={styles.signButton}
                onPress={()=> Alert.alert("Click")}
            >
                <Text style={styles.signButtonText}>Sign In</Text>
            </TouchableOpacity>
            <View style={styles.bottonContainer}>
                <TouchableOpacity>
                    <Text style={styles.forgotPassword}>Olvide mi contraseña</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.register}>Registrarme</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Form;