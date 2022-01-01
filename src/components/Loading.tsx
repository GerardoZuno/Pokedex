import React from 'react'
import { View, ActivityIndicator, Text } from 'react-native'

const Loading = () => {
    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
        }}>
            <ActivityIndicator size={50}/>
            <Text>
              Cargando...
            </Text>
        </View>
    )
}

export default Loading
