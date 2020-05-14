import React, { useState } from 'react'
import { View, ScrollView, Platform } from 'react-native'
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { sliderWidth, itemWidth } from '../Styles/SliderEntry.style';
import SliderEntry from '../Components/SliderEntry';
import styles, { colors } from '../Styles/index.style';
import Entries from '../Static'

const SliderComponent = ({ navigation }) => {
    const [active, setActive] = useState(0)
    let _slider1Ref = React.useRef(null);

    const _renderItemWithParallax = ({ item, index }, parallaxProps) => {
        return (
            <View style={{}}>
                <SliderEntry
                    data={item}
                    even={(index + 1) % 2 === 0}
                    parallax={true}
                    parallaxProps={parallaxProps}
                />
            </View>
        );
    }

    const ImageSlider = () => {

        return (
            <View style={[styles.exampleContainer]}>
                <Carousel
                    ref={c => _slider1Ref = c}
                    data={Entries.ENTRIES1}
                    renderItem={_renderItemWithParallax}
                    sliderWidth={sliderWidth}
                    itemWidth={itemWidth}
                    hasParallaxImages={true}
                    firstItem={active}
                    inactiveSlideScale={0.94}
                    inactiveSlideOpacity={0.7}
                    // inactiveSlideShift={20}
                    containerCustomStyle={[styles.slider]}
                    contentContainerCustomStyle={styles.sliderContentContainer}
                    loop={true}
                    loopClonesPerSide={2}
                    autoplay={false}
                    autoplayDelay={3000}
                    autoplayInterval={3000}
                    onSnapToItem={(index) => setActive(index)}
                />
                <Pagination
                    dotsLength={Entries.ENTRIES1.length}
                    activeDotIndex={active}
                    containerStyle={styles.paginationContainer}
                    dotColor={'rgb(46, 110, 175)'}
                    dotStyle={styles.paginationDot}
                    inactiveDotColor={colors.black}
                    inactiveDotOpacity={0.4}
                    inactiveDotScale={0.6}
                    carouselRef={_slider1Ref}
                    tappableDots={!!_slider1Ref}
                />
            </View>
        );
    }

    return (
        <ScrollView
            style={styles.scrollview}
            scrollEventThrottle={200}
            directionalLockEnabled={true}
        >
            { ImageSlider() }
        </ScrollView>
    )
}


export default SliderComponent