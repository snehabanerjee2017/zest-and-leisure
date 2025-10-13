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
        marginBottom: measurements.marginBottom,
        color: "#d6336c",
    },
    grid: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
    },
    gridTitle: {
        fontSize: 22,
        fontWeight: "700",
        marginBottom: measurements.marginBottom,
        color: "#000",
        },

    item: {
        alignItems: "center",
        marginBottom: measurements.marginBottom,
        marginRight: 10,
    },
    caption: {
        marginTop: 6,
        fontSize: 14,
        color: "#000",
        textAlign: "center",
    },
    thumbnail: {
        borderRadius: measurements.borderRadius,
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
        marginBottom: measurements.marginBottom,
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
        marginBottom: measurements.marginBottom,
        color: "#9d174d",
    },
    itemText: { 
        fontSize: 14, 
        marginBottom: measurements.marginBottom, 
        color: "#444" 
    },
    table: {
        backgroundColor: "#fff",
        padding: 12,
        borderRadius: measurements.borderRadius,
        elevation: 1,
        marginBottom: measurements.marginBottom,
    },
    tableHeader: {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderColor: "#ddd",
        paddingBottom: 6,
        marginBottom: measurements.marginBottom,
    },
    cellHeader: { 
        flex: 1, 
        fontWeight: "600", 
        color: "#333" 
},
    tableRow: { 
        flexDirection: "row", 
        marginBottom: measurements.marginBottom, 
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