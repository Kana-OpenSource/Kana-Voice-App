import { useState } from "react";
import { Button, View, StyleSheet, TextInput, Keyboard } from "react-native";
import { Audio } from "expo-av";

const styles = StyleSheet.create({
    toolbox: {
        flexDirection: "row",
        gap: 10,
        padding: 10
    },
    input: {
        flex: 1
    },
    textInput: {
        width: "100%",
        height: "100%",
        textAlignVertical: "top",
        padding: 10
    }
});

function play(text: string) {
    Keyboard.dismiss();

    fetch("http://127.0.0.1:1057/api/v4/voice/synthesize-demo", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            text: text
        })
    })
        .then(async (response) => {
            if (!response.ok) {
                const data = await response.json();
                alert(data.message_ja);
            } else {
                const url = "http://127.0.0.1:1057"+(await response.json()).url;
                const {sound} = await Audio.Sound.createAsync({ uri: url });
                await sound.playAsync();
            }
        });
}

export default function Home() {
    const [text, setText] = useState("あいうえお");

    return (
        <>
            <View style={[styles.toolbox]}>
                <Button
                    title="Play"
                    onPress={() => play(text)}
                />
            </View>
            <View style={[styles.input]}>
                <TextInput id="text" style={[styles.textInput]} multiline onChangeText={setText} />
            </View>
        </>
    );
}
