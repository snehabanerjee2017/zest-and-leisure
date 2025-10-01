// components/InstagramGrid.js
import React, { useEffect, useState } from "react";
import { View, Text, Platform, TouchableOpacity, Image, Dimensions } from "react-native";

let WebView;
if (Platform.OS !== "web") {
  WebView = require("react-native-webview").WebView;
}

import itemStyles from "../styles/itemStyles";

const InstagramGrid = ({ posts, title }) => {
  const [playVideo, setPlayVideo] = useState(null);

  useEffect(() => {
    if (Platform.OS === "web" && playVideo) {
      if (!document.getElementById("instagram-embed-script")) {
        const script = document.createElement("script");
        script.id = "instagram-embed-script";
        script.src = "https://www.instagram.com/embed.js";
        script.async = true;
        document.body.appendChild(script);
      } else {
        window.instgrm?.Embeds.process();
      }
    }
  }, [playVideo]);

  const numColumns = Platform.OS === "web" ? 5 : 2;
  const screenWidth = Dimensions.get("window").width;
  const itemSize = screenWidth / numColumns - numColumns * itemStyles.scrollView.padding;

  const renderPost = (item) => (
    <View key={item.id} style={[itemStyles.postContainer, { width: itemSize, height: itemSize }]}>
      {playVideo === item.id ? (
        Platform.OS === "web" ? (
          <blockquote
            className="instagram-media"
            data-instgrm-permalink={item.url}
            data-instgrm-version="14"
            style={itemStyles.blockquoteStyle}
          />
        ) : (
          <WebView source={{ uri: item.url }} style={itemStyles.webView} javaScriptEnabled domStorageEnabled />
        )
      ) : (
        <TouchableOpacity onPress={() => setPlayVideo(item.id)} style={itemStyles.touchable}>
          <Image source={item.thumbnail} style={itemStyles.thumbnail} resizeMode="cover" />
          <View style={itemStyles.playButton}>
            <Text style={itemStyles.playIcon}>▶</Text>
          </View>
        </TouchableOpacity>
      )}
    </View>
  );

  return (
    <View style={itemStyles.container}>
      <Text style={itemStyles.title}>{title}</Text>
      <View style={itemStyles.grid}>{posts.map(renderPost)}</View>
    </View>
  );
};

export default InstagramGrid;
