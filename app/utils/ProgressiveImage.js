import React from 'react';
import { View, StyleSheet, Image, ActivityIndicator } from 'react-native';
const styles = StyleSheet.create({
    imageOverlay: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        top: 0,
    },
    container: {
    },
    loader: {
        position: 'absolute',
        alignContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        flexDirection: 'row',
    }
});
class ProgressiveImage extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator style={styles.loader} size="large" color="blue" />
                <Image {...this.props} />
            </View>
        );
    }
}
export default ProgressiveImage;