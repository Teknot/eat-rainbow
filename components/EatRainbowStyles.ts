import { StyleSheet } from 'react-native';
const headerStyles = StyleSheet.create({
    parentBarView: {
        backgroundColor: '#539886',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 300,

        paddingBottom: 60,
    },
    getStartedContainer: {
        display: 'flex',
        flexDirection: 'column',
        padding: 30,
        paddingTop: 60,
    },
    getStartedText: {
        fontSize: 17,
        lineHeight: 24,
        color: "#ffffff",
        marginTop: 30,
        marginBottom: 10,
        fontFamily: 'Montserrat_Extra_Bold'
    },
    getStartedText2: {
        fontSize: 30,
        color: "#ffffff",
        marginBottom: 10,
        fontFamily: 'Montserrat_Extra_Bold',
    },
    progressBar: {
        display: 'flex',
        flexDirection: 'row'
    },
    porgressBarAct: {
        height: 10,
        backgroundColor: '#ffff',
        width: 100,
        borderBottomLeftRadius: 15,
        borderTopLeftRadius: 15,
    },
    porgressBarRem: {
        height: 10,
        backgroundColor: '#ffff',
        opacity: 0.7,
        width: 60,
        borderBottomRightRadius: 15,
        borderTopRightRadius: 15,
    },

});

