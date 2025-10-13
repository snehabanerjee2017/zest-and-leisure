import { StyleSheet } from 'react-native';

import measurements from '../config/measurements';
import colors from '../config/colors';

export default StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: measurements.borderRadius, 
        marginBottom: measurements.marginBottom,
    },
    title: {
        fontSize: 22,
        fontWeight: "700",
        marginBottom: measurements.marginBottom,
        color: colors.titleFont,
        textAlign: "center",
    },
    grid: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
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
        width: "100%",
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