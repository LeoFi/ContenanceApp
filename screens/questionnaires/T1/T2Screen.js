import React from "react";
import { View, Text, TextInput, ScrollView, Image, Button } from "react-native";
import {
  PrimaryButton,
  SecondaryButton,
  GreyInputButton,
  FormElement
} from "../../../components/AppComponents";
import Onboarding from "react-native-onboarding-swiper";
import RadioGroup, { Radio } from "react-native-radio-input";
import { styles } from "./style";

export default class T2Screen extends React.Component {
  static navigationOptions = {
    header: null
  };
  constructor(props) {
    super(props);
    this.state = {
      nickname: this.props.nickname,
      showFrom: 0,
      value: '',
    };
  }

  getChecked = value => {
    // value = our checked value
    console.log(value);
  };

  render() {
    var form;
    if (this.state.showForm === 0) {
      form = (
        <View>
          <Text>
            1. I have used my mobile phone to make myself feel better when I was
            feeling down.
          </Text>
          <RadioGroup
            getChecked={this.getChecked}
            RadioGroupStyle={{ flexDirection: "row" }}
          >
            <Radio iconName={"lens"} label={"1"} value={1} />
            <Radio iconName={"lens"} label={"2"} value={2} />
            <Radio iconName={"lens"} label={"3"} value={3} />
            <Radio iconName={"lens"} label={"4"} value={4} />
            <Radio iconName={"lens"} label={"5"} value={5} />
            <Radio iconName={"lens"} label={"6"} value={6} />
          </RadioGroup>
        </View>
      );
    } else if (this.state.showForm === 1) {
      form = (
        <View>
          <Text>
            2. When out of range for some time, I become preoccupied with the
            thought of missing a call or a message.
          </Text>
          <RadioGroup
            getChecked={this.getChecked}
            RadioGroupStyle={{ flexDirection: "row" }}
          >
            <Radio iconName={"lens"} label={"1"} value={1} />
            <Radio iconName={"lens"} label={"2"} value={2} />
            <Radio iconName={"lens"} label={"3"} value={3} />
            <Radio iconName={"lens"} label={"4"} value={4} />
            <Radio iconName={"lens"} label={"5"} value={5} />
            <Radio iconName={"lens"} label={"6"} value={6} />
          </RadioGroup>
        </View>
      );
    } else if (this.state.showForm === 2) {
      form = (
        <View>
          <Text>
            3. If I don’t have a mobile phone, my friends would find it hard to
            get in touch with me.
          </Text>
          <RadioGroup
            getChecked={this.getChecked}
            RadioGroupStyle={{ flexDirection: "row" }}
          >
            <Radio iconName={"lens"} label={"1"} value={1} />
            <Radio iconName={"lens"} label={"2"} value={2} />
            <Radio iconName={"lens"} label={"3"} value={3} />
            <Radio iconName={"lens"} label={"4"} value={4} />
            <Radio iconName={"lens"} label={"5"} value={5} />
            <Radio iconName={"lens"} label={"6"} value={6} />
          </RadioGroup>
        </View>
      );
    } else if (this.state.showForm === 3) {
      form = (
        <View>
          <Text>
            4. I feel anxious if I have not checked for messages or switched on
            my smartphone for some time.
          </Text>
          <RadioGroup
            getChecked={this.getChecked}
            RadioGroupStyle={{ flexDirection: "row" }}
          >
            <Radio iconName={"lens"} label={"1"} value={1} />
            <Radio iconName={"lens"} label={"2"} value={2} />
            <Radio iconName={"lens"} label={"3"} value={3} />
            <Radio iconName={"lens"} label={"4"} value={4} />
            <Radio iconName={"lens"} label={"5"} value={5} />
            <Radio iconName={"lens"} label={"6"} value={6} />
          </RadioGroup>
        </View>
      );
    } else if (this.state.showForm === 4) {
      form = (
        <View>
          <Text>
            5. My friends and family complain about my use of the smartphone.
          </Text>
          <RadioGroup
            getChecked={this.getChecked}
            RadioGroupStyle={{ flexDirection: "row" }}
          >
            <Radio iconName={"lens"} label={"1"} value={1} />
            <Radio iconName={"lens"} label={"2"} value={2} />
            <Radio iconName={"lens"} label={"3"} value={3} />
            <Radio iconName={"lens"} label={"4"} value={4} />
            <Radio iconName={"lens"} label={"5"} value={5} />
            <Radio iconName={"lens"} label={"6"} value={6} />
          </RadioGroup>
        </View>
      );
    } else if (this.state.showForm === 5) {
      form = (
        <View>
          <Text>
            6. I find myself engaged on the smartphone for longer periods of
            time than intended.
          </Text>
          <RadioGroup
            getChecked={this.getChecked}
            RadioGroupStyle={{ flexDirection: "row" }}
          >
            <Radio iconName={"lens"} label={"1"} value={1} />
            <Radio iconName={"lens"} label={"2"} value={2} />
            <Radio iconName={"lens"} label={"3"} value={3} />
            <Radio iconName={"lens"} label={"4"} value={4} />
            <Radio iconName={"lens"} label={"5"} value={5} />
            <Radio iconName={"lens"} label={"6"} value={6} />
          </RadioGroup>
        </View>
      );
    } else if (this.state.showForm === 6) {
      form = (
        <View>
          <Text>
            7. I am often late for appointments because I’m engaged on the
            smartphone when I shouldn’t be.
          </Text>
          <RadioGroup
            getChecked={this.getChecked}
            RadioGroupStyle={{ flexDirection: "row" }}
          >
            <Radio iconName={"lens"} label={"1"} value={1} />
            <Radio iconName={"lens"} label={"2"} value={2} />
            <Radio iconName={"lens"} label={"3"} value={3} />
            <Radio iconName={"lens"} label={"4"} value={4} />
            <Radio iconName={"lens"} label={"5"} value={5} />
            <Radio iconName={"lens"} label={"6"} value={6} />
          </RadioGroup>
        </View>
      );
    } else if (this.state.showForm === 7) {
      form = (
        <View>
          <Text>8. I find it difficult to switch off my smartphone.</Text>
          <RadioGroup
            getChecked={this.getChecked}
            RadioGroupStyle={{ flexDirection: "row" }}
          >
            <Radio iconName={"lens"} label={"1"} value={1} />
            <Radio iconName={"lens"} label={"2"} value={2} />
            <Radio iconName={"lens"} label={"3"} value={3} />
            <Radio iconName={"lens"} label={"4"} value={4} />
            <Radio iconName={"lens"} label={"5"} value={5} />
            <Radio iconName={"lens"} label={"6"} value={6} />
          </RadioGroup>
        </View>
      );
    } else if (this.state.showForm === 8) {
      form = (
        <View>
          <Text>
            9. I have been told that I spend too much time on my smartphone.
          </Text>
          <RadioGroup
            value="PSU1_T1"
            getChecked={this.getChecked}
            RadioGroupStyle={{ flexDirection: "row" }}
          >
            <Radio iconName={"lens"} label={"1"} value={1} />
            <Radio iconName={"lens"} label={"2"} value={2} />
            <Radio iconName={"lens"} label={"3"} value={3} />
            <Radio iconName={"lens"} label={"4"} value={4} />
            <Radio iconName={"lens"} label={"5"} value={5} />
            <Radio iconName={"lens"} label={"6"} value={6} />
          </RadioGroup>

          <View>
            <PrimaryButton
              label="Done"
              isBottom={true}
              onPress={() => {
                this.props.navigation.navigate("T3");
              }}
            />
          </View>
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <Text style={styles.header_left}>In the last 7 days</Text>

        <View>
          <Button
            title="Show Form 1"
            onPress={() => this.setState({ showForm: 0 })}
          />
          <Button
            title="Show Form 2"
            onPress={() => this.setState({ showForm: 1 })}
          />
          <Button
            title="Show Form 3"
            onPress={() => this.setState({ showForm: 2 })}
          />
          <Button
            title="Show Form 4"
            onPress={() => this.setState({ showForm: 3 })}
          />
          <Button
            title="Show Form 5"
            onPress={() => this.setState({ showForm: 4 })}
          />
          <Button
            title="Show Form 6"
            onPress={() => this.setState({ showForm: 5 })}
          />
          <Button
            title="Show Form 7"
            onPress={() => this.setState({ showForm: 6 })}
          />
          <Button
            title="Show Form 8"
            onPress={() => this.setState({ showForm: 7 })}
          />
          <Button
            title="Show Form 9"
            onPress={() => this.setState({ showForm: 8 })}
          />
          {form}
        </View>
      </View>
    );
  }
}
