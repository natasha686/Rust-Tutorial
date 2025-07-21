import { Dimensions, StyleSheet, Text, View } from "react-native";

const { height, width } = Dimensions.get('window');



export default function StructEnum() {

    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <Text style={{ marginBottom: height * .007 }}><Text style={{ fontWeight: 'bold' }}>Structs</Text> are a way to store
                    multiple values, potentially of different data types, with different variable names. You use the names to access
                    different values in the struct, rather than the index like for tuples. Below is an example struct declaration.</Text>
                <View style={{ flex: 1, justifyContent: 'space-between', flexDirection: 'row', gap: width * 0.01 }}>
                    <View style={styles.codeBox}>
                        <Text style={styles.blockCodeText}>{`struct User { 
    active: bool, 
    username: String,
    email: String, 
    sign_in_count: u64,
}`}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.box}>
                <Text style={{ marginBottom: height * .007 }}>Structs can be immutable or mutable. Below is an example of a mutable
                    declaration and initialization, so you can see on the last line that the email is updated.</Text>
                <View style={{ flex: 1, justifyContent: 'space-between', flexDirection: 'row', gap: width * 0.01 }}>
                    <View style={styles.codeBox}>
                        <Text style={styles.blockCodeText}>{`fn main() { ​
    let mut user1 = User { 
        active: true, 
        username: String::from("someusername123"),
        email: String::from("someone@example.com"), 
        sign_in_count: 1,
    };
    user1.email = String::from("anotheremail@example.com"); ​
}`}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.box}>
                <Text style={{ marginBottom: height * .007 }}><Text style={{ fontWeight: 'bold' }}>Tuple structs</Text> are used when you want to give a
                    tuple a name and creating a whole struct with named fields would be too verbose. You have to add the expected types when declaring
                    tuple structs, as you can see on the first line of the example.{`\n`}The example shows two structs that look the “same” by definition but will not be
                    recognized that way by the compiler. If you were to pass a Color to a place that was expecting a Point the program would throw an error.</Text>
                <View style={{ flex: 1, justifyContent: 'space-between', flexDirection: 'row', gap: width * 0.01 }}>
                    <View style={styles.codeBox}>
                        <Text style={styles.blockCodeText}>{`struct Color(i32, i32, i32);
struct Point(i32, i32, i32);

fn main() {
    let black = Color(0, 0, 0)
    let origin = Point(0, 0, 0)
}`}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.box}>
                <Text style={{ marginBottom: height * .007 }}><Text style={{ fontWeight: 'bold' }}>Enums</Text> are a way of grouping fields and data where
                    the value can only be one of a possible set of values.{`\n`}Below is a simple example of an enum without any data types.</Text>
                <View style={{ flex: 1, justifyContent: 'space-between', flexDirection: 'row', gap: width * 0.01 }}>
                    <View style={styles.codeBox}>
                        <Text style={styles.blockCodeText}>{`enum IpAddrKind {
    V4, 
    V6,
}`}</Text>
                    </View>
                </View>
                <Text style={{ marginBottom: height * .007 }}>You can also attach any data type to each variant of the enum.</Text>
                <View style={{ flex: 1, justifyContent: 'space-between', flexDirection: 'row', gap: width * 0.01 }}>
                    <View style={styles.codeBox}>
                        <Text style={styles.blockCodeText}>{`enum Message {
    Quit,
    Move { x: i32, y: i32 },
    Write(String),
    ChangeColor(i32, i32, i32),
}`}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.box}>
                <Text style={{ marginBottom: height * .007 }}>The<Text style={{ fontWeight: 'bold' }}> Option{`<T>`} enum</Text>
                    is a special type of enum in Rust used to check if something or nothing was returned. The compiler can also use this to ensure all the cases have been
                    handled. Rust does not have null values, this steps in as a substitute. T can be most types, see documentation for specifics.
                    Below if the definition of the enum.</Text>
                <View style={{ flex: 1, justifyContent: 'space-between', flexDirection: 'row', gap: width * 0.01 }}>
                    <View style={styles.codeBox}>
                        <Text style={styles.blockCodeText}>{`enum Option<T> {
    None, 
    Some(T), 
}`}</Text>
                    </View>
                </View>
                <Text style={{ marginBottom: height * .007 }}>Below is an example of simple usage.</Text>
                <View style={{ flex: 1, justifyContent: 'space-between', flexDirection: 'row', gap: width * 0.01 }}>
                    <View style={styles.codeBox}>
                        <Text style={styles.blockCodeText}>{`let some_number = Some(5);
let some_char = Some('e');
let absent_number: Option<i32> = None;`}</Text>
                    </View>
                </View>
                <Text style={{ marginBottom: height * .007 }}>A compiler error would be thrown in the example below because you cannot
                    add an i8 and an Option{`<i8>`} together. Need to get the T value out of the Option using a function found in Option
                    documentation (out of the scope of this tutorial).  </Text>
                <View style={{ flex: 1, justifyContent: 'space-between', flexDirection: 'row', gap: width * 0.01 }}>
                    <View style={styles.codeBox}>
                        <Text style={styles.blockCodeText}>{`let some_number = Some(5);
let some_char = Some('e');
let absent_number: Option<i32> = None;`}</Text>
                    </View>
                </View>
                <Text style={{ marginBottom: height * .007 }}>The reason to use an Option over a regular type is when you are not sure if
                    there will always be a value present. Option allows you to handle the case
                    when there may not be a value there. An example of this is found in the next
                    section, Pattern Matching.  </Text>
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