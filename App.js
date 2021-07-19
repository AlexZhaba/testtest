import React, { useState, useRef, useCallback } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';
import SearchBar from './src/SearchBar';
import { encode, decode } from 'js-base64';
import { userScriptBase64 } from './src/scripts/userScript_BASE64';
import { testScriptBase64 } from './src/scripts/testScript_BASE64';
const WebViewComponent = React.memo(WebView)



const App = () => {

  const [activeURL, setActiveURL] = useState('https://logrocket.com/');
  const [searchURL, setSearchURL] = useState('https://logrocket.com/');
  const webRef = useRef();

  const handleWebViewNavigationStateChange = (newNavState) => {
    const { url, loading } = newNavState;
    if (loading) return;
    setSearchURL(url);
    setActiveURL(url);
    if (url.includes('youtube.com')) {
      console.log('SCRIPT WAS INJECTED')
      webRef.current.injectJavaScript(decode(testScriptBase64));
    }
  };

  return (
    <View style={styles.container}>
      <SearchBar setActiveURL={setActiveURL} searchURL={searchURL} setSearchURL={setSearchURL}/>
      <WebViewComponent
        source={{uri: activeURL}}
        ref={webRef}
        onNavigationStateChange={handleWebViewNavigationStateChange}
      />
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
