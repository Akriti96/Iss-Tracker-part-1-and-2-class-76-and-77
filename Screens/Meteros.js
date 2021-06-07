import React from "react"
import Reacrt from "react"
import { View,Text,StyleSheet,TouchableOpacity } from "react-native"

export default class MeteorsScreen extends React.Component{
    render(){
        return(
            <View  style={styles.container}>
                <Text>
                Meteors
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