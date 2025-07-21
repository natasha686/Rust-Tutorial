import { useState } from "react";
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const { height, width } = Dimensions.get('window');

const Ints = () => {
    const items = ['Signed and unsigned: 8, 16, 32, 64, and 128 bit', 'Can be written in decimal, hex, octal, binary (2nd example), or byte​'];

    return (
        <>
            <Text style={styles.slideTitle}>Integers</Text>
            {items.map((item, index) => (
                <View key={index} style={styles.bulletItem}>
                    <Text style={styles.bullet}>•</Text>
                    <Text>{item}</Text>
                </View>
            ))}
            <Text>Examples:</Text>
            <View style={styles.codeBox}>
                <Text style={styles.blockCodeText}>
                    {`let var: u32 = 45;
let value: u8 = 0b1111_0000;`}
                </Text>
            </View>

        </>

    )
}

const Floats = () => {
    const items = ['32 and 64 bit'];

    return (
        <>
            <Text style={styles.slideTitle}>Floats</Text>
            {items.map((item, index) => (
                <View key={index} style={styles.bulletItem}>
                    <Text style={styles.bullet}>•</Text>
                    <Text>{item}</Text>
                </View>
            ))}
            <Text>Example:</Text>
            <View style={styles.codeBox}>
                <Text style={styles.blockCodeText}>
                    {`let y: f32 = 3.0;`}
                </Text>
            </View>

        </>

    )
}

const Booleans = () => {
    const items = ['True or false'];

    return (
        <View style={{ justifyContent: 'flex-end' }}>
            <Text style={styles.slideTitle}>Booleans</Text>
            {items.map((item, index) => (
                <View key={index} style={styles.bulletItem}>
                    <Text style={styles.bullet}>•</Text>
                    <Text>{item}</Text>
                </View>
            ))}
            <Text>Example:</Text>
            <View style={styles.codeBox}>
                <Text style={styles.blockCodeText}>
                    {`let f: bool = false;`}
                </Text>
            </View>

        </View>

    )
}

const Characters = () => {
    const items = ['Unicode scalar values', 'Denoted by single quotes'];

    return (
        <>
            <Text style={styles.slideTitle}>Characters</Text>
            {items.map((item, index) => (
                <View key={index} style={styles.bulletItem}>
                    <Text style={styles.bullet}>•</Text>
                    <Text>{item}</Text>
                </View>
            ))}
            <Text>Example:</Text>
            <View style={styles.codeBox}>
                <Text style={styles.blockCodeText}>
                    {`let z: char = 'Z';`}
                </Text>
            </View>

        </>

    )
}

const Tuples = () => {
    const items = ['Group values of different types together', 'Fixed length', 'Use index to access (see println)'];

    return (
        <>
            <Text style={styles.slideTitle}>Tuples</Text>
            {items.map((item, index) => (
                <View key={index} style={styles.bulletItem}>
                    <Text style={styles.bullet}>•</Text>
                    <Text>{item}</Text>
                </View>
            ))}
            <Text>Example:</Text>
            <View style={styles.codeBox}>
                <Text style={styles.blockCodeText}>
                    {`let tup: (i32, f64, u8) = (500, 6.4, 1);​
println!(tup.0)
let (x, y, z) = tup; // destructuring`}
                </Text>
            </View>

        </>

    )
}

const Arrays = () => {
    const items = ['All have to be the same type', 'Fixed length', 'Good for putting values on the stack rather than the heap'];

    return (
        <>
            <Text style={styles.slideTitle}>Arrays</Text>
            {items.map((item, index) => (
                <View key={index} style={styles.bulletItem}>
                    <Text style={styles.bullet}>•</Text>
                    <Text>{item}</Text>
                </View>
            ))}
            <Text>Example:</Text>
            <View style={styles.codeBox}>
                <Text style={styles.blockCodeText}>
                    {`let a: [i32; 5] = [1, 2, 3, 4, 5];
let value = a[2]; // access by index`}
                </Text>
            </View>

        </>

    )
}


