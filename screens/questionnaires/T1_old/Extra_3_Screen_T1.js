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
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  Picker,
  StatusBar,
  Dimensions
} from "react-native";
import {
  PrimaryButton,
  SecondaryButton,
  GreyInputButton,
  ExerciceButton
} from "../../../components/AppComponents";
import { styles } from "./style";
import * as Progress from "react-native-progress";

import * as firebase from "firebase";

export default class Extra_3_Screen_T1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      progressValue: 68/79,
      buttonIsActive: false,
      userNationality: ""
    };
  }

  handleSubmit = () => {
    const { userNationality } = this.state;
    console.log(userNationality);
    const uid = firebase.auth().currentUser.uid;
    firebase
      .database()
      .ref("questionnaires")
      .child(uid)
      .update({ Nationality: userNationality });
      this.setState({ progressValue: 69 / 79 });
    this.props.navigation.navigate("SU1_Screen_T1");
  };

  render() {
    var options = [
      { key: "Afghan" },
      { key: "Albanian" },
      { key: "Algerian" },
      { key: "American" },
      { key: "Andorran" },
      { key: "Angolan" },
      { key: "Antiguans" },
      { key: "Argentinean" },
      { key: "Armenian" },
      { key: "Australian" },
      { key: "Austrian" },
      { key: "Azerbaijani" },
      { key: "Bahamian" },
      { key: "Bahraini" },
      { key: "Bangladeshi" },
      { key: "Barbadian" },
      { key: "Barbudans" },
      { key: "Batswana" },
      { key: "Belarusian" },
      { key: "Belgian" },
      { key: "Belizean" },
      { key: "Beninese" },
      { key: "Bhutanese" },
      { key: "Bolivian" },
      { key: "Bosnian" },
      { key: "Brazilian" },
      { key: "British" },
      { key: "Bruneian" },
      { key: "Bulgarian" },
      { key: "Burkinabe" },
      { key: "Burmese" },
      { key: "Burundian" },
      { key: "Cambodian" },
      { key: "Cameroonian" },
      { key: "Canadian" },
      { key: "Cape Verdean" },
      { key: "Central African" },
      { key: "Chadian" },
      { key: "Chilean" },
      { key: "Chinese" },
      { key: "Colombian" },
      { key: "Comoran" },
      { key: "Congolese" },
      { key: "Costa Rican" },
      { key: "Croatian" },
      { key: "Cuban" },
      { key: "Cypriot" },
      { key: "Czech" },
      { key: "Danish" },
      { key: "Djibouti" },
      { key: "Dominican" },
      { key: "Dutch" },
      { key: "East Timorese" },
      { key: "Ecuadorean" },
      { key: "Egyptian" },
      { key: "Emirian" },
      { key: "Equatorial Guinean" },
      { key: "Eritrean" },
      { key: "Estonian" },
      { key: "Ethiopian" },
      { key: "Fijian" },
      { key: "Filipino" },
      { key: "Finnish" },
      { key: "French" },
      { key: "Gabonese" },
      { key: "Gambian" },
      { key: "Georgian" },
      { key: "German" },
      { key: "Ghanaian" },
      { key: "Greek" },
      { key: "Grenadian" },
      { key: "Guatemalan" },
      { key: "Guinea-Bissauan" },
      { key: "Guinean" },
      { key: "Guyanese" },
      { key: "Haitian" },
      { key: "Herzegovinian" },
      { key: "Honduran" },
      { key: "Hungarian" },
      { key: "I-Kiribati" },
      { key: "Icelander" },
      { key: "Indian" },
      { key: "Indonesian" },
      { key: "Iranian" },
      { key: "Iraqi" },
      { key: "Irish" },
      { key: "Israeli" },
      { key: "Italian" },
      { key: "Ivorian" },
      { key: "Jamaican" },
      { key: "Japanese" },
      { key: "Jordanian" },
      { key: "Kazakhstani" },
      { key: "Kenyan" },
      { key: "Kittian and Nevisian" },
      { key: "Kuwaiti" },
      { key: "Kyrgyz" },
      { key: "Laotian" },
      { key: "Latvian" },
      { key: "Lebanese" },
      { key: "Liberian" },
      { key: "Libyan" },
      { key: "Liechtensteiner" },
      { key: "Lithuanian" },
      { key: "Luxembourger" },
      { key: "Macedonian" },
      { key: "Malagasy" },
      { key: "Malawian" },
      { key: "Malaysian" },
      { key: "Maldivian" },
      { key: "Malian" },
      { key: "Maltese" },
      { key: "Marshallese" },
      { key: "Mauritanian" },
      { key: "Mauritian" },
      { key: "Mexican" },
      { key: "Micronesian" },
      { key: "Moldovan" },
      { key: "Monacan" },
      { key: "Mongolian" },
      { key: "Moroccan" },
      { key: "Mosotho" },
      { key: "Motswana" },
      { key: "Mozambican" },
      { key: "Namibian" },
      { key: "Nauruan" },
      { key: "Nepalese" },
      { key: "New Zealander" },
      { key: "Ni-Vanuatu" },
      { key: "Nicaraguan" },
      { key: "Nigerian" },
      { key: "Nigerien" },
      { key: "North Korean" },
      { key: "Northern Irish" },
      { key: "Norwegian" },
      { key: "Omani" },
      { key: "Pakistani" },
      { key: "Palauan" },
      { key: "Panamanian" },
      { key: "Papua New Guinean" },
      { key: "Paraguayan" },
      { key: "Peruvian" },
      { key: "Polish" },
      { key: "Portuguese" },
      { key: "Qatari" },
      { key: "Romanian" },
      { key: "Russian" },
      { key: "Rwandan" },
      { key: "Saint Lucian" },
      { key: "Salvadoran" },
      { key: "Samoan" },
      { key: "San Marinese" },
      { key: "Sao Tomean" },
      { key: "Saudi" },
      { key: "Scottish" },
      { key: "Senegalese" },
      { key: "Serbian" },
      { key: "Seychellois" },
      { key: "Sierra Leonean" },
      { key: "Singaporean" },
      { key: "Slovakian" },
      { key: "Slovenian" },
      { key: "Solomon Islander" },
      { key: "Somali" },
      { key: "South African" },
      { key: "South Korean" },
      { key: "Spanish" },
      { key: "Sri Lankan" },
      { key: "Sudanese" },
      { key: "Surinamer" },
      { key: "Swazi" },
      { key: "Swedish" },
      { key: "Swiss" },
      { key: "Syrian" },
      { key: "Taiwanese" },
      { key: "Tajik" },
      { key: "Tanzanian" },
      { key: "Thai" },
      { key: "Togolese" },
      { key: "Tongan" },
      { key: "Trinidadian or Tobagonian" },
      { key: "Tunisian" },
      { key: "Turkish" },
      { key: "Tuvaluan" },
      { key: "Ugandan" },
      { key: "Ukrainian" },
      { key: "Uruguayan" },
      { key: "Uzbekistani" },
      { key: "Venezuelan" },
      { key: "Vietnamese" },
      { key: "Welsh" },
      { key: "Yemenite" },
      { key: "Zambian" },
      { key: "Zimbabwean" }
    ];

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
            progress={this.state.progressValue}
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
        <ScrollView style={{ alignSelf: "stretch" }}>
          <TouchableOpacity
            onPress={() => {
              this.setState({ progressValue: 69 / 79 });
              this.props.navigation.navigate("SU1_Screen_T1");
            }}
            style={styles.skip}
          >
            <Text style={styles.skip_text}>Skip</Text>
          </TouchableOpacity>
          <KeyboardAvoidingView
            behavior="padding"
            keyboardVerticalOffset="15"
            style={styles.keyboard_view}
          >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
              <>
                <Text style={styles.text_bold_center}>What is your nationality?</Text>

                <View>
                  <Picker
                    mode="dropdown"
                    selectedValue={this.state.userNationality}
                    onValueChange={itemValue =>
                      this.setState({ userNationality: itemValue })
                    }
                  >
                    {options.map((item, key) => {
                      return (
                        <Picker.Item
                          label={item.key}
                          value={item.key}
                          key={item.key}
                        />
                      );
                    })}
                  </Picker>
                </View>
              </>
            </TouchableWithoutFeedback>
          </KeyboardAvoidingView>
        </ScrollView>

        <View style={styles.bottom}>
          <PrimaryButton
            label="Keep Going"
            isBottom={true}
            disabled={!this.state.userNationality}
            onPress={this.handleSubmit}
          />
        </View>
      </View>
      </>
    );
  }
}
