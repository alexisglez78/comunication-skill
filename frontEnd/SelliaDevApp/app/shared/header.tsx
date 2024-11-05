import { styles } from "../styles/HeaderStyle";
import { Platform, Text, View } from "react-native";
import theme from "../styles/theme";

export default function header() {
  return (
    <View style={styles.container}>
        <div style={styles.webGradient}>
          <View style={styles.container}>
            <Text style={styles.chatTitle}>header paul </Text>
            <Text style={styles.numberClient}>+52 86723547 </Text>
          </View>
        </div>
    </View>
  );
}
