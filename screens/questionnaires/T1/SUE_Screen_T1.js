import React from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  Image,
  FlatList,
  TouchableOpacity,
  Button,
  StatusBar,
  Dimensions
} from "react-native";
import {
  PrimaryButton,
  SecondaryButton,
  GreyInputButton,
  HeaderComponent
} from "../../../components/AppComponents";
import RadioGroup, {
  Radio
} from "../../../components/AppComponents/RadioGroup";
import { styles } from "./style";
import * as Progress from "react-native-progress";

import * as firebase from "firebase";

import { connect } from "react-redux";
import { Update_Progress_T1 } from "./../../../redux-persist/redux/user_values";

class SUE_Screen_T1 extends React.Component {
  // static navigationOptions = ({ navigation }) => {
  //   return {
  //     header: props => (
  //       <HeaderComponent
  //         progress={70 / 79}
  //         disabledProgress={false}
  //         disabledClose={true}
  //         colorProgress={"#2C3B51"}
  //         {...props}
  //       />
  //     )
  //   };
  // };

  constructor(props) {
    super(props);
    this.state = {
      show_1: true,
      show_2: false,
      buttonIsActive: false,
      progressValueT1: 9 / 79
    };
  }

  // componentDidMount() {
  //   this.props.navigation.setParams({
  //     progressValueT1: th / 79is.props.user_values.progressValueT1
  //   });
  // }

  getChecked = value => {
     
    const KEY = value.split("/")[0];
    const KEY_Value = value.split("/")[1];
    const progressValueT1 = this.state.progressValueT1
    console.log(KEY, KEY_Value);
    firebase
      .database()
      .ref("questionnaires")
      .child(this.props.user.UID)
      .update({ [KEY]: KEY_Value })
      .then(() => {});

    setTimeout(() => {
      if (this.state.show_1 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: true });
        this.setState({ progressValueT1: 10 / 79 });
        this.props.dispatch(Update_Progress_T1(progressValueT1));
      } else if (this.state.show_2 == true) {
        this.setState({ progressValueT1: 11 / 79 });
        this.props.dispatch(Update_Progress_T1(progressValueT1));
        this.setState({ buttonIsActive: true });
      }
    }, 400);
  };

  skipQuestion = () => {
    const progressValueT1 = this.state.progressValueT1
    setTimeout(() => {
      if (this.state.show_1 == true) {
        this.setState({ progressValueT1: 10 / 79 });
        this.props.dispatch(Update_Progress_T1(progressValueT1));
        this.setState({ show_1: false });
        this.setState({ show_2: true });
      } else if (this.state.show_2 == true) {
        this.setState({ progressValueT1: 11 / 79 });
        this.props.dispatch(Update_Progress_T1(progressValueT1));
        this.props.navigation.navigate("WB_Screen_T1");
      }
    }, 400);
  };

  render() {
    return (
      <>
        <StatusBar hidden />
        <View
          style={{
            flex: 1,
            width: Dimensions.get("window").width,
            position: "absolute",
            left: 0,
            right: 0,
            zIndex: 100,
            backgroundColor: "#F4F1DE"
          }}
        >
          <Progress.Bar
            progress={this.state.progressValueT1}
            borderWidth={0}
            borderRadius={0}
            width={null}
            height={10}
            color={"#2C3B51"}
            unfilledColor={"rgba(255, 255, 255, 1)"}
            animated={true}
          />
        </View>
        <View style={styles.container}>
          <TouchableOpacity onPress={this.skipQuestion} style={styles.skip}>
            <Text style={styles.skip_text}>Skip</Text>
          </TouchableOpacity>
          <Text style={styles.header_left_padding}>
            How do you evaluate your time on the smartphone in the last 7 days?
          </Text>

          {this.state.show_1 ? (
            <>
              <Text style={styles.text_left}>
                How pleasurable do you rate your screen use?
              </Text>

              <View style={styles.question}>
                <RadioGroup
                  getChecked={this.getChecked}
                  labelLeft="Not at all"
                  labelRight="Extremely"
                >
                  <Radio iconName={"lens"} label={"1"} value={"SUE01_D1/1"} />
                  <Radio iconName={"lens"} label={"2"} value={"SUE01_D1/2"} />
                  <Radio iconName={"lens"} label={"3"} value={"SUE01_D1/3"} />
                  <Radio iconName={"lens"} label={"4"} value={"SUE01_D1/4"} />
                  <Radio iconName={"lens"} label={"5"} value={"SUE01_D1/5"} />
                  <Radio iconName={"lens"} label={"6"} value={"SUE01_D1/6"} />
                </RadioGroup>
              </View>
            </>
          ) : null}

          {this.state.show_2 ? (
            <>
              <Text style={styles.text_left}>
                How meaningful do you rate your screen use?
              </Text>

              <View style={styles.question}>
                <RadioGroup
                  getChecked={this.getChecked}
                  labelLeft="Not at all"
                  labelRight="Extremely"
                >
                  <Radio iconName={"lens"} label={"1"} value={"SUE02_D1/1"} />
                  <Radio iconName={"lens"} label={"2"} value={"SUE02_D1/2"} />
                  <Radio iconName={"lens"} label={"3"} value={"SUE02_D1/3"} />
                  <Radio iconName={"lens"} label={"4"} value={"SUE02_D1/4"} />
                  <Radio iconName={"lens"} label={"5"} value={"SUE02_D1/5"} />
                  <Radio iconName={"lens"} label={"6"} value={"SUE02_D1/6"} />
                </RadioGroup>
              </View>

              <View style={styles.bottom}>
                <PrimaryButton
                  label="Continue"
                  isBottom={true}
                  disabled={!this.state.buttonIsActive}
                  onPress={() => {
                    this.props.navigation.navigate("WB_Screen_T1");
                  }}
                />
              </View>
            </>
          ) : null}
        </View>
      </>
    );
  }
}
const mapStateToProps = state => ({
  user_values: state.user_values,
  user: state.user
});
export default connect(mapStateToProps)(SUE_Screen_T1);
