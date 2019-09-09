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

export default class Exercice_5_4 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <View style={{backgroundColor: "#F4F1DE"}}>
        <StatusBar hidden />
        <ScrollView>
          <View>
            <TouchableWithoutFeedback
              style={styles.scroll}
              onPress={() => {
                this.props.navigation.navigate("Exercice_5_5");
              }}
            >
              <View style={styles.container_scroll}>
                <View style={{ flex: 1, justifyContent: "center" }}>
                  <Svg
                    width="211"
                    height="179"
                    viewBox="0 0 209 179"
                    fill="none"
                  >
                    <Circle
                      cx="102.5"
                      cy="89.5"
                      r="88.5"
                      stroke="#2C3B51"
                      stroke-width="2"
                    />
                    <Circle cx="33.5" cy="38.5" r="33.5" fill="#EBD1B1" />
                    <Circle cx="177" cy="43" r="26" fill="#F4F1DE" />
                    <Circle cx="176.5" cy="146.5" r="30.5" fill="#F4F1DE" />
                    <Path
                      d="M161.88 44.293C161.774 45.1953 161.44 45.8926 160.878 46.3848C160.319 46.873 159.575 47.1172 158.645 47.1172C157.638 47.1172 156.829 46.7559 156.22 46.0332C155.614 45.3105 155.311 44.3438 155.311 43.1328V42.3125C155.311 41.5195 155.452 40.8223 155.733 40.2207C156.018 39.6191 156.421 39.1582 156.94 38.8379C157.46 38.5137 158.061 38.3516 158.745 38.3516C159.651 38.3516 160.378 38.6055 160.925 39.1133C161.471 39.6172 161.79 40.3164 161.88 41.2109H160.749C160.651 40.5312 160.438 40.0391 160.11 39.7344C159.786 39.4297 159.331 39.2773 158.745 39.2773C158.026 39.2773 157.462 39.543 157.052 40.0742C156.645 40.6055 156.442 41.3613 156.442 42.3418V43.168C156.442 44.0938 156.636 44.8301 157.022 45.377C157.409 45.9238 157.95 46.1973 158.645 46.1973C159.27 46.1973 159.749 46.0566 160.081 45.7754C160.417 45.4902 160.639 44.9961 160.749 44.293H161.88ZM166.915 41.6328C166.751 41.6055 166.573 41.5918 166.382 41.5918C165.671 41.5918 165.189 41.8945 164.935 42.5V47H163.851V40.6602H164.905L164.923 41.3926C165.279 40.8262 165.782 40.543 166.435 40.543C166.646 40.543 166.806 40.5703 166.915 40.625V41.6328ZM172.197 47C172.134 46.875 172.084 46.6523 172.045 46.332C171.541 46.8555 170.939 47.1172 170.24 47.1172C169.615 47.1172 169.101 46.9414 168.699 46.5898C168.3 46.2344 168.101 45.7852 168.101 45.2422C168.101 44.582 168.351 44.0703 168.851 43.707C169.355 43.3398 170.062 43.1562 170.972 43.1562H172.027V42.6582C172.027 42.2793 171.914 41.9785 171.687 41.7559C171.461 41.5293 171.127 41.416 170.685 41.416C170.298 41.416 169.974 41.5137 169.713 41.709C169.451 41.9043 169.32 42.1406 169.32 42.418H168.23C168.23 42.1016 168.341 41.7969 168.564 41.5039C168.791 41.207 169.095 40.9727 169.478 40.8008C169.865 40.6289 170.289 40.543 170.75 40.543C171.48 40.543 172.052 40.7266 172.466 41.0938C172.88 41.457 173.095 41.959 173.111 42.5996V45.5176C173.111 46.0996 173.185 46.5625 173.334 46.9062V47H172.197ZM170.398 46.1738C170.738 46.1738 171.06 46.0859 171.365 45.9102C171.67 45.7344 171.89 45.5059 172.027 45.2246V43.9238H171.177C169.849 43.9238 169.185 44.3125 169.185 45.0898C169.185 45.4297 169.298 45.6953 169.525 45.8867C169.752 46.0781 170.043 46.1738 170.398 46.1738ZM177.408 45.5293L178.979 40.6602H180.086L177.812 47H176.986L174.689 40.6602H175.797L177.408 45.5293ZM182.907 47H181.823V40.6602H182.907V47ZM181.735 38.9785C181.735 38.8027 181.788 38.6543 181.893 38.5332C182.002 38.4121 182.163 38.3516 182.373 38.3516C182.584 38.3516 182.745 38.4121 182.854 38.5332C182.963 38.6543 183.018 38.8027 183.018 38.9785C183.018 39.1543 182.963 39.3008 182.854 39.418C182.745 39.5352 182.584 39.5938 182.373 39.5938C182.163 39.5938 182.002 39.5352 181.893 39.418C181.788 39.3008 181.735 39.1543 181.735 38.9785ZM186.272 40.6602L186.307 41.457C186.792 40.8477 187.425 40.543 188.206 40.543C189.546 40.543 190.221 41.2988 190.233 42.8105V47H189.149V42.8047C189.145 42.3477 189.04 42.0098 188.833 41.791C188.63 41.5723 188.311 41.4629 187.878 41.4629C187.526 41.4629 187.218 41.5566 186.952 41.7441C186.686 41.9316 186.479 42.1777 186.331 42.4824V47H185.247V40.6602H186.272ZM192.21 43.7773C192.21 42.7891 192.439 42.0039 192.896 41.4219C193.353 40.8359 193.958 40.543 194.712 40.543C195.486 40.543 196.089 40.8164 196.523 41.3633L196.575 40.6602H197.566V46.8477C197.566 47.668 197.321 48.3145 196.833 48.7871C196.349 49.2598 195.696 49.4961 194.876 49.4961C194.419 49.4961 193.972 49.3984 193.534 49.2031C193.097 49.0078 192.763 48.7402 192.532 48.4004L193.095 47.75C193.56 48.3242 194.128 48.6113 194.8 48.6113C195.327 48.6113 195.737 48.4629 196.03 48.166C196.327 47.8691 196.476 47.4512 196.476 46.9121V46.3672C196.042 46.8672 195.45 47.1172 194.7 47.1172C193.958 47.1172 193.357 46.8184 192.896 46.2207C192.439 45.623 192.21 44.8086 192.21 43.7773ZM193.3 43.9004C193.3 44.6152 193.446 45.1777 193.739 45.5879C194.032 45.9941 194.443 46.1973 194.97 46.1973C195.654 46.1973 196.155 45.8867 196.476 45.2656V42.3711C196.144 41.7656 195.646 41.4629 194.982 41.4629C194.454 41.4629 194.042 41.668 193.745 42.0781C193.448 42.4883 193.3 43.0957 193.3 43.9004Z"
                      fill="#2C3B51"
                    />
                    <Path
                      d="M151.67 147.549H149.666V151H148.535V142.469H151.359C152.32 142.469 153.058 142.688 153.574 143.125C154.093 143.562 154.353 144.199 154.353 145.035C154.353 145.566 154.209 146.029 153.92 146.424C153.634 146.818 153.236 147.113 152.724 147.309L154.728 150.93V151H153.521L151.67 147.549ZM149.666 146.629H151.394C151.953 146.629 152.396 146.484 152.724 146.195C153.056 145.906 153.222 145.52 153.222 145.035C153.222 144.508 153.064 144.104 152.748 143.822C152.435 143.541 151.982 143.398 151.388 143.395H149.666V146.629ZM158.996 151.117C158.137 151.117 157.438 150.836 156.898 150.273C156.359 149.707 156.09 148.951 156.09 148.006V147.807C156.09 147.178 156.209 146.617 156.447 146.125C156.689 145.629 157.025 145.242 157.455 144.965C157.889 144.684 158.357 144.543 158.861 144.543C159.686 144.543 160.326 144.814 160.783 145.357C161.24 145.9 161.469 146.678 161.469 147.689V148.141H157.174C157.189 148.766 157.371 149.271 157.719 149.658C158.07 150.041 158.516 150.232 159.055 150.232C159.438 150.232 159.762 150.154 160.027 149.998C160.293 149.842 160.525 149.635 160.725 149.377L161.387 149.893C160.855 150.709 160.059 151.117 158.996 151.117ZM158.861 145.434C158.424 145.434 158.057 145.594 157.76 145.914C157.463 146.23 157.279 146.676 157.209 147.25H160.385V147.168C160.354 146.617 160.205 146.191 159.939 145.891C159.674 145.586 159.314 145.434 158.861 145.434ZM167.02 149.318C167.02 149.025 166.909 148.799 166.686 148.639C166.467 148.475 166.082 148.334 165.532 148.217C164.985 148.1 164.549 147.959 164.225 147.795C163.905 147.631 163.666 147.436 163.51 147.209C163.358 146.982 163.282 146.713 163.282 146.4C163.282 145.881 163.5 145.441 163.938 145.082C164.379 144.723 164.942 144.543 165.625 144.543C166.344 144.543 166.926 144.729 167.371 145.1C167.821 145.471 168.045 145.945 168.045 146.523H166.955C166.955 146.227 166.829 145.971 166.575 145.756C166.325 145.541 166.008 145.434 165.625 145.434C165.231 145.434 164.922 145.52 164.7 145.691C164.477 145.863 164.366 146.088 164.366 146.365C164.366 146.627 164.469 146.824 164.676 146.957C164.883 147.09 165.256 147.217 165.795 147.338C166.338 147.459 166.778 147.604 167.114 147.771C167.45 147.939 167.698 148.143 167.858 148.381C168.022 148.615 168.104 148.902 168.104 149.242C168.104 149.809 167.877 150.264 167.424 150.607C166.971 150.947 166.383 151.117 165.661 151.117C165.153 151.117 164.704 151.027 164.313 150.848C163.922 150.668 163.616 150.418 163.393 150.098C163.174 149.773 163.065 149.424 163.065 149.049H164.149C164.168 149.412 164.313 149.701 164.582 149.916C164.856 150.127 165.215 150.232 165.661 150.232C166.071 150.232 166.399 150.15 166.645 149.986C166.895 149.818 167.02 149.596 167.02 149.318ZM175.471 147.9C175.471 148.865 175.251 149.643 174.809 150.232C174.368 150.822 173.77 151.117 173.016 151.117C172.247 151.117 171.641 150.873 171.2 150.385V153.438H170.116V144.66H171.106L171.159 145.363C171.6 144.816 172.214 144.543 172.999 144.543C173.761 144.543 174.362 144.83 174.804 145.404C175.249 145.979 175.471 146.777 175.471 147.801V147.9ZM174.387 147.777C174.387 147.062 174.235 146.498 173.93 146.084C173.626 145.67 173.208 145.463 172.677 145.463C172.02 145.463 171.528 145.754 171.2 146.336V149.365C171.524 149.943 172.02 150.232 172.688 150.232C173.208 150.232 173.62 150.027 173.925 149.617C174.233 149.203 174.387 148.59 174.387 147.777ZM177.167 147.771C177.167 147.15 177.288 146.592 177.53 146.096C177.777 145.6 178.116 145.217 178.55 144.947C178.987 144.678 179.486 144.543 180.044 144.543C180.907 144.543 181.605 144.842 182.136 145.439C182.671 146.037 182.939 146.832 182.939 147.824V147.9C182.939 148.518 182.82 149.072 182.581 149.564C182.347 150.053 182.009 150.434 181.568 150.707C181.13 150.98 180.626 151.117 180.056 151.117C179.196 151.117 178.499 150.818 177.964 150.221C177.433 149.623 177.167 148.832 177.167 147.848V147.771ZM178.257 147.9C178.257 148.604 178.419 149.168 178.743 149.594C179.071 150.02 179.509 150.232 180.056 150.232C180.607 150.232 181.044 150.018 181.368 149.588C181.693 149.154 181.855 148.549 181.855 147.771C181.855 147.076 181.689 146.514 181.357 146.084C181.029 145.65 180.591 145.434 180.044 145.434C179.509 145.434 179.077 145.646 178.749 146.072C178.421 146.498 178.257 147.107 178.257 147.9ZM185.923 144.66L185.959 145.457C186.443 144.848 187.076 144.543 187.857 144.543C189.197 144.543 189.873 145.299 189.884 146.811V151H188.8V146.805C188.796 146.348 188.691 146.01 188.484 145.791C188.281 145.572 187.963 145.463 187.529 145.463C187.177 145.463 186.869 145.557 186.603 145.744C186.338 145.932 186.13 146.178 185.982 146.482V151H184.898V144.66H185.923ZM195.811 149.318C195.811 149.025 195.699 148.799 195.477 148.639C195.258 148.475 194.873 148.334 194.322 148.217C193.775 148.1 193.34 147.959 193.016 147.795C192.695 147.631 192.457 147.436 192.301 147.209C192.148 146.982 192.072 146.713 192.072 146.4C192.072 145.881 192.291 145.441 192.729 145.082C193.17 144.723 193.732 144.543 194.416 144.543C195.135 144.543 195.717 144.729 196.162 145.1C196.611 145.471 196.836 145.945 196.836 146.523H195.746C195.746 146.227 195.619 145.971 195.365 145.756C195.115 145.541 194.799 145.434 194.416 145.434C194.021 145.434 193.713 145.52 193.49 145.691C193.268 145.863 193.156 146.088 193.156 146.365C193.156 146.627 193.26 146.824 193.467 146.957C193.674 147.09 194.047 147.217 194.586 147.338C195.129 147.459 195.568 147.604 195.904 147.771C196.24 147.939 196.488 148.143 196.648 148.381C196.812 148.615 196.895 148.902 196.895 149.242C196.895 149.809 196.668 150.264 196.215 150.607C195.762 150.947 195.174 151.117 194.451 151.117C193.943 151.117 193.494 151.027 193.104 150.848C192.713 150.668 192.406 150.418 192.184 150.098C191.965 149.773 191.855 149.424 191.855 149.049H192.939C192.959 149.412 193.104 149.701 193.373 149.916C193.646 150.127 194.006 150.232 194.451 150.232C194.861 150.232 195.189 150.15 195.436 149.986C195.686 149.818 195.811 149.596 195.811 149.318ZM201.537 151.117C200.678 151.117 199.979 150.836 199.44 150.273C198.901 149.707 198.631 148.951 198.631 148.006V147.807C198.631 147.178 198.75 146.617 198.989 146.125C199.231 145.629 199.567 145.242 199.996 144.965C200.43 144.684 200.899 144.543 201.403 144.543C202.227 144.543 202.868 144.814 203.325 145.357C203.782 145.9 204.01 146.678 204.01 147.689V148.141H199.715C199.731 148.766 199.912 149.271 200.26 149.658C200.612 150.041 201.057 150.232 201.596 150.232C201.979 150.232 202.303 150.154 202.569 149.998C202.834 149.842 203.067 149.635 203.266 149.377L203.928 149.893C203.397 150.709 202.6 151.117 201.537 151.117ZM201.403 145.434C200.965 145.434 200.598 145.594 200.301 145.914C200.004 146.23 199.821 146.676 199.75 147.25H202.926V147.168C202.895 146.617 202.746 146.191 202.481 145.891C202.215 145.586 201.856 145.434 201.403 145.434Z"
                      fill="#2C3B51"
                    />
                    <Path
                      d="M19.284 35.8926H16.6707V43H14.9129V35.8926H12.3348V34.4688H19.284V35.8926ZM23.9563 38.248C23.7258 38.2168 23.5227 38.2012 23.3469 38.2012C22.7063 38.2012 22.2863 38.418 22.0871 38.8516V43H20.3938V36.6602H21.9934L22.0402 37.416C22.3801 36.834 22.8508 36.543 23.4523 36.543C23.6398 36.543 23.8156 36.5684 23.9797 36.6191L23.9563 38.248ZM27.1637 43H25.4645V36.6602H27.1637V43ZM25.3648 35.0195C25.3648 34.7656 25.4488 34.5566 25.6168 34.3926C25.7887 34.2285 26.0211 34.1465 26.3141 34.1465C26.6031 34.1465 26.8336 34.2285 27.0055 34.3926C27.1773 34.5566 27.2633 34.7656 27.2633 35.0195C27.2633 35.2773 27.1754 35.4883 26.9996 35.6523C26.8277 35.8164 26.5992 35.8984 26.3141 35.8984C26.0289 35.8984 25.7984 35.8164 25.6227 35.6523C25.4508 35.4883 25.3648 35.2773 25.3648 35.0195ZM28.918 39.7832C28.918 38.8105 29.1484 38.0273 29.6094 37.4336C30.0742 36.8398 30.6992 36.543 31.4844 36.543C32.1797 36.543 32.7207 36.7812 33.1074 37.2578L33.1777 36.6602H34.7129V42.7891C34.7129 43.3438 34.5859 43.8262 34.332 44.2363C34.082 44.6465 33.7285 44.959 33.2715 45.1738C32.8145 45.3887 32.2793 45.4961 31.666 45.4961C31.2012 45.4961 30.748 45.4023 30.3066 45.2148C29.8652 45.0312 29.5312 44.793 29.3047 44.5L30.0547 43.4688C30.4766 43.9414 30.9883 44.1777 31.5898 44.1777C32.0391 44.1777 32.3887 44.0566 32.6387 43.8145C32.8887 43.5762 33.0137 43.2363 33.0137 42.7949V42.4551C32.623 42.8965 32.1094 43.1172 31.4727 43.1172C30.7109 43.1172 30.0938 42.8203 29.6211 42.2266C29.1523 41.6289 28.918 40.8379 28.918 39.8535V39.7832ZM30.6113 39.9062C30.6113 40.4805 30.7266 40.9316 30.957 41.2598C31.1875 41.584 31.5039 41.7461 31.9062 41.7461C32.4219 41.7461 32.791 41.5527 33.0137 41.166V38.5C32.7871 38.1133 32.4219 37.9199 31.918 37.9199C31.5117 37.9199 31.1914 38.0859 30.957 38.418C30.7266 38.75 30.6113 39.2461 30.6113 39.9062ZM36.3734 39.7832C36.3734 38.8105 36.6039 38.0273 37.0648 37.4336C37.5297 36.8398 38.1547 36.543 38.9398 36.543C39.6352 36.543 40.1762 36.7812 40.5629 37.2578L40.6332 36.6602H42.1684V42.7891C42.1684 43.3438 42.0414 43.8262 41.7875 44.2363C41.5375 44.6465 41.184 44.959 40.727 45.1738C40.2699 45.3887 39.7348 45.4961 39.1215 45.4961C38.6566 45.4961 38.2035 45.4023 37.7621 45.2148C37.3207 45.0312 36.9867 44.793 36.7602 44.5L37.5102 43.4688C37.932 43.9414 38.4438 44.1777 39.0453 44.1777C39.4945 44.1777 39.8441 44.0566 40.0941 43.8145C40.3441 43.5762 40.4691 43.2363 40.4691 42.7949V42.4551C40.0785 42.8965 39.5648 43.1172 38.9281 43.1172C38.1664 43.1172 37.5492 42.8203 37.0766 42.2266C36.6078 41.6289 36.3734 40.8379 36.3734 39.8535V39.7832ZM38.0668 39.9062C38.0668 40.4805 38.182 40.9316 38.4125 41.2598C38.643 41.584 38.9594 41.7461 39.3617 41.7461C39.8773 41.7461 40.2465 41.5527 40.4691 41.166V38.5C40.2426 38.1133 39.8773 37.9199 39.3734 37.9199C38.9672 37.9199 38.6469 38.0859 38.4125 38.418C38.182 38.75 38.0668 39.2461 38.0668 39.9062ZM46.993 43.1172C46.0633 43.1172 45.3055 42.832 44.7195 42.2617C44.1375 41.6914 43.8465 40.9316 43.8465 39.9824V39.8184C43.8465 39.1816 43.9695 38.6133 44.2156 38.1133C44.4617 37.6094 44.8094 37.2227 45.2586 36.9531C45.7117 36.6797 46.2273 36.543 46.8055 36.543C47.6727 36.543 48.3543 36.8164 48.8504 37.3633C49.3504 37.9102 49.6004 38.6855 49.6004 39.6895V40.3809H45.5633C45.618 40.7949 45.782 41.127 46.0555 41.377C46.3328 41.627 46.6824 41.752 47.1043 41.752C47.7566 41.752 48.2664 41.5156 48.6336 41.043L49.4656 41.9746C49.2117 42.334 48.868 42.6152 48.4344 42.8184C48.0008 43.0176 47.5203 43.1172 46.993 43.1172ZM46.7996 37.9141C46.4637 37.9141 46.1902 38.0273 45.9793 38.2539C45.7723 38.4805 45.6395 38.8047 45.5809 39.2266H47.9363V39.0918C47.9285 38.7168 47.827 38.4277 47.6316 38.2246C47.4363 38.0176 47.159 37.9141 46.7996 37.9141ZM54.7297 38.248C54.4992 38.2168 54.2961 38.2012 54.1203 38.2012C53.4797 38.2012 53.0598 38.418 52.8605 38.8516V43H51.1672V36.6602H52.7668L52.8137 37.416C53.1535 36.834 53.6242 36.543 54.2258 36.543C54.4133 36.543 54.5891 36.5684 54.7531 36.6191L54.7297 38.248Z"
                      fill="#2C3B51"
                    />
                    <Ellipse
                      cx="33"
                      cy="144.5"
                      rx="26"
                      ry="26.5"
                      fill="#F4F1DE"
                    />
                    <Path
                      d="M12.6035 147.549H10.5996V151H9.46875V142.469H12.293C13.2539 142.469 13.9922 142.688 14.5078 143.125C15.0273 143.562 15.2871 144.199 15.2871 145.035C15.2871 145.566 15.1426 146.029 14.8535 146.424C14.5684 146.818 14.1699 147.113 13.6582 147.309L15.6621 150.93V151H14.4551L12.6035 147.549ZM10.5996 146.629H12.3281C12.8867 146.629 13.3301 146.484 13.6582 146.195C13.9902 145.906 14.1562 145.52 14.1562 145.035C14.1562 144.508 13.998 144.104 13.6816 143.822C13.3691 143.541 12.916 143.398 12.3223 143.395H10.5996V146.629ZM19.9301 151.117C19.0707 151.117 18.3715 150.836 17.8324 150.273C17.2934 149.707 17.0238 148.951 17.0238 148.006V147.807C17.0238 147.178 17.143 146.617 17.3813 146.125C17.6234 145.629 17.9594 145.242 18.3891 144.965C18.8227 144.684 19.2914 144.543 19.7953 144.543C20.6195 144.543 21.2602 144.814 21.7172 145.357C22.1742 145.9 22.4027 146.678 22.4027 147.689V148.141H18.1078C18.1234 148.766 18.3051 149.271 18.6527 149.658C19.0043 150.041 19.4496 150.232 19.9887 150.232C20.3715 150.232 20.6957 150.154 20.9613 149.998C21.227 149.842 21.4594 149.635 21.6586 149.377L22.3207 149.893C21.7895 150.709 20.9926 151.117 19.9301 151.117ZM19.7953 145.434C19.3578 145.434 18.9906 145.594 18.6938 145.914C18.3969 146.23 18.2133 146.676 18.143 147.25H21.3188V147.168C21.2875 146.617 21.1391 146.191 20.8734 145.891C20.6078 145.586 20.2484 145.434 19.7953 145.434ZM29.8758 149.506L31.0945 144.66H32.1785L30.3328 151H29.4539L27.9129 146.195L26.4129 151H25.534L23.6941 144.66H24.7723L26.0203 149.406L27.4969 144.66H28.3699L29.8758 149.506ZM37.8 151C37.7375 150.875 37.6867 150.652 37.6477 150.332C37.1437 150.855 36.5422 151.117 35.843 151.117C35.218 151.117 34.7043 150.941 34.302 150.59C33.9035 150.234 33.7043 149.785 33.7043 149.242C33.7043 148.582 33.9543 148.07 34.4543 147.707C34.9582 147.34 35.6652 147.156 36.5754 147.156H37.6301V146.658C37.6301 146.279 37.5168 145.979 37.2902 145.756C37.0637 145.529 36.7297 145.416 36.2883 145.416C35.9016 145.416 35.5773 145.514 35.3156 145.709C35.0539 145.904 34.923 146.141 34.923 146.418H33.8332C33.8332 146.102 33.9445 145.797 34.1672 145.504C34.3937 145.207 34.6984 144.973 35.0812 144.801C35.468 144.629 35.8918 144.543 36.3527 144.543C37.0832 144.543 37.6555 144.727 38.0695 145.094C38.4836 145.457 38.6984 145.959 38.7141 146.6V149.518C38.7141 150.1 38.7883 150.562 38.9367 150.906V151H37.8ZM36.0012 150.174C36.341 150.174 36.6633 150.086 36.968 149.91C37.2727 149.734 37.4934 149.506 37.6301 149.225V147.924H36.7805C35.4523 147.924 34.7883 148.312 34.7883 149.09C34.7883 149.43 34.9016 149.695 35.1281 149.887C35.3547 150.078 35.6457 150.174 36.0012 150.174ZM44.0777 145.633C43.9137 145.605 43.7359 145.592 43.5445 145.592C42.8336 145.592 42.3512 145.895 42.0973 146.5V151H41.0133V144.66H42.068L42.0855 145.393C42.441 144.826 42.9449 144.543 43.5973 144.543C43.8082 144.543 43.9684 144.57 44.0777 144.625V145.633ZM45.2988 147.777C45.2988 146.805 45.5293 146.023 45.9902 145.434C46.4512 144.84 47.0547 144.543 47.8008 144.543C48.543 144.543 49.1309 144.797 49.5645 145.305V142H50.6484V151H49.6523L49.5996 150.32C49.166 150.852 48.5625 151.117 47.7891 151.117C47.0547 151.117 46.4551 150.816 45.9902 150.215C45.5293 149.613 45.2988 148.828 45.2988 147.859V147.777ZM46.3828 147.9C46.3828 148.619 46.5312 149.182 46.8281 149.588C47.125 149.994 47.5352 150.197 48.0586 150.197C48.7461 150.197 49.248 149.889 49.5645 149.271V146.359C49.2402 145.762 48.7422 145.463 48.0703 145.463C47.5391 145.463 47.125 145.668 46.8281 146.078C46.5312 146.488 46.3828 147.096 46.3828 147.9Z"
                      fill="#2C3B51"
                    />
                  </Svg>
                </View>
                <View style={{ flex: 1, flexDirection: "column", alignSelf: 'flex-start' }}>
                <Text style={styles.intro_text}>
                    {"\n"}{"\n"}
                    {"\n"}The{" "}
                    <Text style={styles.intro_text_bold}>
                    Trigger
                    </Text>{" "}
                    initiates the habit.{"\n"}{"\n"}
                  </Text>

                  <Text style={styles.intro_text_grey}>
                    {"\n"}Leo enters the metro.
                  </Text>
                </View>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </ScrollView>
      </View>
    );
  }
}