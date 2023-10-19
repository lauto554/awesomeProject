import { TextInput, Text } from "react-native";
import { styles } from "./styles";

function InputText ({label}) {
    return(
        <View styles={styles.formBox}>
            <Text style={styles.inputText}>{label}</Text>  
            <TextInput 
                style={styles.inputBox}
            />      
        </View>
    )
}

export default InputText;