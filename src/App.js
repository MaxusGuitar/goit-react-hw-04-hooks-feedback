import React, { Component } from "react";
import FeedbackOptions from "./components/FeedbackOptions";
import Statistics from "./components/Statistics";
import Notification from "./components/Notification";
import Section from "./components/Section";
import style from "./App.css";

class App extends Component {
  state = {
    goodValue: 0,
    neutralValue: 0,
    badValue: 0,
    visible: false,
  }; // вместо конструктора

  onLeaveFeedback = (a) => {
    switch (a) {
      case "good":
        this.setState((prewState) => {
          return {
            goodValue: prewState.goodValue + 1,
            visible: true,
          };
        });
        break;
      case "neutral":
        this.setState((prewState) => {
          return {
            neutralValue: prewState.neutralValue + 1,
            visible: true,
          };
        });
        break;
      case "bad":
        this.setState((prewState) => {
          return {
            badValue: prewState.badValue + 1,
            visible: true,
          };
        });
        break;
      default:
        break;
    }
  };

  countTotalFeedback = () => {
    return this.state.goodValue + this.state.neutralValue + this.state.badValue;
  };

  countPositiveFeedbackPercentage = () => {
    return this.countTotalFeedback()
      ? Math.round((this.state.goodValue * 100) / this.countTotalFeedback())
      : 0;
  };

  render() {
    return (
      <Section title={"Please, leave a feedback!"}>
        <FeedbackOptions
          options={["good", "neutral", "bad"]}
          onLeaveFeedback={this.onLeaveFeedback}
        />
        <h1>Statistics</h1>
        {this.state.goodValue === 0 &&
        this.state.neutralValue === 0 &&
        this.state.badValue === 0 ? (
          <Notification message="There is no feedback...." />
        ) : (
          this.state.visible && (
            <Statistics
              onGoodValue={this.state.goodValue}
              onNeutralValue={this.state.neutralValue}
              onBadValue={this.state.badValue}
              total={this.countTotalFeedback()}
              positive={this.countPositiveFeedbackPercentage()}
            />
          )
        )}
      </Section>
    );
  }
}

export default App;
