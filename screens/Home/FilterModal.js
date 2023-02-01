import React from 'react'
import { View, Text , TouchableWithoutFeedback , Modal , Animated, ScrollView , TouchableOpacity } from 'react-native'
import { IconButton, TextButton, TextIconButton, TwoPointSlider } from '../../components';
import { COLORS, SIZES, FONTS, icons, constants } from '../../constants'



export default function FilterModal({isVisible , onClose}) {
    
    const [showFilterModal, setShowFilterModal] = React.useState(isVisible)
    
    const modalAnimatedValue = React.useRef(new Animated.Value(0)).current;

    const [deliveryTime, setDeliveryTime] = React.useState("")
    const [ratings, setRatings] = React.useState("")
    const [tags, setTags] = React.useState("")

    
    const Section = ({ containerStyle ,title, children }) => {
        return (
            <View
                style = {{
                    marginTop : SIZES.padding,
                    ...containerStyle
                }}
            >
                <Text style = {{ ...FONTS.h3 }}>{title}</Text>
                {children}
            </View>
            
            )}

    React.useEffect(() => {
        if (showFilterModal) {
            Animated.timing(modalAnimatedValue, {
                toValue: showFilterModal?-550:100,
                duration: 250,
                useNativeDriver: true
            }).start();
        }
    },[])

    function renderDistance(){
        return(
            <Section title = "Distance" >
                <View
                    style = {{
                        alignItems : 'center',
                    }}
                >
                    <TwoPointSlider
                        values = {[3, 10]}
                        min = {1}
                        max = {20}
                        postfix = "km"
                        onValuesChange = { (values) => {console.log(values)}}
                    />
                </View>  
            </Section>
        )
    }

    function renderDeliveryTime(){
        return(
            <Section title = "Delivery Time" containerStyle={{ marginTop : 40 }} >
                <View
                    style = {{
                        flexDirection : 'row',
                        flexWrap : 'wrap',
                        marginTop : SIZES.radius,
                    }}
                >
                    {constants.delivery_time.map((item, index) => {
                        return(
                            <TextButton
                                key = {`delivery_time-${index}`}
                                label = {item.label}
                                labelStyle = {{
                                    color : item.id == deliveryTime ? COLORS.white : COLORS.gray,
                                    ...FONTS.body3
                                }}
                                buttonContainerStyle = {{ 
                                    height : 50,
                                    width : "30%",
                                    margin : 5,
                                    alignItems : 'center',
                                    borderRadius : SIZES.radius,
                                    backgroundColor : item.id == deliveryTime ? COLORS.primary : COLORS.lightGray2
                                }}
                                onPress = {() => {setDeliveryTime(item.id)}}
                            />
                        )
                    } )}
                </View>
            </Section>
        )
    }

    function renderPricingRange() {
        return (
            <Section title="Pricing Range" >
                <View
                    style={{
                        alignItems: 'center',
                    }}
                >
                    <TwoPointSlider
                        values={[10, 50]}
                        min={1}
                        max={100}
                        prefix="$"
                        postfix=""
                        onValuesChange={(values) => { console.log(values) }}
                    />
                </View>
            </Section>
        )
    }

    function renderRatings() {
        return(
            <Section title = "Ratings" containerStyle={{ marginTop : 40 }} >
                <View
                    style = {{
                        flexDirection : 'row',
                        justifyContent : 'space-between',
                    }}
                >
                    {constants.ratings.map((item, index) => {
                        return(
                            <TextIconButton
                                key = {`Ratings-${index}`}
                                containerStyle = {{
                                    flex : 1,
                                    height : 50,
                                    margin : 5,
                                    alignItems : 'center',
                                    borderRadius : SIZES.radius,
                                    backgroundColor : item.id == ratings ? COLORS.primary : COLORS.lightGray2
                                }}
                                label = {item.label}
                                labelStyle = {{
                                    color : item.id == ratings ? COLORS.white : COLORS.gray,
                                }}
                                icon = {icons.star}
                                iconStyle = {{
                                    tintColor : item.id == ratings ? COLORS.white : COLORS.gray,
                                }}
                                onPress = {() => setRatings(item.id)}
                            />
                        )
                    }  )}
                </View>
            </Section>
        )
    }

    function renderTags() {
        return(
            <Section title = "Tags"  >
                <View
                    style = {{
                        flexDirection : 'row',
                        flexWrap : 'wrap',
                    }}
                >
                    {constants.tags.map((item, index) => {
                        return(
                            <TextButton
                                key = {`Tags-${index}`}
                                label = {item.label}
                                labelStyle = {{
                                    color : item.id == tags ? COLORS.white : COLORS.gray,
                                    ...FONTS.body3
                                }}
                                buttonContainerStyle = {{
                                    height : 50,
                                    margin : 5,
                                    alignItems : 'center',
                                    borderRadius : SIZES.base,
                                    paddingHorizontal : SIZES.padding,
                                    backgroundColor : item.id == tags ? COLORS.primary : COLORS.lightGray2
                                }}
                                onPress = {() => setTags(item.id)}
                            />
                        )
                    })}
                </View>
            </Section>
        )}

    return (
        <Modal
            animationType = "None"
            transparent = {true}
            visible = {isVisible}
        >   
            <View
                style = {{
                    flex : 1,
                    backgroundColor : COLORS.transparentBlack7
                }}
            >
                {/* Transparent Background */}
                <TouchableWithoutFeedback
                    onPress={() => { 
                        Animated.timing(modalAnimatedValue, {
                            toValue: 50,
                            duration: 80,
                            useNativeDriver: true
                        }).start( () => onClose());
                        setShowFilterModal(false)
                     }}
                >
                    <View
                        style = {{
                            position : 'absolute',
                            top : 0,
                            bottom : 0,
                            left : 0,
                            right : 0
                        }}
                    />
                </TouchableWithoutFeedback>
                <Animated.View
                    style = {{
                        position : 'absolute',
                        left : 0,
                        top : 600,
                        width : '100%', 
                        height : '100%',
                        padding : SIZES.padding,
                        borderTopLeftRadius : SIZES.radius,
                        borderTopRightRadius : SIZES.radius,
                        backgroundColor : COLORS.white,
                        transform: [{
                            translateY: modalAnimatedValue
                        }]
                    }}
                >
                    <View
                        style = {{
                            flexDirection : 'row',
                            alignItems : 'center',
                        }}
                    >   
                        <Text
                            style = {{ flex : 1, ...FONTS.h3}}
                        >Filter Your Search </Text>

                        <IconButton
                            containerStyle = {{
                                borderWidth : 2,
                                borderRadius : 10,
                                borderColor : COLORS.gray2,  
                            }}
                            icon = {icons.cross}
                            iconStyle = {{
                                tintColor : COLORS.gray2
                            }}
                            onPress = {() => { 
                                Animated.timing(modalAnimatedValue, {
                                    toValue: 50,
                                    duration: 150,
                                    useNativeDriver: true
                                }).start( () => onClose());
                                setShowFilterModal(false)
                             }}
                        />
                        
                    </View>
                    <ScrollView
                            showsVerticalScrollIndicator = {false}
                            contentContainerStyle = {{
                                paddingBottom : 140
                            }}
                    >
                            {/* Distance */}
                            {renderDistance()}
                            {/* Delivery Time */}
                            {renderDeliveryTime()}
                            {/* Pricing Range */}
                            {renderPricingRange()}
                            {/* Ratings */}
                            {renderRatings()}
                            {/* Tags */}
                            {renderTags()}
                    </ScrollView>

                    {/* Apply Button */}
                    <View
                        style = {{
                            position : 'absolute',
                            bottom : 50,
                            left : 0,
                            right : 0,
                            height : 90,
                            paddingHorizontal : SIZES.padding,
                            paddingVertical : SIZES.radius,
                            backgroundColor : COLORS.white
                        }}  
                    >
                        <TextButton 
                            label = "Apply Filters"
                            buttonContainerStyle = {{
                                height : 50,
                                borderRadius : SIZES.radius,
                                backgroundColor : COLORS.primary
                            }}
                            onPress = {() => {
                                console.log("Apply Filters")
                                Animated.timing(modalAnimatedValue, {
                                    toValue: 50,
                                    duration: 150,
                                    useNativeDriver: true
                                }).start( () => onClose());
                                setShowFilterModal(false)
                            }}

                        />

                    </View>
                    
                </Animated.View>
            </View>

        </Modal>
    )
}