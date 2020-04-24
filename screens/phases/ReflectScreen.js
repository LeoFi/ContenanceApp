import React from "react";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Button,
  StatusBar,
  Dimensions
} from "react-native";
import {
  PrimaryButton,
  SecondaryButton,
  ExerciceButton,
  HeaderComponent
} from "./../../components/AppComponents";
import * as firebase from "firebase";
import { Svg, Path, Circle } from "react-native-svg";

import { connect } from "react-redux";

class ReflectScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nickname: this.props.user.nickname || "",
      exercice_state_5: this.props.exercices.exercice_state_5 || "",
      exercice_state_6: this.props.exercices.exercice_state_6 || "",
      exercice_state_7: this.props.exercices.exercice_state_7 || "",
      exercice_state_8: this.props.exercices.exercice_state_8 || "",
      exercice_state_PM2: this.props.exercices.exercice_state_PM2 || ""
    };
  }

  onSignoutPress = () => {
    firebase.auth().signOut();
  };

  render() {
    const buttonProps = {
      width: Dimensions.get("window").width
    };
    let ExerciceTextStyle_5 = "";
    let ExerciceStyle_5 = "";

    switch (this.props.exercices.exercice_state_5) {
      case "DONE":
        ExerciceTextStyle_5 = styles.text_completed;
        ExerciceStyle_5 = styles.completed;
        IconsExercice_5 = require("./../../assets/images/checkmark_reflect.png");
        break;
      case "completed":
        ExerciceTextStyle_5 = styles.text_completed;
        ExerciceStyle_5 = styles.completed;
        IconsExercice_5 = require("./../../assets/images/checkmark_reflect.png");
        break;
      case "next":
        ExerciceTextStyle_5 = styles.text_next;
        ExerciceStyle_5 = styles.next;
        IconsExercice_5 = require("./../../assets/images/nextmark.png");
        break;
      case "new":
        ExerciceTextStyle_5 = styles.text_new;
        ExerciceStyle_5 = styles.new;
        IconsExercice_5 = require("./../../assets/images/newmark_reflect.png");
        break;
      default:
        ExerciceTextStyle_5 = styles.text_locked;
        ExerciceStyle_5 = styles.locked;
        IconsExercice_5 = require("./../../assets/images/lockmark.png");
    }

    let ExerciceTextStyle_6 = "";
    let ExerciceStyle_6 = "";

    switch (this.props.exercices.exercice_state_6) {
      case "DONE":
        ExerciceTextStyle_6 = styles.text_completed;
        ExerciceStyle_6 = styles.completed;
        IconsExercice_6 = require("./../../assets/images/checkmark_reflect.png");
        break;
      case "completed":
        ExerciceTextStyle_6 = styles.text_completed;
        ExerciceStyle_6 = styles.completed;
        IconsExercice_6 = require("./../../assets/images/checkmark_reflect.png");
        break;
      case "next":
        ExerciceTextStyle_6 = styles.text_next;
        ExerciceStyle_6 = styles.next;
        IconsExercice_6 = require("./../../assets/images/nextmark.png");
        break;
      case "new":
        ExerciceTextStyle_6 = styles.text_new;
        ExerciceStyle_6 = styles.new;
        IconsExercice_6 = require("./../../assets/images/newmark_reflect.png");
        break;
      default:
        ExerciceTextStyle_6 = styles.text_locked;
        ExerciceStyle_6 = styles.locked;
        IconsExercice_6 = require("./../../assets/images/lockmark.png");
    }

    let ExerciceTextStyle_7 = "";
    let ExerciceStyle_7 = "";

    switch (this.props.exercices.exercice_state_7) {
      case "DONE":
        ExerciceTextStyle_7 = styles.text_completed;
        ExerciceStyle_7 = styles.completed;
        IconsExercice_7 = require("./../../assets/images/checkmark_reflect.png");
        break;
      case "completed":
        ExerciceTextStyle_7 = styles.text_completed;
        ExerciceStyle_7 = styles.completed;
        IconsExercice_7 = require("./../../assets/images/checkmark_reflect.png");
        break;
      case "next":
        ExerciceTextStyle_7 = styles.text_next;
        ExerciceStyle_7 = styles.next;
        IconsExercice_7 = require("./../../assets/images/nextmark.png");
        break;
      case "new":
        ExerciceTextStyle_7 = styles.text_new;
        ExerciceStyle_7 = styles.new;
        IconsExercice_7 = require("./../../assets/images/newmark_reflect.png");
        break;
      default:
        ExerciceTextStyle_7 = styles.text_locked;
        ExerciceStyle_7 = styles.locked;
        IconsExercice_7 = require("./../../assets/images/lockmark.png");
    }

    let ExerciceTextStyle_8 = "";
    let ExerciceStyle_8 = "";

    switch (this.props.exercices.exercice_state_8) {
      case "DONE":
        ExerciceTextStyle_8 = styles.text_completed;
        ExerciceStyle_8 = styles.completed;
        IconsExercice_8 = require("./../../assets/images/checkmark_reflect.png");
        break;
      case "completed":
        ExerciceTextStyle_8 = styles.text_completed;
        ExerciceStyle_8 = styles.completed;
        IconsExercice_8 = require("./../../assets/images/checkmark_reflect.png");
        break;
      case "next":
        ExerciceTextStyle_8 = styles.text_next;
        ExerciceStyle_8 = styles.next;
        IconsExercice_8 = require("./../../assets/images/nextmark.png");
        break;
      case "new":
        ExerciceTextStyle_8 = styles.text_new;
        ExerciceStyle_8 = styles.new;
        IconsExercice_8 = require("./../../assets/images/newmark_reflect.png");
        break;
      default:
        ExerciceTextStyle_8 = styles.text_locked;
        ExerciceStyle_8 = styles.locked;
        IconsExercice_8 = require("./../../assets/images/lockmark.png");
    }

    let ReflectionTextStyle_2 = "";
    let ReflectionStyle_2 = "";

    switch (this.props.exercices.exercice_state_PM2) {
      case "completed":
        ReflectionTextStyle_2 = styles.text_completed;
        ReflectionStyle_2 = styles.completed;
        IconsReflection_2 = require("./../../assets/images/checkmark_reflect.png");
        break;
      case "next":
        ReflectionTextStyle_2 = styles.text_next;
        ReflectionStyle_2 = styles.next;
        IconsReflection_2 = require("./../../assets/images/nextmark.png");
        break;
      case "new":
        ReflectionTextStyle_2 = styles.text_new;
        ReflectionStyle_2 = styles.new;
        IconsReflection_2 = require("./../../assets/images/newmark_reflect.png");
        break;
      default:
        ReflectionTextStyle_2 = styles.text_locked;
        ReflectionStyle_2 = styles.locked;
        IconsReflection_2 = require("./../../assets/images/lockmark.png");
    }

    var ExercicesArray = [
      {
        id: 5,
        path: "Intro_Phase_Reflect",
        label: "Day 5 - Habit Loop",
        styleButton: ExerciceStyle_5,
        styleText: ExerciceTextStyle_5,
        IconSource: IconsExercice_5,
        state: this.props.exercices.exercice_state_5
      },
      {
        id: 6,
        path: "Exercice_6_Intro",
        label: "Day 6 - Exploring Emotional Triggers",
        styleButton: ExerciceStyle_6,
        styleText: ExerciceTextStyle_6,
        IconSource: IconsExercice_6,
        state: this.props.exercices.exercice_state_6
      },
      {
        id: 7,
        path: "Exercice_7_Intro",
        label: "Day 7 - Getting Lost",
        styleButton: ExerciceStyle_7,
        styleText: ExerciceTextStyle_7,
        IconSource: IconsExercice_7,
        state: this.props.exercices.exercice_state_7
      },
      {
        id: 8,
        path: "Exercice_8_Intro",
        //path: "Intro_Screen_PM2",
        label: "Day 8 - Mindful Social Media Use",
        styleButton: ExerciceStyle_8,
        styleText: ExerciceTextStyle_8,
        IconSource: IconsExercice_8,
        state: this.props.exercices.exercice_state_8
      },
      {
        id: 9,
        path: "Intro_Screen_PM2",
        label: "Module Reflection",
        styleButton: ReflectionStyle_2,
        styleText: ReflectionTextStyle_2,
        IconSource: IconsReflection_2,
        state: this.props.exercices.exercice_state_PM2
      }
    ];

    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <ScrollView>
          <View style={{ flex: 1, paddingTop: 0 }}>
            <Svg
              width={buttonProps.width}
              height={"209"}
              viewBox={"0 0 275 209"}
              fill="none"
            >
              <Path
                d="M274.5 131C274.5 134 273 136.5 272 137.5C272 137.5 217.56 196.461 211.177 203.3C204.794 210.139 195.979 208.619 192.37 207.005C192.37 207.005 77.3975 143.961 3.72852 103.565C2.81901 103.21 1 101.6 1 98C1 94.4 2.16667 88.5 2.5 85.5"
                stroke="#2C3B51"
              />
              <Path d="M274.5 132V118" stroke="#2C3B51" />
              <Path
                d="M147.72 66.0426L79.2422 32.0405C59.7702 48.473 20.8262 82.0219 20.8262 84.7575L185.816 173.949L243.947 113.823L178.279 81.2163"
                stroke="#2C3B51"
              />
              <Path
                d="M150.947 51.8649C119.265 35.8408 93.9743 22.8307 89.7857 20.0724C80.4391 13.9173 72.9732 17.5077 70.4086 20.0724L3.15893 83.0477C0.879279 87.835 5.05864 92.2613 7.43328 93.876C66.1343 124.366 190.375 192.756 191.23 193.326C192.085 193.896 204.053 197.315 208.043 193.326C212.032 189.336 268.396 132.174 272.728 124.651C277.059 117.128 272.443 112.588 269.593 111.258C251.73 102.387 218.254 85.6811 193.822 73.4464C191.823 72.444 163.085 57.9892 161.09 56.9877M150.947 51.8649C151.56 52.1742 160.473 56.6767 161.09 56.9877M150.947 51.8649L161.09 56.9877"
                stroke="#2C3B51"
              />
              <Path
                d="M225.664 146.238C226.208 145.558 226.798 145.12 227.615 144.853C227.993 144.57 228.19 144.331 228.701 144.171C229.834 143.817 231.569 144.913 232.445 145.586C234.521 147.183 234.909 150.798 232.531 152.311C230.781 153.425 228.482 152.431 226.887 151.422C225.929 150.816 224.998 149.876 224.977 148.673C224.959 147.668 225.028 147.033 225.664 146.238Z"
                stroke="#2C3B51"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <Path
                d="M185.984 61.485L186.313 60.0098L190.594 62.2226L190.265 63.6979L185.984 61.485Z"
                fill="#EBD1B1"
              />
              <Path
                d="M174.451 58.4886L175.118 55.4282L189.14 61.5489L188.473 65.2213L174.451 58.4886Z"
                fill="#EBD1B1"
              />
              <Path
                d="M155.844 12.6295C155.993 11.4703 156.499 11.3249 157.357 11.3651C157.899 11.3906 158.484 12.4187 158.624 13.0108C158.776 13.6527 158.804 14.2216 158.767 14.8671C158.743 15.2798 158.47 15.5421 158.355 15.9006C158.318 16.0138 157.616 17.2352 157.769 17.2352"
                stroke="#2C3B51"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <Path
                d="M158.782 15.2778C159.788 16.0001 160.971 16.2571 162.699 16.2571"
                stroke="#2C3B51"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <Path
                d="M147.11 16.5555C147.02 16.7721 146.974 16.925 147.153 17.1125C147.378 17.35 147.723 17.206 147.924 16.9899C148.209 16.6836 147.712 16.4289 147.533 16.2559"
                stroke="#2C3B51"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <Path
                d="M142.281 77.275C142.065 77.9476 141.973 78.9225 142.821 78.9225C143.351 78.9225 143.63 79.0304 143.962 78.5106C144.477 77.7034 143.338 76.5799 142.686 77.1103"
                stroke="#2C3B51"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <Path
                d="M146.59 76.7157C148.787 77.4207 148.147 79.0162 146.608 79.9645C146.378 80.1066 145.583 80.1126 145.583 80.1282C145.583 80.7489 145.581 81.2233 144.912 81.5242C143.954 81.9553 140.401 82.2612 140.401 80.6711C140.401 80.4805 140.894 79.2739 140.848 79.232C140.208 78.6399 138.672 78.6638 137.866 78.2324C136.216 77.3492 138.227 75.9708 139.189 75.6472C140.134 75.3296 141.425 76.0899 141.892 75.2508C142.541 74.0848 143.658 73.5395 144.819 74.6131C145.215 74.979 145.283 75.2633 145.453 75.7506C145.553 76.0402 145.408 76.6349 145.583 76.7157"
                stroke="#2C3B51"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <Path
                d="M152.905 64.7051C153.673 65.6816 155.059 66.5518 156.659 66.0589C157.752 65.722 158.347 63.5862 157.116 63.2632"
                stroke="#2C3B51"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <Path
                d="M152.402 65.7585C152.05 66.4329 151.662 67.1656 152.171 67.8508C152.633 68.4738 153.255 68.0021 153.906 67.8313C154.085 67.7842 154.761 68.7939 155.162 68.965C156.109 69.3686 156.873 69.0364 157.239 68.3237C157.353 68.1007 157.262 67.8692 157.358 67.65C157.435 67.4746 157.775 67.793 157.939 67.8573C158.715 68.1597 159.389 68.0278 160.016 67.5528C160.58 67.1253 160.882 66.2194 160.674 65.6419C160.595 65.4209 160.334 65.3988 160.435 65.1496C160.56 64.8414 160.555 64.5662 160.555 64.2427"
                stroke="#2C3B51"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <Path
                d="M166.81 88.4982C166.62 86.5615 166.764 85.2681 168.659 85.9905C169.272 86.2244 169.7 87.0307 169.508 87.7551C169.422 88.0781 168.704 88.6444 168.444 88.6955C167.56 88.869 167.317 88.2496 166.616 87.8712"
                stroke="#2C3B51"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <Path
                d="M168.574 84.626C169.879 83.8255 171.547 83.1107 171.547 85.1995C171.547 85.8827 170.183 86.296 171.304 86.296C172.395 86.296 173.471 86.3628 173.471 87.519C173.471 88.2526 172.792 88.2422 172.421 88.7251"
                stroke="#2C3B51"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <Path
                d="M168.117 91.6629C167.866 91.165 167.928 89.893 167.405 90.3025C167.087 90.5521 166.556 90.4874 166.198 90.4536C165.118 90.3517 163.861 86.3725 165.315 86.3725C165.595 86.3725 165.601 86.0407 165.601 85.7511C165.601 84.5857 165.335 83.858 166.217 83.0807C167.051 82.3461 168.308 83.5016 168.574 84.5586"
                stroke="#2C3B51"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <Path
                d="M180.719 72.0767C178.864 73.5231 184.265 73.1915 183.098 72.2162"
                stroke="#2C3B51"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <Path
                d="M178.284 71.0962C177.39 71.8036 175.39 72.9574 177.043 73.7961C177.53 74.0432 178.248 73.963 178.695 74.2657C178.767 74.3143 178.572 74.389 178.509 74.4483C178.304 74.6382 178.195 74.9017 178.078 75.1526C177.504 76.3881 178.514 76.8968 179.588 76.959C180.251 76.9975 180.763 76.9786 181.279 76.5025C181.401 76.3896 181.811 75.7139 181.877 75.7526C182.159 75.9195 182.205 76.2473 182.59 76.2612C182.937 76.2738 183.481 76.251 183.747 76.0004C184.291 75.4877 184.494 75.0432 184.293 74.3309C184.224 74.0851 184.259 74.2866 184.557 74.357C184.923 74.4434 185.371 74.5795 185.714 74.3309C186.538 73.7337 186.173 72.5735 185.688 71.9179"
                stroke="#2C3B51"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <Path
                d="M147.031 91.4078C147.583 91.5708 148.202 91.8207 148.757 91.5231C149.137 91.3189 149.486 91.0375 149.75 90.7572C150.185 90.2943 149.926 90.0248 149.371 89.7031"
                stroke="#2C3B51"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <Path
                d="M147.073 92.1057C146.87 93.0515 147.394 93.8376 148.632 93.5689C148.898 93.5113 149.758 92.9082 149.758 92.6361C149.758 92.5178 149.81 92.8293 150 93.011C150.926 93.8936 152.339 92.9515 152.742 92.0874C152.817 91.9264 152.927 91.7404 152.912 91.5615C152.885 91.2456 152.474 90.9191 152.535 90.6104C152.59 90.3367 154.39 90.2497 154.688 89.8376C155.243 89.0693 154.405 88.1641 153.433 88.1641C153.222 88.1641 152.867 88.2731 152.669 88.3378C152.473 88.4022 152.225 88.7311 152.225 88.7311C152.225 88.7311 152.368 88.4029 152.416 88.2327C152.534 87.8159 152.388 87.35 152.091 87.0118C151.66 86.5209 150.716 86.9203 150.14 86.9203"
                stroke="#2C3B51"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <Path
                d="M190.903 66.6245C191.491 75.637 167.498 93.2456 167.498 93.2456C167.498 93.2456 156.397 101.181 156.397 106.82C156.397 110.956 156.855 119.351 156.397 123.466C156.266 124.638 156.08 129.143 155.139 129.478C153.028 130.231 153.569 130.081 151.521 129.478C148.469 128.58 145.817 126.815 145.817 123.466C145.817 120.665 145.743 117.988 145.404 115.204C144.713 109.542 142.63 102.965 144.415 97.3495C146.217 91.6776 148.827 87.1749 152.763 82.6619C156.056 78.886 160.381 74.2942 164.861 72.0594"
                stroke="#2C3B51"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <Path
                d="M131.174 89.8521C133.374 92.6115 136.123 93.9253 139.141 95.334C139.835 95.6577 143.962 97.1582 144.448 96.1388"
                stroke="#2C3B51"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <Path
                d="M145.185 96.4897C148.076 99.9058 152.87 102.135 157.095 103.515"
                stroke="#2C3B51"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <Path
                d="M142.674 9.07694C141.797 11.1634 141.599 12.4374 142.103 14.6958C142.629 17.0533 144 19.1482 144.317 21.5917C144.361 21.9313 144.355 24.1265 144.599 24.2646C144.915 24.4431 145.614 23.6689 145.897 23.5485C146.612 23.2445 148.094 26.0337 148.363 26.7042C149.182 28.7459 151.628 29.5193 153.564 29.2449C154.766 29.0746 155.687 29.1793 156.805 28.4113C157.833 27.7061 158.18 26.7784 158.774 25.7689C159.91 23.8385 160.402 21.2249 161.172 19.1175"
                stroke="#2C3B51"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <Path
                d="M144.144 14.9983C144.062 14.3823 144.067 13.9813 144.446 13.5275C144.677 13.251 145.219 12.8197 145.582 12.8998C146.169 13.0298 147.428 13.1673 148.02 12.8959C148.353 12.7432 148.086 13.1458 147.956 13.2602C147.734 13.4571 147.444 13.5387 147.199 13.6969C146.846 13.925 146.311 13.7515 145.927 13.9892C145.613 14.1841 145.476 14.6182 145.165 14.7847C144.855 14.9504 144.626 15.096 144.342 14.8225C144.21 14.6946 144.533 14.0695 144.635 13.9598C144.893 13.6856 145.192 13.5719 145.515 13.4342"
                stroke="#2C3B51"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <Path
                d="M145.923 17.5187C146.321 16.7781 146.526 16.2874 147.082 15.8048C147.78 15.1989 148.709 15.3746 149.44 15.2755"
                stroke="#2C3B51"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <Path
                d="M150.786 25.976C151.479 25.5477 152.091 25.1372 152.504 24.4444C152.813 23.9242 152.699 23.2249 153.023 22.6944"
                stroke="#2C3B51"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <Path
                d="M150.347 41.9209C150.812 40.7621 150.854 39.589 151.11 38.3927C151.359 37.2251 152.357 36.1528 152.847 35.044C153.441 33.7008 154.771 32.3132 154.771 30.8599"
                stroke="#2C3B51"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <Path
                d="M159.933 30.8612C160.649 29.928 161.06 29.0236 161.407 27.9116"
                stroke="#2C3B51"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <Path
                d="M150.347 44.9249L150.715 42.6587L176.156 55.5003L175.787 58.1442L160.302 49.4572L150.347 44.9249Z"
                fill="#EBD1B1"
              />
              <Path
                d="M145.658 124.109C142.495 125.989 141.779 125.117 138.431 124.499C135.943 124.039 137.084 123.386 136.894 121.123C136.209 112.968 132.929 105.335 132.011 97.1501C131.185 89.7875 129.78 82.9238 134.724 76.7133C136.829 74.0686 140.074 72.143 142.908 70.3986C145.811 68.6116 149.009 66.749 152.041 65.2091C155.455 63.4753 160.097 60.5961 160.564 56.3225C160.91 53.1645 160.44 51.9565 158.756 49.296C158.165 47.9441 157.131 45.2402 157.721 45.2402"
                stroke="#2C3B51"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <Path
                d="M141.802 10.5323C141.836 8.86569 142.416 8.8034 143.767 8.49636C145.763 8.04286 148.269 9.18455 150.062 9.89264C151.766 10.5651 153.792 11.5345 155.702 11.3435C156.616 11.2521 157.605 10.9382 158.276 10.2827C158.67 9.89779 158.794 9.81338 158.339 9.83024C157.852 9.84828 157.391 9.97065 156.888 9.97065C156.417 9.97065 155.467 10.0098 155.062 9.75223C154.697 9.51977 154.067 9.27673 153.658 9.1282C153.11 8.9288 152.57 8.56522 152.02 8.33255C150.983 7.89384 150.088 7.3348 148.994 7.02207C148.022 6.74437 147.047 6.76886 146.076 6.56964C144.989 6.3467 144.156 6.56168 143.237 7.16248C141.893 8.0409 141.983 9.19039 141.669 10.6025C141.501 11.3567 140.616 9.59132 140.569 9.34661C140.367 8.29621 140.459 6.88123 141.1 6.00801C142.438 4.18235 144.492 4.2139 146.568 4.2139C147.187 4.2139 147.785 4.35431 148.393 4.35431C149.118 4.35431 149.875 5.03877 150.515 5.33717C152.022 6.0404 153.103 7.0773 154.47 7.95813C155.475 8.60629 156.637 9.97065 157.949 9.97065"
                stroke="#2C3B51"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <Path
                d="M142.925 4.49488C145.856 2.37822 150.187 2.17777 153.066 4.41688C154.318 5.39087 155.551 6.44988 156.678 7.57607C157.231 8.12969 158.295 8.417 158.651 9.12836"
                stroke="#2C3B51"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <Path
                d="M160.195 15.5862C159.553 14.4561 159.519 13.5064 159.181 12.3256C159.002 11.6993 158.934 10.9581 158.651 10.3911"
                stroke="#2C3B51"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <Path
                d="M158.792 9.54932C159.672 10.48 160.47 11.9899 160.788 13.2623C160.903 13.7191 161.1 14.212 161.171 14.6742C161.25 15.1887 161.15 15.6429 161.319 16.1485"
                stroke="#2C3B51"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <Path
                d="M147.13 2.75329C148.86 2.28652 150.412 2.07866 152.103 2.78108C153.954 3.55006 155.72 4.64862 157.507 5.55947C158.202 5.91347 158.984 6.54902 159.785 6.62916C160.036 6.65419 161.172 6.92405 161.008 7.15705C160.677 7.62706 159.535 8.75463 158.883 8.75463"
                stroke="#2C3B51"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <Path
                d="M162.259 16.0046C162.259 15.2134 162.274 14.4203 162.259 13.6291C162.242 12.7001 161.9 11.6736 161.745 10.7465C161.599 9.8686 161.045 8.89616 160.259 8.50293"
                stroke="#2C3B51"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <Path
                d="M140.504 7.00409C140.818 6.19231 140.998 5.00952 141.629 4.37851C142.562 3.44612 143.445 2.60063 144.56 1.87795C145.807 1.07016 147.493 1.0866 148.916 1.0097C150.334 0.933031 151.489 1.32697 152.861 1.62095C155.018 2.08325 156.802 4.08788 158.522 5.33011C159.133 5.77136 159.712 6.39082 160.383 6.72625C160.694 6.88159 161.072 6.88118 161.259 7.25415"
                stroke="#2C3B51"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <Path
                d="M161.258 7.25537C161.675 8.33488 162.133 9.84885 162.133 11.0062"
                stroke="#2C3B51"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <Path
                d="M152.589 35.8206C153.828 33.8516 153.901 32.0836 154.214 29.8168C155.666 29.4982 157.343 28.7245 157.99 27.2681C158.626 25.8378 159.583 24.2912 159.868 22.7265C160.121 21.3322 161.196 20.1519 161.588 18.7827C161.698 18.3977 162.164 18.0705 162.374 17.7338C162.745 17.1407 163.494 18.4747 163.748 18.6778C164.156 19.0036 164.379 19.5915 164.787 19.9994C165.748 20.9608 166.562 22.057 167.724 22.8313C169.802 24.2167 171.867 25.2494 174.108 26.3697L174.227 26.429C177.258 27.9445 180.465 29.3747 183.362 31.1384C185.876 32.6685 187.713 35.5686 188.649 38.3022C190.31 43.1585 191.272 48.2393 193.001 53.0808C193.797 55.3083 194.327 57.5957 195.015 59.8565C195.752 62.2786 196.313 64.923 197.26 67.2616C198.202 69.5886 198.648 72.0971 199.442 74.4778C200.216 76.8002 201.643 79.1333 203.113 81.0228C203.905 82.0418 208.292 85.2987 205.945 86.6028C205.304 86.9584 204.465 86.8616 203.752 86.8231C202.995 86.7821 201.148 86.8089 200.574 86.2672C199.765 85.5024 198.97 84.955 198.477 83.8967C198.09 83.0676 197.879 82.1526 197.554 81.2955C197.197 80.356 196.613 79.5349 196.274 78.5894C195.66 76.8797 194.921 75.3076 194.25 73.6282C193.704 72.2646 193.505 70.7849 192.729 69.5062C192.364 68.9061 192.277 68.2691 191.89 67.6602C191.639 67.2665 191.036 66.3097 191.036 65.847C191.036 66.7111 190.403 67.4644 190.403 68.3082C190.403 69.1356 189.87 70.3309 189.454 71.033C189.346 71.2152 188.925 72.4736 188.891 72.4834C187.665 72.8336 186.075 72.474 184.848 72.2548C183.155 71.9525 181.499 72.0313 179.802 71.6132C178.112 71.1968 176.353 71.1786 174.669 70.7518C172.991 70.3263 171.159 70.13 169.527 69.5651C168.462 69.1966 167.608 68.5861 166.67 67.9829C165.818 67.4352 164.763 66.9824 164.016 66.2865C163.139 65.4701 162.045 64.8607 161.212 64.0275C160.719 63.5347 159.952 63.3418 159.585 62.6826C159.318 62.2007 158.707 61.3375 158.953 60.784C159.489 59.5771 160.658 58.2869 160.658 56.9076C160.658 55.2413 160.71 53.202 159.851 51.6146C159.8 52.2979 159.436 53.4276 159.392 53.5411C158.606 55.5929 157.75 57.6248 157.054 59.7116C156.762 60.5882 156.911 61.4605 156.861 62.3662C156.804 63.376 154.696 63.9021 153.977 64.1417C152.284 64.7063 150.766 65.7076 149.143 66.3568C148.807 66.4912 148.392 66.8358 148.123 67.0776C147.667 67.4884 147.842 66.4359 147.842 66.2162C147.842 64.6564 147.769 63.0858 147.965 61.5399C148.095 60.5171 148.139 59.3538 148.159 58.3228C148.179 57.2353 148.453 56.1217 148.598 55.0354C148.807 53.4708 148.661 51.919 148.914 50.3416C149.37 47.5064 150.113 44.6319 150.215 41.7626C150.29 39.6712 151.496 37.5568 152.589 35.8206Z"
                fill="#FDFDF7"
              />
              <Path
                d="M154.214 29.8168C153.901 32.0836 153.828 33.8516 152.589 35.8206C151.496 37.5568 150.29 39.6712 150.215 41.7626C150.113 44.6319 149.37 47.5064 148.914 50.3416C148.661 51.919 148.807 53.4708 148.598 55.0354C148.453 56.1217 148.179 57.2353 148.159 58.3228C148.139 59.3538 148.095 60.5171 147.965 61.5399C147.769 63.0858 147.842 64.6564 147.842 66.2162C147.842 66.4359 147.667 67.4884 148.123 67.0776C148.392 66.8358 148.807 66.4912 149.143 66.3568C150.766 65.7076 152.284 64.7063 153.977 64.1417C154.696 63.9021 156.804 63.376 156.861 62.3662C156.911 61.4605 156.762 60.5882 157.054 59.7116C157.75 57.6248 158.606 55.5929 159.392 53.5411C159.459 53.3657 160.293 50.7613 159.55 51.1327C160.721 52.7717 160.658 55.0671 160.658 56.9076C160.658 58.2869 159.489 59.5771 158.953 60.784C158.707 61.3375 159.318 62.2007 159.585 62.6826C159.952 63.3418 160.719 63.5347 161.212 64.0275C162.045 64.8607 163.139 65.4701 164.016 66.2865C164.763 66.9824 165.818 67.4352 166.67 67.9829C167.608 68.5861 168.462 69.1966 169.527 69.5651C171.159 70.13 172.991 70.3263 174.669 70.7518C176.353 71.1786 178.112 71.1968 179.802 71.6132C181.499 72.0313 183.155 71.9525 184.848 72.2548C186.075 72.474 187.665 72.8336 188.891 72.4834C188.925 72.4736 189.346 71.2152 189.454 71.033C189.87 70.3309 190.403 69.1356 190.403 68.3082C190.403 67.4644 191.036 66.7111 191.036 65.847C191.036 66.3097 191.639 67.2665 191.89 67.6602C192.277 68.2691 192.364 68.9061 192.729 69.5062C193.505 70.7849 193.704 72.2646 194.25 73.6282C194.921 75.3076 195.66 76.8797 196.274 78.5894C196.613 79.5349 197.197 80.356 197.554 81.2955C197.879 82.1527 198.09 83.0676 198.477 83.8967C198.97 84.955 199.765 85.5024 200.574 86.2672C201.148 86.8089 202.995 86.7821 203.752 86.8231C204.465 86.8616 205.304 86.9584 205.945 86.6028C208.292 85.2987 203.905 82.0418 203.113 81.0228C201.643 79.1333 200.216 76.8002 199.442 74.4778C198.648 72.0971 198.202 69.5886 197.26 67.2616C196.313 64.923 195.752 62.2786 195.015 59.8565C194.327 57.5957 193.797 55.3083 193.001 53.0808C191.272 48.2393 190.31 43.1585 188.649 38.3022C187.713 35.5686 185.876 32.6685 183.362 31.1384C180.465 29.3747 177.258 27.9445 174.227 26.429L174.108 26.3697C171.867 25.2494 169.802 24.2167 167.724 22.8313C166.562 22.057 165.748 20.9608 164.787 19.9994C164.379 19.5915 164.156 19.0036 163.748 18.6778C163.494 18.4747 162.745 17.1407 162.374 17.7338C162.164 18.0705 161.698 18.3977 161.588 18.7827C161.196 20.1519 160.121 21.3322 159.868 22.7265C159.583 24.2912 158.626 25.8378 157.99 27.2681C157.343 28.7245 155.666 29.4982 154.214 29.8168Z"
                stroke="#2C3B51"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <Path
                d="M157.549 44.8291C157.718 45.8509 157.876 46.854 158.342 47.7866C158.45 48.002 158.526 48.2196 158.61 48.4449C158.715 48.7276 158.894 48.9822 158.981 49.2702C159.06 49.5333 159.114 49.7881 159.227 50.0415C159.5 50.6558 159.797 51.2348 159.892 51.9034"
                stroke="#2C3B51"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <Path
                d="M179.294 39.5713C180.338 42.0804 181.519 44.4441 182.7 46.8732C183.299 48.1045 183.799 49.3521 184.146 50.677C184.527 52.1323 185.406 53.3991 185.98 54.7767C186.441 55.8836 186.98 57.009 187.504 58.0857C188.174 59.4652 188.812 60.9097 189.406 62.3261C189.637 62.8788 189.836 63.4106 190.128 63.9369C190.38 64.39 190.746 64.8285 190.89 65.3342C190.976 65.6341 191.175 66.0378 191.346 66.2949"
                stroke="#2C3B51"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <Path
                d="M160.606 58.2607C161.569 59.1512 162.757 59.6909 163.75 60.5314C164.264 60.966 164.819 61.338 165.371 61.7201C165.817 62.0287 166.165 62.3836 166.676 62.5837C167.721 62.9927 168.636 63.6775 169.694 64.0683C171.564 64.7596 173.424 65.3731 175.366 65.8586C176.764 66.2083 178.232 66.3425 179.664 66.4894C180.536 66.5788 181.363 66.8851 182.245 66.9066C183.098 66.9274 183.942 67.0744 184.797 67.0813C186.087 67.0916 187.364 67.0137 188.64 66.8193C189.22 66.7309 190.004 66.4699 190.561 66.4699"
                stroke="#2C3B51"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <Path
                d="M134.016 120.975C132.004 122.145 131.098 122.613 131.153 125.147C131.189 126.775 132.462 127.246 133.604 127.972C134.425 128.495 135.211 128.31 136.13 128.468C137.436 128.693 138.319 129.132 139.498 129.637C140.591 130.106 141.618 130.068 142.772 130.068C143.602 130.068 143.636 130.194 144.212 130.826C145.615 132.362 146.185 133.943 148.254 134.792C149.678 135.376 150.935 135.761 152.482 135.54C154.151 135.302 155.584 135.408 157.215 135.587C159.16 135.8 161.545 135.223 161.631 132.837C161.664 131.897 161.598 130.921 161.21 130.058C160.886 129.338 160.791 128.08 160.966 127.289C161.063 126.857 161.317 126.122 160.789 125.858"
                stroke="#2C3B51"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <Path
                d="M133.174 116.935C132.63 117.212 132.169 117.569 131.649 117.861C130.828 118.323 129.793 118.229 128.889 118.366C128.131 118.481 127.141 118.44 126.541 119.04C125.427 120.154 124.474 121.874 125.802 123.203C126.572 123.972 127.208 124.306 127.449 125.448C127.708 126.68 127.413 127.588 128.291 128.563C129.337 129.726 130.379 130.806 131.658 131.715C132.3 132.171 133.09 132.051 133.829 132.127C134.721 132.218 135.552 132.411 136.373 132.763"
                stroke="#2C3B51"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <Path
                d="M167.86 127.375C167.46 130.287 170.696 134.93 167.579 137.047C165.639 138.366 163.46 138.042 161.256 138.357C160.171 138.512 159.816 138.794 158.926 139.395C157.577 140.308 156.177 139.846 154.726 139.498"
                stroke="#2C3B51"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <Path
                d="M129.132 108.347C127.36 109.272 124.869 108.835 122.921 108.852C121.242 108.867 119.356 110.565 118.879 112.164C118.59 113.135 118.227 114.444 118.187 115.457C118.162 116.088 118.497 116.715 118.243 117.337C117.974 117.997 116.99 118.207 116.503 118.693C115.776 119.421 115.267 120.334 114.988 121.313"
                stroke="#2C3B51"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <Path
                d="M178.637 130.573C178.637 132.762 178.84 134.889 178.047 136.962C177.399 138.658 175.872 139.673 174.306 140.442C173.342 140.915 172.403 141.386 171.406 141.78C170.555 142.115 169.904 142.79 169.076 143.164C168.036 143.634 167.157 145.179 166.513 146.064"
                stroke="#2C3B51"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <Path
                d="M185.035 143.538C183.965 144.839 182.803 146.19 181.163 146.737"
                stroke="#2C3B51"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </Svg>

            <Text style={styles.header}>Reflect</Text>
            <View
              style={{
                marginLeft: 30,
                marginRight: 30,
                height: 1,
                backgroundColor: "#868D91",
                marginBottom: 20
              }}
            >
              <View style={{}}></View>
            </View>
            <View style={styles.bottom}>
              {ExercicesArray.map((item, key) => (
                <ExerciceButton
                  key={key}
                  onPress={() => {
                    {
                      this.props.navigation.navigate(item.path);
                    }
                  }}
                  style={item.styleButton}
                  disabled={
                    item.state === "locked" || item.state === undefined
                      ? true
                      : false
                  }
                >
                  <Text style={item.styleText}>{item.label}</Text>
                  <Image
                    style={
                      item.state === "locked" ||
                      item.state === "completed" ||
                      item.state === "DONE" ||
                      item.state === undefined
                        ? styles.exercice_button_icon_locked
                        : styles.exercice_button_icon
                    }
                    source={item.IconSource}
                  />
                </ExerciceButton>
              ))}
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 10,
    flex: 1,
    alignItems: "center",
    alignSelf: "stretch"
  },
  container_scroll: {
    paddingTop: 80,
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 40,
    flex: 1,
    alignSelf: "stretch"
  },
  center: {
    position: "relative",
    top: 0,
    left: 0
  },
  top: {
    flex: 1,
    justifyContent: "flex-start",
    alignSelf: "stretch"
  },
  middle: {
    justifyContent: "center",
    alignSelf: "stretch"
  },
  inline: {
    flex: 1,
    flexDirection: "row-reverse",
    justifyContent: "flex-end",
    alignSelf: "stretch",
    paddingTop: 20
  },
  bottom: {
    flex: 1,
    paddingLeft: 30,
    paddingRight: 30,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
    //height: Dimensions.get("window").height / 2,
    position: "relative",
    bottom: 0,
    width: Dimensions.get("window").width
  },
  keyboard_view: {
    flex: 1
  },
  header: {
    color: "#2C3B51",
    fontSize: 30,
    lineHeight: 37,
    textAlign: "left",
    fontFamily: "roboto-black",
    paddingTop: 20,
    paddingBottom: 10,
    paddingLeft: 30,
    paddingRight: 30
  },
  header_left: {
    color: "#2C3B51",
    fontSize: 30,
    lineHeight: 37,
    textAlign: "left",
    fontFamily: "roboto-black",
    paddingTop: 30,
    alignSelf: "stretch"
  },
  text: {
    color: "#2C3B51",
    fontSize: 19,
    lineHeight: 25,
    textAlign: "center",
    fontFamily: "roboto-regular"
  },
  text_left: {
    color: "#2C3B51",
    fontSize: 19,
    lineHeight: 25,
    textAlign: "left",
    fontFamily: "roboto-regular",
    alignSelf: "stretch",
    paddingBottom: 30
  },
  text_scroll: {
    color: "#2C3B51",
    fontSize: 19,
    lineHeight: 25,
    textAlign: "left",
    fontFamily: "roboto-regular"
  },
  codeInput: {
    marginTop: 43,
    alignSelf: "stretch",
    textAlign: "center",
    height: 40,
    fontSize: 19,
    borderBottomWidth: 2
  },
  usernameInput: {
    marginTop: 43,
    marginBottom: 43,
    alignSelf: "stretch",
    textAlign: "center",
    height: 40,
    fontSize: 19,
    borderBottomWidth: 2
  },
  exercice_button_icon: {
    top: "50%",
    marginTop: 6,
    right: 20,
    position: "absolute"
  },
  exercice_button_icon_locked: {
    top: "50%",
    marginTop: -6,
    right: 20,
    position: "absolute"
  },
  completed: {
    backgroundColor: "transparent",
    borderWidth: 2,
    borderColor: "transparent",
    borderRadius: 12,
    padding: 15,
    flexDirection: "row",
    alignSelf: "stretch",
    justifyContent: "space-between",
    marginBottom: 15,
    paddingTop: 0,
    paddingBottom: 0
  },
  text_completed: {
    color: "#2C3B51",
    fontSize: 17,
    lineHeight: 23,
    textAlign: "left",
    fontFamily: "roboto-regular",
    textTransform: "capitalize",
    letterSpacing: 1,
    alignSelf: "stretch",
    letterSpacing: 1,
    paddingRight: 40,
    paddingLeft: 5,
    marginLeft: 0
  },
  next: {
    backgroundColor: "#F6B563",
    borderWidth: 2,
    borderColor: "#F6B563",
    borderRadius: 12,
    overflow: "hidden",
    padding: 15,
    flexDirection: "row",
    alignSelf: "stretch",
    justifyContent: "space-between",
    marginBottom: 15
  },
  text_next: {
    color: "#FFFFFF",
    fontSize: 17,
    lineHeight: 23,
    textAlign: "left",
    fontFamily: "roboto-medium",
    textTransform: "capitalize",
    alignSelf: "stretch",
    letterSpacing: 1,
    paddingRight: 40,
    paddingLeft: 5,
    marginLeft: 0
  },
  new: {
    backgroundColor: "transparent",
    borderWidth: 2,
    borderColor: "#F6B563",
    borderRadius: 12,
    overflow: "hidden",
    padding: 15,
    flexDirection: "row",
    alignSelf: "stretch",
    justifyContent: "space-between",
    marginBottom: 15
  },
  text_new: {
    color: "#F6B563",
    fontSize: 17,
    lineHeight: 23,
    textAlign: "left",
    fontFamily: "roboto-medium",
    textTransform: "capitalize",
    alignSelf: "stretch",
    letterSpacing: 1,
    paddingRight: 40,
    paddingLeft: 5,
    marginLeft: 0
  },
  locked: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderTopColor: "transparent",
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "rgba(44, 59, 81, 0.3)",
    borderRadius: 0,
    overflow: "hidden",
    padding: 15,
    flexDirection: "row",
    alignSelf: "stretch",
    justifyContent: "space-between",
    marginBottom: 15,
    paddingTop: 0
  },
  text_locked: {
    color: "rgba(44, 59, 81, 0.3)",
    fontSize: 17,
    lineHeight: 23,
    textAlign: "left",
    fontFamily: "roboto-regular",
    textTransform: "capitalize",
    alignSelf: "stretch",
    letterSpacing: 1,
    paddingRight: 40,
    paddingLeft: 5,
    marginLeft: 0
  }
});

const mapStateToProps = state => ({
  user: state.user,
  exercices: state.exercices
});

export default connect(mapStateToProps)(ReflectScreen);
