import React from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Dimensions
} from "react-native";
import {
  PrimaryButton,
  SecondaryButton,
  GreyInputButton
} from "../../../components/AppComponents";
import { styles } from "./style";

export default class ConclusionScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const screenHeight = Dimensions.get('window').height

    return (
      <View style={{height: screenHeight, alignItems: "center"}}>
        <ScrollView
          //style={styles.container_scrollview}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.container_scrollview_content}
        >
          <View
            style={{
              flex: 1,
              justifyContent: "flex-start",
              width: Dimensions.get("window").width - 60
            }}
          >
            <Text style={styles.header}>So, here’s your plan</Text>

            <Text style={styles.text}>
              {"\n"}In five steps, you’ll explore your own smartphone behavior,
              find out what drives you and define new habits based on your
              values.
            </Text>

            <Image
              style={{ marginTop: 20, alignSelf: "center" }}
              source={require("./../../../assets/images/your_plan.png")}
            />

            <Text style={styles.text}>
              {"\n"}5 steps, 21 exercises,
              {"\n"}around 5 min per exercise,
              {"\n"}6 reflections.
            </Text>
            <View style={{ flex: 1, height: 30 }} />

            <View style={styles.bottom}>
              <PrimaryButton
                label="Got it"
                isBottom={true}
                onPress={() => {
                  this.props.navigation.navigate("Intro_Screen_T1");
                }}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
