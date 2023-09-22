import { Text } from "react-native"
import { MaterialIcons } from "@expo/vector-icons"
import Animated, { Keyframe } from "react-native-reanimated"

import { styles } from "./styles"

interface MessageProps {}

export function Message({ ...rest }: MessageProps) {
  // 1º forma de trabalhar com keyframes
  const enteringKeyFrame = new Keyframe({
    0: {
      opacity: 0,
      transform: [{ translateY: -100 }],
    },

    70: {
      opacity: 0.3,
    },

    100: {
      opacity: 1,
      transform: [{ translateY: 0 }],
    },
  })

  // 2º forma de trabalhar com keyframes
  const exitingKeyFrame = new Keyframe({
    from: {
      opacity: 1,
      transform: [{ translateY: 0 }],
    },

    to: {
      opacity: 0,
      transform: [{ translateY: -100 }],
    },
  })

  return (
    <Animated.View
      style={styles.container}
      entering={enteringKeyFrame.duration(500)}
      exiting={exitingKeyFrame.duration(500)}
    >
      <MaterialIcons name="notifications" color="#FFF" size={18} />
      <Text style={styles.title}>Mensagem de exemplo</Text>
    </Animated.View>
  )
}
