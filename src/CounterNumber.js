import React, {useState} from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'

const CounterNumber = () => {
    const [counter , setCounter]=useState(0);

    return (
        <View>
            <Text style={styles.counter}> {counter} </Text>

            <View style={styles.button_grp}>
                <TouchableOpacity
                    style={[styles.commonButton, styles.subtract]}
                    onPress={() => { 
                        setCounter(counter + 10);
                        // console.log(counter);
                    }}>
                    <Text style={styles.buttonText}>+10</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.commonButton, styles.reset]}
                    onPress={() => { 
                        setCounter(0);
                        // console.log(counter);
                    }}>
                    <Text style={styles.buttonText}>Reset</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.commonButton, styles.add]}
                    onPress={() => { 
                        if(counter>0) setCounter(counter - 10);
                        // else {
                        //     setCounter(0);
                        // }
                        // console.log(counter);
                    }}>
                    <Text style={styles.buttonText}>-10</Text>
                </TouchableOpacity>

            </View>
        </View>

    );
};

const styles = StyleSheet.create({
    button_grp:{
        width:"100%",
        display:"flex",
        alignItems:"center",
    },
    counter: {
        fontSize: 80,
        textAlign: "center",
        width: "100%",
        marginTop: 60,
        padding:20,
        marginBottom: 20,

    },
    buttonText: {
        color: 'white',
        fontSize: 20,
        display: 'flex',
        textAlign: 'center',
        fontFamily: 'monospace',
        // justifyContent:"flex-end"
    },
    commonButton: {
        backgroundColor: 'black',
        padding: 20,
        width: "30%",
        margin: 20,
        borderRadius: 10,
    },

})

export default CounterNumber;