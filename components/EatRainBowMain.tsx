//@ts-nocheck
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Modal,
  Image,
  Pressable,
  StatusBar,
} from 'react-native';
import useColorScheme from '../hooks/useColorScheme';
import {Text, View} from './Themed';
import {useState} from 'react';
import React from 'react';
import styles from './EatRainbowStyles.ts';
import {BottomSheet} from './BottomSheet';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import DateTimePickerModal from 'react-native-modal-datetime-picker';

import LinearGradient from 'react-native-linear-gradient';

var month = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
export default function EatRainBowMain({navigation}) {
  return (
    <SafeAreaProvider>
      <View style={{height: '100%'}}>
        <View style={{flex: 1}}>
          <View style={{height: '100%'}}>
            <MainContent navigation={navigation} />
            <NavBar />
          </View>
        </View>
      </View>
      <StatusBar backgroundColor="#539886" />
    </SafeAreaProvider>
  );
}

const MainContent = ({navigation}) => {
  const [showBottomSheet, setShowBottomSheet] = useState(false);
  const [toggleDropdwn, settoggleDropdwn] = useState<any>({
    red: false,
    orange: false,
    yellow: false,
    green: false,
    blue: false,
    brown: false,
    white: false,
  });

  const [heartTouched, setheartTouched] = useState<any>({
    red: false,
    orange: false,
    yellow: false,
    green: false,
    blue: false,
    brown: false,
    white: false,
  });

  const hide = () => {
    setShowBottomSheet(false);
  };
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={{flex: 1}}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <TouchableOpacity
          activeOpacity={1}
          style={styles.centeredView}
          onPressOut={() => setModalVisible(!modalVisible)}>
          <TouchableWithoutFeedback>
            <View>
              <View style={styles.modalView}>
                <View style={styles.modalViewRow1}>
                  <Pressable onPress={() => setModalVisible(!modalVisible)}>
                    <AntDesign name="close" size={15} color="black" />
                  </Pressable>
                </View>

                <Image
                  style={{width: 250, height: 150}}
                  source={require('../assets/images/cal.png')}
                />
              </View>
            </View>
          </TouchableWithoutFeedback>
        </TouchableOpacity>
      </Modal>
      <ScrollView
        style={{
          width: '100%',
        }}>
        <HeaderComponent />
        <ListComponent
          navigation={navigation}
          settoggleDropdwn={settoggleDropdwn}
          toggleDropdwn={toggleDropdwn}
          setModalVisible={setModalVisible}
          setShowBottomSheet={setShowBottomSheet}
          heartTouched={heartTouched}
          setheartTouched={setheartTouched}
        />
        <RecommendedFoodSlider showBottomSheet={showBottomSheet} hide={hide} />
      </ScrollView>
    </View>
  );
};

const HeaderComponent = () => {
  return (
    <View style={styles.parentBarView}>
      <View style={styles.getStartedContainer}>
        <TouchableOpacity>
          <FontAwesome name="arrow-left" size={25} color="white" />
        </TouchableOpacity>

        <Text style={styles.getStartedText}>7/7 Colors</Text>
        <Text style={styles.getStartedText2}>Eat Rainbow</Text>
        <View style={styles.progressBar}>
          <View style={styles.porgressBarAct} />
          <View style={styles.porgressBarRem} />
        </View>
      </View>
      <Image
        style={{width: 200, height: 300}}
        source={require('../assets/images/barImage.png')}
      />
    </View>
  );
};

const ListComponent = ({
  navigation,
  heartTouched,
  setheartTouched,
  setModalVisible,
  setShowBottomSheet,
  hide,
  settoggleDropdwn,
  toggleDropdwn,
}) => {
  return (
    <View style={styles.mainContent}>
      <CalendarComponent setModalVisible={setModalVisible} />

      <LearnMoreComponent navigation={navigation} />
      <TotalFiberComponent
        settoggleDropdwn={settoggleDropdwn}
        toggleDropdwn={toggleDropdwn}
      />

      <ToggleBar
        settoggleDropdwn={settoggleDropdwn}
        toggleDropdwn={toggleDropdwn}
        heartTouched={heartTouched}
        setheartTouched={setheartTouched}
      />

      <ListRecommendBtn setShowBottomSheet={setShowBottomSheet} hide={hide} />
      <EnterYourMealBtn />
    </View>
  );
};

