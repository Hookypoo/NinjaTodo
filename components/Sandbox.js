import React from 'react'
import { StyleSheet, Text, View} from 'react-native';

export default function Sandbox() {
    return (
        <View style={styles.container}>
            <Text style={styles.boxOne}>one</Text>
            <Text style={styles.boxTwo}>two</Text>
            <Text style={styles.boxThree}>three</Text>
            <Text style={styles.boxFour}>four</Text>            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        //flex: 1,            ..................determines how much of the available space is taken up by elements.
        flexDirection: "row",
        justifyContent: 'center',
        paddingTop: 40,
        backgroundColor: "#ddd"
    },
    boxOne: {
        paddingTop: 10,
        backgroundColor: "violet"
    },
    boxTwo: {
        paddingTop: 10,
        backgroundColor: "gold"
    },
    boxThree: {
        paddingTop: 10,
        backgroundColor: "coral"
    },
    boxFour: {
        paddingTop: 10,
        backgroundColor: "skyblue"
    }
});
