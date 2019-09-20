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
import HeaderTabBar from "./../../components/HeaderTabBar";
import { Svg, Path, Circle } from "react-native-svg";

import { connect } from "react-redux";

class ObserveScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nickname: this.props.user.nickname || "",
      exercice_state_1: this.props.exercices.exercice_state_1 || "",
      exercice_state_2: this.props.exercices.exercice_state_2 || "",
      exercice_state_3: this.props.exercices.exercice_state_3 || "",
      exercice_state_4: this.props.exercices.exercice_state_4 || "",
      exercice_state_PM1: this.props.exercices.exercice_state_PM1 || ""
    };
  }

  render() {
    const buttonProps = {
      width: Dimensions.get("window").width
    };
    let ExerciceTextStyle_1 = "";
    let ExerciceStyle_1 = "";

    switch (this.props.exercices.exercice_state_1) {
      case "DONE":
        ExerciceTextStyle_1 = styles.text_completed;
        ExerciceStyle_1 = styles.completed;
        IconsExercice_1 = require("./../../assets/images/checkmark_observe.png");
        break;
      case "completed":
        ExerciceTextStyle_1 = styles.text_completed;
        ExerciceStyle_1 = styles.completed;
        IconsExercice_1 = require("./../../assets/images/checkmark_observe.png");
        break;
      case "next":
        ExerciceTextStyle_1 = styles.text_next;
        ExerciceStyle_1 = styles.next;
        IconsExercice_1 = require("./../../assets/images/nextmark.png");
        break;
      case "new":
        ExerciceTextStyle_1 = styles.text_new;
        ExerciceStyle_1 = styles.new;
        IconsExercice_1 = require("./../../assets/images/newmark_observe.png");
        break;
      default:
        ExerciceTextStyle_1 = styles.text_locked;
        ExerciceStyle_1 = styles.locked;
        IconsExercice_1 = require("./../../assets/images/lockmark.png");
    }

    let ExerciceTextStyle_2 = "";
    let ExerciceStyle_2 = "";

    switch (this.props.exercices.exercice_state_2) {
      case "DONE":
        ExerciceTextStyle_2 = styles.text_completed;
        ExerciceStyle_2 = styles.completed;
        IconsExercice_2 = require("./../../assets/images/checkmark_observe.png");
        break;
      case "completed":
        ExerciceTextStyle_2 = styles.text_completed;
        ExerciceStyle_2 = styles.completed;
        IconsExercice_2 = require("./../../assets/images/checkmark_observe.png");
        break;
      case "next":
        ExerciceTextStyle_2 = styles.text_next;
        ExerciceStyle_2 = styles.next;
        IconsExercice_2 = require("./../../assets/images/nextmark.png");
        break;
      case "new":
        ExerciceTextStyle_2 = styles.text_new;
        ExerciceStyle_2 = styles.new;
        IconsExercice_2 = require("./../../assets/images/newmark_observe.png");
        break;
      default:
        ExerciceTextStyle_2 = styles.text_locked;
        ExerciceStyle_2 = styles.locked;
        IconsExercice_2 = require("./../../assets/images/lockmark.png");
    }

    let ExerciceTextStyle_3 = "";
    let ExerciceStyle_3 = "";

    switch (this.props.exercices.exercice_state_3) {
      case "DONE":
        ExerciceTextStyle_3 = styles.text_completed;
        ExerciceStyle_3 = styles.completed;
        IconsExercice_3 = require("./../../assets/images/checkmark_observe.png");
        break;
      case "completed":
        ExerciceTextStyle_3 = styles.text_completed;
        ExerciceStyle_3 = styles.completed;
        IconsExercice_3 = require("./../../assets/images/checkmark_observe.png");
        break;
      case "next":
        ExerciceTextStyle_3 = styles.text_next;
        ExerciceStyle_3 = styles.next;
        IconsExercice_3 = require("./../../assets/images/nextmark.png");
        break;
      case "new":
        ExerciceTextStyle_3 = styles.text_new;
        ExerciceStyle_3 = styles.new;
        IconsExercice_3 = require("./../../assets/images/newmark_observe.png");
        break;
      default:
        ExerciceTextStyle_3 = styles.text_locked;
        ExerciceStyle_3 = styles.locked;
        IconsExercice_3 = require("./../../assets/images/lockmark.png");
    }

    let ExerciceTextStyle_4 = "";
    let ExerciceStyle_4 = "";

    switch (this.props.exercices.exercice_state_4) {
      case "DONE":
        ExerciceTextStyle_4 = styles.text_completed;
        ExerciceStyle_4 = styles.completed;
        IconsExercice_4 = require("./../../assets/images/checkmark_observe.png");
        break;
        case "completed":
        ExerciceTextStyle_4 = styles.text_completed;
        ExerciceStyle_4 = styles.completed;
        IconsExercice_4 = require("./../../assets/images/checkmark_observe.png");
        break;
      case "next":
        ExerciceTextStyle_4 = styles.text_next;
        ExerciceStyle_4 = styles.next;
        IconsExercice_4 = require("./../../assets/images/nextmark.png");
        break;
      case "new":
        ExerciceTextStyle_4 = styles.text_new;
        ExerciceStyle_4 = styles.new;
        IconsExercice_4 = require("./../../assets/images/newmark_observe.png");
        break;
      default:
        ExerciceTextStyle_4 = styles.text_locked;
        ExerciceStyle_4 = styles.locked;
        IconsExercice_4 = require("./../../assets/images/lockmark.png");
    }

    let ReflectionTextStyle_1 = "";
    let ReflectionStyle_1 = "";

    switch (this.props.exercices.exercice_state_PM1) {
      case "completed":
        ReflectionTextStyle_1 = styles.text_completed;
        ReflectionStyle_1 = styles.completed;
        IconsReflection_1 = require("./../../assets/images/checkmark_observe.png");
        break;
      case "next":
        ReflectionTextStyle_1 = styles.text_next;
        ReflectionStyle_1 = styles.next;
        IconsReflection_1 = require("./../../assets/images/nextmark.png");
        break;
      case "new":
        ReflectionTextStyle_1 = styles.text_new;
        ReflectionStyle_1 = styles.new;
        IconsReflection_1 = require("./../../assets/images/newmark_observe.png");
        break;
      default:
        ReflectionTextStyle_1 = styles.text_locked;
        ReflectionStyle_1 = styles.locked;
        IconsReflection_1 = require("./../../assets/images/lockmark.png");
    }

    var ExercicesArray = [
      {
        id: 1,
        path: "Intro_Phase_Observe",
        label: "Day 1 - Contenance",
        styleButton: ExerciceStyle_1,
        styleText: ExerciceTextStyle_1,
        IconSource: IconsExercice_1,
        state: this.props.exercices.exercice_state_1
      },
      {
        id: 2,
        path: "Exercice_2_Intro",
        label: "Day 2 - Notice Your Impulses",
        styleButton: ExerciceStyle_2,
        styleText: ExerciceTextStyle_2,
        IconSource: IconsExercice_2,
        state: this.props.exercices.exercice_state_2
      },
      {
        id: 3,
        path: "Exercice_3_Intro",
        label: "Day 3 - Solution Triangle",
        styleButton: ExerciceStyle_3,
        styleText: ExerciceTextStyle_3,
        IconSource: IconsExercice_3,
        state: this.props.exercices.exercice_state_3
      },
      {
        id: 4,
        path: "Exercice_4_Intro",
        label: "Day 4 - Keep Breathing",
        styleButton: ExerciceStyle_4,
        styleText: ExerciceTextStyle_4,
        IconSource: IconsExercice_4,
        state: this.props.exercices.exercice_state_4
      },
      {
        id: 5,
        path: "Intro_Screen_PM1",
        label: "Module Reflection",
        styleButton: ReflectionStyle_1,
        styleText: ReflectionTextStyle_1,
        IconSource: IconsReflection_1,
        state: this.props.exercices.exercice_state_PM1
      }
    ];

    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <ScrollView>
          <View style={{ flex: 1, paddingTop: 0 }}>
            <Svg
              width={buttonProps.width}
              height={"198"}
              viewBox={"0 0 363 198"}
              fill="none"
            >
              <Path
                d="M107.562 33.7002C106.133 37.3635 108.463 41.1299 111.728 42.9954C114.634 44.6559 116.211 47.8972 117.408 50.7415C118.191 52.6009 117.787 55.7184 117.787 57.7301C117.787 60.6431 119.026 63.3398 119.026 66.2335C119.026 68.641 119.646 71.6362 120.197 73.9795C120.824 76.6458 122.364 78.3308 123.674 80.6239C124.079 81.333 125.139 81.763 125.55 82.5173C126.165 83.6442 127.144 84.8307 128.012 85.7706C129.424 87.3006 130.382 89.2833 131.73 90.7109C132.743 91.7835 129.875 93.6695 132.35 94.9798C133.091 95.3725 133.562 96.1206 134.277 96.5978C136.094 97.8087 137.908 99.3351 139.596 100.763C142.912 103.569 147.658 105.876 151.68 107.563C153.18 108.192 154.61 108.852 156.052 109.611C157.423 110.333 159.058 110.921 160.304 111.78C169.264 117.96 177.742 124.452 187.949 128.511C190.702 129.607 195.525 129.883 197.416 132.471C199.263 134.998 200.993 137.664 202.838 140.268C205.508 144.038 209.074 147.232 212.925 149.736C217.264 152.555 221.559 155.393 226.679 156.638C228.244 157.019 229.92 157.853 231.499 157.946C232.468 158.003 233.975 160.128 234.838 160.735C236.562 161.948 240.141 166.345 242.188 164.298C245.786 160.7 236.395 154.512 234.115 153.144C231.696 151.692 229.07 150.708 226.541 149.443C224.548 148.446 222.636 147.205 220.654 146.103C218.841 145.096 216.943 142.021 216.075 140.285C214.468 137.071 212.015 134.471 209.655 131.748C208.273 130.153 205.782 127.168 205.782 124.948C205.782 124.224 205.558 123.472 206.247 123.089C206.823 122.769 208.102 123.248 208.57 123.692C210.997 125.99 214.253 129.638 217.866 127.513C219.15 126.757 218.802 124.2 220.964 125.344C222.95 126.395 223.133 124.955 223.133 123.089C223.133 121.276 223.733 119.866 224.045 118.149C224.303 116.729 225.612 115.263 225.612 113.949C225.612 111.091 217.759 114.754 216.179 115.206C215.609 115.368 215.032 115.684 214.32 115.481C213.716 115.308 213.906 112.985 213.597 112.4C212.477 110.285 209.81 113.725 209.81 115.033C209.81 116.695 205.96 116.18 205.472 115.326C204.914 114.35 202.511 112.122 203.613 111.539C205.361 110.614 202.897 108.155 202.442 107.132C201.617 105.276 204.371 103.418 202.236 101.865C201.401 101.258 201.058 100.454 200.05 100.006C198.943 99.5141 197.825 98.8657 196.969 98.0093C196.004 97.0452 194.593 96.6745 193.698 95.6511C192.241 93.9866 190.397 92.1231 188.798 90.5233C185.325 87.0505 176.847 78.1055 173.984 74.0632C171.434 70.4635 170.991 68.8649 167.635 66.0683C166.269 64.9303 167.19 69.8479 167.19 70.7843C167.19 72.8328 166.488 69.9095 167.635 71.7117C169.264 74.2716 167.355 73.4393 170.456 74.7686C172.398 75.6007 178.765 86.2181 179.927 87.9223C181.141 89.703 182.565 91.5183 183.938 93.1896C184.554 93.9396 190.024 99.6518 189.36 100.316C188.381 101.295 186.777 99.3069 185.952 98.8356C184.225 97.8486 182.467 97.1552 180.685 96.288C176.584 94.293 171.901 92.1524 168.635 88.8863C166.353 86.6044 163.392 85.1129 161.096 82.896C158.779 80.6592 155.978 80.6851 153.126 79.4017C151.418 78.633 149.652 78.5412 147.842 78.1451C145.976 77.7371 144.233 76.8517 142.385 76.441C139.26 75.7465 136.324 73.8804 133.348 72.809C131.99 72.3202 130.089 71.4734 129.01 70.5024C127.671 69.2974 126.153 67.0251 126.153 65.1835C126.153 61.6229 125.107 58.4167 124.294 54.9587C123.535 51.7352 122.177 48.2139 123.123 44.7856C123.903 41.9587 119.235 38.9808 117.012 38.038C113.787 36.6696 110.664 34.9415 107.562 33.3904"
                stroke="#2C3B51"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <Path
                d="M119.921 74.4972C117.688 73.4036 116.276 72.6162 114.501 70.7996C112.187 68.4315 110.108 65.5365 107.435 63.5565C105.255 61.9412 103.376 59.5481 101.458 57.6303C100.283 56.4549 98.6329 54.4816 97.0138 53.9834C95.1651 53.4146 93.1621 52.6159 91.2015 52.6159C90.5531 52.6159 90.0893 52.0778 89.5047 51.8561C88.8934 51.6242 88.1977 51.45 87.5673 51.2609C86.8905 51.0579 86.3258 50.8328 85.7312 50.4505C84.2677 49.5097 85.4935 48.3544 86.1871 47.4874C87.0792 46.3723 89.6118 48.0171 90.695 48.0573C93.8155 48.1728 96.9434 49.022 100.091 49.1969C101.082 49.252 101.56 49.9379 101.965 50.7924C102.57 52.0695 102.307 52.7808 103.396 53.8695C104.437 54.9105 106.228 55.5638 107.486 56.364C108.895 57.261 110.573 57.6241 111.969 58.5547C112.811 59.1166 114.246 59.6743 115.248 59.897C116.239 60.1172 116.709 60.9663 117.641 61.2772"
                stroke="#2C3B51"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <Path
                d="M131.089 72.2179C132.165 72.8743 133.597 73.8312 134.381 74.8391C135.021 75.6614 135.408 76.525 136.331 77.1184C137.516 77.8801 138.393 79.0839 139.497 79.9422C140.579 80.7839 141.67 81.4898 142.853 82.1582C148.614 85.4145 145.326 84.1258 151.174 86.7611"
                stroke="#2C3B51"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <Path
                d="M149.096 78.144C147.473 79.0941 144.355 80.6383 144.355 82.7636"
                stroke="#2C3B51"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <Path
                d="M142.03 82.2468C138.975 83.0261 135.073 84.8915 133.546 87.9451C132.868 89.3015 132.083 90.9513 131.773 92.5037"
                stroke="#2C3B51"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <Path
                d="M157.825 110.016C158.682 105.388 161.611 101.601 164.616 98.1452C166.087 96.4529 167.829 95.199 169.703 93.9999C170.347 93.5878 171.058 93.3595 171.73 92.9975C172.105 92.7955 172.551 92.8725 172.884 92.6508"
                stroke="#2C3B51"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <Path
                d="M225.228 114.706C225.228 113.209 225.696 112.053 226.302 110.706C226.626 109.986 227.054 109.244 227.089 108.44C227.138 107.325 227.332 106.365 227.01 105.251C226.598 103.828 225.404 102.907 224.274 102.014C223.054 101.051 221.489 100.393 220.012 99.9708C219.175 99.7316 218.484 98.9061 217.897 98.2929C217.661 98.0471 216.201 95.988 216.712 97.1796C216.93 97.6899 217.213 98.182 217.388 98.7064C217.681 99.5859 218.465 100.724 218.501 101.649C218.563 103.259 216.976 100.746 216.64 100.392C215.485 99.1765 214.134 97.7017 213.491 96.13C213.391 95.8844 213.356 95.5521 213.205 95.3348C213.109 95.1974 212.859 95.8419 212.783 95.955C212.497 96.3842 212.499 96.9245 212.314 97.3864C212.108 97.9031 211.993 98.4719 211.909 99.0165C211.887 99.1582 211.803 100.013 211.742 100.074C211.228 100.588 209.949 96.5254 210.056 99.4221C210.079 100.04 210.449 101.069 209.452 100.392C208.667 99.8598 208.2 99.3625 207.702 98.5474C207.461 98.1528 207.358 97.6816 207.161 98.2134C206.756 99.3067 206.476 100.397 206.159 101.537C206.09 101.787 205.932 102.499 205.818 102.372C205.361 101.865 205.286 100.814 204.728 100.424C204.537 100.29 203.934 101.818 203.79 101.999C203.714 102.093 203.615 102.766 203.615 102.897C203.615 103.68 203.028 104.071 202.47 104.543"
                stroke="#2C3B51"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <Path
                d="M222.571 117.994C221.672 117.964 220.799 117.686 219.918 117.515C219.415 117.417 219.143 117.87 219.361 118.25C219.753 118.936 220.793 118.404 221.345 118.574C221.719 118.689 222.317 119.057 222.727 118.875C223.209 118.661 222.521 118.345 222.321 118.301C221.909 118.209 221.446 118.276 221.022 118.195C220.702 118.134 220.235 117.712 219.963 117.894"
                stroke="#2C3B51"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <Path
                d="M219.16 119.8C220.11 119.8 221.655 119.481 222.27 120.402"
                stroke="#2C3B51"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <Path
                d="M220.866 120.001C220.811 120.076 220.457 120.45 220.587 120.58C220.652 120.645 220.854 120.603 220.911 120.547C221.122 120.335 220.886 120.101 220.665 120.101"
                stroke="#2C3B51"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <Path
                d="M216.25 125.218C216.371 125.509 216.548 126.069 216.852 126.221"
                stroke="#2C3B51"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <Path
                d="M187.566 100.117C188.658 100.663 189.831 101.451 191.034 101.725C191.881 101.917 192.79 102.101 193.606 102.391C195.08 102.915 196.916 103.718 198.476 103.838C199.094 103.886 199.711 104.458 200.382 104.458C200.808 104.458 202.073 104.947 202.242 105.285"
                stroke="#2C3B51"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <Path
                d="M208.152 120.23C208.152 121.141 208.125 122.016 208.334 122.906C208.468 123.474 208.931 123.856 209.245 124.327"
                stroke="#2C3B51"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <Path
                d="M224.943 116.172C224.176 115.86 223.483 115.389 222.74 115.024C222.274 114.795 221.735 114.631 221.294 114.351C220.875 114.084 220.435 113.801 219.982 113.594C219.112 113.195 218.302 112.783 217.328 113.035C216.254 113.314 215.037 113.551 214.417 114.584C213.798 115.616 213.342 116.801 212.998 117.946C212.851 118.439 212.732 118.956 212.761 119.476C212.799 120.157 213.43 120.668 213.882 121.113C215.12 122.332 216.807 122.971 218.387 123.576C219.791 124.114 221.045 125.061 222.465 125.535"
                stroke="#2C3B51"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <Path
                d="M222.809 124.502C222.327 124.409 221.836 124.193 221.417 123.936C220.935 123.64 220.564 123.157 220.04 122.918C219.794 122.807 219.599 122.646 219.397 122.471C219.185 122.287 218.904 122.236 218.678 122.077C218.212 121.749 217.608 121.503 217.095 121.251C216.253 120.838 215.462 120.425 214.7 119.889C213.785 119.245 214.314 117.939 214.781 117.185C215.096 116.675 215.366 116.151 215.649 115.625C215.811 115.324 216.339 114.587 216.647 114.45C217.048 114.272 217.206 114.244 217.68 114.244C218.109 114.244 218.644 114.567 219.064 114.695C220.859 115.241 222.48 116.218 223.979 117.342"
                stroke="#2C3B51"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <Path
                d="M216.151 128.074C216.203 127.703 216.144 127.318 216.411 127.019C216.669 126.73 216.979 126.621 217.323 126.458C217.857 126.205 218.227 126.265 218.538 126.731"
                stroke="#2C3B51"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <Path
                d="M224.939 102.361C225.412 101.379 225.901 100.358 226.149 99.2933C226.304 98.6269 226.417 97.9868 226.591 97.3282C226.889 96.2012 227.34 94.8752 227.912 93.8459C228.029 93.635 229.342 94.1801 229.569 94.445C229.952 94.8909 229.622 96.0221 229.429 96.5164C229.111 97.3344 229.034 98.216 228.646 99.0358C228.327 99.7094 228.207 100.531 227.817 101.174C227.589 101.55 227.17 102.264 227.156 102.708C227.14 103.284 227.005 103.975 226.753 104.478"
                stroke="#2C3B51"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <Path
                d="M170.534 90.755C168.485 91.994 166.358 93.0471 164.445 94.5247C163.54 95.224 162.623 95.8829 161.799 96.6904C160.829 97.6424 160.098 98.755 159.235 99.8063C158.546 100.647 157.842 101.545 157.289 102.478C156.615 103.616 156.031 104.782 155.363 105.926C154.918 106.689 154.628 107.892 154.628 108.776"
                stroke="#2C3B51"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <Path
                d="M151.318 97.8348C151.413 98.2769 151.754 99.1988 152.422 98.9177C152.765 98.7732 152.973 98.3122 152.861 97.9472C152.59 97.0677 151.63 97.3988 151.042 97.559"
                stroke="#2C3B51"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <Path
                d="M153.065 96.6394C154.067 96.369 154.766 96.1324 155.507 96.9152C155.992 97.4286 155.446 98.2493 155.067 98.6417C154.745 98.9758 154.153 98.6263 153.913 98.8665C153.773 99.006 154.13 99.7747 154.056 100.041C153.775 101.054 151.709 101.279 151.196 100.429C151.099 100.27 151.016 100.03 151.093 99.8523C151.12 99.7911 151.27 99.5235 151.206 99.5611C150.777 99.8111 149.075 99.3788 148.693 99.0657C148.364 98.7964 148.1 98.3968 148.1 97.9726C148.1 97.5814 148.922 97.3007 149.198 97.1451C149.385 97.0401 149.936 96.728 150.123 96.9612C150.369 97.2693 150.215 96.4097 150.215 96.3636C150.215 95.8011 150.317 95.5618 150.812 95.2602C151.16 95.0486 151.915 94.7848 152.243 95.0304C152.516 95.2352 152.707 95.6039 152.784 95.9498C152.814 96.0863 152.881 96.597 152.881 96.5474"
                stroke="#2C3B51"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <Path
                d="M156.467 80.6414C156.293 81.0888 156.187 81.3962 156.467 81.8162C156.673 82.1249 157.099 82.5202 157.473 82.5671C157.803 82.6082 158.324 82.4673 158.531 82.2044C158.638 82.0679 158.985 81.7165 158.858 81.6527"
                stroke="#2C3B51"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <Path
                d="M155.639 80.5493C154.014 79.9301 153.881 82.4801 155.231 82.4801C155.327 82.4801 155.731 82.3787 155.583 82.5261C155.356 82.7528 155.166 82.956 154.996 83.2361C154.533 83.9984 155.152 84.9294 155.966 84.7991C156.446 84.7223 157.334 84.5249 157.483 84.0023C157.566 83.7145 157.578 84.1775 157.591 84.2271C157.684 84.5908 157.877 84.7392 158.219 84.8247C159.075 85.0387 159.674 84.8483 160.236 84.2271C160.509 83.9261 160.789 82.8023 160.328 82.5721"
                stroke="#2C3B51"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <Path
                d="M141.205 87.1691C141.571 86.9544 142.028 86.7414 142.287 87.261C142.404 87.4934 142.237 87.8225 142.032 87.9251C141.791 88.0455 141.205 87.5484 141.205 87.261"
                stroke="#2C3B51"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <Path
                d="M142.492 86.4337C142.991 86.4428 144.048 86.3451 144.29 86.8986C144.46 87.288 144.487 87.6953 144.167 88.0274C143.979 88.2232 143.756 88.1118 143.549 88.2266C143.243 88.3965 143.639 88.7904 143.646 89.049C143.669 89.8855 142.19 89.55 141.777 89.284C141.575 89.1541 141.48 89.0108 141.48 88.7783C141.48 88.3974 140.751 88.8024 140.525 88.8191C140.157 88.8464 139.975 88.7932 139.825 88.4361C139.74 88.232 139.487 87.7966 139.785 87.6341C139.986 87.5241 140.237 87.3532 140.469 87.3532C140.632 87.3532 141.081 87.5002 141.021 87.394C140.729 86.8839 140.342 86.0233 141.164 85.7493C141.999 85.4707 142.036 86.0411 142.4 86.5257"
                stroke="#2C3B51"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <Path
                d="M137.305 98.7668C137.931 98.5283 138.38 98.5674 138.718 99.1594C138.858 99.4044 139.01 99.6093 138.806 99.915"
                stroke="#2C3B51"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <Path
                d="M136.51 97.8835C136.735 97.3404 136.933 97.0818 137.55 97.1966C137.991 97.2787 138.018 97.4391 138.281 97.7462C138.435 97.9256 139.073 97.4749 139.238 97.4076C139.493 97.3032 139.772 97.3779 140.028 97.4419C140.323 97.5158 140.266 98.0825 140.2 98.3055C140.131 98.5355 139.924 98.7582 139.758 98.9238C139.643 99.0388 140.288 99.2274 140.44 99.3457C140.662 99.5183 140.621 99.9549 140.44 100.136C140.201 100.375 139.948 100.361 139.689 100.533"
                stroke="#2C3B51"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <Path
                d="M164.94 93.6921C164.852 93.2146 164.971 92.7396 165.553 92.7396C165.794 92.7396 166.048 92.6479 166.194 92.9401"
                stroke="#2C3B51"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <Circle cx="223.709" cy="82.3004" r="2.39112" stroke="#2C3B51" />
              <Path
                d="M216.849 76.9038C216.849 77.3121 216.447 77.7529 215.807 77.7529C215.167 77.7529 214.765 77.3121 214.765 76.9038C214.765 76.4954 215.167 76.0546 215.807 76.0546C216.447 76.0546 216.849 76.4954 216.849 76.9038Z"
                stroke="#2C3B51"
              />
              <Path
                d="M199.888 45.6796C199.888 46.3132 199.3 46.9142 198.461 46.9142C197.621 46.9142 197.033 46.3132 197.033 45.6796C197.033 45.0459 197.621 44.4449 198.461 44.4449C199.3 44.4449 199.888 45.0459 199.888 45.6796Z"
                stroke="#2C3B51"
              />
              <Path
                d="M103.518 25.4419C103.518 26.2811 102.917 26.8693 102.283 26.8693C101.649 26.8693 101.048 26.2811 101.048 25.4419C101.048 24.6027 101.649 24.0145 102.283 24.0145C102.917 24.0145 103.518 24.6027 103.518 25.4419Z"
                stroke="#2C3B51"
              />
              <Circle cx="92.0676" cy="18.8886" r="1.42741" stroke="#2C3B51" />
              <Circle cx="67.0114" cy="36.6208" r="1.42741" stroke="#2C3B51" />
              <Circle cx="73.5647" cy="47.7998" r="0.656447" stroke="#2C3B51" />
              <Circle cx="64.5056" cy="44.9086" r="2.00564" stroke="#2C3B51" />
              <Circle cx="75.4916" cy="55.8949" r="1.81289" stroke="#2C3B51" />
              <Circle cx="94.3803" cy="7.70968" r="1.81289" stroke="#2C3B51" />
              <Circle cx="87.8271" cy="2.31289" r="1.81289" stroke="#2C3B51" />
              <Path
                d="M186.011 27.3692C186.011 28.2084 185.41 28.7966 184.776 28.7966C184.143 28.7966 183.542 28.2084 183.542 27.3692C183.542 26.53 184.143 25.9418 184.776 25.9418C185.41 25.9418 186.011 26.53 186.011 27.3692Z"
                stroke="#2C3B51"
              />
              <Circle cx="223.71" cy="91.5521" r="0.849188" stroke="#2C3B51" />
              <Path
                d="M207.983 65.532C207.983 66.7817 207.051 67.7304 205.978 67.7304C204.904 67.7304 203.972 66.7817 203.972 65.532C203.972 64.2823 204.904 63.3336 205.978 63.3336C207.051 63.3336 207.983 64.2823 207.983 65.532Z"
                stroke="#2C3B51"
              />
              <Circle cx="207.327" cy="52.8111" r="2.96934" stroke="#2C3B51" />
              <Path
                d="M3.84848 197.116C2.18117 187.321 0.234481 175.315 2.98085 165.473C5.20568 157.501 9.87084 149.063 9.87084 140.669C9.87084 130.829 4.61131 121.195 2.47048 111.68C0.447352 102.689 0.152464 95.4947 3.89952 86.8765C4.64508 85.1617 10.2349 75.53 8.64595 82.2832C8.10687 84.5743 7.63414 87.3016 7.52314 89.6325C7.20587 96.2951 5.50829 100.651 6.55344 107.444C7.8508 115.877 13.7283 121.622 16.7098 129.339C19.2305 135.863 17.6336 145.756 14.4642 151.642C11.0461 157.99 9.55601 168.014 14.1579 174.15C22.7589 185.618 24.9778 163.726 24.9778 158.073C24.9778 144.013 35.6327 131.261 26.3558 117.703C23.1115 112.961 19.7793 109.275 19.8741 103.208C20.0707 90.6242 31.8975 81.5506 37.9412 71.6675C44.7639 60.5103 37.1604 55.0666 36.1549 44.0055C36.0783 43.1634 36.8674 41.8446 37.8901 42.015C40.3367 42.4228 41.6689 49.1823 42.4324 51.0486C44.4529 55.9877 47.3213 63.3751 45.1884 68.7073C42.8718 74.4987 38.7667 79.3491 34.8789 84.1205C29.3874 90.8601 24.3613 98.6369 25.0288 107.649C25.4615 113.489 26.8182 119.564 28.8566 125.052C30.9034 130.563 34.9551 134.73 35.0831 140.874C35.3339 152.911 30.8874 162.147 26.3558 172.721C24.7955 176.361 23.2462 179.621 22.4259 183.54C21.4319 188.29 16.7098 191.194 16.7098 196.198"
                stroke="#2C3B51"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <Path
                d="M220.5 197C236.031 197 244.852 190.535 258.001 182.865C265.572 178.449 272.072 172.747 279.419 168.038C282.446 166.192 288.7 162.6 289.5 163M312.5 160.5C318.493 162.143 327.627 166.365 333.7 167.431C339.508 168.449 346.011 170.218 351.823 168.558C354.968 167.659 358.508 167.122 361.795 166.824"
                stroke="#2C3B51"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <Path
                d="M295.982 169.383C291.799 165.199 288.113 160.509 283.84 156.436C281.003 153.732 275.552 150.676 274.046 146.843C273.773 146.148 276.771 146.453 277.065 146.474C280.236 146.692 282.924 147.927 285.719 149.325C287.047 149.989 287.903 150.655 289.039 151.538C290.502 152.676 287.489 146.962 287.396 146.775C284.232 140.499 281.229 134.419 279.513 127.556C278.821 124.786 282.446 131.082 282.498 131.178C286.743 138.984 290.767 146.944 294.741 154.893C295.73 156.87 296.943 159.998 296.318 155.362C295.336 148.078 292.281 141.051 291.823 133.728C291.779 133.027 291.382 123.494 291.89 123.43C292.162 123.396 295.222 135.345 295.345 135.774C297.194 142.246 299.226 148.673 301.014 155.161C301.147 155.645 301.454 157.063 301.55 156.57C302.668 150.868 302.773 144.942 303.63 139.195C304.881 130.805 311.993 106.312 309.936 114.542C307.885 122.746 305.134 130.689 303.429 138.994C302.031 145.8 300.209 152.957 300.209 159.958C300.209 160.188 300.384 159.531 300.477 159.32C301.927 156.026 303.724 152.896 305.173 149.593C308.505 141.999 312.123 134.682 315.705 127.22C317.383 123.724 314.187 134.881 312.686 138.457C309.742 145.471 306.699 152.81 303.026 159.488C300.194 164.637 309.286 149.501 313.022 144.964C314.749 142.867 320.087 137.19 319.328 139.799C317.196 147.122 311.459 154.151 306.917 160.125C305.314 162.234 303.561 164.234 301.986 166.364C300.788 167.986 305.13 163.834 306.649 162.507C311.529 158.242 316.592 154.194 321.944 150.532C332.137 143.558 317.409 155.996 317.114 156.234C312.363 160.075 306.544 162.796 302.087 166.934C299.943 168.925 300.023 169.076 298.196 166.632C294.549 161.752 289.928 157.467 286.557 152.411C285.023 150.11 286.648 151.825 287.396 153.014C289.507 156.374 291.341 159.307 294.171 162.138"
                stroke="#2C3B51"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <Path
                d="M331.492 154.59C330.065 160.374 329.838 165.579 329.838 171.539C332.059 172.526 336.6 174 337 172C336.007 169.27 335.906 165.645 336.456 162.899C337.575 157.302 338.801 152.116 339.103 146.391C339.395 140.842 345.23 135.291 347.338 130.472C350.314 123.671 355.647 116.524 355.647 108.67C355.647 107.78 355.112 100.627 354.324 100.876C352.197 101.547 350.087 104.641 349.066 106.427C345.078 113.406 343.535 123.091 341.456 130.839C341.12 132.09 340.788 136.907 338.441 135.398C337.001 134.473 336.015 131.714 335.279 130.214C333.859 127.319 333.108 124.107 331.676 121.244C329.584 117.059 327.853 111.344 327.853 106.685C327.853 97.9729 322.426 88.7969 320.61 80.3238C318.207 69.1119 312.956 58.4957 312.632 46.8305C312.482 41.434 311.747 34.208 309.066 29.4405C308.357 28.1816 306.786 31.1237 306.529 31.6832C304.172 36.8164 302.765 41.9067 303.257 47.6394C304.019 56.54 307.403 65.2456 309.654 73.8531C311.218 79.8339 313.273 85.6738 315.794 91.3166C317.584 95.3259 319.808 99.2421 321.198 103.412C321.556 104.487 323.008 112.314 322.411 111.832C317.137 107.571 314.805 101.621 308.33 98.7432C306.004 97.7092 302.633 94.5395 301.676 92.2725C299.972 88.2372 297.712 84.75 295.72 80.8753C294.09 77.7065 289.963 63.7426 286.492 63.7426C280.965 63.7426 286.053 81.1182 286.822 82.8606C292.167 94.9559 302.568 104.594 312.558 112.935C321.152 120.109 332.365 128.853 333.662 140.95C334.145 145.466 332.558 150.27 331.492 154.59Z"
                fill="#F4F1DE"
                stroke="#2C3B51"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <Path
                d="M326.889 172.697C327.84 172.334 328.915 171.711 329.973 171.734C330.71 171.749 331.521 172.171 332.237 172.351C333.213 172.594 334.06 173.239 335.119 173.218C336.21 173.197 337.135 172.699 338.087 172.254C338.338 172.137 338.813 171.755 339.109 171.84C339.419 171.928 339.372 172.066 339.726 171.83"
                stroke="#2C3B51"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <Path
                d="M292.541 169.575C295.086 169.945 297.412 169.627 299.865 169.093C300.446 168.967 301.519 168.696 302.082 168.977C303.81 169.841 305.606 171.158 307.46 169.922"
                stroke="#2C3B51"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </Svg>

            <Text style={styles.header}>Observe</Text>
            <View
              style={{
                marginLeft: 30,
                marginRight: 30,
                height: 1,
                backgroundColor: "#868D91",
                marginBottom: 20
              }}
            />

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
    flex: 1,
    paddingBottom: 10,
    alignItems: "center",
    alignSelf: "stretch",
    width: Dimensions.get("window").width,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
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
    left: 0,
    width: Dimensions.get("window").width
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
    backgroundColor: "#A28AD4",
    borderWidth: 2,
    borderColor: "#A28AD4",
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
    borderColor: "#A28AD4",
    borderRadius: 12,
    overflow: "hidden",
    padding: 15,
    flexDirection: "row",
    alignSelf: "stretch",
    justifyContent: "space-between",
    marginBottom: 15
  },
  text_new: {
    color: "#A28AD4",
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

export default connect(mapStateToProps)(ObserveScreen);
