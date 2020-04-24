import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity
} from "react-native";
import {
  ChallengeScreen
} from "./../../components/AppComponents";

import {
  updateState_Ex1,
  updateState_Ex2,
  updateState_Ex3,
  updateState_Ex4,
  updateState_Ex5,
  updateState_Ex6,
  updateState_Ex7,
  updateState_Ex8,
  updateState_Ex9,
  updateState_Ex10,
  updateState_Ex11,
  updateState_Ex12,
  updateState_Ex13,
  updateState_Ex14,
  updateState_Ex15,
  updateState_Ex16,
  updateState_Ex17,
  updateState_Ex18,
  updateState_Ex19,
  updateState_Ex20
} from "./../../redux-persist/redux/exercices";

import { connect } from "react-redux";
import { Svg, Path, Circle } from "react-native-svg";

getPhase = item => {
  switch (item.phase) {
    case "observe":
      return "#E8E8FF";
    case "reflect":
      return "#FDECD6";
    case "vision":
      return "#FFE2E2";
    case "plan":
      return "#E2FEF4";
    case "support":
      return "#E2FEF4";
    default:
      return null;
  }
};

class PendingChallengesScreen extends React.Component {
  state = {
    modalVisible: false
  };

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  getResponse(visible) {
    this.setState({ modalVisible: false });
  }

