import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
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
        borderRadius: 10,
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
        borderRadius: 50,
        padding: 15,
    },
    playIcon: {
        fontSize: 28,
        color: '#fff',
    },
})