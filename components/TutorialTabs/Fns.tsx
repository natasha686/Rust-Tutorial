import { useState } from "react";
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const { height, width } = Dimensions.get('window');

export default function Fns() {
    const [commentInfo, setCommentInfo] = useState(false);
    const [fnName, setFnName] = useState(false);

    const [parameterInfo, setParameterInfo] = useState(false);
    const [returnInfo, setReturnInfo] = useState(false);

    const [runVar1, setRunVar1] = useState(false);
    const [runVar2, setRunVar2] = useState(false);

    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <Text style={{ marginBottom: height * .007 }}>You can have one or many functions in your Rust program! The program starts
                    in the main() function. This is where other functions can be called. You can define other functions anywhere in the same scope
                    to be called from another function. Note the order of the output to understand the order of function execution.</Text>
                <View style={{ flex: 1, justifyContent: 'space-between', flexDirection: 'row', gap: width * 0.01 }}>
                    <View style={styles.codeBox}>
                        <Text style={styles.blockCodeText}>{`fn main() {\n    `}
                            <Text style={{ backgroundColor: 'yellow' }} onPress={() => setCommentInfo(true)}>{`// This is a comment example`}</Text> {`
    println!("Hello, world!");                
    another_function();
}

fn`} <Text style={{ backgroundColor: 'magenta' }} onPress={() => setFnName(true)}>{`another_function()`}</Text>{`{
    yet_another_function();              
    println!("Another function."); 
}     
     
fn yet_another_function() {
    println!("Rust programming is the best!"); 
} `}</Text>
                    </View>
                    <View style={{ flex: 1, justifyContent: 'space-evenly' }}>
                        {commentInfo && <Text>Side note: <Text style={{ backgroundColor: 'yellow' }}>comments</Text> on single or multiple lines are denoted with // beforehand</Text>}
                        {fnName && <Text><Text style={{ backgroundColor: 'magenta' }}>Function names</Text> follow snake case format.</Text>}
                    </View>
                </View>
                <TouchableOpacity style={[styles.button, { width: width * .156 }]} onPress={() => setRunVar1(true)}>
                    <Text style={{ color: 'white' }}>Run</Text>
                </TouchableOpacity>
                {runVar1 && (
                    <View style={styles.codeBox}>
                        <Text style={styles.blockCodeText}>{'Hello, world!\nRust programming is the best!\nAnother function.'}</Text>
                    </View>
                )}
            </View>
            <View style={styles.box}>
                <Text style={{ marginBottom: height * .007 }}>You can pass in parameters to use certain values in a function and/or return values from a
                function. add_with_a_twist() function has parameters passed into it from main(). add_with_a_twist() also returns a value to main() to be printed.
                The comments in the example, in addition to the clickable highlighted words, provide more technical information.</Text>
                <View style={{ flex: 1, justifyContent: 'space-between', flexDirection: 'row', gap: width * 0.01 }}>
                    <View style={styles.codeBox}>
                        <Text style={styles.blockCodeText}>{`fn main() {    
    let result = add_with_a_twist(5, 6);  // Passing in two parameters to the next function
    println!(“The result returned is {result}.”);  // Prints ths value returned from the function
} 
fn add_with_a_twist`}
                            <Text style={{ backgroundColor: 'yellow' }} onPress={() => setParameterInfo(true)}>{`(x: i32, y: i32)`}</Text> 
                            <Text style={{ backgroundColor: 'magenta' }} onPress={() => setReturnInfo(true)}>{`->i32`}</Text>
{`{ 
    println!(“Inside add_with_a_twist()!”); ​
    x + (y / 2)  // No semi-colon at the end of this line to indicate this will be the return value
}`}</Text>
                    </View>
                    <View style={{ flex: 1, justifyContent: 'space-evenly' }}>
                        {parameterInfo && <Text>There are two <Text style={{ backgroundColor: 'yellow' }}>parameters</Text> for this function. They are named x and y and are both i32 integers. 
                        The method signature requires you to name your parameters and declare their type.</Text>}
                        {returnInfo && <Text>This indicates there will be a value <Text style={{ backgroundColor: 'magenta' }}>returned</Text> from this function of type i32.</Text>}
                    </View>
                </View>
                <TouchableOpacity style={[styles.button, { width: width * .156 }]} onPress={() => setRunVar2(true)}>
                    <Text style={{ color: 'white' }}>Run</Text>
                </TouchableOpacity>
                {runVar2 && (
                    <View style={styles.codeBox}>
                        <Text style={styles.blockCodeText}>{'Inside add_with_a_twist()!\nThe result returned is 8.'}</Text>
                    </View>
                )}
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        padding: width * 0.01,
        justifyContent: 'center',
    },
    box: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        backgroundColor: '#f3f3f3',
        borderRadius: 15,
        padding: 15,
        marginVertical: 8,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 2,
    },
    codeText: {
        fontFamily: 'monospace',
        fontSize: 14,
        color: 'black',
    },
    blockCodeText: {
        fontFamily: 'monospace',
        fontSize: 14,
        color: 'black',
        margin: width * 0.01,
    },
    codeBox: {
        backgroundColor: '#FED8B1',
        borderRadius: 5,
        marginVertical: width * 0.003,
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#F76806',
        marginVertical: height * .01,
        paddingVertical: height * .01,
        borderRadius: 5,
    },
});