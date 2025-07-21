import { useState } from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";

const { height, width } = Dimensions.get('window');

export default function PatternMatching() {

    const [matchOperator, setMatchOperator] = useState(false);
    const [exhaustiveMatch, setExhaustiveMatch] = useState(false);

    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <Text style={{ marginBottom: height * .007 }}>If we declare the following enum...</Text>
                <View style={{ flex: 1, justifyContent: 'space-between', flexDirection: 'row', gap: width * 0.01 }}>
                    <View style={styles.codeBox}>
                        <Text style={styles.blockCodeText}>{`enum Coin {
    Penny,
    Nickel,
    Dime,
    Quarter,
}`}</Text>
                    </View>
                </View>
                <Text style={{ marginBottom: height * .007 }}>...each variant
                    can be mapped to a certain value using <Text style={{ fontWeight: 'bold' }}>match</Text>.
                    When the function is entered it will try each pattern in order and whichever one matches first will execute.
                    In this case the number on the righthand side of {`=>`} will be returned.</Text>
                <View style={{ flex: 1, justifyContent: 'space-between', flexDirection: 'row', gap: width * 0.01 }}>
                    <View style={[styles.codeBox, { paddingBottom: height * .04 }]}>
                        <Text style={styles.blockCodeText}>{`// Pass in a Coin variant to the function
fn value_in_cents
    match coin {
        Coin::Penny`} <Text style={{ backgroundColor: 'yellow' }} onPress={() => setMatchOperator(true)}>{`=>`}</Text>{` 1,
        Coin::Nickel => 5,
        Coin::Dime => 10,
        Coin::Quarter => 25,
    }
}`}</Text>
                    </View>
                    <View style={{ flex: 1, justifyContent: 'space-evenly' }}>
                        {matchOperator && <Text>{`=> `}operator acts as the match arm. The number listed
                            on the othe side is returned from the function.</Text>}
                    </View>
                </View>
            </View>
            <View style={styles.box}>
                <Text style={{ marginBottom: height * .007 }}><Text style={{ fontWeight: 'bold' }}>Using match with Option{`<T>`}</Text>
                    . Here is an example of how this would work. This is helpful if you need to take certain action depending on
                    if there is a value present or not. Some or None will be returned from the function.</Text>
                <View style={{ flex: 1, justifyContent: 'space-between', flexDirection: 'row', gap: width * 0.01 }}>
                    <View style={styles.codeBox}>
                        <Text style={styles.blockCodeText}>{`fn plus_one(x: Option<i32>) -> Option<i32> {
        match x {
            None => None,
            Some(i) => Some(i + 1),
        }
    }

let five = Some(5);
let six = plus_one(five);
let none = plus_one(None);`}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.box}>
                <Text style={{ marginBottom: height * .007 }}>Matches are <Text style={{ fontWeight: 'bold' }}>exhaustive</Text>
                    , which means every possibility needs to be accounted for to compile. Rust will
                    be able to detect which possibility is missing. Either all the cases can be explicitly handled or there can
                    be a catch all pattern at the end. The examples regarding a fake game describe two ways of using a
                    catch all pattern. Note: catch all is a term I am using and is not a Rust specific term.​</Text>
                <View style={{ flex: 1, justifyContent: 'space-between', flexDirection: 'row', gap: width * 0.01 }}>
                    <View style={styles.codeBox}>
                        <Text style={styles.blockCodeText}>{`let dice_roll = 9;​
match dice_roll {
    3 => add_fancy_hat(),
    7 => remove_fancy_hat(),
    `}
                            <Text style={{ backgroundColor: 'yellow' }} onPress={() => setExhaustiveMatch(true)}>{`other => move_player(other),`}</Text>
                            {`}

fn add_fancy_hat() {}
fn remove_fancy_hat() {}
fn move_player(num_spaces: u8) {}`}</Text>
                    </View>
                    <View style={styles.codeBox}>
                        <Text style={styles.blockCodeText}>{`let dice_roll = 9;
match dice_roll {
    3 => add_fancy_hat(),
    7 => remove_fancy_hat(),
    `}
                            <Text style={{ backgroundColor: 'yellow' }} onPress={() => setExhaustiveMatch(true)}>{`_ => (),`}</Text>
                            {`
}

fn add_fancy_hat() {}
fn remove_fancy_hat() {}`}</Text>
                    </View>
                    <View style={{ flex: 1, justifyContent: 'space-evenly' }}>
                        {exhaustiveMatch && <Text>If no pattern is matched, then the highlighted lines are entered which handles all other cases. The
                            example on the left uses a variable name on the lefthand side of the operator to pass to the function call
                            on the righthand side. The example on the right uses “_” which means there is no variable and to just enter
                            what is on the righthand side. In this case there is only a unit value which means no code is to be run.</Text>}
                    </View>
                </View>
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