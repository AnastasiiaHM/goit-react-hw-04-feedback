import { useState } from 'react';
import { Buttons } from './Buttons/Buttons';
import { Total } from './Total/Total';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';
import css from '../Statistic/Statistic.module.css';

export default function Statistic() {
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);

  const d = { good, bad, neutral };

  const nameBtns = Object.keys(d);

  const valuesBtn = Object.values(d);

  const total = good + bad + neutral;
  const positive = ((good / total) * 100).toFixed(2);
  const negativ = ((bad / total) * 100).toFixed(2);

  const handleClickBtn = event => {
    const nameBtn = event.target.name;

    switch (nameBtn) {
      case 'good':
        setGood(prev => prev + 1);
        break;
      case 'bad':
        setBad(prev => prev + 1);
        break;
      case 'neutral':
        setNeutral(prev => prev + 1);
        break;
      default:
        return;
    }
  };

  return (
    <div className={css.statistic__wraper}>
      <Section title="Please leave feedback">
        {valuesBtn.map((value, index) => (
          <span className={css.statistic_number} key={index}>
            {value}
          </span>
        ))}
        <div className={css.btnWraper}>
          {nameBtns.map(btn => (
            <Buttons nameBtn={btn} handleClick={handleClickBtn} key={btn} />
          ))}
        </div>
        <h3 className={css.statistic__totalTitle}>Statistick</h3>
        <div className={css.statistic__totalWraper}>
          {total !== 0 ? (
            <Total total={total} positiv={positive} negativ={negativ} />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </div>
      </Section>
    </div>
  );
}
