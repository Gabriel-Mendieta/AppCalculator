import { Text, Pressable } from 'react-native'
import React from 'react'
import { globalStyles } from '@/styles/global-styles'
import { Colors } from '@/constants/Colors'
import * as Haptics from 'expo-haptics';

interface Props {
    label: string,
    color?: string,
    blackText?: boolean,
    onPress: () => void,
    doubleSize?: boolean,

}

const CalculatorButton = ({ label, color = Colors.darkGray, blackText = false, onPress, doubleSize = false }: Props) => {
    return (
        <Pressable
            style={({ pressed }) => ({
                ...globalStyles.button,
                backgroundColor: color,
                opacity: pressed ? 0.8 : 1,
                width: doubleSize ? 180 : 80,
            })}
            onPress={() => {

                Haptics.selectionAsync();
                onPress();
            }}
        >
            <Text style={{
                ...globalStyles.buttonText,
                color: blackText ? 'black' : 'white',
            }}>
                {label}
            </Text>
        </Pressable>
    )
}

export default CalculatorButton