const styles1 = StyleSheet.create({


    mainContent: {
        backgroundColor: '#ffffff',

        display: 'flex',
        flexDirection: 'column',
    },


    calendarDiv: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingRight: 20,
        paddingTop: 20,
        marginBottom: 10
    },

    learnMoreParent: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 20,
        paddingRight: 20,
    },
    learnMore: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 50,
        width: 160,
        backgroundColor: '#E1F5EA',
        borderRadius: 15,
        padding: 10,
        flexWrap: 'wrap',
        alignItems: 'flex-end'
    },

    register: {
        backgroundColor: '#EFEFEF',
    },
    learnMoreText: {
        fontSize: 12,
        color: "#754485",
        fontWeight: '600'
    },
    registerText: {
        color: "#0F8051"
    },
    totalFiberParent: {
        marginTop: 20,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        paddingLeft: 20,
        paddingRight: 20,
    },

    totalFiberDiv: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    },
    dashboardTitleParent: {
        marginTop: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 20,
        paddingRight: 20,
    },
    dashboardText: {
        fontSize: 15,
        fontWeight: '900',
        color: 'black'
    },
    circle: {
        width: 44,
        height: 44,
        borderRadius: 44 / 2,
        backgroundColor: '#E1F5EA',
        justifyContent: 'center',
        alignItems: 'center',
        color: "#754485",
        fontWeight: '600'
    },
    circleColor: {
        backgroundColor: '#B91700',
    },
    circleColor1: {
        backgroundColor: '#FF6B00',
    },
    circleColor2: {
        backgroundColor: '#EDD581',
    },
    circleColor3: {
        backgroundColor: '#559A81',
    },
    circleColor4: {
        backgroundColor: '#545EAA',
    },
    circleColor5: {
        backgroundColor: '#D0A782',
    },
    circleColor6: {
        // backgroundColor: '#53FFD6',
        // backgroundColor: 'linear-gradient(to right, rgb(255, 0, 0), rgb(255, 191, 0), rgb(128, 255, 0), rgb(0, 255, 64), rgb(0, 255, 255), rgb(0, 64, 255), rgb(128, 0, 255), rgb(255, 0, 191), rgb(255, 0, 0))'
    },
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 100,
        backgroundColor: '#ecf0f1',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5
    },

    image: {
        flex: 1,
        resizeMode: "stretch",
        justifyContent: "center",
        paddingTop: 90,
        paddingLeft: 10,
        height: 140,
        flexDirection: 'row',
    },
    image_shadows: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: 140
    },
    circleText: { fontSize: 20, fontWeight: '900', color: "#fff" },


    fiberText: {
        fontWeight: '600',
        marginRight: 30
    },


    progressBarFiber: {
        display: 'flex',
        flexDirection: 'row',
        marginRight: 60,
        marginTop: 5,

    },
    porgressBarActFiber: {
        height: 10,
        width: "70%",
        borderBottomLeftRadius: 15,
        borderTopLeftRadius: 15,
        backgroundColor: "#A7CA53",
    },
    porgressBarRemFiber: {
        height: 10,
        backgroundColor: '#F7F8FA',
        opacity: 0.7,
        width: "50%",
        borderBottomRightRadius: 15,
        borderTopRightRadius: 15,

    },
    toggleParent: {
        marginTop: 5,
        padding: 20
    },


    toggleBarDiv: {
        marginTop: 10,
        height: 30,
        borderTopWidth: 2,
        borderRightWidth: 2,
        borderBottomWidth: 2,
        borderLeftWidth: 11,
        borderRadius: 9,
        width: "100%",

        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 5,
        paddingRight: 5
    },
    toggleColor: {
        borderColor: '#B91700',
        color: '#B91700',
    },
    toggleColor1: {
        borderColor: '#FF6B00',
        color: '#FF6B00',
    },
    toggleColor2: {
        borderColor: '#EDD581',
        color: '#EDD581',
    },
    toggleColor3: {
        borderColor: '#559A81',
        color: '#559A81',
    },
    toggleColor4: {
        borderColor: '#545EAA',
        color: '#545EAA',
    },
    toggleColor5: {
        borderColor: '#D0A782',
        color: '#D0A782',
    },
    // toggleColor6: {
    //     borderColor: '#53FFD6',
    //     color: '#53FFD6',
    // },

    toggleTextColor: {
        borderColor: '#B91700',
        color: '#B91700',
        fontSize: 15, fontWeight: '900',
    },
    toggleTextColor1: {
        borderColor: '#FF6B00',
        color: '#FF6B00',
        fontSize: 15, fontWeight: '900',
    },
    toggleTextColor2: {
        borderColor: '#EDD581',
        color: '#EDD581',
        fontSize: 15, fontWeight: '900',
    },
    toggleTextColor3: {
        borderColor: '#559A81',
        color: '#559A81',
        fontSize: 15, fontWeight: '900',
    },
    toggleTextColor4: {
        borderColor: '#545EAA',
        color: '#545EAA',
        fontSize: 15, fontWeight: '900',
    },
    toggleTextColor5: {
        borderColor: '#D0A782',
        color: '#D0A782',
        fontSize: 15, fontWeight: '900',
    },
    toggleTextColor6: {
        borderColor: '#B91700',
        color: '#B91700',
        fontSize: 15, fontWeight: '900',
    },

    toggleBarDivGradient: {
        marginTop: 10,
        height: 30,
        borderRadius: 9,

        // width: "100%",
        // paddingLeft: 6,

        // display: 'flex',
        // flexDirection: 'row',
        // justifyContent: 'space-between',
        // alignItems: 'center',
        // paddingLeft: 5,
        // paddingRight: 5

    },

    toggleBarGridDiv: {
        marginTop: 2,
        marginRight: 2,
        marginBottom: 2,
        marginLeft: 11,
        borderTopRightRadius: 9,
        borderBottomRightRadius: 9,
        borderColor: 'transparent',
        width: 'auto',
        paddingLeft: 5,
        paddingRight: 5,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff'
    },

    // toggleTextColor6: {
    //     color: '#4C64FF',
    //     fontSize: 15,
    //     fontWeight: '900',
    // },

    beansBar: {
        marginTop: 10,
        height: 80,
        borderTopWidth: 2,
        borderRightWidth: 2,
        borderBottomWidth: 2,
        borderLeftWidth: 11,
        borderRadius: 9,
        width: "100%",
        borderColor: '#C0B1C6',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 20,
        paddingRight: 20

    },

    beansBarCol: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-start'
    },


    beansBarColHeader: {
        fontSize: 14,
        color: '#000',
        fontWeight: '800'

    },

    beansBarColText: {
        color: '#000',
        fontSize: 12,
    },

    beansBarColFooter: {
        color: '#C0B1C6',
        fontSize: 10,
        fontWeight: '800'
    },
    coloredBlueBox: {
        width: 40,
        height: 30,
        borderRadius: 5,
        borderColor: '#8D43A4',
        borderWidth: 2,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 800
    },
    rightItems: {
        width: '50%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'

    },
    itemBox: {
        width: 70,
        height: 30,
        borderRadius: 5,
        borderColor: '#8D43A4',
        borderWidth: 2,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'

    },
    itemBoxRec: {
        borderColor: '#56AC96',
        color: '#56AC96'

    },

    listReCoMmendBtnDiv: {
        height: 50,
        borderRadius: 9,
        width: "100%",
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: '#F5FAF5'
    },

    listReCoMmendBtnParent: {
        paddingLeft: 20,
        paddingRight: 20

    },
    listReCoMmendBtnChildDiv: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '70%'
    },

    EnterYourMealBtnDiv: {
        marginTop: 20,
        marginBottom: 20,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        borderRadius: 9,
        width: "100%",
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: '#8D43A4'
    },

    EnterYourMealBtnTxt: {
        color: '#fff'
    },

    homeScreenFilename: {
        marginVertical: 7,
    },
    codeHighlightContainer: {
        borderRadius: 3,
        paddingHorizontal: 4,

    },

    helpContainer: {
        marginTop: 15,
        marginHorizontal: 20,
        alignItems: 'center',
    },
    helpLink: {
        paddingVertical: 15,
    },
    helpLinkText: {
        textAlign: 'center',
    },


    navBar: {
        borderTopColor: "#dadada",
        borderTopWidth: 1,
        width: "100%",
        alignItems: "center",
        justifyContent: "space-between",
        height: 60,
        paddingBottom: 10,
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        paddingLeft: 40,
        paddingRight: 40,
    }
});

