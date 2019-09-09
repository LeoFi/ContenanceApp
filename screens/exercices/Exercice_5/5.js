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

export default class Exercice_5_5 extends React.Component {
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
                this.props.navigation.navigate("Exercice_5_6");
              }}
            >
              <View style={styles.container_scroll}>
                <View style={{ flex: 1, justifyContent: "center" }}>
                  <Svg
                    width="209"
                    height="179"
                    viewBox="0 0 209 179"
                    fill="none"
                  >
                    <Circle
                      cx="100.5"
                      cy="89.5"
                      r="88.5"
                      stroke="#2C3B51"
                      stroke-width="2"
                    />
                    <Circle cx="32" cy="39" r="26" fill="#F4F1DE" />
                    <Circle cx="174.5" cy="146.5" r="30.5" fill="#F4F1DE" />
                    <Circle cx="172.5" cy="42.5" r="33.5" fill="#EBD1B1" />
                    <Path
                      d="M159.54 44.1582C159.473 45.0762 159.134 45.7988 158.52 46.3262C157.911 46.8535 157.106 47.1172 156.106 47.1172C155.013 47.1172 154.151 46.75 153.522 46.0156C152.897 45.2773 152.585 44.2656 152.585 42.9805V42.459C152.585 41.6387 152.729 40.916 153.018 40.291C153.307 39.666 153.72 39.1875 154.255 38.8555C154.794 38.5195 155.419 38.3516 156.13 38.3516C157.114 38.3516 157.907 38.6152 158.509 39.1426C159.11 39.6699 159.458 40.4102 159.552 41.3633H157.794C157.751 40.8125 157.596 40.4141 157.331 40.168C157.069 39.918 156.669 39.793 156.13 39.793C155.544 39.793 155.104 40.0039 154.811 40.4258C154.522 40.8438 154.374 41.4941 154.366 42.377V43.0215C154.366 43.9434 154.505 44.6172 154.782 45.043C155.063 45.4688 155.505 45.6816 156.106 45.6816C156.649 45.6816 157.054 45.5586 157.319 45.3125C157.589 45.0625 157.743 44.6777 157.782 44.1582H159.54ZM164.745 42.248C164.515 42.2168 164.312 42.2012 164.136 42.2012C163.495 42.2012 163.075 42.418 162.876 42.8516V47H161.183V40.6602H162.782L162.829 41.416C163.169 40.834 163.64 40.543 164.241 40.543C164.429 40.543 164.605 40.5684 164.769 40.6191L164.745 42.248ZM169.664 47C169.586 46.8477 169.529 46.6582 169.494 46.4316C169.084 46.8887 168.55 47.1172 167.894 47.1172C167.273 47.1172 166.757 46.9375 166.347 46.5781C165.941 46.2188 165.738 45.7656 165.738 45.2188C165.738 44.5469 165.986 44.0312 166.482 43.6719C166.982 43.3125 167.703 43.1309 168.644 43.127H169.423V42.7637C169.423 42.4707 169.347 42.2363 169.195 42.0605C169.046 41.8848 168.81 41.7969 168.486 41.7969C168.201 41.7969 167.976 41.8652 167.812 42.002C167.652 42.1387 167.572 42.3262 167.572 42.5645H165.879C165.879 42.1973 165.992 41.8574 166.218 41.5449C166.445 41.2324 166.765 40.9883 167.179 40.8125C167.593 40.6328 168.058 40.543 168.574 40.543C169.355 40.543 169.974 40.7402 170.431 41.1348C170.892 41.5254 171.123 42.0762 171.123 42.7871V45.5352C171.127 46.1367 171.211 46.5918 171.375 46.9004V47H169.664ZM168.263 45.8223C168.513 45.8223 168.744 45.7676 168.955 45.6582C169.166 45.5449 169.322 45.3945 169.423 45.207V44.1172H168.791C167.943 44.1172 167.492 44.4102 167.437 44.9961L167.431 45.0957C167.431 45.3066 167.505 45.4805 167.654 45.6172C167.802 45.7539 168.005 45.8223 168.263 45.8223ZM175.303 44.9316L176.48 40.6602H178.25L176.111 47H174.494L172.355 40.6602H174.125L175.303 44.9316ZM181.387 47H179.688V40.6602H181.387V47ZM179.588 39.0195C179.588 38.7656 179.672 38.5566 179.84 38.3926C180.012 38.2285 180.245 38.1465 180.538 38.1465C180.827 38.1465 181.057 38.2285 181.229 38.3926C181.401 38.5566 181.487 38.7656 181.487 39.0195C181.487 39.2773 181.399 39.4883 181.223 39.6523C181.051 39.8164 180.823 39.8984 180.538 39.8984C180.252 39.8984 180.022 39.8164 179.846 39.6523C179.674 39.4883 179.588 39.2773 179.588 39.0195ZM184.946 40.6602L184.999 41.3926C185.452 40.8262 186.059 40.543 186.821 40.543C187.493 40.543 187.993 40.7402 188.321 41.1348C188.649 41.5293 188.817 42.1191 188.825 42.9043V47H187.132V42.9453C187.132 42.5859 187.054 42.3262 186.897 42.166C186.741 42.002 186.481 41.9199 186.118 41.9199C185.641 41.9199 185.284 42.123 185.046 42.5293V47H183.352V40.6602H184.946ZM190.468 43.7832C190.468 42.8105 190.698 42.0273 191.159 41.4336C191.624 40.8398 192.249 40.543 193.034 40.543C193.73 40.543 194.271 40.7812 194.657 41.2578L194.728 40.6602H196.263V46.7891C196.263 47.3438 196.136 47.8262 195.882 48.2363C195.632 48.6465 195.279 48.959 194.821 49.1738C194.364 49.3887 193.829 49.4961 193.216 49.4961C192.751 49.4961 192.298 49.4023 191.857 49.2148C191.415 49.0312 191.081 48.793 190.855 48.5L191.605 47.4688C192.027 47.9414 192.538 48.1777 193.14 48.1777C193.589 48.1777 193.939 48.0566 194.189 47.8145C194.439 47.5762 194.564 47.2363 194.564 46.7949V46.4551C194.173 46.8965 193.659 47.1172 193.023 47.1172C192.261 47.1172 191.644 46.8203 191.171 46.2266C190.702 45.6289 190.468 44.8379 190.468 43.8535V43.7832ZM192.161 43.9062C192.161 44.4805 192.277 44.9316 192.507 45.2598C192.737 45.584 193.054 45.7461 193.456 45.7461C193.972 45.7461 194.341 45.5527 194.564 45.166V42.5C194.337 42.1133 193.972 41.9199 193.468 41.9199C193.062 41.9199 192.741 42.0859 192.507 42.418C192.277 42.75 192.161 43.2461 192.161 43.9062Z"
                      fill="#2C3B51"
                    />
                    <Path
                      d="M149.67 147.549H147.666V151H146.535V142.469H149.359C150.32 142.469 151.058 142.688 151.574 143.125C152.093 143.562 152.353 144.199 152.353 145.035C152.353 145.566 152.209 146.029 151.92 146.424C151.634 146.818 151.236 147.113 150.724 147.309L152.728 150.93V151H151.521L149.67 147.549ZM147.666 146.629H149.394C149.953 146.629 150.396 146.484 150.724 146.195C151.056 145.906 151.222 145.52 151.222 145.035C151.222 144.508 151.064 144.104 150.748 143.822C150.435 143.541 149.982 143.398 149.388 143.395H147.666V146.629ZM156.996 151.117C156.137 151.117 155.438 150.836 154.898 150.273C154.359 149.707 154.09 148.951 154.09 148.006V147.807C154.09 147.178 154.209 146.617 154.447 146.125C154.689 145.629 155.025 145.242 155.455 144.965C155.889 144.684 156.357 144.543 156.861 144.543C157.686 144.543 158.326 144.814 158.783 145.357C159.24 145.9 159.469 146.678 159.469 147.689V148.141H155.174C155.189 148.766 155.371 149.271 155.719 149.658C156.07 150.041 156.516 150.232 157.055 150.232C157.438 150.232 157.762 150.154 158.027 149.998C158.293 149.842 158.525 149.635 158.725 149.377L159.387 149.893C158.855 150.709 158.059 151.117 156.996 151.117ZM156.861 145.434C156.424 145.434 156.057 145.594 155.76 145.914C155.463 146.23 155.279 146.676 155.209 147.25H158.385V147.168C158.354 146.617 158.205 146.191 157.939 145.891C157.674 145.586 157.314 145.434 156.861 145.434ZM165.02 149.318C165.02 149.025 164.909 148.799 164.686 148.639C164.467 148.475 164.082 148.334 163.532 148.217C162.985 148.1 162.549 147.959 162.225 147.795C161.905 147.631 161.666 147.436 161.51 147.209C161.358 146.982 161.282 146.713 161.282 146.4C161.282 145.881 161.5 145.441 161.938 145.082C162.379 144.723 162.942 144.543 163.625 144.543C164.344 144.543 164.926 144.729 165.371 145.1C165.821 145.471 166.045 145.945 166.045 146.523H164.955C164.955 146.227 164.829 145.971 164.575 145.756C164.325 145.541 164.008 145.434 163.625 145.434C163.231 145.434 162.922 145.52 162.7 145.691C162.477 145.863 162.366 146.088 162.366 146.365C162.366 146.627 162.469 146.824 162.676 146.957C162.883 147.09 163.256 147.217 163.795 147.338C164.338 147.459 164.778 147.604 165.114 147.771C165.45 147.939 165.698 148.143 165.858 148.381C166.022 148.615 166.104 148.902 166.104 149.242C166.104 149.809 165.877 150.264 165.424 150.607C164.971 150.947 164.383 151.117 163.661 151.117C163.153 151.117 162.704 151.027 162.313 150.848C161.922 150.668 161.616 150.418 161.393 150.098C161.174 149.773 161.065 149.424 161.065 149.049H162.149C162.168 149.412 162.313 149.701 162.582 149.916C162.856 150.127 163.215 150.232 163.661 150.232C164.071 150.232 164.399 150.15 164.645 149.986C164.895 149.818 165.02 149.596 165.02 149.318ZM173.471 147.9C173.471 148.865 173.251 149.643 172.809 150.232C172.368 150.822 171.77 151.117 171.016 151.117C170.247 151.117 169.641 150.873 169.2 150.385V153.438H168.116V144.66H169.106L169.159 145.363C169.6 144.816 170.214 144.543 170.999 144.543C171.761 144.543 172.362 144.83 172.804 145.404C173.249 145.979 173.471 146.777 173.471 147.801V147.9ZM172.387 147.777C172.387 147.062 172.235 146.498 171.93 146.084C171.626 145.67 171.208 145.463 170.677 145.463C170.02 145.463 169.528 145.754 169.2 146.336V149.365C169.524 149.943 170.02 150.232 170.688 150.232C171.208 150.232 171.62 150.027 171.925 149.617C172.233 149.203 172.387 148.59 172.387 147.777ZM175.167 147.771C175.167 147.15 175.288 146.592 175.53 146.096C175.777 145.6 176.116 145.217 176.55 144.947C176.987 144.678 177.486 144.543 178.044 144.543C178.907 144.543 179.605 144.842 180.136 145.439C180.671 146.037 180.939 146.832 180.939 147.824V147.9C180.939 148.518 180.82 149.072 180.581 149.564C180.347 150.053 180.009 150.434 179.568 150.707C179.13 150.98 178.626 151.117 178.056 151.117C177.196 151.117 176.499 150.818 175.964 150.221C175.433 149.623 175.167 148.832 175.167 147.848V147.771ZM176.257 147.9C176.257 148.604 176.419 149.168 176.743 149.594C177.071 150.02 177.509 150.232 178.056 150.232C178.607 150.232 179.044 150.018 179.368 149.588C179.693 149.154 179.855 148.549 179.855 147.771C179.855 147.076 179.689 146.514 179.357 146.084C179.029 145.65 178.591 145.434 178.044 145.434C177.509 145.434 177.077 145.646 176.749 146.072C176.421 146.498 176.257 147.107 176.257 147.9ZM183.923 144.66L183.959 145.457C184.443 144.848 185.076 144.543 185.857 144.543C187.197 144.543 187.873 145.299 187.884 146.811V151H186.8V146.805C186.796 146.348 186.691 146.01 186.484 145.791C186.281 145.572 185.963 145.463 185.529 145.463C185.177 145.463 184.869 145.557 184.603 145.744C184.338 145.932 184.13 146.178 183.982 146.482V151H182.898V144.66H183.923ZM193.811 149.318C193.811 149.025 193.699 148.799 193.477 148.639C193.258 148.475 192.873 148.334 192.322 148.217C191.775 148.1 191.34 147.959 191.016 147.795C190.695 147.631 190.457 147.436 190.301 147.209C190.148 146.982 190.072 146.713 190.072 146.4C190.072 145.881 190.291 145.441 190.729 145.082C191.17 144.723 191.732 144.543 192.416 144.543C193.135 144.543 193.717 144.729 194.162 145.1C194.611 145.471 194.836 145.945 194.836 146.523H193.746C193.746 146.227 193.619 145.971 193.365 145.756C193.115 145.541 192.799 145.434 192.416 145.434C192.021 145.434 191.713 145.52 191.49 145.691C191.268 145.863 191.156 146.088 191.156 146.365C191.156 146.627 191.26 146.824 191.467 146.957C191.674 147.09 192.047 147.217 192.586 147.338C193.129 147.459 193.568 147.604 193.904 147.771C194.24 147.939 194.488 148.143 194.648 148.381C194.812 148.615 194.895 148.902 194.895 149.242C194.895 149.809 194.668 150.264 194.215 150.607C193.762 150.947 193.174 151.117 192.451 151.117C191.943 151.117 191.494 151.027 191.104 150.848C190.713 150.668 190.406 150.418 190.184 150.098C189.965 149.773 189.855 149.424 189.855 149.049H190.939C190.959 149.412 191.104 149.701 191.373 149.916C191.646 150.127 192.006 150.232 192.451 150.232C192.861 150.232 193.189 150.15 193.436 149.986C193.686 149.818 193.811 149.596 193.811 149.318ZM199.537 151.117C198.678 151.117 197.979 150.836 197.44 150.273C196.901 149.707 196.631 148.951 196.631 148.006V147.807C196.631 147.178 196.75 146.617 196.989 146.125C197.231 145.629 197.567 145.242 197.996 144.965C198.43 144.684 198.899 144.543 199.403 144.543C200.227 144.543 200.868 144.814 201.325 145.357C201.782 145.9 202.01 146.678 202.01 147.689V148.141H197.715C197.731 148.766 197.912 149.271 198.26 149.658C198.612 150.041 199.057 150.232 199.596 150.232C199.979 150.232 200.303 150.154 200.569 149.998C200.834 149.842 201.067 149.635 201.266 149.377L201.928 149.893C201.397 150.709 200.6 151.117 199.537 151.117ZM199.403 145.434C198.965 145.434 198.598 145.594 198.301 145.914C198.004 146.23 197.821 146.676 197.75 147.25H200.926V147.168C200.895 146.617 200.746 146.191 200.481 145.891C200.215 145.586 199.856 145.434 199.403 145.434Z"
                      fill="#2C3B51"
                    />
                    <Path
                      d="M17.782 35.3945H15.0398V43H13.9207V35.3945H11.1844V34.4688H17.782V35.3945ZM22.0969 37.6328C21.9328 37.6055 21.7551 37.5918 21.5637 37.5918C20.8527 37.5918 20.3703 37.8945 20.1164 38.5V43H19.0324V36.6602H20.0871L20.1047 37.3926C20.4602 36.8262 20.9641 36.543 21.6164 36.543C21.8273 36.543 21.9875 36.5703 22.0969 36.625V37.6328ZM24.8766 43H23.7926V36.6602H24.8766V43ZM23.7047 34.9785C23.7047 34.8027 23.7574 34.6543 23.8629 34.5332C23.9723 34.4121 24.1324 34.3516 24.3434 34.3516C24.5543 34.3516 24.7145 34.4121 24.8238 34.5332C24.9332 34.6543 24.9879 34.8027 24.9879 34.9785C24.9879 35.1543 24.9332 35.3008 24.8238 35.418C24.7145 35.5352 24.5543 35.5938 24.3434 35.5938C24.1324 35.5938 23.9723 35.5352 23.8629 35.418C23.7574 35.3008 23.7047 35.1543 23.7047 34.9785ZM26.959 39.7773C26.959 38.7891 27.1875 38.0039 27.6445 37.4219C28.1016 36.8359 28.707 36.543 29.4609 36.543C30.2344 36.543 30.8379 36.8164 31.2715 37.3633L31.3242 36.6602H32.3145V42.8477C32.3145 43.668 32.0703 44.3145 31.582 44.7871C31.0977 45.2598 30.4453 45.4961 29.625 45.4961C29.168 45.4961 28.7207 45.3984 28.2832 45.2031C27.8457 45.0078 27.5117 44.7402 27.2812 44.4004L27.8438 43.75C28.3086 44.3242 28.877 44.6113 29.5488 44.6113C30.0762 44.6113 30.4863 44.4629 30.7793 44.166C31.0762 43.8691 31.2246 43.4512 31.2246 42.9121V42.3672C30.791 42.8672 30.1992 43.1172 29.4492 43.1172C28.707 43.1172 28.1055 42.8184 27.6445 42.2207C27.1875 41.623 26.959 40.8086 26.959 39.7773ZM28.0488 39.9004C28.0488 40.6152 28.1953 41.1777 28.4883 41.5879C28.7812 41.9941 29.1914 42.1973 29.7188 42.1973C30.4023 42.1973 30.9043 41.8867 31.2246 41.2656V38.3711C30.8926 37.7656 30.3945 37.4629 29.7305 37.4629C29.2031 37.4629 28.791 37.668 28.4941 38.0781C28.1973 38.4883 28.0488 39.0957 28.0488 39.9004ZM34.2973 39.7773C34.2973 38.7891 34.5258 38.0039 34.9828 37.4219C35.4398 36.8359 36.0453 36.543 36.7992 36.543C37.5727 36.543 38.1762 36.8164 38.6098 37.3633L38.6625 36.6602H39.6527V42.8477C39.6527 43.668 39.4086 44.3145 38.9203 44.7871C38.4359 45.2598 37.7836 45.4961 36.9633 45.4961C36.5063 45.4961 36.059 45.3984 35.6215 45.2031C35.184 45.0078 34.85 44.7402 34.6195 44.4004L35.182 43.75C35.6469 44.3242 36.2152 44.6113 36.8871 44.6113C37.4145 44.6113 37.8246 44.4629 38.1176 44.166C38.4145 43.8691 38.5629 43.4512 38.5629 42.9121V42.3672C38.1293 42.8672 37.5375 43.1172 36.7875 43.1172C36.0453 43.1172 35.4438 42.8184 34.9828 42.2207C34.5258 41.623 34.2973 40.8086 34.2973 39.7773ZM35.3871 39.9004C35.3871 40.6152 35.5336 41.1777 35.8266 41.5879C36.1195 41.9941 36.5297 42.1973 37.057 42.1973C37.7406 42.1973 38.2426 41.8867 38.5629 41.2656V38.3711C38.2309 37.7656 37.7328 37.4629 37.0688 37.4629C36.5414 37.4629 36.1293 37.668 35.8324 38.0781C35.5355 38.4883 35.3871 39.0957 35.3871 39.9004ZM44.5242 43.1172C43.6648 43.1172 42.9656 42.8359 42.4266 42.2734C41.8875 41.707 41.618 40.9512 41.618 40.0059V39.8066C41.618 39.1777 41.7371 38.6172 41.9754 38.125C42.2176 37.6289 42.5535 37.2422 42.9832 36.9648C43.4168 36.6836 43.8855 36.543 44.3895 36.543C45.2137 36.543 45.8543 36.8145 46.3113 37.3574C46.7684 37.9004 46.9969 38.6777 46.9969 39.6895V40.1406H42.702C42.7176 40.7656 42.8992 41.2715 43.2469 41.6582C43.5984 42.041 44.0438 42.2324 44.5828 42.2324C44.9656 42.2324 45.2898 42.1543 45.5555 41.998C45.8211 41.8418 46.0535 41.6348 46.2527 41.377L46.9148 41.8926C46.3836 42.709 45.5867 43.1172 44.5242 43.1172ZM44.3895 37.4336C43.952 37.4336 43.5848 37.5938 43.2879 37.9141C42.991 38.2305 42.8074 38.6758 42.7371 39.25H45.9129V39.168C45.8816 38.6172 45.7332 38.1914 45.4676 37.8906C45.202 37.5859 44.8426 37.4336 44.3895 37.4336ZM51.9211 37.6328C51.757 37.6055 51.5793 37.5918 51.3879 37.5918C50.677 37.5918 50.1945 37.8945 49.9406 38.5V43H48.8566V36.6602H49.9113L49.9289 37.3926C50.2844 36.8262 50.7883 36.543 51.4406 36.543C51.6516 36.543 51.8117 36.5703 51.9211 36.625V37.6328Z"
                      fill="#2C3B51"
                    />
                    <Ellipse
                      cx="31"
                      cy="144.5"
                      rx="26"
                      ry="26.5"
                      fill="#F4F1DE"
                    />
                    <Path
                      d="M10.6035 147.549H8.59961V151H7.46875V142.469H10.293C11.2539 142.469 11.9922 142.688 12.5078 143.125C13.0273 143.562 13.2871 144.199 13.2871 145.035C13.2871 145.566 13.1426 146.029 12.8535 146.424C12.5684 146.818 12.1699 147.113 11.6582 147.309L13.6621 150.93V151H12.4551L10.6035 147.549ZM8.59961 146.629H10.3281C10.8867 146.629 11.3301 146.484 11.6582 146.195C11.9902 145.906 12.1562 145.52 12.1562 145.035C12.1562 144.508 11.998 144.104 11.6816 143.822C11.3691 143.541 10.916 143.398 10.3223 143.395H8.59961V146.629ZM17.9301 151.117C17.0707 151.117 16.3715 150.836 15.8324 150.273C15.2934 149.707 15.0238 148.951 15.0238 148.006V147.807C15.0238 147.178 15.143 146.617 15.3813 146.125C15.6234 145.629 15.9594 145.242 16.3891 144.965C16.8227 144.684 17.2914 144.543 17.7953 144.543C18.6195 144.543 19.2602 144.814 19.7172 145.357C20.1742 145.9 20.4027 146.678 20.4027 147.689V148.141H16.1078C16.1234 148.766 16.3051 149.271 16.6527 149.658C17.0043 150.041 17.4496 150.232 17.9887 150.232C18.3715 150.232 18.6957 150.154 18.9613 149.998C19.227 149.842 19.4594 149.635 19.6586 149.377L20.3207 149.893C19.7895 150.709 18.9926 151.117 17.9301 151.117ZM17.7953 145.434C17.3578 145.434 16.9906 145.594 16.6938 145.914C16.3969 146.23 16.2133 146.676 16.143 147.25H19.3188V147.168C19.2875 146.617 19.1391 146.191 18.8734 145.891C18.6078 145.586 18.2484 145.434 17.7953 145.434ZM27.8758 149.506L29.0945 144.66H30.1785L28.3328 151H27.4539L25.9129 146.195L24.4129 151H23.534L21.6941 144.66H22.7723L24.0203 149.406L25.4969 144.66H26.3699L27.8758 149.506ZM35.8 151C35.7375 150.875 35.6867 150.652 35.6477 150.332C35.1437 150.855 34.5422 151.117 33.843 151.117C33.218 151.117 32.7043 150.941 32.302 150.59C31.9035 150.234 31.7043 149.785 31.7043 149.242C31.7043 148.582 31.9543 148.07 32.4543 147.707C32.9582 147.34 33.6652 147.156 34.5754 147.156H35.6301V146.658C35.6301 146.279 35.5168 145.979 35.2902 145.756C35.0637 145.529 34.7297 145.416 34.2883 145.416C33.9016 145.416 33.5773 145.514 33.3156 145.709C33.0539 145.904 32.923 146.141 32.923 146.418H31.8332C31.8332 146.102 31.9445 145.797 32.1672 145.504C32.3937 145.207 32.6984 144.973 33.0812 144.801C33.468 144.629 33.8918 144.543 34.3527 144.543C35.0832 144.543 35.6555 144.727 36.0695 145.094C36.4836 145.457 36.6984 145.959 36.7141 146.6V149.518C36.7141 150.1 36.7883 150.562 36.9367 150.906V151H35.8ZM34.0012 150.174C34.341 150.174 34.6633 150.086 34.968 149.91C35.2727 149.734 35.4934 149.506 35.6301 149.225V147.924H34.7805C33.4523 147.924 32.7883 148.312 32.7883 149.09C32.7883 149.43 32.9016 149.695 33.1281 149.887C33.3547 150.078 33.6457 150.174 34.0012 150.174ZM42.0777 145.633C41.9137 145.605 41.7359 145.592 41.5445 145.592C40.8336 145.592 40.3512 145.895 40.0973 146.5V151H39.0133V144.66H40.068L40.0855 145.393C40.441 144.826 40.9449 144.543 41.5973 144.543C41.8082 144.543 41.9684 144.57 42.0777 144.625V145.633ZM43.2988 147.777C43.2988 146.805 43.5293 146.023 43.9902 145.434C44.4512 144.84 45.0547 144.543 45.8008 144.543C46.543 144.543 47.1309 144.797 47.5645 145.305V142H48.6484V151H47.6523L47.5996 150.32C47.166 150.852 46.5625 151.117 45.7891 151.117C45.0547 151.117 44.4551 150.816 43.9902 150.215C43.5293 149.613 43.2988 148.828 43.2988 147.859V147.777ZM44.3828 147.9C44.3828 148.619 44.5312 149.182 44.8281 149.588C45.125 149.994 45.5352 150.197 46.0586 150.197C46.7461 150.197 47.248 149.889 47.5645 149.271V146.359C47.2402 145.762 46.7422 145.463 46.0703 145.463C45.5391 145.463 45.125 145.668 44.8281 146.078C44.5312 146.488 44.3828 147.096 44.3828 147.9Z"
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
                    <Text style={styles.intro_text_bold}>Craving</Text>{" "}
                    happens in your body: you might feel a tension building up inside of you. This can be very subtle. You react with an impulse!
                  </Text>

                  <Text style={styles.intro_text_grey}>
                    {"\n"}Leo feels the impulse to put his hand into his jacket - and grabs his smartphone.
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