const CalendarComponent = ({setModalVisible}) => {
  const [monthYear, setMonthYear] = useState({
    month: month[new Date().getMonth()],
    year: new Date().getFullYear(),
    date: new Date().getDate(),
  });
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };
  const handleConfirm = (value: any) => {
    setMonthYear({
      month: month[value.getMonth()],
      year: value.getFullYear(),
      date: value.getDate(),
    });

    hideDatePicker();
  };
  return (
    <>
      <TouchableOpacity onPress={() => showDatePicker()}>
        <View style={styles.calendarDiv}>
          <Feather name="calendar" size={14} color="black" />
          <Text> {monthYear.date} {monthYear.month} {monthYear.year} </Text>
          <MaterialIcons name="keyboard-arrow-down" size={24} color="black" />
        </View>
      </TouchableOpacity>

      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={date => {
          handleConfirm(date);
        }}
        onCancel={hideDatePicker}
        minimumDate={new Date()}
      />
    </>
  );
};

const LearnMoreComponent = ({navigation}) => {
  return (
    <View style={styles.learnMoreParent}>
      <TouchableOpacity
        onPress={() => navigation.navigate('LearnMore', {name: 'Jane'})}>
        <View style={styles.learnMore}>
          <Text style={styles.learnMoreText}>
            {`Learn More
About Colors`}
          </Text>
          <EvilIcons name="arrow-right" size={24} color="#754485" />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('RegisterMeals', {name: 'Jane'})}>
        <View style={[styles.learnMore, styles.register]}>
          <Text style={[styles.learnMoreText, styles.registerText]}>
            {`How to register
Meals`}
          </Text>
          <EvilIcons name="exclamation" size={24} color="#0F8051" />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const TotalFiberComponent = () => {
  return (
    <View style={[styles.totalFiberParent]}>
      <View style={[styles.totalFiberDiv]}>
        <Text style={styles.fiberText}>Total Fiber</Text>
        <Text style={{color: '#A7CA53'}}>30/</Text>
        <Text style={{color: '#944EA9'}}>60</Text>
      </View>
      <View style={styles.progressBarFiber}>
        <View style={styles.porgressBarActFiber} />
        <View style={styles.porgressBarRemFiber} />
      </View>
    </View>
  );
};

const DashboardTitle = ({settoggleDropdwn}) => {
  const [dashShowHide, setdashShowHide] = useState(false);
  const showAll = () => {
    settoggleDropdwn({
      red: true,
      orange: true,
      yellow: true,
      green: true,
      blue: true,
      brown: true,
      white: true,
    });
    setdashShowHide(true);
  };

  const hideAll = () => {
    settoggleDropdwn({
      red: false,
      orange: false,
      yellow: false,
      green: false,
      blue: false,
      brown: false,
      white: false,
    });
    setdashShowHide(false);
  };

  return (
    <View style={[styles.dashboardTitleParent]}>
      <Text style={styles.dashboardText}>Dashboard</Text>
      {!dashShowHide && (
        <Text
          style={[styles.dashboardText, {color: '#754485'}]}
          onPress={() => showAll()}>
          Show all
        </Text>
      )}
      {dashShowHide && (
        <Text
          style={[styles.dashboardText, {color: '#754485'}]}
          onPress={() => hideAll()}>
          Hide all
        </Text>
      )}
    </View>
  );
};

const CircleRow = ({settoggleDropdwn, toggleDropdwn}) => {
  const handletoggleDropdwn = (param: string) => {
    toggleDropdwn[param] = !toggleDropdwn[param];
    settoggleDropdwn(JSON.parse(JSON.stringify(toggleDropdwn)));
  };

  return (
    <View style={[styles.dashboardTitleParent]}>
      <TouchableOpacity
        style={[styles.circle, styles.circleColor]}
        onPress={() => handletoggleDropdwn('red')}>
        <Text style={styles.circleText}>1</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.circle, styles.circleColor1]}
        onPress={() => handletoggleDropdwn('orange')}>
        <Text style={styles.circleText}>1</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.circle, styles.circleColor2]}
        onPress={() => handletoggleDropdwn('yellow')}>
        <Text style={styles.circleText}>1</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.circle, styles.circleColor3]}
        onPress={() => handletoggleDropdwn('green')}>
        <Text style={styles.circleText}>1</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.circle, styles.circleColor4]}
        onPress={() => handletoggleDropdwn('blue')}>
        <Text style={styles.circleText}>1</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.circle, styles.circleColor5]}>
        <Text style={styles.circleText}>1</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => handletoggleDropdwn('white')}>
        <LinearGradient
          colors={[
            '#B91700',
            '#FF6B00',
            '#EDD581',
            '#559A81',
            '#545EAA',
            '#D0A782',
          ]}
          style={[styles.circle]}>
          <Text style={styles.circleText}>0</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

