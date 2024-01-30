import { useState } from "react";

const StatisticLine = (props) => {
  return (
    <p>
      {props.text} {props.value}
    </p>
  );
};

const Statistics = (props) => {
  const all = props.good + props.bad + props.neutral
  let avg = Number((props.good - props.bad) / all || 0).toFixed(1);
  const positive = `${(props.good / all) * 100 || 0} %`
  return (
    <>
      <div>
        {props.good > 0 || props.neutral > 0 || props.bad > 0 ? (
          <>
            <StatisticLine text="good" value={props.good} />
            <StatisticLine text="neutral" value={props.neutral} />
            <StatisticLine text="bad" value={props.bad} />
            <StatisticLine text="all" value={all} />
            <StatisticLine text="average" value={avg} />
            <StatisticLine text="positive" value={positive} />

          </>
        ) : (
          <>No feedback given</>
        )}
      </div>
    </>
  );
};
function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <>
      <h1>give feedback</h1>
      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>

      <h1>statistics</h1>
      <Statistics good={good} bad={bad} neutral={neutral} />
    </>
  );
}

export default App;
