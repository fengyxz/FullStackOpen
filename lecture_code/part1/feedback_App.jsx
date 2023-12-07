import { useState } from "react";

const Button = ({ handler, text }) => {
  return <button onClick={handler}>{text}</button>;
};

const StaticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text} </td>
      <td>{value}</td>
    </tr>
  );
};

const Statics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;
  const sum = good - bad;
  return total === 0 ? (
    <div>No feedback given</div>
  ) : (
    <table>
      <tbody>
        <StaticLine text="good" value={good} />
        <StaticLine text="neutral" value={neutral} />
        <StaticLine text="bad" value={bad} />
        <StaticLine text="all" value={total} />
        <StaticLine text="average" value={sum / total} />
        <StaticLine text="positive" value={good / total} />
      </tbody>
    </table>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>give feedback</h1>
      <div>
        <Button handler={() => setGood(good + 1)} text="good" />
        <Button handler={() => setNeutral(neutral + 1)} text="neutral" />
        <Button handler={() => setBad(bad + 1)} text="bad" />
      </div>
      <h1>Statics</h1>
      <Statics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
