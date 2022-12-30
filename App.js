import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import { Storage } from 'expo-storage';

export default function App() {

  async function save(chave, value) {
    await Storage.setItem({
      key: chave,
      value: JSON.stringify(value)
    });

    Alert.alert("Aviso!", "A informação " + value + " foi gravada com sucesso!");
  }

  async function returnInfo() {
    let vData = JSON.parse(await Storage.getItem({ key: "chave" }));

    Alert.alert("Aviso!", "A informação " + vData + " foi recuperada com sucesso!");
  }

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20 }} >Como usar o Expo Storage</Text>

      <View style={{ marginTop: 10 }}>
        <Button onPress={() => save("chave", "123456")} title="Salvar a informação" />
      </View>

      <View style={{ marginTop: 10 }} >
        <Button onPress={() => returnInfo()} title="Mostrar a informação salva" />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
