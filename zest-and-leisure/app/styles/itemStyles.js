import { StyleSheet } from 'react-native';

import measurements from '../config/measurements';

export default StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 26,
        fontWeight: "bold",
        textAlign: "center",
        marginVertical: 10,
        marginBottom: 10,
        color: "#d6336c",
    },
    scrollView: {
        padding: 10,
    },
    grid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    postContainer: {
        margin: 5,
        borderRadius: measurements.borderRadius,
        overflow: 'hidden',
    },
    blockquoteStyle: {
        width: '100%',
        margin: 0,
    },
    webView: {
        flex: 1,
    },
    touchable: {
        flex: 1,
    },
    thumbnail: {
        width: '100%',
        height: '100%',
    },
    playButton: {
        position: 'absolute',
        top: '40%',
        left: '40%',
        backgroundColor: 'rgba(0,0,0,0.6)',
        borderRadius: measurements.borderRadius,
        padding: 15,
    },
    playIcon: {
        fontSize: 28,
        color: '#fff',
    },
    textContainer: {
        padding: 16,
        backgroundColor: "#fff0f6",
        borderRadius: measurements.borderRadius,
        marginVertical: 10,
    },
    sectionContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        marginBottom: 20,
    },
    card: {
        flex: 1,
        minWidth: "30%",
        backgroundColor: "#fff",
        padding: 12,
        margin: 4,
        borderRadius: measurements.borderRadius,
        elevation: 2,
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: "600",
        marginBottom: 8,
        color: "#9d174d",
    },
    itemText: { 
        fontSize: 14, 
        marginBottom: 4, 
        color: "#444" 
    },
    table: {
        backgroundColor: "#fff",
        padding: 12,
        borderRadius: measurements.borderRadius,
        elevation: 1,
        marginBottom: 20,
    },
    tableHeader: {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderColor: "#ddd",
        paddingBottom: 6,
        marginBottom: 6,
    },
    cellHeader: { 
        flex: 1, 
        fontWeight: "600", 
        color: "#333" 
},
    tableRow: { 
        flexDirection: "row", 
        marginBottom: 4 
    },
    cell: { 
        flex: 1, 
        color: "#444" 
    },
    note: { 
        marginTop: 6, 
        fontSize: 12, 
        textAlign: "center", 
        color: "#666" 
    },
    contactLink: {
        color: "#d6336c",
        fontWeight: "bold",
        textDecorationLine: "underline",
    },
})