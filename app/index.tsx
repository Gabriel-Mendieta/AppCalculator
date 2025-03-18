import { View, Text } from 'react-native'
import React from 'react'
import { globalStyles } from '@/styles/global-styles'
import ThemeText from '@/components/ThemeText'

const CalculatorApp = () => {
    return (
        <View style={globalStyles.calculatorContainer}>
            <Text
                style={globalStyles.mainResult}
                numberOfLines={1}
                adjustsFontSizeToFit
            >50 x 500000000</Text>

            <Text
                style={globalStyles.subResult}
            >2500</Text>

            <ThemeText />
        </View>
    )
}

export default CalculatorApp