const recommendedFoodSLider = StyleSheet.create({
    bottomSheetContent: {
        display: 'flex',
        backgroundColor: "#ffffff",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",

    },
    bottomSheetRow1: {
        display: 'flex',
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    downloadDiv: {
        borderRadius: 15,
        borderColor: "#dadada",
        borderWidth: 1,
        padding: 10,

    },

    recmndBtnActive: {
        width: 'auto',
        height: 35,
        padding: 8,
        fontSize: 12,
        backgroundColor: '#8D43A4',
        color: '#fff',
        borderRadius: 10,
        fontFamily: 'Montserrat_Extra_Bold',
        marginRight: 10,
    },


    recmndBtnInActive: {
        width: 'auto',
        height: 35,
        padding: 8,
        fontSize: 12,
        backgroundColor: '#F7F8FA',
        color: '#000',
        borderRadius: 10,
        fontFamily: 'Montserrat_Extra_Bold',
        marginRight: 10,
    },
    bottomSheetRow3: {
        marginTop: 10,
        marginBottom: 5,
        display: 'flex',
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    bottomSheetRow2: {
        fontSize: 25,
        fontFamily: 'Montserrat_Extra_Bold'
    },

    bottomSheetRow5: {
        fontSize: 15,
        fontFamily: 'Montserrat_Extra_Bold'
    },
    bottomSheetRow5SelectAll: {
        color: '#8D43A4'
    },

    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },

    modalView: {
        backgroundColor: "white",
        borderRadius: 20,
        padding: 20,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    modalViewRow1: {
        width: '80%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },

    bottomSheetRow4: {
        marginTop: 20,
        display: 'flex',
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center"
    },
    addToShopDiv: {
        borderRadius: 15,
        borderColor: "#8D43A4",
        borderWidth: 1,
        padding: 10,

    },
    recmndBtnAddToCart: {
        width: 250,
        height: 50,
        padding: 10,
        fontSize: 18,
        backgroundColor: '#8D43A4',
        color: '#fff',
        borderRadius: 10,
        fontFamily: 'Montserrat_Extra_Bold',
        marginLeft: 20,
        textAlign: 'center'
    }
});

const styles = { ...headerStyles, ...styles1, ...recommendedFoodSLider };
export default styles;

