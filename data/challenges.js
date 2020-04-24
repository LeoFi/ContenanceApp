import React from "react";
import { Text, StyleSheet } from "react-native";

export const challenges = [
  {
    id: 1,
    path: "Intro_Phase_Observe",
    label: "Contenance",
    title: <Text>Contenance</Text>,
    text_content: (
      <Text>
        From now on, whenever you open Contenance, take on a good posture first.
      </Text>
    )
  },
  {
    id: 2,
    path: "Exercice_2_Intro",
    label: "Notice Your Impulses",
    title: <Text>Notice Your Impulses</Text>,
    text_content: (
      <Text>
        Whenever you catch yourself grabbing your smartphone, stop for a moment
        and try to see if you can identify the impulse. Notice it with curiosity
        and without judging it.{"\n"}
        {"\n"}Try to let the impulse come over you, like a wave, without
        reacting to it immediately. And then decide consciously if you want to
        follow your impulse right now - or not.
      </Text>
    )
  },
  {
    id: 3,
    path: "Exercice_3_Intro",
    label: "Solution Triangle",
    title: <Text>The Solution Triangle</Text>,
    text_content: (
      <Text>
        Look around you today: what are other people doing to take control of
        their smartphone use?{"\n"}
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
    label: "Keep Breathing",
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
    label: "Habit Loop",
    title: <Text>The Habit Loop</Text>,
    text_content: (
      <Text>
        The next time when you are in one of these situations, take a moment to
        check if the decision to grab your smartphone happens automatically or
        if you consciously decide to do so.
      </Text>
    )
  },
  {
    id: 6,
    path: "Exercice_6_Intro",
    label: "Exploring Emotional Triggers",
    title: (
      <Text>Exploring Emotional Triggers</Text>
    ),
    text_content: (
      <Text>
        Next time when you catch yourself grabbing the smartphone, stop for a
        moment and check your inner state of mind. Ask yourself: How am I
        feeling at this moment?{"\n"}
        {"\n"}Notice the feeling, and then consciously decide if you want to use
        your smartphone as a reaction to it.
      </Text>
    )
  },
  {
    id: 7,
    path: "Exercice_7_Intro",
    label: "Getting Lost",
    title: <Text>Getting Lost</Text>,
    text_content: (
      <Text>
        When you continue using your smartphone today, think of the traffic
        light and the apps you use. How does their design add to the experience
        of losing yourself in the app?{"\n"}
        {"\n"}Become aware of that.
      </Text>
    )
  },
  {
    id: 8,
    path: "Exercice_8_Intro",
    label: "Mindful Social Media Use",
    title: (
      <Text>Mindful Social Media Use</Text>
    ),
    text_content: (
      <Text>
        Until tomorrow, look at the pictures in your feed a little bit longer
        than usual, asking yourself: What do I actually see in front of me?
      </Text>
    )
  },
  {
    id: 9,
    path: "Intro_Phase_Vision",
    label: "Exploring Values",
    title: <Text>Exploring Values</Text>,
    text_content: (
      <Text>
        Until tomorrow, observe your actions and ask yourself how they might be
        connected to your values.
      </Text>
    )
  },
  {
    id: 10,
    path: "Exercice_10_Intro",
    label: "Meaningful Smartphone Activities",
    title: (
      <Text>
        Meaningful Smartphone Activities
      </Text>
    ),
    text_content: (
      <Text>
        Until tomorrow, do a test run of the meaningful smartphone activity you
        defined today!
      </Text>
    )
  },
  {
    id: 11,
    path: "Exercice_11_Intro",
    label: "54321 Trick",
    title: <Text>54321 Trick</Text>,
    text_content: (
      <Text>
        The next time you are using{" "}
        {/* {this.props.user_values.AppsRed1_D7 == undefined
          ? null
          : this.props.user_values.AppsRed1_D7}
        ,{" "}
        {this.props.user_values.AppsRed2_D7 == undefined
          ? null
          : this.props.user_values.AppsRed2_D7}{" "}
        and{" "}
        {this.props.user_values.AppsRed3_D7 == undefined
          ? null
          : this.props.user_values.AppsRed3_D7} */}
        , give it a try and do the 54321 trick and find:{"\n"}
        {"\n"}5 things you can see, 4 things you can touch, 3 things you can
        hear, 2 things you can smell, 1 thing you can taste!
      </Text>
    )
  },
  {
    id: 12,
    path: "Exercice_12_Intro",
    label: "Inner Scientist",
    title: <Text>Inner Scientist</Text>,
    text_content: (
      <Text>
        Next time you notice any emotional trigger or impulse:{"\n"}
        {"\n"}Stop, notice it, most importantly accept it and then decide what
        to do!
      </Text>
    )
  },
  {
    id: 13,
    path: "Intro_Phase_Plan",
    label: "Meaningful Smartphone Habits",
    title: (
      <Text>Meaningful Smartphone Habits</Text>
    ),
    text_content: (
      <Text>
        Let’s walk the walk. Do a first run of your new activity:{"\n"}
        {"\n"}
        {/* {this.props.user_values.NewHabitCommit_D13 == undefined
          ? null
          : this.props.user_values.NewHabitCommit_D13} */}
      </Text>
    )
  },
  {
    id: 14,
    path: "Exercice_14_Intro",
    label: "Being Prepared for Challenges",
    title: (
      <Text>Being Prepared for Challenges</Text>
    ),
    text_content: (
      <Text>
        Do a test-run of one of your newly defined coping plans!{"\n"}
        {"\n"}There might be challenges to realize my plan:{" "}
        {/* {this.props.user_values.NewHabitCommit_D13 === undefined
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
          : this.props.user_values.CopingStrategy3_D14} */}
        .
      </Text>
    )
  },
  {
    id: 15,
    path: "Exercice_15_Intro",
    label: "Beauty of Imagination",
    title: <Text>Beauty of Imagination</Text>,
    text_content: (
      <Text>
        Next time you find yourself in an empty moment today, try another one of
        these thought experiments. Or come up with your own!
      </Text>
    )
  },
  {
    id: 16,
    path: "Exercice_16_Intro",
    label: "Brain Reset",
    title: <Text>Brain Reset</Text>,
    text_content: (
      <Text>
        Give your brain the chance to have a moment without any guided input in
        an empty moment.{"\n"}
        {"\n"}Treat yourself with another micro-break today, lasting 3 - 10
        minutes instead of using your smartphone.
      </Text>
    )
  },
  {
    id: 17,
    path: "Intro_Phase_Support",
    label: "Taking Control on the Smartphone",
    title: (
      <Text>
        Taking Control of the Smartphone
      </Text>
    ),
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
    label: "Taking Control of the Environment",
    title: (
      <Text>
        Taking Control of the Environment
      </Text>
    ),
    text_content: (
      <Text>
        From now on, stick to these situations in which you will have your
        smartphone around - or not.{"\n"}
        {"\n"}This might be quite a radical change. Here comes a little tip: You
        can start with implementing one GO and one NO GO per day.
      </Text>
    )
  },
  {
    id: 19,
    path: "Exercice_19_Intro",
    label: "Me, the Smartphone and Others",
    title: (
      <Text>Me, the Smartphone and Others</Text>
    ),
    text_content: (
      <Text>
        From now on, share with the people around you what you are doing on the
        smartphone if you are using it around them.{"\n"}
        {"\n"}If you don’t feel comfortable sharing your activity, think about
        if it is even necessary doing that right that second.
      </Text>
    )
  },
  {
    id: 20,
    path: "Exercice_20_Intro",
    label: "Daddeln is Okay",
    title: <Text>Daddeln is Okay</Text>,
    text_content: (
      <Text>
        Do one more Daddeln session until tomorrow. Lose yourself and have fun!
      </Text>
    )
  }
];

const styles = StyleSheet.create({
    tab_bar_item: {
      flex: 1,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      marginTop: 0
    }
  });

export default {
  challenges
};
