import React from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  Image,
  FlatList,
  TouchableOpacity,
  Button
} from "react-native";
import {
  PrimaryButton,
  SecondaryButton,
  GreyInputButton
} from "../../../components/AppComponents";
import RadioGroup, { Radio } from "../../../components/AppComponents/RadioGroup";
import { styles } from "./style";

import { connect } from "react-redux";
import * as firebase from "firebase";

class AU_Screen_T2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show_1: true,
      show_2: false,
      show_3: false,
      show_4: false,
      buttonIsActive: false
    };
  }

  getChecked = value => {
     
    const KEY = value.split("/")[0];
    const KEY_Value = value.split("/")[1];
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
      } else if (this.state.show_2 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: false });
        this.setState({ show_3: true });
      } else if (this.state.show_3 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: false });
        this.setState({ show_3: false });
        this.setState({ show_4: true });
      } else if (this.state.show_4 == true) {
        this.setState({ buttonIsActive: true });
      }
    }, 400);
  };

  skipQuestion = () => {
    setTimeout(() => {
      if (this.state.show_1 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: true });
      } else if (this.state.show_2 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: false });
        this.setState({ show_3: true });
      } else if (this.state.show_3 == true) {
        this.setState({ show_1: false });
        this.setState({ show_2: false });
        this.setState({ show_3: false });
        this.setState({ show_4: true });
      }
    }, 400);
  };

  render() {
    return (
      <View style={styles.container}>
      {!this.state.show_4 ? (
          <TouchableOpacity onPress={this.skipQuestion} style={styles.skip}>
            <Text style={styles.skip_text}>Skip</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate("PI_Screen_T2");
            }}
            style={styles.skip}
          >
            <Text style={styles.skip_text}>Skip</Text>
          </TouchableOpacity>
        )}
        <Text style={styles.header_left_padding}>Please evaluate the following statements</Text>

        {this.state.show_1 ? (
          <>
            <Text style={styles.text_left}>
            The Contenance program is highly compatible with my choices and interests.
            </Text>

            <View style={styles.question}>
              <RadioGroup
                getChecked={this.getChecked}
                labelLeft="Not at all true"
                labelRight="Exactly true"
              >
                <Radio iconName={"lens"} label={"1"} value={"AU01_D21/1"} />
                <Radio iconName={"lens"} label={"2"} value={"AU01_D21/2"} />
                <Radio iconName={"lens"} label={"3"} value={"AU01_D21/3"} />
                <Radio iconName={"lens"} label={"4"} value={"AU01_D21/4"} />
                <Radio iconName={"lens"} label={"5"} value={"AU01_D21/5"} />
                <Radio iconName={"lens"} label={"6"} value={"AU01_D21/6"} />
              </RadioGroup>
            </View>
          </>
        ) : null}

        {this.state.show_2 ? (
          <>
            <Text style={styles.text_left}>
            I feel very strongly that the way I use the smartphone fits perfectly the way I prefer to.
            </Text>

            <View style={styles.question}>
              <RadioGroup
                getChecked={this.getChecked}
                labelLeft="Not at all true"
                labelRight="Exactly true"
              >
                <Radio iconName={"lens"} label={"1"} value={"AU02_D21/1"} />
                <Radio iconName={"lens"} label={"2"} value={"AU02_D21/2"} />
                <Radio iconName={"lens"} label={"3"} value={"AU02_D21/3"} />
                <Radio iconName={"lens"} label={"4"} value={"AU02_D21/4"} />
                <Radio iconName={"lens"} label={"5"} value={"AU02_D21/5"} />
                <Radio iconName={"lens"} label={"6"} value={"AU02_D21/6"} />
              </RadioGroup>
            </View>
          </>
        ) : null}

        {this.state.show_3 ? (
          <>
            <Text style={styles.text_left}>
            I feel that the way I use my smartphone is definitely an expression of myself.
            </Text>

            <View style={styles.question}>
              <RadioGroup
                getChecked={this.getChecked}
                labelLeft="Not at all true"
                labelRight="Exactly true"
              >
                <Radio iconName={"lens"} label={"1"} value={"AU03_D21/1"} />
                <Radio iconName={"lens"} label={"2"} value={"AU03_D21/2"} />
                <Radio iconName={"lens"} label={"3"} value={"AU03_D21/3"} />
                <Radio iconName={"lens"} label={"4"} value={"AU03_D21/4"} />
                <Radio iconName={"lens"} label={"5"} value={"AU03_D21/5"} />
                <Radio iconName={"lens"} label={"6"} value={"AU03_D21/6"} />
              </RadioGroup>
            </View>
          </>
        ) : null}

        {this.state.show_4 ? (
          <>
            <Text style={styles.text_left}>
            I feel very strongly that I have the opportunity to make choices with respect to the way I want to use the smartphone.
            </Text>

            <View style={styles.question}>
              <RadioGroup
                getChecked={this.getChecked}
                labelLeft="Not at all true"
                labelRight="Exactly true"
              >
                <Radio iconName={"lens"} label={"1"} value={"AU04_D21/1"} />
                <Radio iconName={"lens"} label={"2"} value={"AU04_D21/2"} />
                <Radio iconName={"lens"} label={"3"} value={"AU04_D21/3"} />
                <Radio iconName={"lens"} label={"4"} value={"AU04_D21/4"} />
                <Radio iconName={"lens"} label={"5"} value={"AU04_D21/5"} />
                <Radio iconName={"lens"} label={"6"} value={"AU04_D21/6"} />
              </RadioGroup>
            </View>

            <View style={styles.bottom}>
              <PrimaryButton
                label="Keep Going"
                isBottom={true}
                disabled={!this.state.buttonIsActive}
                onPress={() => {
                  this.props.navigation.navigate("PI_Screen_T2");
                }}
              />
            </View>
          </>
        ) : null}

      </View>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(AU_Screen_T2);

