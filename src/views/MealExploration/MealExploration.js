import React, { Component } from 'react';
import {
  View,
  Text,
  Dimensions,
  ActivityIndicator,
  TouchableOpacity,
  Button,
  ImageBackground,
  Image
} from 'react-native';
import {style, COMMON_BORDER_RADIUS, COMMON_PADDING, COMMON_ELEVATION} from './MealExploration_style';
import {commonStyles} from '../../../res/styles/commonStyles';
import { Input, Overlay } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import COLORS from '../../../res/colors';
import Swiper from 'react-native-deck-swiper'
import LinearGradient from 'react-native-linear-gradient';

import {
    getMealProfileList
} from './MealExploration_controller';

export class MealExploration extends Component{
    constructor() {
        super();
        let {width, height} = Dimensions.get("window");

        this.width = width;
        this.height = height;

        this.state = {
            loading: false,
            swipedAllCards: false,
            swipeDirection: '',
            cardIndex: 0,
            cards: getMealProfileList(this)
        };
    }

    componentDidMount() {
    }

    onSwipedAborted = () => {
    }
    
    onSwipedAllCards = () => {
      this.setState({
        swipedAllCards: true
      })
    };

    swipeLeft = () => {
      if (!this.state.swipedAllCards) {
        this.swiper.swipeLeft()
      }
    };

    swipeRight = () => {
      if (!this.state.swipedAllCards) {
        this.swiper.swipeRight()
      }
    };

    swipeTop = () => {
      if (!this.state.swipedAllCards) {
        this.swiper.swipeTop()
      }
    };

    renderCard = (card, index) => {
      let view_style = style(this);
      return (
        <View style={view_style.meal_card}>
          <ImageBackground
            source={card.images[0]}
            style={[{width: '100%', height: '100%' }, view_style.meal_card_inner]}
            imageStyle={view_style.meal_card_image}
          >
            <LinearGradient colors={['rgba(0,0,0,.0)', 'rgba(0,0,0,.6)', 'rgba(0,0,0,.9)']} style={view_style.meal_card_gradient}>
              <Text style={view_style.meal_card_title}>{card.name}</Text>
              <Text style={view_style.meal_card_description}>{card.description}</Text>
              <View style={{height: 12}}></View>             
            </LinearGradient> 
          </ImageBackground>
        </View>
      )
    };

    render() {
        let view_style = style(this);

        let c_style_context = {

            width: this.width*0.8,
            height: this.height

        }

        let c_style = commonStyles(c_style_context)

        let swipingDirection = this.state.swipingDirection

        console.log(swipingDirection)
 
        return (
            <Swiper
                ref={swiper => {
                  this.swiper = swiper
                }}
                onSwiped={() => this.onSwiped('general')}
                onSwipedLeft={() => this.onSwiped('left')}
                onSwipedRight={() => this.onSwiped('right')}
                onSwipedTop={() => this.onSwiped('top')}
                onSwipedBottom={() => this.onSwiped('bottom')}
                onSwiping={this.onSwiping}
                onTapCard={this.swipeLeft}
                onSwipedAborted={this.onSwipedAborted}
                disableBottomSwipe={true}
                cards={this.state.cards}
                cardIndex={this.state.cardIndex}
                cardVerticalMargin={140}
                renderCard={this.renderCard}
                onSwipedAll={this.onSwipedAllCards}
                stackSize={2}
                stackSeparation={0}
                backgroundColor={COLORS.background}
                // animateCardOpacity
                swipeAnimationDuration={350}
                animateOverlayLabelsOpacity
                overlayLabels={{
                  left: {
                    element: <View
                            style={[view_style.btn_judge, {borderColor: COLORS.red, backgroundColor: 'rgba(50,0,0,0.3)'}]}>
                            <Text style={[view_style.btn_judge_text, {color: COLORS.red}]}>No</Text>
                          </View>,
                    style: {
                      wrapper: {
                        flexDirection: 'column',
                        alignItems: 'flex-end',
                        justifyContent: 'flex-start',
                        paddingTop: 30,
                        paddingRight: 30,
                        elevation: 4
                      }
                    }
                  },
                  right: {
                    element: <View
                              style={[view_style.btn_judge, {borderColor: COLORS.green, backgroundColor: 'rgba(0,50,0,0.3)'}]}>
                              <Text style={[view_style.btn_judge_text, {color: COLORS.green}]}>Sí </Text>
                            </View>,
                    style: {
                      wrapper: {
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        justifyContent: 'flex-start',
                        marginTop: 30,
                        marginLeft: 30,
                        elevation: 4
                      }
                    }
                  },
                  top: {
                    element: <View
                            style={[view_style.btn_judge, {borderColor: COLORS.blue, backgroundColor: 'rgba(0,0,50,0.3)'}]}>
                            <Text style={[view_style.btn_judge_text, {color: COLORS.blue}]}>Mucho</Text>
                          </View>,
                    style: {
                      wrapper: {
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        elevation: 4
                      }
                    }
                  }
                }}
                >
                <View style={view_style.main}>

                    <Overlay isVisible={this.state.loading}
                      overlayStyle={{height:this.width*0.1, width:this.width*0.1}}
                      >
                      <ActivityIndicator size="large" color={COLORS.primary}></ActivityIndicator>
                    </Overlay>
                    
                    <View style={view_style.custom_appbar}>

                      <TouchableOpacity
                          onPress={()=>Actions.auth()}
                          style={view_style.custom_appbar_icon}>
                          <Icon name="menu" size={30} color="white" />
                      </TouchableOpacity>
                      
                      <TouchableOpacity
                        onPress={()=>this.verifyFields()}
                        style={view_style.appbar_center_button}>
                        <Text style={view_style.appbar_center_button_text}>Buscar algo para cenar </Text>
                      </TouchableOpacity> 
                      
                      <View style={{width: 30}}></View>    

                    </View>

                    <View style={view_style.main_banner}>

                      <Text style={view_style.brand_label}> ¿Se te antoja? </Text>

                    </View>

                    <View style={view_style.container_judge}>
                      <View style={view_style.row_judge}>
                        <TouchableOpacity
                          onPress={this.swipeLeft}
                          style={[view_style.btn_judge, {borderColor: COLORS.red}]}>
                          <Text style={[view_style.btn_judge_text, {color: COLORS.red}]}>No</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                          onPress={this.swipeTop}
                          style={[view_style.btn_judge, {borderColor: COLORS.blue}]}>
                          <Text style={[view_style.btn_judge_text, {color: COLORS.blue}]}>Mucho</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                          onPress={this.swipeRight}
                          style={[view_style.btn_judge, {borderColor: COLORS.green}]}>
                          <Text style={[view_style.btn_judge_text, {color: COLORS.green}]}>Sí </Text>
                        </TouchableOpacity> 
                      </View>
                    </View>

                </View>
            </Swiper>
        );
    }
}