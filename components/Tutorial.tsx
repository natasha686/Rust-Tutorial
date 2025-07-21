// App.tsx or App.js

import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import ControlFlow from './TutorialTabs/ControlFlow';
import Fns from './TutorialTabs/Fns';
import PatternMatching from './TutorialTabs/PatternMatching';
import StructEnum from './TutorialTabs/StructEnum';
import Vars from './TutorialTabs/Vars';
import Ownership from './TutorialTabs/Ownership';
import References from './TutorialTabs/References';
import Setup from './TutorialTabs/Setup';



export default function App() {
    const [activeTab, setActiveTab] = useState('Setup');

    const renderTab = () => {
        switch (activeTab) {
            case 'Setup':
                return <Setup />;
            case 'Variables & Datatypes':
                return <Vars />;
            case 'Functions':
                return <Fns />;
            case 'Control Flow':
                return <ControlFlow />;
            case 'Structs & Enums':
                return <StructEnum />;
            case 'Pattern Matching':
                return <PatternMatching />;
            case 'Ownership Rules':
                return <Ownership />;
            case 'References & Borrowing':
                return <References />;
            default:
                return null;
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.tabBar}>
                {['Setup', 'Variables & Datatypes', 'Functions', 'Control Flow', 'Structs & Enums', 'Pattern Matching', 'Ownership Rules', 'References & Borrowing'].map(tab => (
                    <TouchableOpacity
                        key={tab}
                        onPress={() => setActiveTab(tab)}
                        style={[styles.tabButton, activeTab === tab && styles.activeTab]}
                    >
                        <Text style={styles.tabText}>{tab}</Text>
                    </TouchableOpacity>
                ))}
            </View>
            <View style={styles.tabContent}>{renderTab()}</View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, marginTop: 50 },
    tabBar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderBottomWidth: 1,
        borderColor: '#ccc',
    },
    tabButton: {
        padding: 10,
    },
    activeTab: {
        borderBottomWidth: 2,
        borderColor: '#F76806',
    },
    tabText: {
        fontSize: 16,
    },
    tabContent: {
        flex: 1,
        padding: 20,
    },
});
