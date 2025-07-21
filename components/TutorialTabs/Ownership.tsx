import { Dimensions, StyleSheet, Text, View } from "react-native";

const { height, width } = Dimensions.get('window');

export default function Ownership() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Ownership Rules from Rust Book</Text>
            <View style={styles.numberedBox}>
                <Text style={styles.number}>1</Text>
                <Text>Each value in Rust has an owner.</Text>
            </View>
            <View style={styles.numberedBox}>
                <Text style={styles.number}>2</Text>
                <Text>There can only be one owner at a time</Text>
            </View>
            <View style={styles.numberedBox}>
                <Text style={styles.number}>3</Text>
                <Text>When the owner goes outs of scope, the value will be dropped.</Text>
            </View>
            <Text style={styles.title}>There are two concepts to understand
                before we dive into ownership.</Text>
            <View style={styles.box}>
                <Text style={{ marginBottom: height * .007 }}>
                    The first is string literals versus Strings. String literals are hardcoded into the program,
                    immutable, and the string has be known when the program is written therefore before running.
                    Strings are created from string literals, this can be seen in the code block below. They are
                    mutable, which can be helpful for different problems like taking in text user input.</Text>
                <View style={{ flex: 1, justifyContent: 'space-between', flexDirection: 'row', gap: width * 0.01 }}>
                    <View style={styles.codeBox}>
                        <Text style={styles.blockCodeText}>{`let s = String::from("hello");`}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.box}>
                <Text>The second concept is scope. When a variable is in scope it is valid and when it is out of scope
                    it is invalid. When a variable is no longer valid the memory for it is automatically freed.
                    Basic data types are stored on the stack since the amount of memory needed is known at compile time.
                    For data like Strings, the heap is used to allocate memory when the amount needed is not known at first.
                    The comments in the code example will walk you through the scope of variable s.</Text>
                <View style={{ flex: 1, justifyContent: 'space-between', flexDirection: 'row', gap: width * 0.01 }}>
                    <View style={styles.codeBox}>
                        <Text style={styles.blockCodeText}>{`{ // s is not valid here, it's not yet declared
    let s = "hello"; // s is valid from this point forward
    // do stuff with s
} // this scope is now over, and s is no longer valid`}</Text>
                    </View>
                </View>
            </View>
            <Text style={styles.title}>How the ownership rules are followed in Rust.</Text>
            <View style={styles.box}>
                <Text style={{ marginBottom: height * .007 }}>
                    We will use strings (not string literals) to explain the move concept. In Rust when one string is assigned to another the
                    entire contents is not copied, just the pointer, capacity, and length. This considered a move and ownership is transferred
                    to the new string and the old one no longer refers to and is out of scope.
                    If you want to deep copy the heap data of the string to get the contents you can use the clone() method. This is more expensive
                    than a move.
                </Text>
                <View style={{ flex: 1, justifyContent: 'space-between', flexDirection: 'row', gap: width * 0.01 }}>
                    <View style={styles.codeBox}>
                        <Text style={styles.blockCodeText}>{`let s1 = String::from("hello");​
let s2 = s1;
// now if s1 is accessed an error will be thrown`}</Text>
                    </View>
                </View>
                <Text>
                    {`\n`}Types that implement the copy trait (details of the copy trait are out of the scope of this tutorial)
                    which are usually data types you can get off the stack, like an
                    integer or Boolean, are automatically copied and the first variable is still valid. Rules 1 and 2 are followed
                    through this because each value only has one variable referring to it a time. Even if two of the same integer variables,
                    for example, are assigned to two different variables they are copies and therefore completely separate from each other having
                    different owners.
                </Text>
                <View style={{ flex: 1, justifyContent: 'space-between', flexDirection: 'row', gap: width * 0.01 }}>
                    <View style={styles.codeBox}>
                        <Text style={styles.blockCodeText}>{`let n1 = 2;
let n2 = n1;
// can access both n1 and n2 to get the value 2`}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.box}>
                <Text>When you pass a variable to a function through a parameter it will
                    move or copy. As a reminder move is transferring ownership and
                    copy is copying the contents to assign to that new variable. The same rule is followed
                    when a variable is returned from a function. If a variable is moved through a parameter or return, then the
                    function it is passed to will take ownership of it. The example below explains how this works so
                    that all three ownership rules are followed.</Text>
                <View style={{ flex: 1, justifyContent: 'space-between', flexDirection: 'row', gap: width * 0.01 }}>
                    <View style={styles.codeBox}>
                        <Text style={styles.blockCodeText}>{`fn main() {
    let s = String::from("hello"); // s comes into scope
    takes_ownership(s); // s's value moves into the function...

    // ... and so is no longer valid here

    let x = 5; // x comes into scope
    makes_copy(x); // because i32 implements the Copy trait, x does NOT move into the function,
    println!("{}", x); // so it's okay to use x afterward

} // Here, x goes out of scope, then s. But because s's value was moved, nothing special happens.

fn takes_ownership(some_string: String) { // some_string comes into scope
    println!("{some_string}");
} // Here, some_string goes out of scope and 'drop' is called. The backing memory is freed.

fn makes_copy(some_integer: i32) { // some_integer comes into scope
    println!("{some_integer}");
} // Here, some_integer goes out of scope. Nothing special happens.`}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.box}>
                <Text>Mutable strings example. When you assign a new string to a variable already
                    declared the original string goes out of scope and the memory is freed.
                    The new string is put in memory and referred to by the variable.</Text>
                <View style={{ flex: 1, justifyContent: 'space-between', flexDirection: 'row', gap: width * 0.01 }}>
                    <View style={styles.codeBox}>
                        <Text style={styles.blockCodeText}>{`let mut s = String::from("hello");​
s = String::from("ahoy");
// now s will only refer to "ahoy"`}</Text>
                    </View>
                </View>
            </View>
            <Text style={styles.title}>Language comparisons to further explain ownership:</Text>
            <View style={styles.box}>
                <Text style={{ marginBottom: height * .007 }}><Text style={{ fontWeight: 'bold' }}>Memory management </Text>
                    is unique in Rust and has made improvements over C and Java. Each example shows how to initialize and declare a string, followed by printing the
                    string. How memory is handled by each language is at the bottom of each code block. C is the only language that requires manual memory allocation. If the memory is not
                    freed properly that leads to memory leaks which can crash the program. Rust and Java have automatic memory management. However, the garbage
                    collector that Java uses is very slow. Therefore, Rust scope-based memory management the most efficient and easiest
                    to implement out of the three. </Text>
                <View style={{ flex: 1, justifyContent: 'space-between', flexDirection: 'row', gap: width * 0.01 }}>
                    <View style={styles.codeBox}>
                        <Text style={styles.blockCodeText}>{`// C Language

// Allocate memory
char *str = malloc(15);

// Move string to memory 
strcpy(str, “hello!");
printf("%s\\n", str);

// Free memory
free(str);`}</Text>
                        <Text style={{ margin: width * 0.01 }}>Manually allocated and freed
                            memory.</Text>
                    </View>
                    <View style={styles.codeBox}>
                        <Text style={styles.blockCodeText}>
                            {`// Java Language


// Create string
String str = “hello!";

// print the string
System.out.println(str);`}</Text>
                        <Text style={{ margin: width * 0.01 }}>Java Virtual Machine garbage
                            collector  {`\n`}took care of memory.</Text>
                    </View>
                    <View style={styles.codeBox}>
                        <Text style={styles.blockCodeText}>
                            {`// Rust Language


// Create a String
let str = String::from(“hello!");

// Print the string
println!("{}", str);`}</Text>
                        <Text style={{ margin: width * 0.01 }}>drop function used behind the
                            scenes to  {`\n`}free memory on
                            heap when str went {`\n`}out of scope.</Text>
                    </View>
                </View>
            </View>
            <View style={styles.box}>
                <Text style={{ marginBottom: height * .007 }}>In each code snippet a new
                    string is created and then is assigned to another variable. If two variables are pointing to the same
                    string in memory a <Text style={{ fontWeight: 'bold' }}>double free error</Text> could occur. This is when two different variable names reference
                    the same place in memory, and it is freed twice; freed once for each variable name.
                    Rust solves this problem by moving the first variable reference out of scope. {`\n\n`}
                    In C, if you move one string reference to another then you open the door for a
                    double free error. The example on the next slide shows incorrect memory
                    management that would cause this. This is an easy mistake to make. In Java, strings are immutable and when you “copy” one string to another an
                    entirely new object is created for the variable. You will be able to access the
                    data using either variable. Rust has the best method because it avoids double free errors and
                    does not copy the string contents which is expensive.</Text>
                <View style={{ flex: 1, justifyContent: 'space-between', flexDirection: 'row', gap: width * 0.01 }}>
                    <View style={styles.codeBox}>
                        <Text style={styles.blockCodeText}>{`// C Language

// Allocate memory and copy "hello" into it
char *s1 = malloc(5); 

strcpy(s1, "hello!");

// "Move" s1 to s2
char *s2 = s1;

// Both would print the same string
printf("%s\\n", s1);
printf("%s\\n", s2); 

// Freeing both - double free error
free(s1); 
free(s2); `}</Text>
                    </View>
                    <View style={styles.codeBox}>
                        <Text style={styles.blockCodeText}>
                            {`// Java Language


// Assigning both Strings with “hello”
String s1 = "hello";
String s2 = s1;

// Both will print “hello” with no
problem

System.out.println("s1: " + s1); 
System.out.println("s2: " + s2); `}</Text>
                    </View>
                    <View style={styles.codeBox}>
                        <Text style={styles.blockCodeText}>
                            {`// Rust Language


// Moving string reference to “hello” \n from s1 to s2

let s1 = String::from("hello");
let s2 = s1;

// This will print “hello"
println!("{s2}");

// The program will crash here \nsince s1 is no longer valid/in scope
println!("{s1}");`}</Text>
                    </View>
                </View>
            </View>
        </View >
    )

}

const styles = StyleSheet.create({
    container: {
        padding: width * 0.01,
        justifyContent: 'center',
    },
    numberedBox: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f3f3f3',
        borderRadius: 15,
        padding: 15,
        marginVertical: 8,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 2,
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
    number: {
        fontSize: 28,
        fontWeight: 'bold',
        marginRight: 15,
        color: '#333',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
});