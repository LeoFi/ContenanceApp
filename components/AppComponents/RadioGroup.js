import React, { Component } from "react";
import { View, Text, TouchableOpacity, Dimensions } from "react-native";
import PropTypes from "prop-types";

import { Svg, Path } from "react-native-svg";

class RadioGroup extends Component {
  constructor(props) {
    super(props);
    //console.log(props);
    let selection = "";
    this.state = {
      selection,
      selectionLeft: "",
      selectionRight: ""
    };
    this.setChildrenProps = this.setChildrenProps.bind(this);
  }
  /**
   *getSelection
   *This implements the selection
   *
   * @memberof RadioGroup
   */
  getSelection = value => {
    let selection = value;
    this.setState({ selection });
    this.props.getChecked(value);

    const KEY_Value = value.split("/")[1];

    if (KEY_Value == 1) {
      this.setState({ selectionLeft: true });
    } else if (KEY_Value == 6) {
      this.setState({ selectionRight: true });
    }
  };

  setChildrenProps = () => {
    return React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        selection: this.state.selection,
        getSelection: this.getSelection,
        RadioStyle: this.props.RadioStyle,
        labelStyle: this.props.labelStyle,
        coreStyle: this.props.coreStyle
      });
    });
  };

  render = () => {
    const buttonProps = {
      labelLeft: this.props.labelLeft,
      labelRight: this.props.labelRight,
      isScaleEnabled: this.props.isScaleEnabled
    };

    return (
      <>
        <View style={[this.props.RadioGroupStyle]}>
          {this.setChildrenProps()}
        </View>
        {buttonProps.isScaleEnabled == false ? null : (
          <View style={[this.props.questionDrop]}>
            <TouchableOpacity>
              <Svg
                width="35"
                height="58"
                viewBox="0 0 35 58"
                style={[this.props.question_icon_left]}
              >
                <Path
                  d="M17.9005 34.9955C27.3805 34.7826 35 27.0311 35 17.5C35 7.83502 27.165 0 17.5 0C7.83502 0 0 7.83502 0 17.5C0 17.636 0.00155199 17.7717 0.00463922 17.907H0V57.7907H3L3 51.5208C4.2374 43.9299 7.92271 34.9997 17.907 34.9997L17.9005 34.9955Z"
                  fill={this.state.selectionLeft ? "#B8EDE3" : "#E0DFD0"}
                />
              </Svg>
              <Text style={[this.props.question_scale_text_left]}>
                {buttonProps.labelLeft}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Svg
                width="35"
                height="58"
                viewBox="0 0 35 58"
                style={[this.props.question_icon_right]}
              >
                <Path
                  d="M17.1003 34.9955C7.61995 34.7831 0 27.0314 0 17.5C0 7.83502 7.83502 0 17.5 0C27.165 0 35 7.83502 35 17.5C35 17.636 34.9984 17.7717 34.9954 17.907H35V57.7907L32.5584 57.7908L32 57.7907L32 51.5193C30.7623 43.9288 27.0768 35.0001 17.0933 35.0001L17.1003 34.9955Z"
                  fill={this.state.selectionRight ? "#B8EDE3" : "#E0DFD0"}
                />
              </Svg>
              <Text style={[this.props.question_scale_text_right]}>
                {buttonProps.labelRight}
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </>
    );
  };
}

export const Radio = ({
  iconGroup,
  iconName,
  selection,
  label,
  value,
  getSelection,
  RadioStyle,
  labelStyle,
  coreStyle
}) => {
  let selected = selection === value;

  return (
    <View>
      <TouchableOpacity
        onPress={getSelection.bind(this, value)}
        style={[
          {
            backgroundColor: selected ? "#B8EDE3" : "#E0DFD0"
          },
          RadioStyle
        ]}
      >
        <Text
          style={[
            {
              fontWeight: selected ? "900" : "400"
            },
            labelStyle
          ]}
        >
          {label}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

Radio.propTypes = {
  iconName: PropTypes.string,
  selection: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  selected: PropTypes.bool,
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  getSelection: PropTypes.func
};
Radio.defaultProps = {
  selected: false
};

RadioGroup.propTypes = {
  RadioStyle: PropTypes.object,
  labelStyle: PropTypes.object,
  coreStyle: PropTypes.object,
  getChecked: PropTypes.func,
  RadioGroupStyle: PropTypes.object
};
RadioGroup.defaultProps = {
  RadioStyle: {
    borderWidth: 0,
    borderRadius: 99,
    color: "#B8EDE3",
    width: 35,
    height: 35,
    //margin: 5
  },
  labelStyle: {
    color: "#2C3B51",
    position: "absolute",
    //fontWeight: "900",
    top: "50%",
    left: "50%",
    transform: [{ translateX: -4 }, { translateY: -8.5 }]
  },
  coreStyle: {
    alignSelf: "center",
    width: 42,
    height: 42,
    color: "#B8EDE3",
    fontSize: 42,
    fontWeight: "900"
  },
  RadioGroupStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 20,
    zIndex: 1
  },
  questionDrop: {
    flexDirection: "row",
    justifyContent: "space-between",
    top: -35,
    zIndex: 0,
    width: Dimensions.get("window").width - 60
  },
  question_icon_left: {},
  question_icon_right: {
    alignSelf: "flex-end"
  },
  question_scale_text_left: {
    textAlign: "left",
    color: "#2C3B51",
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "roboto-regular",
    paddingTop: 5
  },
  question_scale_text_right: {
    textAlign: "right",
    color: "#2C3B51",
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "roboto-regular",
    paddingTop: 5
  }
};

export default RadioGroup;
