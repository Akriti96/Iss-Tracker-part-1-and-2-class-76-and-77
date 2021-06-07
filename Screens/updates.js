import React from "react"
import Reacrt from "react"
import { View,Text,StyleSheet,TouchableOpacity } from "react-native"

export default class UpdateScreen extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Text>
                   Update
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