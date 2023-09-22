import { useState } from "react"
import { View, Button } from "react-native"

import { Message } from "./src/components/Message"

import { styles } from "./styles"

export default function App() {
  const [showMessage, setShowMessage] = useState(false)

  return (
    <View style={styles.container}>
      {showMessage && <Message />}

      <Button
        title={showMessage ? "Fechar Mensagem" : "Exibir Mensagem"}
        onPress={() => setShowMessage((prevState) => !prevState)}
      />
    </View>
  )
}
