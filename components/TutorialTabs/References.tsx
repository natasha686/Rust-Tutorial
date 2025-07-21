import { Dimensions, StyleSheet, Text, View, Image } from "react-native";

const { height, width } = Dimensions.get('window');

export default function References() {
    const s1 = 'You would not want two mutable references because otherwise you would experience data races which can be hard to detect.';
    const s2 = 'Data races are caused by multiple pointers accessing data at the same time, one pointer is being used to write the data, and nothing being used to synchronize access to data.';
    const s3 = 'You would not want a combination of a mutable and immutable reference in the same scope because if the data at the reference is changed then previous immutable references no longer have the correct information.';
    const s4 = 'Rust’s compiler will make sure these rules are being followed to prevent future errors from occurring and the programmer having to track down the bug.';
    const reference_bullets = [s1, s2, s3, s4];

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Introduction to references - the second part to Rust's unique
                memory management.
            </Text>
            <View style={styles.box}>
                <Text style={{ marginBottom: height * .007 }}>
                    References allow you to refer to a value without taking ownership. This is called
                    <Text style={{ fontWeight: 'bold' }}> borrowing</Text>. '&' denotes a reference.</Text>
                <View style={{ flex: 1, justifyContent: 'space-between', flexDirection: 'row', gap: width * 0.01 }}>
                    <View style={styles.codeBox}>
                        <Text style={styles.blockCodeText}>{`let s1 = String::from("hello");​
let len = calculate_length(&s1); // s1 can still be used after this line
let val = s1 * len; // no error thrown

fn calculate_length(s: &String) -> usize { // s is a reference to a String
    s.len()
} // Here, s goes out of scope. But because s does not have ownership of what it refers to, the value is not dropped.`}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.box}>
                <Text>References can be mutable or immutable. They are immutable by default, so the example below would throw an error if written
                    without the <Text style={styles.codeText}>mut</Text> keyword. You can change the content in memory referred to by a reference if it is
                    mutable.</Text>
                <View style={{ flex: 1, justifyContent: 'space-between', flexDirection: 'row', gap: width * 0.01 }}>
                    <View style={styles.codeBox}>
                        <Text style={styles.blockCodeText}>{`fn main() {
    let s = String::from("hello");
    change(&mut s);
}

fn change(some_string: &mut String) {
    some_string.push_str(", world"); // error would be thrown here without mut keyword
}`}</Text>
                    </View>
                </View>
            </View>
            <Text style={styles.title}>Mutable Reference Rule: If you have a mutable reference you cannot have any other references to that
                value whether immutable or mutable.</Text>
            <View style={styles.box}>
                {reference_bullets.map((item, index) => (
                    <View key={index} style={styles.bulletItem}>
                        <Text style={styles.bullet}>•</Text>
                        <Text>{item}</Text>
                    </View>
                ))}
            </View>
            <Text style={styles.title}>Language comparison to further explain references:</Text>
            <View style={styles.box}>
                <Text style={{ marginBottom: height * .007 }}>
                    Each example creates a new string in the auxiliary function and tries to
                    return it to the main function. The explanations underneath each code snippet explain what happens
                    in each language. This code does not work in C or Rust because it results in a <Text style={{ fontWeight: 'bold' }}>
                        dangling reference</Text>. The new string that is being returned is out of scope when the auxiliary function
                    ends, so the main function is trying to access a reference that no longer exists.
                    Rust will throw a compiler error when a programmer attempts to do this.
                    Java does not make the programmer deal with references, the JVM
                    handles it all, so the code is valid. Therefore, If you want to work with a systems level programming
                    language then Rust is a better option because it will catch mistakes like
                    this to prevent you from unknowingly making this mistake and crash your
                    program.</Text>
                <View style={{ flex: 1, justifyContent: 'space-between', flexDirection: 'row', gap: width * 0.01 }}>
                    <View style={styles.codeBox}>
                        <Text style={styles.blockCodeText}>{`// C Language

char* dangle() {
    char local[] = "hello"; 
    return local;
}

int main() {
    char* ptr = dangle();                         
    printf("Dangling pointer: %s\\n", ptr); 
    return 0;
}​`}</Text>
                        <Text style={{ margin: width * 0.01 }}>{`Local is out of scope when dangle() ends,
so there is no pointer to access in main(). In C three things 
could happen: program crashes, prints garbage, or seems to
works sometimes (sets programmer up for seemingly invisible 
error to find later).`}</Text>
                    </View>
                    <View style={styles.codeBox}>
                        <Text style={styles.blockCodeText}>
                            {`// Java Language


public static void main(String[] args) {
    String returnedString = getString();
    System.out.println(“Returned string is: " + returnedString);
}

public static String getString() {
    String s = "hello"; 
    return s; 
}`}</Text>
                        <Text style={{ margin: width * 0.01 }}>{`There is no accessing values by reference in Java. In getString() a new string object
will be returned and the contents will be accessible in main(). The JVM keeps variables 
alive as long as they are still being used. Variable validity is not bound by the scope.`}</Text>
                    </View>
                    <View style={styles.codeBox}>
                        <Text style={styles.blockCodeText}>
                            {`// Rust Language


fn main() {
    let reference_to_nothing = dangle();
}

fn dangle() -> &String {
    let s = String::from("hello");
    &s
}`}</Text>
                        <Text style={{ margin: width * 0.01 }}>{`An error will be thrown in dangle() because &s will be 
out of scope after the function returns. This prevents future 
problems. Here would be a time to return an actual string and
move ownership instead of interacting with
the value through a reference. `}</Text>
                    </View>
                </View>
            </View>
            <View style={{ alignItems: 'center' }}>
                <Image source={require('../../assets/images/rustacean-flat-gesture.png')} />
            </View>
        </View >
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
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    bulletItem: {
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    bullet: {
        fontSize: 18,
        lineHeight: 22,
        marginRight: 6,
    },
});