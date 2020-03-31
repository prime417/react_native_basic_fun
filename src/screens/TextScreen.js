import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const TextScreen = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View>
      <View>
        <Text>Enter your name</Text>
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          autoCorrect={false}
          value={name}
          onChangeText={newValue => setName(newValue)}
        />
        <Text>My name is {name}</Text>
      </View>
      <View>
        <Text>Enter your Password</Text>
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          autoCorrect={false}
          value={password}
          onChangeText={newValue => setPassword(newValue)}
        />
        {password.length < 5 ? (
          <Text>Password must be longer than 5 characters</Text>
        ) : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: "black",
    borderWidth: 1
  }
});

export default TextScreen;