export default function Vars() {
    const [letInfo, setLetInfo] = useState(false);
    const [mutInfo, setMutInfo] = useState(false);

    const [runVar, setRunVar] = useState(false);

    // scalar slides
    const scalarSlides = [<Ints />, <Floats />, <Booleans />, <Characters />];
    const [scalarIndex, setScalarIndex] = useState(0);

    const scalarGoLeft = () => {
        if (scalarIndex > 0) setScalarIndex(scalarIndex - 1);
        else setScalarIndex(scalarSlides.length - 1);
    };

    const scalarGoRight = () => {
        if (scalarIndex < scalarSlides.length - 1) setScalarIndex(scalarIndex + 1);
        else setScalarIndex(0);
    };

    // compound slides
    const compoundSlides = [<Tuples />, <Arrays />];
    const [compoundIndex, setCompoundIndex] = useState(0);

    const compoundGoLeft = () => {
        if (compoundIndex > 0) setCompoundIndex(compoundIndex - 1);
        else setCompoundIndex(compoundSlides.length - 1);
    };

    const compoundGoRight = () => {
        if (compoundIndex < compoundSlides.length - 1) setCompoundIndex(compoundIndex + 1);
        else setCompoundIndex(0);
    };

    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <Text style={{ marginBottom: height * .007 }}>Basic Variable Example - click the highlighted words for more information!</Text>
                <View style={{ flex: 1, justifyContent: 'space-between', flexDirection: 'row', gap: width * 0.01 }}>
                    <View style={styles.codeBox}>
                        <Text style={styles.blockCodeText}>{`fn main() {\n    `}
                            <Text style={{ backgroundColor: 'yellow' }} onPress={() => setLetInfo(true)}>{`let`}</Text> {``}
                            <Text style={{ backgroundColor: 'magenta' }} onPress={() => setMutInfo(true)}>{`mut`}</Text> {`x = 5; ​
    println!("The value of x is: {x}"); 
    x = 6; 
    println!("The value of x is: {x}"); 
}`}​</Text>
                    </View>
                    <View style={{ flex: 1, justifyContent: 'space-evenly' }}>
                        {letInfo && <Text><Text style={[styles.codeText, { backgroundColor: 'yellow' }]}>let</Text> keyword creates a new variable!
                        </Text>}
                        {mutInfo && <Text><Text style={[styles.codeText, { backgroundColor: 'magenta' }]}>mut</Text> keyword
                            indicates that the variable is mutable, meaning it can be changed. Without the
                            keyword the value assigned to the variable would be immutable (default option) and always must be the same.
                            If there was no <Text style={[styles.codeText, { backgroundColor: 'magenta' }]}>mut</Text> keyword in front of x then this code would throw an error!
                        </Text>}
                    </View>
                </View>
                <TouchableOpacity style={[styles.button, { width: width * .156 }]} onPress={() => setRunVar(true)}>
                    <Text style={{ color: 'white' }}>Run</Text>
                </TouchableOpacity>
                {runVar && (
                    <View style={styles.codeBox}>
                        <Text style={styles.blockCodeText}>{'The value of x is: 5\nThe value of x is: 6'}</Text>
                    </View>
                )}
            </View>
            <View style={styles.box}>
                <Text><Text style={{ fontWeight: 'bold' }}>Constants</Text> are always immutable.
                    They can also be defined in any scope that will be valid the entire time a program runs.
                    Below you will see a declaration example.</Text>
                <View style={styles.codeBox}>
                    <Text style={styles.blockCodeText}>const THREE_HOURS_IN_SECONDS: u32 = 60 * 60 * 3;</Text>
                </View>
            </View>
            <View style={styles.box}>
                <Text><Text style={{ fontWeight: 'bold' }}>Shadows</Text> are using the same variable name to
                    declare a new variable. It is different than a mutable variable. This is creating a completely different
                    variable. It is useful to change the type of variable, but keep the same name for readability.</Text>
            </View>
            <View style={[styles.box, { flexDirection: 'row', alignItems: 'center', gap: width * 0.02 }]}>
                <Text style={styles.title}>Data Types</Text>
                <View style={{ flex: 1 }}>
                    <View style={styles.slideContainer}>{scalarSlides[scalarIndex]}</View>
                    <View style={styles.arrowRow}>
                        <TouchableOpacity onPress={scalarGoLeft}><Text>←</Text></TouchableOpacity>
                        <TouchableOpacity onPress={scalarGoRight}><Text>→</Text></TouchableOpacity>
                    </View>
                </View>
                <View style={{ flex: 1 }}>
                    <View style={styles.slideContainer}>{compoundSlides[compoundIndex]}</View>
                    <View style={styles.arrowRow}>
                        <TouchableOpacity onPress={compoundGoLeft}><Text>←</Text></TouchableOpacity>
                        <TouchableOpacity onPress={compoundGoRight}><Text>→</Text></TouchableOpacity>
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
    arrowRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    slideContainer: {
        height: height * 0.25,
        marginHorizontal: 20,
        alignItems: 'flex-start',
        justifyContent: 'center',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'black',
        padding: 10,
    },
    slideTitle: {
        fontSize: 16,
        fontWeight: 'bold',
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