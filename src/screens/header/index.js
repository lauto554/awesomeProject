import { View, Text } from "react-native";
import { styles } from "./styles";

const Header = () => {

    return(
        <View style={styles.logoContainer}>
            <Text style={styles.logoText}>Agro APP - Logo</Text>
        </View>
    )
}

export default Header;