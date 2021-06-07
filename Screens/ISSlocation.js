import React from "react"
import Reacrt from "react"
import { View,Text,StyleSheet,TouchableOpacity } from "react-native"

export default class ISSLocationScreen extends React.Component{
    render(){
        return(
            <View  style={styles.container}>
                <Text>
                ISSLocation
                </Text>
            </View>
        )
    }
}

const styles= StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"    
    }
})