  render() {
    const challenge = [
      {
        id: 1,
        path: "Intro_Phase_Observe",
        state: this.props.exercices.exercice_state_1,
        function: updateState_Ex1,
        phase: "observe",
        color: "#A28AD4",
        lightColor: "#E8E8FF",
        title: <Text>Contenance</Text>,
        text_content: (
          <Text>
            From now on, whenever you open Contenance, take on a good posture
            first.
          </Text>
        )
      },
      {
        id: 2,
        path: "Exercice_2_Intro",
        state: this.props.exercices.exercice_state_2,
        function: updateState_Ex2,
        phase: "observe",
        color: "#A28AD4",
        lightColor: "#E8E8FF",
        title: <Text>Notice Your Impulses</Text>,
        text_content: (
          <Text>
            Whenever you catch yourself grabbing your smartphone, stop for a
            moment and try to see if you can identify the impulse. Notice it
            with curiosity and without judging it.{"\n"}
            {"\n"}Try to let the impulse come over you, like a wave, without
            reacting to it immediately. And then decide consciously if you want
            to follow your impulse right now - or not.
          </Text>
        )
      },
      {
        id: 3,
        path: "Exercice_3_Intro",
        state: this.props.exercices.exercice_state_3,
        function: updateState_Ex3,
        phase: "observe",
        color: "#A28AD4",
        lightColor: "#E8E8FF",
        title: <Text>The Solution Triangle</Text>,
        text_content: (
          <Text>
            Look around you today: what are other people doing to take control
            of their smartphone use?{"\n"}
            {"\n"}
            What factor do they belong to?{"\n"}
            {"\n"}
            The smartphone, the environment or the person?
          </Text>
        )
      },
      {
        id: 4,
        path: "Exercice_4_Intro",
        state: this.props.exercices.exercice_state_4,
        function: updateState_Ex4,
        phase: "observe",
        color: "#A28AD4",
        lightColor: "#E8E8FF",
        title: <Text>Keep Breathing</Text>,
        text_content: (
          <Text>
            Whenever you use your smartphone until tomorrow, be aware of your
            breathing.{"\n"}
            {"\n"}
            Follow one breath all the way through.
          </Text>
        )
      },
      {
        id: 5,
        path: "Intro_Phase_Reflect",
        state: this.props.exercices.exercice_state_5,
        function: updateState_Ex5,
        phase: "reflect",
        color: "#F6B563",
        lightColor: "#FDECD6",
        title: <Text>The Habit Loop</Text>,
        text_content: (
          <Text>
            The next time when you are in one of these situations, take a moment
            to check if the decision to grab your smartphone happens
            automatically or if you consciously decide to do so.
          </Text>
        )
      },
      {
        id: 6,
        path: "Exercice_6_Intro",
        state: this.props.exercices.exercice_state_6,
        function: updateState_Ex6,
        phase: "reflect",
        color: "#F6B563",
        lightColor: "#FDECD6",
        title: <Text>Exploring Emotional Triggers</Text>,
        text_content: (
          <Text>
            Next time when you catch yourself grabbing the smartphone, stop for
            a moment and check your inner state of mind. Ask yourself: How am I
            feeling at this moment?{"\n"}
            {"\n"}Notice the feeling, and then consciously decide if you want to
            use your smartphone as a reaction to it.
          </Text>
        )
      },
      {
        id: 7,
        path: "Exercice_7_Intro",
        state: this.props.exercices.exercice_state_7,
        function: updateState_Ex7,
        phase: "reflect",
        color: "#F6B563",
        lightColor: "#FDECD6",
        title: <Text>Getting Lost</Text>,
        text_content: (
          <Text>
            When you continue using your smartphone today, think of the traffic
            light and the apps you use. How does their design add to the
            experience of losing yourself in the app?{"\n"}
            {"\n"}Become aware of that.
          </Text>
        )
      },
      {
        id: 8,
        path: "Exercice_8_Intro",
        state: this.props.exercices.exercice_state_8,
        function: updateState_Ex8,
        phase: "reflect",
        color: "#F6B563",
        lightColor: "#FDECD6",
        title: <Text>Mindful Social Media Use</Text>,
        text_content: (
          <Text>
            Until tomorrow, look at the pictures in your feed a little bit
            longer than usual, asking yourself: What do I actually see in front
            of me?
          </Text>
        )
      },
      {
        id: 9,
        path: "Intro_Phase_Vision",
        state: this.props.exercices.exercice_state_9,
        function: updateState_Ex9,
        phase: "vision",
        color: "#F87B7B",
        lightColor: "#FFE2E2",
        title: <Text>Exploring Values</Text>,
        text_content: (
          <Text>
            Until tomorrow, observe your actions and ask yourself how they might
            be connected to your values.
          </Text>
        )
      },
      {
        id: 10,
        path: "Exercice_10_Intro",
        state: this.props.exercices.exercice_state_10,
        function: updateState_Ex10,
        phase: "vision",
        color: "#F87B7B",
        lightColor: "#FFE2E2",
        title: <Text>Meaningful Smartphone Activities</Text>,
        text_content: (
          <Text>
            Until tomorrow, do a test run of the meaningful smartphone activity
            you defined today!
          </Text>
        )
      },
      {
        id: 11,
        path: "Exercice_11_Intro",
        state: this.props.exercices.exercice_state_11,
        function: updateState_Ex11,
        phase: "vision",
        color: "#F87B7B",
        lightColor: "#FFE2E2",
        title: <Text>54321 Trick</Text>,
        text_content: (
          <Text>
            The next time you are using{" "}
            {this.props.user_values.AppsRed1_D7 == undefined
              ? null
              : this.props.user_values.AppsRed1_D7}
            ,{" "}
            {this.props.user_values.AppsRed2_D7 == undefined
              ? null
              : this.props.user_values.AppsRed2_D7}{" "}
            and{" "}
            {this.props.user_values.AppsRed3_D7 == undefined
              ? null
              : this.props.user_values.AppsRed3_D7}
            , give it a try and do the 54321 trick and find:{"\n"}
            {"\n"}5 things you can see, 4 things you can touch, 3 things you can
            hear, 2 things you can smell, 1 thing you can taste!
          </Text>
        )
      },
      {
        id: 12,
        path: "Exercice_12_Intro",
        state: this.props.exercices.exercice_state_12,
        function: updateState_Ex12,
        phase: "vision",
        color: "#F87B7B",
        lightColor: "#FFE2E2",
        title: <Text>Inner Scientist</Text>,
        text_content: (
          <Text>
            Next time you notice any emotional trigger or impulse:{"\n"}
            {"\n"}Stop, notice it, most importantly accept it and then decide
            what to do!
          </Text>
        )
      },
      {
        id: 13,
        path: "Intro_Phase_Plan",
        state: this.props.exercices.exercice_state_13,
        function: updateState_Ex13,
        phase: "plan",
        color: "#4CBB92",
        lightColor: "#E2FEF4",
        title: <Text>Meaningful Smartphone Habits</Text>,
        text_content: (
          <Text>
            Let’s walk the walk. Do a first run of your new activity:{"\n"}
            {"\n"}
            {this.props.user_values.NewHabitCommit_D13 == undefined
              ? null
              : this.props.user_values.NewHabitCommit_D13}
          </Text>
        )
      },
      {
        id: 14,
        path: "Exercice_14_Intro",
        state: this.props.exercices.exercice_state_14,
        function: updateState_Ex14,
        phase: "plan",
        color: "#4CBB92",
        lightColor: "#E2FEF4",
        title: <Text>Being Prepared for Challenges</Text>,
        text_content: (
          <Text>
            Do a test-run of one of your newly defined coping plans!{"\n"}
            {"\n"}There might be challenges to realize my plan:{" "}
            {this.props.user_values.NewHabitCommit_D13 === undefined
              ? null
              : this.props.user_values.NewHabitCommit_D13}
            . But I am prepared.
            {"\n"}
            {"\n"}If{" "}
            {this.props.user_values.Obstacle1_D14 == undefined
              ? null
              : this.props.user_values.Obstacle1_D14}
            , then{" "}
            {this.props.user_values.CopingStrategy1_D14 == undefined
              ? null
              : this.props.user_values.CopingStrategy1_D14}
            .{"\n"}
            {"\n"}If{" "}
            {this.props.user_values.Obstacle2_D14 == undefined
              ? null
              : this.props.user_values.Obstacle2_D14}
            , then{" "}
            {this.props.user_values.CopingStrategy2_D14 == undefined
              ? null
              : this.props.user_values.CopingStrategy2_D14}
            .{"\n"}
            {"\n"}If{" "}
            {this.props.user_values.Obstacle3_D14 == undefined
              ? null
              : this.props.user_values.Obstacle3_D14}
            , then{" "}
            {this.props.user_values.CopingStrategy3_D14 == undefined
              ? null
              : this.props.user_values.CopingStrategy3_D14}
            .
          </Text>
        )
      },
      {
        id: 15,
        path: "Exercice_15_Intro",
        state: this.props.exercices.exercice_state_15,
        function: updateState_Ex15,
        phase: "plan",
        color: "#4CBB92",
        lightColor: "#E2FEF4",
        title: <Text>Beauty of Imagination</Text>,
        text_content: (
          <Text>
            Next time you find yourself in an empty moment today, try another
            one of these thought experiments. Or come up with your own!
          </Text>
        )
      },
      {
        id: 16,
        path: "Exercice_16_Intro",
        state: this.props.exercices.exercice_state_16,
        function: updateState_Ex16,
        phase: "plan",
        color: "#4CBB92",
        lightColor: "#E2FEF4",
        title: <Text>Brain Reset</Text>,
        text_content: (
          <Text>
            Give your brain the chance to have a moment without any guided input
            in an empty moment.{"\n"}
            {"\n"}Treat yourself with another micro-break today, lasting 3 - 10
            minutes instead of using your smartphone.
          </Text>
        )
      },
      {
        id: 17,
        path: "Intro_Phase_Support",
        state: this.props.exercices.exercice_state_17,
        function: updateState_Ex17,
        phase: "support",
        color: "#6A97D8",
        lightColor: "#E3EFFF",
        title: <Text>Taking Control of the Smartphone</Text>,
        text_content: (
          <Text>
            Choose your favorite option:{"\n"}
            {"\n"}1. Turn-off non-human notifications{"\n"}
            {"\n"}2. Design a home screen that feels like home{"\n"}
            {"\n"}3. Free yourself from social media apps
          </Text>
        )
      },
      {
        id: 18,
        path: "Exercice_18_Intro",
        state: this.props.exercices.exercice_state_18,
        function: updateState_Ex18,
        phase: "support",
        color: "#6A97D8",
        lightColor: "#E3EFFF",
        title: <Text>Taking Control of the Environment</Text>,
        text_content: (
          <Text>
            From now on, stick to these situations in which you will have your
            smartphone around - or not.{"\n"}
            {"\n"}This might be quite a radical change. Here comes a little tip:
            You can start with implementing one GO and one NO GO per day.
          </Text>
        )
      },
      {
        id: 19,
        path: "Exercice_19_Intro",
        state: this.props.exercices.exercice_state_19,
        function: updateState_Ex19,
        phase: "support",
        color: "#6A97D8",
        lightColor: "#E3EFFF",
        title: <Text>Me, the Smartphone and Others</Text>,
        text_content: (
          <Text>
            From now on, share with the people around you what you are doing on
            the smartphone if you are using it around them.{"\n"}
            {"\n"}If you don’t feel comfortable sharing your activity, think
            about if it is even necessary doing that right that second.
          </Text>
        )
      },
      {
        id: 20,
        path: "Exercice_20_Intro",
        state: this.props.exercices.exercice_state_20,
        function: updateState_Ex20,
        phase: "support",
        color: "#6A97D8",
        lightColor: "#E3EFFF",
        title: <Text>Daddeln is Okay</Text>,
        text_content: (
          <Text>
            Do one more Daddeln session until tomorrow. Lose yourself and have
            fun!
          </Text>
        )
      }
    ];

    const challengeCompleted = challenge.filter(
      item => item.state === "completed"
    );

    return (
      <ScrollView
        style={{
          flex: 1
        }}
      >
        <View
          style={{
            flex: 1,
            alignItems: "center",
            paddingTop: 30,
            paddingLeft: 30,
            paddingRight: 30
          }}
        >
          {challengeCompleted.map((item, key) => (
            <View key={key}>
              <View
                style={{
                  backgroundColor: item.lightColor,
                  justifyContent: "center",
                  width: "100%",
                  borderRadius: 10,
                  marginBottom: 15
                }}
              >
                <TouchableOpacity
                  style={{
                    width: "100%",
                    flexDirection: "row",
                    justifyContent: "space-between"
                  }}
                  onPress={() => {
                    this.setState({
                      textContent: item.text_content,
                      color: item.lightColor,
                      function: item.function
                    });
                    this.setModalVisible(true);
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignSelf: "center",
                      left: 10,
                      paddingRight: 15
                    }}
                  >
                    <Svg width="33" height="33" viewBox="0 0 33 33" fill="none">
                      <Path
                        d="M21.59 10.476C22.1413 9.84135 23.0352 9.84135 23.5865 10.476C24.1378 11.1106 24.1378 12.1394 23.5865 12.774L15.1159 22.524C14.5646 23.1587 13.6707 23.1587 13.1194 22.524L8.4135 17.1074C7.86217 16.4728 7.86217 15.4439 8.4135 14.8093C8.96482 14.1747 9.8587 14.1747 10.41 14.8093L14.1176 19.0769L21.59 10.476Z"
                        fill="#2C3B51"
                      />
                      <Circle
                        cx="16.5"
                        cy="16.5"
                        r="15.75"
                        stroke="#2C3B51"
                        stroke-width="1.5"
                      />
                    </Svg>
                  </View>

                  <View
                    style={{
                      flex: 1,
                      justifyContent: "center",
                      alignItems: "center",
                      height: 62
                    }}
                  >
                    <Text
                      style={{
                        color: "#2C3B51",
                        fontSize: 14,
                        left: 20,
                        textAlign: "left",
                        fontFamily: "roboto-regular",
                        paddingRight: 50,
                        width: "100%"
                      }}
                    >
                      Day {item.id}
                      {"\n"}
                      <Text
                        style={{
                          color: "#2C3B51",
                          fontSize: 16,
                          textAlign: "left",
                          fontFamily: "roboto-bold"
                        }}
                      >
                        {item.title}
                      </Text>
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      alignSelf: "center",
                      width: 20,
                      right: 15
                    }}
                  >
                    <Svg width="12" height="21" viewBox="0 0 12 21" fill="none">
                      <Path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M1 0.490234L0 1.49023L9.01465 10.5049L0.00927734 19.5098L1.00928 20.5098L11.0186 10.501L10.5098 10L10.0186 9.50098L1 0.490234Z"
                        fill="#787777"
                      />
                    </Svg>
                  </View>
                </TouchableOpacity>
              </View>

              <ChallengeScreen
                content={this.state.textContent}
                backgroundColor={this.state.color}
                isVisible={this.state.modalVisible}
                isCta={true}
                callback={this.getResponse.bind(this)}
                function={() => {
                  this.setState(
                    {
                      newstate: "DONE"
                    },
                    function() {
                      this.props.dispatch(this.state.function(this.state.newstate));
                    }
                  );
                  this.setState({ modalVisible: false });
                }}
              />
            </View>
          ))}

          {challengeCompleted.length ? null : (
            <Text
              style={{
                color: "#2C3B51",
                fontSize: 19,
                lineHeight: 25,
                textAlign: "left",
                fontFamily: "roboto-regular"
              }}
            >
              Go to{" "}
              <Text
                style={{
                  color: "#2C3B51",
                  fontSize: 19,
                  lineHeight: 25,
                  textAlign: "left",
                  fontFamily: "roboto-bold"
                }}
              >
                Today
              </Text>{" "}
              to start an exercise and accept a challenge.
            </Text>
          )}
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => ({
  exercices: state.exercices,
  user_values: state.user_values
});

export default connect(mapStateToProps)(PendingChallengesScreen);
