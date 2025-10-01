import React, { useEffect, useState } from 'react';
import { View, Text, Platform, TouchableOpacity, Image, Dimensions, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/Header';
import styles from '../styles/homeScreenStyles';
import itemStyles from '../styles/itemStyles';

let WebView;
if (Platform.OS !== 'web') {
  WebView = require('react-native-webview').WebView;
}

const posts = [
  { id: '1', url: "https://www.instagram.com/reel/DPEdGEVDSJU/", thumbnail: require('../assets/DPEdGEVDSJU.png') },
  { id: '2', url: "https://www.instagram.com/reel/DO8vcdUDUrI/", thumbnail: require('../assets/DO8vcdUDUrI.png') },
  { id: '3', url: "https://www.instagram.com/reel/DOycYmiDY2_/", thumbnail: require('../assets/DOycYmiDY2_.png') },
  { id: '4', url: "https://www.instagram.com/reel/DOq4H_fjR7X/", thumbnail: require('../assets/DOq4H_fjR7X.png') },
  { id: '5', url: "https://www.instagram.com/reel/DOgZQblDRBV/", thumbnail: require('../assets/DOgZQblDRBV.png') },
  { id: '6', url: "https://www.instagram.com/reel/DOL2M2fDQzI/", thumbnail: require('../assets/DOL2M2fDQzI.png') },
  { id: '7', url: "https://www.instagram.com/reel/DOGryoRDYK6/", thumbnail: require('../assets/DOGryoRDYK6.png') },
  { id: '8', url: "https://www.instagram.com/reel/DNyE0tkWtCw/", thumbnail: require('../assets/DNyE0tkWtCw.png') },
  { id: '9', url: "https://www.instagram.com/reel/DNs9rLPWjsL/", thumbnail: require('../assets/DNs9rLPWjsL.png') },
  { id: '10', url: "https://www.instagram.com/reel/DNnweUhxePV/", thumbnail: require('../assets/DNnweUhxePV.png') },
];

const Cakes = () => {
  const [playVideo, setPlayVideo] = useState(null);

  useEffect(() => {
    if (Platform.OS === 'web' && playVideo) {
      if (!document.getElementById('instagram-embed-script')) {
        const script = document.createElement('script');
        script.id = 'instagram-embed-script';
        script.src = "https://www.instagram.com/embed.js";
        script.async = true;
        document.body.appendChild(script);
      } else {
        window.instgrm?.Embeds.process();
      }
    }
  }, [playVideo]);

  const numColumns = Platform.OS === 'web' ? 5 : 2;
  const screenWidth = Dimensions.get('window').width;
  const itemSize = screenWidth / numColumns - numColumns * itemStyles.scrollView.padding;

  const renderPost = (item) => (
    <View key={item.id} style={[itemStyles.postContainer, { width: itemSize, height: itemSize }]}>
      {playVideo === item.id ? (
        Platform.OS === 'web' ? (
          <blockquote 
            className="instagram-media" 
            data-instgrm-permalink={item.url} 
            data-instgrm-version="14" 
            style={itemStyles.blockquoteStyle}
          />
        ) : (
          <WebView
            source={{ uri: item.url }}
            style={itemStyles.webView}
            javaScriptEnabled
            domStorageEnabled
          />
        )
      ) : (
        <TouchableOpacity onPress={() => setPlayVideo(item.id)} style={itemStyles.touchable}>
          <Image 
            source={item.thumbnail}
            style={itemStyles.thumbnail}
            resizeMode="cover"
          />
          <View style={itemStyles.playButton}>
            <Text style={itemStyles.playIcon}>▶</Text>
          </View>
        </TouchableOpacity>
      )}
    </View>
  );

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={["top"]}>
        <ScrollView contentContainerStyle={itemStyles.scrollView} showsVerticalScrollIndicator={false}>
          {/* Header */}
          <Header />

          {/* Title Section */}
          <View style={itemStyles.container}>
            <Text style={itemStyles.title}>🎂 Cakes Page</Text>
            <Text>Here you'll see all our delicious cakes!</Text>
          </View>

          {/* Posts Grid */}
          <View style={itemStyles.grid}>
            {posts.map(renderPost)}
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};
export default Cakes;