const ToggleBar = ({
  heartTouched,
  setheartTouched,
  settoggleDropdwn,
  toggleDropdwn,
}) => {
  const handletoggleDropdwn = (param: string) => {
    toggleDropdwn[param] = !toggleDropdwn[param];
    settoggleDropdwn(JSON.parse(JSON.stringify(toggleDropdwn)));
  };

  const BeansANdLentils = (param: any) => {
    const handleHeartTouch = heartItem => {
      console.log(heartItem);
      heartTouched[heartItem] = !heartTouched[heartItem];
      setheartTouched(JSON.parse(JSON.stringify(heartTouched)));
    };

    return (
      <>
        {toggleDropdwn[param.itemName] && (
          <View style={[styles.beansBar]}>
            <View style={[styles.beansBarCol]}>
              <Text style={[styles.beansBarColHeader]}>Beans and Lentils</Text>
              <Text style={[styles.beansBarColText]}>146 kcal</Text>
              <Text style={[styles.beansBarColText]}>Brand</Text>
              <Text style={[styles.beansBarColFooter]}>Food functionality</Text>
            </View>
            <View style={[styles.rightItems]}>
              <View style={[styles.itemBox, param.colorStyle]}>
                <Text style={[param.colorStyle]}>A 85/100</Text>
              </View>
              <View style={[styles.coloredBlueBox]}>
                <Text style={{color: 'black'}}>GL5</Text>
              </View>
              {heartTouched[param.itemName] && (
                <Entypo
                  name="heart"
                  size={24}
                  color="#8D43A4"
                  onPress={() => handleHeartTouch(param.itemName)}
                />
              )}
              {!heartTouched[param.itemName] && (
                <Entypo
                  name="heart-outlined"
                  size={24}
                  color="#8D43A4"
                  onPress={() => handleHeartTouch(param.itemName)}
                />
              )}
            </View>
          </View>
        )}
      </>
    );
  };

  return (
    <>
      <DashboardTitle settoggleDropdwn={settoggleDropdwn} />
      <CircleRow
        settoggleDropdwn={settoggleDropdwn}
        toggleDropdwn={toggleDropdwn}
      />
      <View style={styles.toggleParent}>
        <TouchableOpacity onPress={() => handletoggleDropdwn('red')}>
          <View style={[styles.toggleColor, styles.toggleBarDiv]}>
            <Text style={styles.toggleTextColor}>Red </Text>
            {!toggleDropdwn['red'] && (
              <Ionicons name="chevron-forward" size={24} color="#B91700" />
            )}
            {toggleDropdwn['red'] && (
              <Ionicons name="chevron-down" size={24} color="#B91700" />
            )}
          </View>
        </TouchableOpacity>
        <BeansANdLentils colorStyle={styles.toggleColor} itemName="red" />

        <TouchableOpacity onPress={() => handletoggleDropdwn('orange')}>
          <View style={[styles.toggleColor1, styles.toggleBarDiv]}>
            <Text style={styles.toggleTextColor1}>Orange</Text>
            {!toggleDropdwn['orange'] && (
              <Ionicons name="chevron-forward" size={24} color="#FF6B00" />
            )}
            {toggleDropdwn['orange'] && (
              <Ionicons name="chevron-down" size={24} color="#FF6B00" />
            )}
          </View>
        </TouchableOpacity>
        <BeansANdLentils colorStyle={styles.toggleColor1} itemName="orange" />

        <TouchableOpacity onPress={() => handletoggleDropdwn('yellow')}>
          <View style={[styles.toggleColor2, styles.toggleBarDiv]}>
            <Text style={styles.toggleTextColor2}>Yellow</Text>
            {!toggleDropdwn['yellow'] && (
              <Ionicons name="chevron-forward" size={24} color="#EDD581" />
            )}
            {toggleDropdwn['yellow'] && (
              <Ionicons name="chevron-down" size={24} color="#EDD581" />
            )}
          </View>
        </TouchableOpacity>
        <BeansANdLentils colorStyle={styles.toggleColor2} itemName="yellow" />

        <TouchableOpacity onPress={() => handletoggleDropdwn('green')}>
          <View style={[styles.toggleColor3, styles.toggleBarDiv]}>
            <Text style={styles.toggleTextColor3}>Green</Text>
            {!toggleDropdwn['green'] && (
              <Ionicons name="chevron-forward" size={24} color="#559A81" />
            )}
            {toggleDropdwn['green'] && (
              <Ionicons name="chevron-down" size={24} color="#559A81" />
            )}
          </View>
        </TouchableOpacity>
        <BeansANdLentils colorStyle={styles.toggleColor3} itemName="green" />

        <TouchableOpacity onPress={() => handletoggleDropdwn('blue')}>
          <View style={[styles.toggleColor4, styles.toggleBarDiv]}>
            <Text style={styles.toggleTextColor4}>Blue/Purple/Black</Text>
            {!toggleDropdwn['blue'] && (
              <Ionicons name="chevron-forward" size={24} color="#545EAA" />
            )}
            {toggleDropdwn['blue'] && (
              <Ionicons name="chevron-down" size={24} color="#545EAA" />
            )}
          </View>
        </TouchableOpacity>

        <BeansANdLentils colorStyle={styles.toggleColor4} itemName="blue" />

        <TouchableOpacity onPress={() => handletoggleDropdwn('white')}>
          <LinearGradient
            colors={[
              '#B91700',
              '#FF6B00',
              '#EDD581',
              '#559A81',
              '#545EAA',
              '#D0A782',
            ]}
            start={{x: 0.0, y: 1.0}}
            end={{x: 1.0, y: 1.0}}
            style={[styles.toggleBarDivGradient]}>
            <View style={[styles.toggleBarGridDiv]}>
              <Text style={styles.toggleTextColor6}>White/Tan/Brown</Text>
              {!toggleDropdwn['white'] && (
                <Ionicons name="chevron-forward" size={24} color="#B91700" />
              )}
              {toggleDropdwn['white'] && (
                <Ionicons name="chevron-down" size={24} color="#B91700" />
              )}
            </View>
          </LinearGradient>
        </TouchableOpacity>

        <BeansANdLentils colorStyle={styles.toggleColor6} itemName="white" />
      </View>
    </>
  );
};

