import { Text } from "react-native"
import { MaterialIcons } from "@expo/vector-icons"
import Animated from "react-native-reanimated"

import { styles } from "./styles"

interface MessageProps {}

export function Message({ ...rest }: MessageProps) {
  return (
    <Animated.View style={styles.container}>
      <MaterialIcons name="notifications" color="#FFF" size={18} />
      <Text style={styles.title}>Mensagem de exemplo</Text>
    </Animated.View>
  )
}
