import { View, Text, TextInput, Switch, Button } from 'react-native'
import React, { useState, useEffect } from 'react'

export default function PasswordGenerator() {
    const [password, setPassword] = useState("")
    const [length, setLength] = useState(8)
    const [includeNumbers, setIncludeNumbers] = useState(false)
    const [includeSymbols, setIncludeSymbols] = useState(true)

    const generatePassword = (length: number, numbers: boolean, symbols: boolean) => {
        let password = ""
        let list = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

        if (numbers) {
            list += "1234567890"
        }
        if (symbols) {
            list += "!@#$%^&*()+"
        }

        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * list.length)
            password += list[randomIndex]
        }
        return password
    }

    useEffect(() => {
        setPassword(generatePassword(length, includeNumbers, includeSymbols))
    }, [length, includeNumbers, includeSymbols])

    return (
        <View style={{ padding: 20 }}>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>Password Generator</Text>

            <TextInput
                value={password}
                placeholder="Your Password"
                style={{ borderBottomWidth: 1, marginVertical: 10, padding: 5 }}
                editable={false}
            />
            
            <TextInput
                placeholder="Length"
                style={{ borderBottomWidth: 1, marginVertical: 10, padding: 5 }}
                onChangeText={(text)=>setLength(+text)}
            />

            <View style={{ flexDirection: "row", alignItems: "center", marginVertical: 5 }}>
                <Text>Include Numbers:</Text>
                <Switch value={includeNumbers} onValueChange={setIncludeNumbers} />
            </View>

            <View style={{ flexDirection: "row", alignItems: "center", marginVertical: 5 }}>
                <Text>Include Symbols:</Text>
                <Switch value={includeSymbols} onValueChange={setIncludeSymbols} />
            </View>

            <Button title="Generate New Password" onPress={() => setPassword(generatePassword(length, includeNumbers, includeSymbols))} />
        </View>
    )
}
