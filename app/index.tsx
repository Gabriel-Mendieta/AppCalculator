import { View, Text } from 'react-native'
import React from 'react'
import { globalStyles } from '@/styles/global-styles'
import ThemeText from '@/components/ThemeText'

const CalculatorApp = () => {
    return (
        <View style={globalStyles.calculatorContainer}>

            {/* Resultados */}
            <View style={{ paddingHorizontal: 30, paddingBottom: 20 }}>
                <ThemeText variant='h1'>50 x 5000</ThemeText>
                <ThemeText variant='h2'>2500</ThemeText>
            </View>

            {/* Filas de Botones */}

            <View>

            </View>
        </View>
    )
}

export default CalculatorApp