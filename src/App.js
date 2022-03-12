import { useState } from "react";
import FeedbackOptions from "./components/FeedbackOptions";
import Statistics from "./components/Statistics";
import Notification from "./components/Notification";
import Section from "./components/Section";
import style from "./App.css";

function App() {
  const [goodValue, setGoodValue] = useState(0);
  const [neutralValue, setNeutralValue] = useState(0);
  const [badValue, setBadValue] = useState(0);
  const [visible] = useState("false");

  const onLeaveFeedback = (feedback) => {
    switch (feedback) {
      case "good":
        setGoodValue(goodValue + 1, visible === "true");
        break;
      case "neutral":
        setNeutralValue(neutralValue + 1, visible === "true");
        break;
      case "bad":
        setBadValue(badValue + 1, visible === "true");
        break;
      default:
        break;
    }
  };

  const countTotalFeedback = () => {
    return goodValue + neutralValue + badValue;
  };

  const countPositiveFeedbackPercentage = () => {
    return countTotalFeedback()
      ? Math.round((goodValue * 100) / countTotalFeedback())
      : 0;
  };

  return (
    <Section title={"Please, leave a feedback!"}>
      <FeedbackOptions
        options={["good", "neutral", "bad"]}
        onLeaveFeedback={onLeaveFeedback}
      />
      <h1>Statistics</h1>
      {goodValue === 0 && neutralValue === 0 && badValue === 0 ? (
        <Notification message="There is no feedback...." />
      ) : (
        visible && (
          <Statistics
            onGoodValue={goodValue}
            onNeutralValue={neutralValue}
            onBadValue={badValue}
            total={countTotalFeedback()}
            positive={countPositiveFeedbackPercentage()}
          />
        )
      )}
    </Section>
  );
}

export default App;
