import { useState } from "react";
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const { height, width } = Dimensions.get('window');

export default function ControlFlow() {
    const [conditionalExs, setConditionalExs] = useState(false);
    const [revFn, setRevFn] = useState(false);
    const [breakStmt, setBreakStmt] = useState(false);

    const [runVar1, setRunVar1] = useState(false);
    const [runVar2, setRunVar2] = useState(false);
    const [runVar3, setRunVar3] = useState(false);
    const [runVar4, setRunVar4] = useState(false);
    const [runVar5, setRunVar5] = useState(false);
    const [runVar6, setRunVar6] = useState(false);

    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <Text style={{ marginBottom: height * .007 }}><Text style={{ fontWeight: 'bold' }}>If statements </Text>are a way of making decision based on
                    Boolean conditions. The condition must already be a Boolean as Rust cannot convert a non-Boolean type
                    to a Boolean like other languages. In the example below Rust will only enter one of the conditional branches,
                    entering the first one that is true.</Text>
                <View style={{ flex: 1, justifyContent: 'space-between', flexDirection: 'row', gap: width * 0.01 }}>
                    <View style={styles.codeBox}>
                        <Text style={styles.blockCodeText}>{`fn main() {
    let number = 6;
    if`} <Text style={{ backgroundColor: 'yellow' }} onPress={() => setConditionalExs(true)}>{`number % 3 == 0`}</Text>{` {
        println!("number is divisible by 3");
    } else if`} <Text style={{ backgroundColor: 'yellow' }} onPress={() => setConditionalExs(true)}>{`number % 2 == 0`}</Text>{` {
        println!("number is divisible by 2");
    } else {
        println!("number is not divisible by 3 or 2");
    }
}`}</Text>
                    </View>
                    <View style={{ flex: 1, justifyContent: 'space-evenly' }}>
                        {conditionalExs && <Text>These are examples of <Text style={{ backgroundColor: 'yellow' }}>conditionals</Text>. Here we are checking
                            if the number is divisible by 3 or 2 using the modulo operator.</Text>}
                    </View>
                </View>
                <TouchableOpacity style={[styles.button, { width: width * .156 }]} onPress={() => setRunVar1(true)}>
                    <Text style={{ color: 'white' }}>Run</Text>
                </TouchableOpacity>
                {runVar1 && (
                    <View style={styles.codeBox}>
                        <Text style={styles.blockCodeText}>{'number is divisible by 3'}</Text>
                    </View>
                )}
            </View>
            <View style={styles.box}>
                <Text style={{ marginBottom: height * .007 }}>Can use an if in a let statement to determine the value all in one line.
                    In the example below, if condition is true then number will be 5, otherwise it will be 6.
                </Text>
                <View style={{ flex: 1, justifyContent: 'space-between', flexDirection: 'row', gap: width * 0.01 }}>
                    <View style={styles.codeBox}>
                        <Text style={styles.blockCodeText}>{`fn main() {
    let condition = true;
    let number = if condition { 5 } else { 6 };  // This is the special if statement. 
    println!("The value of number is: {number}");
}`}</Text>
                    </View>
                </View>
                <TouchableOpacity style={[styles.button, { width: width * .156 }]} onPress={() => setRunVar2(true)}>
                    <Text style={{ color: 'white' }}>Run</Text>
                </TouchableOpacity>
                {runVar2 && (
                    <View style={styles.codeBox}>
                        <Text style={styles.blockCodeText}>{'The value of number is: 5'}</Text>
                    </View>
                )}
            </View>
            <View style={styles.box}>
                <Text style={{ marginBottom: height * .007 }}><Text style={{ fontWeight: 'bold' }}>While loops</Text> use a Boolean condition to determine when to end
                    the loop. The example below counts down from 3 to 1.
                </Text>
                <View style={{ flex: 1, justifyContent: 'space-between', flexDirection: 'row', gap: width * 0.01 }}>
                    <View style={styles.codeBox}>
                        <Text style={styles.blockCodeText}>{`fn main() { 
    let mut number = 3;
    while number != 0 {
        println!("{number}!"); 
        number -= 1; 
    } 
    println!("LIFTOFF!!!"); 
    }
}`}</Text>
                    </View>
                </View>
                <TouchableOpacity style={[styles.button, { width: width * .156 }]} onPress={() => setRunVar3(true)}>
                    <Text style={{ color: 'white' }}>Run</Text>
                </TouchableOpacity>
                {runVar3 && (
                    <View style={styles.codeBox}>
                        <Text style={styles.blockCodeText}>{`3
2
1
LIFTOFF!!!`}</Text>
                    </View>
                )}
            </View>
            <View style={styles.box}>
                <Text style={{ marginBottom: height * .007 }}><Text style={{ fontWeight: 'bold' }}>For loops</Text> execute the loop a certain
                    number of times. The example below does the same thing as the while loop above, but uses a for loop instead.
                </Text>
                <View style={{ flex: 1, justifyContent: 'space-between', flexDirection: 'row', gap: width * 0.01 }}>
                    <View style={styles.codeBox}>
                        <Text style={styles.blockCodeText}>{`fn main() { 
    for number in `}<Text style={{ backgroundColor: 'yellow' }} onPress={() => setRevFn(true)}>{`(1..4).rev()`}</Text>{`{
        println!("{number}!"); 
    } 
    println!("LIFTOFF!!!"); ​
}`}</Text>
                    </View>
                    <View style={{ flex: 1, justifyContent: 'space-evenly' }}>
                        {revFn && <Text><Text style={{ backgroundColor: 'yellow' }}>rev() </Text>
                            is a reverse method in Rust and here will countdown from 3 to 1 which
                            is indicated by the (1..4) piece. If there was no .rev() then then the for
                            loop would iterated through 1, 2, and 3 in ascending order.</Text>}
                    </View>
                </View>
                <TouchableOpacity style={[styles.button, { width: width * .156 }]} onPress={() => setRunVar4(true)}>
                    <Text style={{ color: 'white' }}>Run</Text>
                </TouchableOpacity>
                {runVar4 && (
                    <View style={styles.codeBox}>
                        <Text style={styles.blockCodeText}>{`3
2
1
LIFTOFF!!!`}</Text>
                    </View>
                )}
                <Text>For loops can easily iterating through an array with English-like snytax. See
                    the example below!
                </Text>
                <View style={{ flex: 1, justifyContent: 'space-between', flexDirection: 'row', gap: width * 0.01 }}>
                    <View style={styles.codeBox}>
                        <Text style={styles.blockCodeText}>{`fn main() { 
    let a = [10, 20, 30, 40, 50]; 
    for element in a { 
        println!("the value is: {element}"); 
    } 
}`}</Text>
                    </View>
                </View>
                <TouchableOpacity style={[styles.button, { width: width * .156 }]} onPress={() => setRunVar5(true)}>
                    <Text style={{ color: 'white' }}>Run</Text>
                </TouchableOpacity>
                {runVar5 && (
                    <View style={styles.codeBox}>
                        <Text style={styles.blockCodeText}>{`the value is: 10
the value is: 20
the value is: 30
the value is: 40
the value is: 50`}</Text>
                    </View>
                )}
            </View>
            <View style={styles.box}>
                <Text style={{ marginBottom: height * .007 }}>Rust also has a way to just loop continuously using 
                the keyword “loop.” The loop will only end when a break statement is executed.</Text>
                <View style={{ flex: 1, justifyContent: 'space-between', flexDirection: 'row', gap: width * 0.01 }}>
                    <View style={styles.codeBox}>
                        <Text style={styles.blockCodeText}>{`fn main() {
    let mut counter = 0;
    let result = loop {
        counter += 1; 

        if counter == 10 {​
            break`} <Text style={{ backgroundColor: 'yellow' }} onPress={() => setBreakStmt(true)}>{`counter * 2;`}</Text>
{`  
        }
    }
    println!("The result is {result}");
};`}</Text>
                    </View>
                    <View style={{ flex: 1, justifyContent: 'space-evenly' }}>
                        {breakStmt && <Text>You do not have to use loop with a let statement, but here we will assign the end value to result, 
                            which is indicated by the break statement. In this case it will be counter times 2. Note that counter iterates above.</Text>}
                    </View>
                </View>
                <TouchableOpacity style={[styles.button, { width: width * .156 }]} onPress={() => setRunVar6(true)}>
                    <Text style={{ color: 'white' }}>Run</Text>
                </TouchableOpacity>
                {runVar6 && (
                    <View style={styles.codeBox}>
                        <Text style={styles.blockCodeText}>{'The result is 20'}</Text>
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