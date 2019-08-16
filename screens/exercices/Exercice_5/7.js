import React from "react";
import {
  View,
  Text,
  TextInput,
  StatusBar,
  TouchableWithoutFeedback,
  ScrollView,
  ImageBackground
} from "react-native";
import {
  PrimaryButton,
  SecondaryButton,
  GreyInputButton
} from "../../../components/AppComponents";
import { styles } from "./style";

import { Svg, Path, Circle, Ellipse } from "react-native-svg";

export default class Exercice_5_7 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <ImageBackground
        source={require("../../../assets/images/yellow_shape.png")}
        style={styles.image_background}
      >
        <StatusBar hidden />
        <ScrollView>
          <View>
            <TouchableWithoutFeedback
              style={styles.scroll}
              onPress={() => {
                this.props.navigation.navigate("Exercice_5_Aha_1");
              }}
            >
              <View style={styles.container_scroll}>
                <View style={{ flex: 1, justifyContent: "center" }}>
                  <Svg
                    width="215"
                    height="183"
                    viewBox="0 0 215 183"
                    fill="none"
                  >
                    <Circle
                      cx="106.5"
                      cy="89.5"
                      r="88.5"
                      stroke="#2C3B51"
                      stroke-width="2"
                    />
                    <Circle cx="38" cy="39" r="26" fill="#F4F1DE" />
                    <Circle cx="181" cy="43" r="26" fill="#F4F1DE" />
                    <Circle cx="180.5" cy="146.5" r="30.5" fill="#F4F1DE" />
                    <Path
                      d="M165.88 44.293C165.774 45.1953 165.44 45.8926 164.878 46.3848C164.319 46.873 163.575 47.1172 162.645 47.1172C161.638 47.1172 160.829 46.7559 160.22 46.0332C159.614 45.3105 159.311 44.3438 159.311 43.1328V42.3125C159.311 41.5195 159.452 40.8223 159.733 40.2207C160.018 39.6191 160.421 39.1582 160.94 38.8379C161.46 38.5137 162.061 38.3516 162.745 38.3516C163.651 38.3516 164.378 38.6055 164.925 39.1133C165.471 39.6172 165.79 40.3164 165.88 41.2109H164.749C164.651 40.5312 164.438 40.0391 164.11 39.7344C163.786 39.4297 163.331 39.2773 162.745 39.2773C162.026 39.2773 161.462 39.543 161.052 40.0742C160.645 40.6055 160.442 41.3613 160.442 42.3418V43.168C160.442 44.0938 160.636 44.8301 161.022 45.377C161.409 45.9238 161.95 46.1973 162.645 46.1973C163.27 46.1973 163.749 46.0566 164.081 45.7754C164.417 45.4902 164.639 44.9961 164.749 44.293H165.88ZM170.915 41.6328C170.751 41.6055 170.573 41.5918 170.382 41.5918C169.671 41.5918 169.189 41.8945 168.935 42.5V47H167.851V40.6602H168.905L168.923 41.3926C169.279 40.8262 169.782 40.543 170.435 40.543C170.646 40.543 170.806 40.5703 170.915 40.625V41.6328ZM176.197 47C176.134 46.875 176.084 46.6523 176.045 46.332C175.541 46.8555 174.939 47.1172 174.24 47.1172C173.615 47.1172 173.101 46.9414 172.699 46.5898C172.3 46.2344 172.101 45.7852 172.101 45.2422C172.101 44.582 172.351 44.0703 172.851 43.707C173.355 43.3398 174.062 43.1562 174.972 43.1562H176.027V42.6582C176.027 42.2793 175.914 41.9785 175.687 41.7559C175.461 41.5293 175.127 41.416 174.685 41.416C174.298 41.416 173.974 41.5137 173.713 41.709C173.451 41.9043 173.32 42.1406 173.32 42.418H172.23C172.23 42.1016 172.341 41.7969 172.564 41.5039C172.791 41.207 173.095 40.9727 173.478 40.8008C173.865 40.6289 174.289 40.543 174.75 40.543C175.48 40.543 176.052 40.7266 176.466 41.0938C176.88 41.457 177.095 41.959 177.111 42.5996V45.5176C177.111 46.0996 177.185 46.5625 177.334 46.9062V47H176.197ZM174.398 46.1738C174.738 46.1738 175.06 46.0859 175.365 45.9102C175.67 45.7344 175.89 45.5059 176.027 45.2246V43.9238H175.177C173.849 43.9238 173.185 44.3125 173.185 45.0898C173.185 45.4297 173.298 45.6953 173.525 45.8867C173.752 46.0781 174.043 46.1738 174.398 46.1738ZM181.408 45.5293L182.979 40.6602H184.086L181.812 47H180.986L178.689 40.6602H179.797L181.408 45.5293ZM186.907 47H185.823V40.6602H186.907V47ZM185.735 38.9785C185.735 38.8027 185.788 38.6543 185.893 38.5332C186.002 38.4121 186.163 38.3516 186.373 38.3516C186.584 38.3516 186.745 38.4121 186.854 38.5332C186.963 38.6543 187.018 38.8027 187.018 38.9785C187.018 39.1543 186.963 39.3008 186.854 39.418C186.745 39.5352 186.584 39.5938 186.373 39.5938C186.163 39.5938 186.002 39.5352 185.893 39.418C185.788 39.3008 185.735 39.1543 185.735 38.9785ZM190.272 40.6602L190.307 41.457C190.792 40.8477 191.425 40.543 192.206 40.543C193.546 40.543 194.221 41.2988 194.233 42.8105V47H193.149V42.8047C193.145 42.3477 193.04 42.0098 192.833 41.791C192.63 41.5723 192.311 41.4629 191.878 41.4629C191.526 41.4629 191.218 41.5566 190.952 41.7441C190.686 41.9316 190.479 42.1777 190.331 42.4824V47H189.247V40.6602H190.272ZM196.21 43.7773C196.21 42.7891 196.439 42.0039 196.896 41.4219C197.353 40.8359 197.958 40.543 198.712 40.543C199.486 40.543 200.089 40.8164 200.523 41.3633L200.575 40.6602H201.566V46.8477C201.566 47.668 201.321 48.3145 200.833 48.7871C200.349 49.2598 199.696 49.4961 198.876 49.4961C198.419 49.4961 197.972 49.3984 197.534 49.2031C197.097 49.0078 196.763 48.7402 196.532 48.4004L197.095 47.75C197.56 48.3242 198.128 48.6113 198.8 48.6113C199.327 48.6113 199.737 48.4629 200.03 48.166C200.327 47.8691 200.476 47.4512 200.476 46.9121V46.3672C200.042 46.8672 199.45 47.1172 198.7 47.1172C197.958 47.1172 197.357 46.8184 196.896 46.2207C196.439 45.623 196.21 44.8086 196.21 43.7773ZM197.3 43.9004C197.3 44.6152 197.446 45.1777 197.739 45.5879C198.032 45.9941 198.443 46.1973 198.97 46.1973C199.654 46.1973 200.155 45.8867 200.476 45.2656V42.3711C200.144 41.7656 199.646 41.4629 198.982 41.4629C198.454 41.4629 198.042 41.668 197.745 42.0781C197.448 42.4883 197.3 43.0957 197.3 43.9004Z"
                      fill="#2C3B51"
                    />
                    <Path
                      d="M155.67 147.549H153.666V151H152.535V142.469H155.359C156.32 142.469 157.058 142.688 157.574 143.125C158.093 143.562 158.353 144.199 158.353 145.035C158.353 145.566 158.209 146.029 157.92 146.424C157.634 146.818 157.236 147.113 156.724 147.309L158.728 150.93V151H157.521L155.67 147.549ZM153.666 146.629H155.394C155.953 146.629 156.396 146.484 156.724 146.195C157.056 145.906 157.222 145.52 157.222 145.035C157.222 144.508 157.064 144.104 156.748 143.822C156.435 143.541 155.982 143.398 155.388 143.395H153.666V146.629ZM162.996 151.117C162.137 151.117 161.438 150.836 160.898 150.273C160.359 149.707 160.09 148.951 160.09 148.006V147.807C160.09 147.178 160.209 146.617 160.447 146.125C160.689 145.629 161.025 145.242 161.455 144.965C161.889 144.684 162.357 144.543 162.861 144.543C163.686 144.543 164.326 144.814 164.783 145.357C165.24 145.9 165.469 146.678 165.469 147.689V148.141H161.174C161.189 148.766 161.371 149.271 161.719 149.658C162.07 150.041 162.516 150.232 163.055 150.232C163.438 150.232 163.762 150.154 164.027 149.998C164.293 149.842 164.525 149.635 164.725 149.377L165.387 149.893C164.855 150.709 164.059 151.117 162.996 151.117ZM162.861 145.434C162.424 145.434 162.057 145.594 161.76 145.914C161.463 146.23 161.279 146.676 161.209 147.25H164.385V147.168C164.354 146.617 164.205 146.191 163.939 145.891C163.674 145.586 163.314 145.434 162.861 145.434ZM171.02 149.318C171.02 149.025 170.909 148.799 170.686 148.639C170.467 148.475 170.082 148.334 169.532 148.217C168.985 148.1 168.549 147.959 168.225 147.795C167.905 147.631 167.666 147.436 167.51 147.209C167.358 146.982 167.282 146.713 167.282 146.4C167.282 145.881 167.5 145.441 167.938 145.082C168.379 144.723 168.942 144.543 169.625 144.543C170.344 144.543 170.926 144.729 171.371 145.1C171.821 145.471 172.045 145.945 172.045 146.523H170.955C170.955 146.227 170.829 145.971 170.575 145.756C170.325 145.541 170.008 145.434 169.625 145.434C169.231 145.434 168.922 145.52 168.7 145.691C168.477 145.863 168.366 146.088 168.366 146.365C168.366 146.627 168.469 146.824 168.676 146.957C168.883 147.09 169.256 147.217 169.795 147.338C170.338 147.459 170.778 147.604 171.114 147.771C171.45 147.939 171.698 148.143 171.858 148.381C172.022 148.615 172.104 148.902 172.104 149.242C172.104 149.809 171.877 150.264 171.424 150.607C170.971 150.947 170.383 151.117 169.661 151.117C169.153 151.117 168.704 151.027 168.313 150.848C167.922 150.668 167.616 150.418 167.393 150.098C167.174 149.773 167.065 149.424 167.065 149.049H168.149C168.168 149.412 168.313 149.701 168.582 149.916C168.856 150.127 169.215 150.232 169.661 150.232C170.071 150.232 170.399 150.15 170.645 149.986C170.895 149.818 171.02 149.596 171.02 149.318ZM179.471 147.9C179.471 148.865 179.251 149.643 178.809 150.232C178.368 150.822 177.77 151.117 177.016 151.117C176.247 151.117 175.641 150.873 175.2 150.385V153.438H174.116V144.66H175.106L175.159 145.363C175.6 144.816 176.214 144.543 176.999 144.543C177.761 144.543 178.362 144.83 178.804 145.404C179.249 145.979 179.471 146.777 179.471 147.801V147.9ZM178.387 147.777C178.387 147.062 178.235 146.498 177.93 146.084C177.626 145.67 177.208 145.463 176.677 145.463C176.02 145.463 175.528 145.754 175.2 146.336V149.365C175.524 149.943 176.02 150.232 176.688 150.232C177.208 150.232 177.62 150.027 177.925 149.617C178.233 149.203 178.387 148.59 178.387 147.777ZM181.167 147.771C181.167 147.15 181.288 146.592 181.53 146.096C181.777 145.6 182.116 145.217 182.55 144.947C182.987 144.678 183.486 144.543 184.044 144.543C184.907 144.543 185.605 144.842 186.136 145.439C186.671 146.037 186.939 146.832 186.939 147.824V147.9C186.939 148.518 186.82 149.072 186.581 149.564C186.347 150.053 186.009 150.434 185.568 150.707C185.13 150.98 184.626 151.117 184.056 151.117C183.196 151.117 182.499 150.818 181.964 150.221C181.433 149.623 181.167 148.832 181.167 147.848V147.771ZM182.257 147.9C182.257 148.604 182.419 149.168 182.743 149.594C183.071 150.02 183.509 150.232 184.056 150.232C184.607 150.232 185.044 150.018 185.368 149.588C185.693 149.154 185.855 148.549 185.855 147.771C185.855 147.076 185.689 146.514 185.357 146.084C185.029 145.65 184.591 145.434 184.044 145.434C183.509 145.434 183.077 145.646 182.749 146.072C182.421 146.498 182.257 147.107 182.257 147.9ZM189.923 144.66L189.959 145.457C190.443 144.848 191.076 144.543 191.857 144.543C193.197 144.543 193.873 145.299 193.884 146.811V151H192.8V146.805C192.796 146.348 192.691 146.01 192.484 145.791C192.281 145.572 191.963 145.463 191.529 145.463C191.177 145.463 190.869 145.557 190.603 145.744C190.338 145.932 190.13 146.178 189.982 146.482V151H188.898V144.66H189.923ZM199.811 149.318C199.811 149.025 199.699 148.799 199.477 148.639C199.258 148.475 198.873 148.334 198.322 148.217C197.775 148.1 197.34 147.959 197.016 147.795C196.695 147.631 196.457 147.436 196.301 147.209C196.148 146.982 196.072 146.713 196.072 146.4C196.072 145.881 196.291 145.441 196.729 145.082C197.17 144.723 197.732 144.543 198.416 144.543C199.135 144.543 199.717 144.729 200.162 145.1C200.611 145.471 200.836 145.945 200.836 146.523H199.746C199.746 146.227 199.619 145.971 199.365 145.756C199.115 145.541 198.799 145.434 198.416 145.434C198.021 145.434 197.713 145.52 197.49 145.691C197.268 145.863 197.156 146.088 197.156 146.365C197.156 146.627 197.26 146.824 197.467 146.957C197.674 147.09 198.047 147.217 198.586 147.338C199.129 147.459 199.568 147.604 199.904 147.771C200.24 147.939 200.488 148.143 200.648 148.381C200.812 148.615 200.895 148.902 200.895 149.242C200.895 149.809 200.668 150.264 200.215 150.607C199.762 150.947 199.174 151.117 198.451 151.117C197.943 151.117 197.494 151.027 197.104 150.848C196.713 150.668 196.406 150.418 196.184 150.098C195.965 149.773 195.855 149.424 195.855 149.049H196.939C196.959 149.412 197.104 149.701 197.373 149.916C197.646 150.127 198.006 150.232 198.451 150.232C198.861 150.232 199.189 150.15 199.436 149.986C199.686 149.818 199.811 149.596 199.811 149.318ZM205.537 151.117C204.678 151.117 203.979 150.836 203.44 150.273C202.901 149.707 202.631 148.951 202.631 148.006V147.807C202.631 147.178 202.75 146.617 202.989 146.125C203.231 145.629 203.567 145.242 203.996 144.965C204.43 144.684 204.899 144.543 205.403 144.543C206.227 144.543 206.868 144.814 207.325 145.357C207.782 145.9 208.01 146.678 208.01 147.689V148.141H203.715C203.731 148.766 203.912 149.271 204.26 149.658C204.612 150.041 205.057 150.232 205.596 150.232C205.979 150.232 206.303 150.154 206.569 149.998C206.834 149.842 207.067 149.635 207.266 149.377L207.928 149.893C207.397 150.709 206.6 151.117 205.537 151.117ZM205.403 145.434C204.965 145.434 204.598 145.594 204.301 145.914C204.004 146.23 203.821 146.676 203.75 147.25H206.926V147.168C206.895 146.617 206.746 146.191 206.481 145.891C206.215 145.586 205.856 145.434 205.403 145.434Z"
                      fill="#2C3B51"
                    />
                    <Path
                      d="M23.782 35.3945H21.0398V43H19.9207V35.3945H17.1844V34.4688H23.782V35.3945ZM28.0969 37.6328C27.9328 37.6055 27.7551 37.5918 27.5637 37.5918C26.8527 37.5918 26.3703 37.8945 26.1164 38.5V43H25.0324V36.6602H26.0871L26.1047 37.3926C26.4602 36.8262 26.9641 36.543 27.6164 36.543C27.8273 36.543 27.9875 36.5703 28.0969 36.625V37.6328ZM30.8766 43H29.7926V36.6602H30.8766V43ZM29.7047 34.9785C29.7047 34.8027 29.7574 34.6543 29.8629 34.5332C29.9723 34.4121 30.1324 34.3516 30.3434 34.3516C30.5543 34.3516 30.7145 34.4121 30.8238 34.5332C30.9332 34.6543 30.9879 34.8027 30.9879 34.9785C30.9879 35.1543 30.9332 35.3008 30.8238 35.418C30.7145 35.5352 30.5543 35.5938 30.3434 35.5938C30.1324 35.5938 29.9723 35.5352 29.8629 35.418C29.7574 35.3008 29.7047 35.1543 29.7047 34.9785ZM32.959 39.7773C32.959 38.7891 33.1875 38.0039 33.6445 37.4219C34.1016 36.8359 34.707 36.543 35.4609 36.543C36.2344 36.543 36.8379 36.8164 37.2715 37.3633L37.3242 36.6602H38.3145V42.8477C38.3145 43.668 38.0703 44.3145 37.582 44.7871C37.0977 45.2598 36.4453 45.4961 35.625 45.4961C35.168 45.4961 34.7207 45.3984 34.2832 45.2031C33.8457 45.0078 33.5117 44.7402 33.2812 44.4004L33.8438 43.75C34.3086 44.3242 34.877 44.6113 35.5488 44.6113C36.0762 44.6113 36.4863 44.4629 36.7793 44.166C37.0762 43.8691 37.2246 43.4512 37.2246 42.9121V42.3672C36.791 42.8672 36.1992 43.1172 35.4492 43.1172C34.707 43.1172 34.1055 42.8184 33.6445 42.2207C33.1875 41.623 32.959 40.8086 32.959 39.7773ZM34.0488 39.9004C34.0488 40.6152 34.1953 41.1777 34.4883 41.5879C34.7812 41.9941 35.1914 42.1973 35.7188 42.1973C36.4023 42.1973 36.9043 41.8867 37.2246 41.2656V38.3711C36.8926 37.7656 36.3945 37.4629 35.7305 37.4629C35.2031 37.4629 34.791 37.668 34.4941 38.0781C34.1973 38.4883 34.0488 39.0957 34.0488 39.9004ZM40.2973 39.7773C40.2973 38.7891 40.5258 38.0039 40.9828 37.4219C41.4398 36.8359 42.0453 36.543 42.7992 36.543C43.5727 36.543 44.1762 36.8164 44.6098 37.3633L44.6625 36.6602H45.6527V42.8477C45.6527 43.668 45.4086 44.3145 44.9203 44.7871C44.4359 45.2598 43.7836 45.4961 42.9633 45.4961C42.5063 45.4961 42.059 45.3984 41.6215 45.2031C41.184 45.0078 40.85 44.7402 40.6195 44.4004L41.182 43.75C41.6469 44.3242 42.2152 44.6113 42.8871 44.6113C43.4145 44.6113 43.8246 44.4629 44.1176 44.166C44.4145 43.8691 44.5629 43.4512 44.5629 42.9121V42.3672C44.1293 42.8672 43.5375 43.1172 42.7875 43.1172C42.0453 43.1172 41.4438 42.8184 40.9828 42.2207C40.5258 41.623 40.2973 40.8086 40.2973 39.7773ZM41.3871 39.9004C41.3871 40.6152 41.5336 41.1777 41.8266 41.5879C42.1195 41.9941 42.5297 42.1973 43.057 42.1973C43.7406 42.1973 44.2426 41.8867 44.5629 41.2656V38.3711C44.2309 37.7656 43.7328 37.4629 43.0688 37.4629C42.5414 37.4629 42.1293 37.668 41.8324 38.0781C41.5355 38.4883 41.3871 39.0957 41.3871 39.9004ZM50.5242 43.1172C49.6648 43.1172 48.9656 42.8359 48.4266 42.2734C47.8875 41.707 47.618 40.9512 47.618 40.0059V39.8066C47.618 39.1777 47.7371 38.6172 47.9754 38.125C48.2176 37.6289 48.5535 37.2422 48.9832 36.9648C49.4168 36.6836 49.8855 36.543 50.3895 36.543C51.2137 36.543 51.8543 36.8145 52.3113 37.3574C52.7684 37.9004 52.9969 38.6777 52.9969 39.6895V40.1406H48.702C48.7176 40.7656 48.8992 41.2715 49.2469 41.6582C49.5984 42.041 50.0438 42.2324 50.5828 42.2324C50.9656 42.2324 51.2898 42.1543 51.5555 41.998C51.8211 41.8418 52.0535 41.6348 52.2527 41.377L52.9148 41.8926C52.3836 42.709 51.5867 43.1172 50.5242 43.1172ZM50.3895 37.4336C49.952 37.4336 49.5848 37.5938 49.2879 37.9141C48.991 38.2305 48.8074 38.6758 48.7371 39.25H51.9129V39.168C51.8816 38.6172 51.7332 38.1914 51.4676 37.8906C51.202 37.5859 50.8426 37.4336 50.3895 37.4336ZM57.9211 37.6328C57.757 37.6055 57.5793 37.5918 57.3879 37.5918C56.677 37.5918 56.1945 37.8945 55.9406 38.5V43H54.8566V36.6602H55.9113L55.9289 37.3926C56.2844 36.8262 56.7883 36.543 57.4406 36.543C57.6516 36.543 57.8117 36.5703 57.9211 36.625V37.6328Z"
                      fill="#2C3B51"
                    />
                    <Circle cx="33.5" cy="149.5" r="33.5" fill="#EBD1B1" />
                    <Path
                      d="M16.1992 147.877H14.7988V151H13.041V142.469H16.2109C17.2188 142.469 17.9961 142.693 18.543 143.143C19.0898 143.592 19.3633 144.227 19.3633 145.047C19.3633 145.629 19.2363 146.115 18.9824 146.506C18.7324 146.893 18.3516 147.201 17.8398 147.432L19.6855 150.918V151H17.7988L16.1992 147.877ZM14.7988 146.453H16.2168C16.6582 146.453 17 146.342 17.2422 146.119C17.4844 145.893 17.6055 145.582 17.6055 145.188C17.6055 144.785 17.4902 144.469 17.2598 144.238C17.0332 144.008 16.6836 143.893 16.2109 143.893H14.7988V146.453ZM24.1117 151.117C23.182 151.117 22.4242 150.832 21.8383 150.262C21.2563 149.691 20.9652 148.932 20.9652 147.982V147.818C20.9652 147.182 21.0883 146.613 21.3344 146.113C21.5805 145.609 21.9281 145.223 22.3773 144.953C22.8305 144.68 23.3461 144.543 23.9242 144.543C24.7914 144.543 25.473 144.816 25.9691 145.363C26.4691 145.91 26.7191 146.686 26.7191 147.689V148.381H22.682C22.7367 148.795 22.9008 149.127 23.1742 149.377C23.4516 149.627 23.8012 149.752 24.223 149.752C24.8754 149.752 25.3852 149.516 25.7523 149.043L26.5844 149.975C26.3305 150.334 25.9867 150.615 25.5531 150.818C25.1195 151.018 24.6391 151.117 24.1117 151.117ZM23.9184 145.914C23.5824 145.914 23.309 146.027 23.098 146.254C22.891 146.48 22.7582 146.805 22.6996 147.227H25.0551V147.092C25.0473 146.717 24.9457 146.428 24.7504 146.225C24.5551 146.018 24.2777 145.914 23.9184 145.914ZM33.7996 148.697L34.6316 144.66H36.2664L34.6492 151H33.2313L32.0301 147.01L30.8289 151H29.4168L27.7996 144.66H29.4344L30.2605 148.691L31.4207 144.66H32.6453L33.7996 148.697ZM41.384 151C41.3059 150.848 41.2492 150.658 41.2141 150.432C40.8039 150.889 40.2707 151.117 39.6145 151.117C38.9934 151.117 38.4777 150.938 38.0676 150.578C37.6613 150.219 37.4582 149.766 37.4582 149.219C37.4582 148.547 37.7062 148.031 38.2023 147.672C38.7023 147.312 39.423 147.131 40.3645 147.127H41.1437V146.764C41.1437 146.471 41.0676 146.236 40.9152 146.061C40.7668 145.885 40.5305 145.797 40.2062 145.797C39.9211 145.797 39.6965 145.865 39.5324 146.002C39.3723 146.139 39.2922 146.326 39.2922 146.564H37.5988C37.5988 146.197 37.7121 145.857 37.9387 145.545C38.1652 145.232 38.4855 144.988 38.8996 144.812C39.3137 144.633 39.7785 144.543 40.2941 144.543C41.0754 144.543 41.6945 144.74 42.1516 145.135C42.6125 145.525 42.843 146.076 42.843 146.787V149.535C42.8469 150.137 42.9309 150.592 43.0949 150.9V151H41.384ZM39.9836 149.822C40.2336 149.822 40.4641 149.768 40.675 149.658C40.8859 149.545 41.0422 149.395 41.1437 149.207V148.117H40.5109C39.6633 148.117 39.2121 148.41 39.1574 148.996L39.1516 149.096C39.1516 149.307 39.2258 149.48 39.3742 149.617C39.5227 149.754 39.7258 149.822 39.9836 149.822ZM48.3063 146.248C48.0758 146.217 47.8727 146.201 47.6969 146.201C47.0563 146.201 46.6363 146.418 46.4371 146.852V151H44.7438V144.66H46.3434L46.3902 145.416C46.7301 144.834 47.2008 144.543 47.8023 144.543C47.9898 144.543 48.1656 144.568 48.3297 144.619L48.3063 146.248ZM49.3457 147.783C49.3457 146.795 49.5664 146.008 50.0078 145.422C50.4531 144.836 51.0605 144.543 51.8301 144.543C52.4473 144.543 52.957 144.773 53.3594 145.234V142H55.0586V151H53.5293L53.4473 150.326C53.0254 150.854 52.4824 151.117 51.8184 151.117C51.0723 151.117 50.4727 150.824 50.0195 150.238C49.5703 149.648 49.3457 148.83 49.3457 147.783ZM51.0391 147.906C51.0391 148.5 51.1426 148.955 51.3496 149.271C51.5566 149.588 51.8574 149.746 52.252 149.746C52.7754 149.746 53.1445 149.525 53.3594 149.084V146.582C53.1484 146.141 52.7832 145.92 52.2637 145.92C51.4473 145.92 51.0391 146.582 51.0391 147.906Z"
                      fill="#2C3B51"
                    />
                  </Svg>
                </View>
                <View
                  style={{
                    flex: 1,
                    flexDirection: "column",
                    alignSelf: "flex-start"
                  }}
                >
                  <Text style={styles.intro_text}>
                    {"\n"}
                    {"\n"}
                    {"\n"}The{" "}
                    <Text style={styles.intro_text_bold}>Reward</Text>{" "}
                    is what you receive. This can be something positive (good taste) or something negative going away (not being thirsty anymore).
                  </Text>

                  <Text style={styles.intro_text_grey}>
                    {"\n"}Leo scrolls through Instagram - and forgets the thoughts about this one hard task waiting for him at work.
                  </Text>
                </View>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }
}

{
  /* <View style={styles.middle}>
  <GreyInputButton label="Email" isBottom={false} />
  <GreyInputButton label="App Notifications" isBottom={true} />
</View>

<PrimaryButton
  label="Sign Up"
  onPress={() => {
    this.props.navigation.navigate("Exercice_1_2");
  }}
/> */
}