const ListRecommendBtn = ({setShowBottomSheet}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        setShowBottomSheet(true);
      }}>
      <View style={styles.listReCoMmendBtnParent}>
        <View style={[styles.listReCoMmendBtnDiv]}>
          <View style={[styles.listReCoMmendBtnChildDiv]}>
            <FontAwesome name="list-alt" size={24} color="#8D43A4" />
            <Text style={{color: 'black'}}>List of recommended food</Text>
          </View>
          <Ionicons
            name="arrow-forward-circle-outline"
            size={24}
            color="#8D43A4"
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const EnterYourMealBtn = () => {
  return (
    <TouchableOpacity>
      <View style={styles.listReCoMmendBtnParent}>
        <View style={[styles.EnterYourMealBtnDiv]}>
          <Ionicons name="add-circle-sharp" size={24} color="#fff" />
          <Text style={[styles.EnterYourMealBtnTxt]}> Enter your meal</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
const RecommendedFoodSlider = ({showBottomSheet, hide}) => {
  const [activeFood, setactiveFood] = useState('regular');
  const [selectAllClicked, setselectAllClicked] = useState(false);

  const [checkedArray, setcheckedArray] = useState({
    item1: false,
    item2: false,
    item3: false,
    item4: false,
    item5: false,
    item6: false,
    item7: false,
    item8: false,
    item9: false,
    item10: false,
    item11: false,
    item12: false,
    item13: false,
    item14: false,
  });

  const selectAllItems = param => {
    if (param == 'select') {
      setselectAllClicked(true);
      setcheckedArray({
        item1: true,
        item2: true,
        item3: true,
        item4: true,
        item5: true,
        item6: true,
        item7: true,
        item8: true,
        item9: true,
        item10: true,
        item11: true,
        item12: true,
        item13: true,
        item14: true,
      });
    } else {
      setselectAllClicked(false);

      setcheckedArray({
        item1: false,
        item2: false,
        item3: false,
        item4: false,
        item5: false,
        item6: false,
        item7: false,
        item8: false,
        item9: false,
        item10: false,
        item11: false,
        item12: false,
        item13: false,
        item14: false,
      });
    }
  };

  const BeandAndLentils = ({itemId, checkedArray, setcheckedArray}) => {
    const handleCheckedArr = itemId => {
      checkedArray[itemId] = !checkedArray[itemId];
      setcheckedArray(JSON.parse(JSON.stringify(checkedArray)));
    };
    return (
      <>
        <View style={[styles.beansBar]}>
          <View style={[styles.beansBarCol]}>
            <Text style={[styles.beansBarColHeader]}>Beans and Lentils</Text>
            <Text style={[styles.beansBarColText]}>146 kcal</Text>
            <Text style={[styles.beansBarColText]}>Brand</Text>
            <Text style={[styles.beansBarColFooter]}>Food functionality</Text>
          </View>
          <View style={[styles.rightItems]}>
            <View style={[styles.itemBox, styles.itemBoxRec]}>
              <Text style={styles.itemBoxRec}>A 85/100</Text>
            </View>
            <View style={[styles.coloredBlueBox]}>
              <Text style={{color: 'black'}}>GL5</Text>
            </View>
            {!checkedArray[itemId] && (
              <TouchableOpacity onPress={() => handleCheckedArr(itemId)}>
                <Fontisto name="checkbox-passive" size={18} color="#8D43A4" />
              </TouchableOpacity>
            )}
            {checkedArray[itemId] && (
              <TouchableOpacity onPress={() => handleCheckedArr(itemId)}>
                <Fontisto name="checkbox-active" size={18} color="#8D43A4" />
              </TouchableOpacity>
            )}
          </View>
        </View>
      </>
    );
  };

  return (
    <BottomSheet
      style={styles.bottomSheetContent}
      show={showBottomSheet}
      height={600}
      onOuterClick={hide}>
      <View style={styles.bottomSheetRow1}>
        <TouchableOpacity>
          <Pressable onPress={hide}>
            <AntDesign name="arrowleft" size={24} color="black" />
          </Pressable>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.downloadDiv}>
            <AntDesign name="download" size={24} color="#8D43A4" />
          </View>
        </TouchableOpacity>
      </View>

      <Text style={styles.bottomSheetRow2}>Recommended Food</Text>

      <View style={styles.bottomSheetRow3}>
        <TouchableOpacity
          onPress={() => {
            setactiveFood('regular');
          }}>
          <Text
            style={
              activeFood === 'regular'
                ? styles.recmndBtnActive
                : styles.recmndBtnInActive
            }>
            Eat Regularly
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setactiveFood('more');
          }}>
          <Text
            style={
              activeFood === 'more'
                ? styles.recmndBtnActive
                : styles.recmndBtnInActive
            }>
            Eat More
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setactiveFood('less');
          }}>
          <Text
            style={
              activeFood === 'less'
                ? styles.recmndBtnActive
                : styles.recmndBtnInActive
            }>
            Eat Les
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setactiveFood('avoid');
          }}>
          <Text
            style={
              activeFood === 'avoid'
                ? styles.recmndBtnActive
                : styles.recmndBtnInActive
            }>
            Avoid
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomSheetRow3}>
        <Text style={styles.bottomSheetRow5}>List of Food</Text>
        {!selectAllClicked && (
          <TouchableOpacity onPress={() => selectAllItems('select')}>
            <Text
              style={(styles.bottomSheetRow5, styles.bottomSheetRow5SelectAll)}>
              Select All
            </Text>
          </TouchableOpacity>
        )}
        {selectAllClicked && (
          <TouchableOpacity onPress={() => selectAllItems('unselect')}>
            <Text
              style={(styles.bottomSheetRow5, styles.bottomSheetRow5SelectAll)}>
              Unselect All
            </Text>
          </TouchableOpacity>
        )}
      </View>

      <ScrollView nestedScrollEnabled={true}>
        {activeFood === 'regular' && (
          <>
            <BeandAndLentils
              itemId="item1"
              checkedArray={checkedArray}
              setcheckedArray={setcheckedArray}
            />
            <BeandAndLentils
              itemId="item2"
              checkedArray={checkedArray}
              setcheckedArray={setcheckedArray}
            />
            <BeandAndLentils
              itemId="item3"
              checkedArray={checkedArray}
              setcheckedArray={setcheckedArray}
            />
            <BeandAndLentils
              itemId="item4"
              checkedArray={checkedArray}
              setcheckedArray={setcheckedArray}
            />
          </>
        )}

        {activeFood === 'more' && (
          <>
            <BeandAndLentils
              itemId="item5"
              checkedArray={checkedArray}
              setcheckedArray={setcheckedArray}
            />
            <BeandAndLentils
              itemId="item6"
              checkedArray={checkedArray}
              setcheckedArray={setcheckedArray}
            />
          </>
        )}

        {activeFood === 'less' && (
          <>
            <BeandAndLentils
              itemId="item7"
              checkedArray={checkedArray}
              setcheckedArray={setcheckedArray}
            />
            <BeandAndLentils
              itemId="item8"
              checkedArray={checkedArray}
              setcheckedArray={setcheckedArray}
            />
            <BeandAndLentils
              itemId="item9"
              checkedArray={checkedArray}
              setcheckedArray={setcheckedArray}
            />
          </>
        )}
        {activeFood === 'avoid' && (
          <>
            <BeandAndLentils
              itemId="item10"
              checkedArray={checkedArray}
              setcheckedArray={setcheckedArray}
            />
            <BeandAndLentils
              itemId="item11"
              checkedArray={checkedArray}
              setcheckedArray={setcheckedArray}
            />
            <BeandAndLentils
              itemId="item12"
              checkedArray={checkedArray}
              setcheckedArray={setcheckedArray}
            />
            <BeandAndLentils
              itemId="item13"
              checkedArray={checkedArray}
              setcheckedArray={setcheckedArray}
            />
            <BeandAndLentils
              itemId="item14"
              checkedArray={checkedArray}
              setcheckedArray={setcheckedArray}
            />
          </>
        )}
      </ScrollView>

      <View style={styles.bottomSheetRow4}>
        <TouchableOpacity>
          <View style={styles.addToShopDiv}>
            <Feather name="bookmark" size={30} color="#8D43A4" />
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.recmndBtnAddToCart}>Add to Shopping</Text>
        </TouchableOpacity>
      </View>
    </BottomSheet>
  );
};

const NavBar = () => {
  return (
    <View style={styles.navBar}>
      <TouchableOpacity>
        <MaterialCommunityIcons name="home-variant" size={30} color="#8D43A4" />
      </TouchableOpacity>
      <TouchableOpacity>
        <EvilIcons name="search" size={35} color="#ACACAC" />
      </TouchableOpacity>
      <TouchableOpacity>
        <AntDesign name="message1" size={25} color="#ACACAC" />
      </TouchableOpacity>
      <TouchableOpacity>
        <MaterialCommunityIcons
          name="bookmark-minus-outline"
          size={30}
          color="#ACACAC"
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Ionicons name="settings-outline" size={30} color="#ACACAC" />
      </TouchableOpacity>
    </View>
  );
};
