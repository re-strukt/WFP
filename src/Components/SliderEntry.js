import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { ParallaxImage } from 'react-native-snap-carousel';
import styles from '../Styles/SliderEntry.style';

export default class SliderEntry extends Component {

  get image() {
    const { data: { illustration }, parallax, parallaxProps, even, size } = this.props;
    return parallax ? (
      <ParallaxImage
        //   source={{ uri: illustration }}
        source={illustration}
        containerStyle={[size && size==='Large' ? styles.largeImageContainer : styles.imageContainer, even ? styles.imageContainerEven : {}]}
        style={styles.image}
        parallaxFactor={0.35}
        showSpinner={true}
        //   spinnerColor={even ? 'rgba(255, 255, 255, 0.4)' : 'rgba(0, 0, 0, 0.25)'}
        {...parallaxProps}
      />
    ) : (
        <Image
          source={{ uri: illustration }}
          //   source={require('../../assets/displayHome.jpg')}
          style={styles.image}
        />
      );
  }

  render() {
    const { data: { title, subtitle }, even, size, navigation } = this.props;

    const uppercaseTitle = title ? (
      <Text
        style={[styles.title, even ? styles.titleEven : {}, size && size==='Large' ? { fontSize: 25 } : null]}
        numberOfLines={2}
      >
        {title.toUpperCase()}
      </Text>
    ) : false;

    return (
      <TouchableOpacity
        activeOpacity={1}
        style={size && size==='Large' ? styles.slideLargeInnerContainer : styles.slideInnerContainer}
        onPress={() => { 
          if(size && size==='Large'){
            navigation.navigate('DetailedView')
          }
        }}
      >
        <View style={styles.shadow} />
        <View style={[size && size==='Large' ? styles.largeImageContainer : styles.imageContainer, even ? styles.imageContainerEven : {}]}>
          {this.image}
          <View style={[styles.radiusMask, even ? styles.radiusMaskEven : {}]} />
        </View>
        <View style={[ size && size==='Large' ? styles.largeTextContainer : styles.textContainer, even ? styles.textContainerEven : {}]}>
          {uppercaseTitle}
          <Text
            style={[styles.subtitle, even ? styles.subtitleEven : {}, size && size==='Large' ? { fontSize: 16 } : null]}
            numberOfLines={2}
          >
            {subtitle}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}