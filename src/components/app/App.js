import { GlobalStyle } from 'components/constants/GlobalStyle';
import { Layout } from 'components/layout/Layout';
import React, { useState } from 'react';
import { Section } from 'components/section/Section';
import { Statistics } from 'components/statistics/Statistics';
import { FeedbackOptions } from 'components/feedbackOptions/FeedbackOptions';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = value => {
    switch (value) {
      case 'good':
        return setGood(prevGood => prevGood + 1);

      case 'neutral':
        return setNeutral(prevNeutral => prevNeutral + 1);

      case 'bad':
        return setBad(prevBad => prevBad + 1);

      default:
        return;
    }
  };

  const total = good + neutral + bad;

  const countPositivePercentage = () => {
    const percentage = Math.round((100 / total) * good);
    if (percentage) {
      return percentage;
    }
    return 0;
  };
  const positivePercentage = countPositivePercentage();

  return (
    <Layout>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions onLeaveFeedback={onLeaveFeedback} />
      </Section>
      <Section title={'Statistics'}>
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={positivePercentage}
        />
      </Section>
      <GlobalStyle />
    </Layout>
  );
};

// export class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   incrementGood = () => {
//     this.setState(prevState => ({
//       good: prevState.good + 1,
//     }));
//   };

//   onLeaveFeedback = value => {
//     this.setState(prevState => {
//       switch (value) {
//         case 'good':
//           return { good: prevState.good + 1 };

//         case 'neutral':
//           return { neutral: prevState.neutral + 1 };

//         case 'bad':
//           return { bad: prevState.bad + 1 };

//         default:
//           return;
//       }
//     });
//   };

//   countTotalFeedback = () =>
//     Object.values(this.state).reduce((acc, value) => acc + value, 0);

//   countPositiveFeedbackPercentage = () => {
//     const positivePercentage = Math.round(
//       (100 / this.countTotalFeedback()) * this.state.good
//     );
//     if (positivePercentage) {
//       return positivePercentage;
//     }
//     return 0;
//   };

//   render() {
//     const { good, neutral, bad } = this.state;
//     const total = this.countTotalFeedback();
//     const positivePercentage = this.countPositiveFeedbackPercentage();

//     return (
//       <Layout>
//         <Section title={'Please leave feedback'}>
//           <FeedbackOptions
//             options={Object.keys(this.state)}
//             onLeaveFeedback={this.onLeaveFeedback}
//           />
//         </Section>
//         <Section title={'Statistics'}>
//           <Statistics
//             good={good}
//             neutral={neutral}
//             bad={bad}
//             total={total}
//             positivePercentage={positivePercentage}
//           />
//         </Section>
//         <GlobalStyle />
//       </Layout>
//     );
//   }
// }
