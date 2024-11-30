import { Button, View, TextInput, Text } from "react-native";

export default function Home() {
    return (
        <View>
            <Text>ログイン</Text>
            <TextInput placeholder="ユーザー名" />
            <TextInput placeholder="パスワード" secureTextEntry />
            <Button title="ログイン" />
            <Text>アカウントをお持ちでない場合は、新規登録を行ってください。</Text>
            <Button title="新規登録" />
        </View>
    );
}
