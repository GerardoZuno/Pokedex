import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { View, Text } from 'react-native'
import { RootStackParams } from '../navigator/StackNavigator'
import { styles } from '../theme/appTheme';


interface Props extends StackScreenProps<RootStackParams, 'PokemonScreen'> {}

const PokemonScreen = ({navigation, route}: Props) => {
    const {simplePokemon, color} = route.params
    return (
        <View>
            <Text style={{
                ...styles.titulo,
                color: color
            }}>
                {simplePokemon.name}- {color}
            </Text>
            
        </View>
    )
}

export default PokemonScreen
