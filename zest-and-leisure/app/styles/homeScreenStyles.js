import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingLeft: 10,
        paddingRight: 10,
    },
    scrollContainer: {
        flexGrow: 1,
        flexDirection: "column",
    },
    headerContainer: {
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 20,
    },
    headerLogo: {
        width: 300,
        height: 300,
    },
    buttonContainer: {
        justifyContent: "center",
        alignItems: "center",
    },
    buttonRow: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-around",
        alignItems: "center",
        width: "100%",
    },
    button: {
        backgroundColor: "#C3B1E1",
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 8,
        margin: 5,
    },
    buttonText: {
        color: "#fff",
        fontSize: 14,
        fontWeight: "bold",
    },
    aboutSection: {
        padding: 15,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10, 
        marginBottom:10,
    },

    aboutImage: {
        marginBottom: 15,
        width: 250,
        height: 250,
        borderRadius: 10,
    },
    mobileImage: {
        resizeMode: 'contain',
    },
    desktopImage: {
        marginRight: 20,
    },
    aboutText: {
        flex: 1,
        fontSize: 16,
        lineHeight: 24,
        color: "#333",
        textAlign: "left",
    },
    bottomSection: {
        backgroundColor: "tomato",
        height: 150,
    },
});
