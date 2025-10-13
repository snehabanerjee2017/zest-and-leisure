import { StyleSheet } from 'react-native';

import measurements from '../config/measurements';

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
        width: measurements.logoWidth,
        height: measurements.logoHeight,
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
        borderRadius: measurements.borderRadius,
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
        borderRadius: measurements.borderRadius, 
        marginBottom: measurements.marginBottom,
    },

    aboutImage: {
        width: measurements.imageWidth,
        height: measurements.imageHeight,
        borderRadius: measurements.borderRadius,
    },
    mobileImage: {
        resizeMode: 'cover',
    },
    desktopImage: {
        marginRight: 20,
        marginLeft: 20,
    },
    aboutText: {
        flex: 1,
        fontSize: 16,
        lineHeight: 24,
        color: "#333",
        textAlign: "justify",
    },
    bottomSection: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 20,
        borderRadius: measurements.borderRadius,
        marginBottom: measurements.marginBottom,
    },
    textContainer: {
        flex: 1,
        justifyContent: 'center',
    },
});
