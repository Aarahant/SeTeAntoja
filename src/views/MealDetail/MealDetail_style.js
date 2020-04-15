import {StyleSheet} from 'react-native';
import COLORS from '../../../res/colors';
import commonStyles from '../../../res/commonStyles';

export const COMMON_ELEVATION = 15;
export const COMMON_PADDING = 13;
export const COMMON_BORDER_RADIUS = 10;
export const style = (context)=>{

    let {width, height} = context;

    if(width == null || height == null){

        throw new Error("MealDetail_style: width and height must be defined")

    }

    return StyleSheet.create({
        main: {
            flex: 1,
            justifyContent: "flex-start",
            alignItems: "center",
            backgroundColor: COLORS.background,
        },
        brand_label: {
            fontFamily: commonStyles(context).specialFont,
            fontSize: 50,
            color: 'white'
        },
        custom_appbar: {
            width: '100%',
            height: 60,
            backgroundColor: COLORS.navBar,
            flexDirection: 'row',
            justifyContent: "space-between"
        },
        custom_appbar_icon: {
            padding: 10,
            justifyContent: "center",
            alignItems: "center",
        },
        appbar_center_button: {
            marginTop: 12,
            height: 38,
            backgroundColor: COLORS.accent,
            padding: 2,
            paddingHorizontal: 12,
            borderRadius: 8,
            elevation: 4,
            flexDirection: "row"
        },
        appbar_center_button_text: {
            color: COLORS.primaryFontColor,
            fontSize: 24,
            fontFamily: commonStyles(context).specialFont,
        },
        main_banner: {
            height: 70,
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
        },
        meal_wrapper: {
            width: '100%',
        },
        meal_detail_card: {
            elevation: 4,
            // borderRadius: 20,
            justifyContent: "center",
            backgroundColor: "white",
            aspectRatio: 300 / 300
        },
        meal_detail_card_inner: {
            justifyContent: "flex-end",
            backgroundColor: 'black',
            // borderRadius: 20,
            // borderRadius
        },
        meal_detail_card_image: {
            // borderRadius: 21,
        },
        meal_card_gradient: {
            aspectRatio: 400 / 300,
            paddingLeft: 15,
            paddingRight: 15,
            // borderRadius: 20,
            justifyContent: 'flex-end'
        },
        meal_detail_card_gradient: {
            // aspectRatio: 400 / 300,
            // paddingLeft: 15,
            // paddingRight: 15,
            // borderRadius: 20,
            justifyContent: 'flex-end'
        },
        meal_detail_container:{
            paddingHorizontal: 20,
            paddingVertical: 10,
            borderTopWidth: 1,
            borderTopColor: '#333'
        },
        meal_detail_title: {
            fontFamily: commonStyles(context).secondaryFontBold,
            color: COLORS.fontColorWhite,
            fontSize: 24
        },
        meal_detail_subtitle: {
            fontFamily: commonStyles(context).secondaryFontBold,
            color: COLORS.fontColorWhite,
            fontSize: 20
        },
        meal_detail_description: {
            fontFamily: commonStyles(context).secondaryFont,
            color: COLORS.fontColorBackground,
            fontSize: 18
        },
        meal_detail_supplier: {
            fontFamily: commonStyles(context).secondaryFont,
            color: COLORS.fontColorBackground,
            fontSize: 18,
            marginVertical: 3,
            paddingVertical: 4,
            paddingHorizontal: 8,
            alignSelf: "flex-start",
            borderRadius: 8,
            backgroundColor: COLORS.navBar,
        },
        container_judge: {
            // flex: 1,
            // height: 120,
            // elevation: 1,
            width: "100%",
            borderTopWidth: 1,
            borderColor: COLORS.navBar,
            // backgroundColor: COLORS.navBar,
            justifyContent: 'flex-end',
            alignContent: 'center',
            alignItems: 'center',
            padding: 15,
            // borderTopRightRadius: 25,
            // borderTopLeftRadius: 25,
            // borderRadius: 25,
        },  
        row_judge: {
            aspectRatio: 300 / 70,
            flexDirection: 'row',
            justifyContent: 'space-around',
        },
        btn_judge: {
            borderWidth: 3,
            backgroundColor: 'transparent',
            paddingVertical: 12,
            paddingHorizontal: 16,
            borderRadius: 10,
        },
        btn_judge_text: {
            fontFamily: commonStyles(context).specialFont,
            fontSize: 35,
        },
        meal_detail_tile: {
            // backgroundColor: COLORS.accent,
            padding: 5,
            // borderRadius: 8,
            // elevation: 1,
            flexDirection: "row",
            alignItems: 'center'
        },
        meal_detail_tile_text: {
            color: COLORS.fontColorBackground,
            fontSize: 18,
            marginLeft: 6,
            fontFamily: commonStyles(context).secondaryFont,
        },
        secondary_bold: {
            fontFamily: commonStyles(context).secondaryFontBold,
        },
        meal_detail_phone: {
            padding: 5,
            flexDirection: "row",
            justifyContent: 'space-between',
            alignItems: 'center'
        },
        meal_detail_phone_text: {
            color: COLORS.fontColorBackground,
            fontSize: 18,
            marginLeft: 6,
            fontFamily: commonStyles(context).secondaryFont,
        },
    });

}