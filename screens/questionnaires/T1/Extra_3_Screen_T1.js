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
  Keyboard
} from "react-native";
import {
  PrimaryButton,
  SecondaryButton,
  GreyACputButton,
  RadioButtons
} from "../../../components/AppComponents";
import { styles } from "./style";
import ModalDropdown from "react-native-modal-dropdown";

import * as firebase from "firebase";

export default class Extra_3_Screen_T1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonIsActive: false,
      userNationality: ""
    };
  }

  Nationality_onSelect(idx, value) {
    this.setState({ userNationality: value });
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
    this.props.navigation.navigate("SU1_Screen_T1");
  };

  render() {
    return (
      <View style={styles.container_left}>
        <KeyboardAvoidingView
          behavior="padding"
          keyboardVerticalOffset="15"
          style={styles.keyboard_view}
        >
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <>
              <Text style={styles.text_left}>What is your nationality?</Text>

              <View>
                <ModalDropdown
                  defaultValue={"Pick an option"}
                  style={{ alignSelf: "stretch" }}
                  dropdownStyle={{ width: 300, marginRight: -30 }}
                  dropdownTextStyle={{ textAlign: "center" }}
                  onSelect={(idx, value) => this.Nationality_onSelect(idx, value)}
                  options={[
                    "Afghan",
                    "Albanian",
                    "Algerian",
                    "American",
                    "Andorran",
                    "Angolan",
                    "Antiguans",
                    "Argentinean",
                    "Armenian",
                    "Australian",
                    "Austrian",
                    "Azerbaijani",
                    "Bahamian",
                    "Bahraini",
                    "Bangladeshi",
                    "Barbadian",
                    "Barbudans",
                    "Batswana",
                    "Belarusian",
                    "Belgian",
                    "Belizean",
                    "Beninese",
                    "Bhutanese",
                    "Bolivian",
                    "Bosnian",
                    "Brazilian",
                    "British",
                    "Bruneian",
                    "Bulgarian",
                    "Burkinabe",
                    "Burmese",
                    "Burundian",
                    "Cambodian",
                    "Cameroonian",
                    "Canadian",
                    "Cape Verdean",
                    "Central African",
                    "Chadian",
                    "Chilean",
                    "Chinese",
                    "Colombian",
                    "Comoran",
                    "Congolese",
                    "Costa Rican",
                    "Croatian",
                    "Cuban",
                    "Cypriot",
                    "Czech",
                    "Danish",
                    "Djibouti",
                    "Dominican",
                    "Dutch",
                    "East Timorese",
                    "Ecuadorean",
                    "Egyptian",
                    "Emirian",
                    "Equatorial Guinean",
                    "Eritrean",
                    "Estonian",
                    "Ethiopian",
                    "Fijian",
                    "Filipino",
                    "Finnish",
                    "French",
                    "Gabonese",
                    "Gambian",
                    "Georgian",
                    "German",
                    "Ghanaian",
                    "Greek",
                    "Grenadian",
                    "Guatemalan",
                    "Guinea-Bissauan",
                    "Guinean",
                    "Guyanese",
                    "Haitian",
                    "Herzegovinian",
                    "Honduran",
                    "Hungarian",
                    "I-Kiribati",
                    "Icelander",
                    "Indian",
                    "Indonesian",
                    "Iranian",
                    "Iraqi",
                    "Irish",
                    "Israeli",
                    "Italian",
                    "Ivorian",
                    "Jamaican",
                    "Japanese",
                    "Jordanian",
                    "Kazakhstani",
                    "Kenyan",
                    "Kittian and Nevisian",
                    "Kuwaiti",
                    "Kyrgyz",
                    "Laotian",
                    "Latvian",
                    "Lebanese",
                    "Liberian",
                    "Libyan",
                    "Liechtensteiner",
                    "Lithuanian",
                    "Luxembourger",
                    "Macedonian",
                    "Malagasy",
                    "Malawian",
                    "Malaysian",
                    "Maldivian",
                    "Malian",
                    "Maltese",
                    "Marshallese",
                    "Mauritanian",
                    "Mauritian",
                    "Mexican",
                    "Micronesian",
                    "Moldovan",
                    "Monacan",
                    "Mongolian",
                    "Moroccan",
                    "Mosotho",
                    "Motswana",
                    "Mozambican",
                    "Namibian",
                    "Nauruan",
                    "Nepalese",
                    "New Zealander",
                    "Ni-Vanuatu",
                    "Nicaraguan",
                    "Nigerian",
                    "Nigerien",
                    "North Korean",
                    "Northern Irish",
                    "Norwegian",
                    "Omani",
                    "Pakistani",
                    "Palauan",
                    "Panamanian",
                    "Papua New Guinean",
                    "Paraguayan",
                    "Peruvian",
                    "Polish",
                    "Portuguese",
                    "Qatari",
                    "Romanian",
                    "Russian",
                    "Rwandan",
                    "Saint Lucian",
                    "Salvadoran",
                    "Samoan",
                    "San Marinese",
                    "Sao Tomean",
                    "Saudi",
                    "Scottish",
                    "Senegalese",
                    "Serbian",
                    "Seychellois",
                    "Sierra Leonean",
                    "Singaporean",
                    "Slovakian",
                    "Slovenian",
                    "Solomon Islander",
                    "Somali",
                    "South African",
                    "South Korean",
                    "Spanish",
                    "Sri Lankan",
                    "Sudanese",
                    "Surinamer",
                    "Swazi",
                    "Swedish",
                    "Swiss",
                    "Syrian",
                    "Taiwanese",
                    "Tajik",
                    "Tanzanian",
                    "Thai",
                    "Togolese",
                    "Tongan",
                    "Trinidadian or Tobagonian",
                    "Tunisian",
                    "Turkish",
                    "Tuvaluan",
                    "Ugandan",
                    "Ukrainian",
                    "Uruguayan",
                    "Uzbekistani",
                    "Venezuelan",
                    "Vietnamese",
                    "Welsh",
                    "Yemenite",
                    "Zambian",
                    "Zimbabwean"
                  ]}
                />
              </View>

              <View style={styles.bottom}>
                <PrimaryButton
                  label="Continue"
                  isBottom={true}
                  disabled={!this.state.userNationality}
                  onPress={this.handleSubmit}
                />
              </View>
            </>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </View>
    );
  }
}
