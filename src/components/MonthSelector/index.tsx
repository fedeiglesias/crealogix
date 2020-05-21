import React from 'react';
import style from './style.css';

interface IMonthSelector {
  label: string;
  from: Date;
  to: Date;
  selectedDate: Date;
  changeDate: Function;
  className?: string;
}

const MonthSelector: React.FC<IMonthSelector> = ({
  label,
  from,
  to,
  selectedDate,
  className,
  changeDate,
}) => {
  console.log('ha cambiado', selectedDate);

  const monthsNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  const mandatoryData = !!from && !!to && !!selectedDate;

  const years = (): number[] => {
    const years = [];
    for (
      let year = from.getFullYear();
      year <= to.getFullYear();
      year++
    ) {
      years.push(year);
    }

    return years;
  };

  const months = (): number[] => {
    let dateTemp = new Date(from.getTime());
    let monthRange = [];
    const selectedYear = selectedDate.getUTCFullYear();

    do {
      const year = dateTemp.getUTCFullYear();
      const month = dateTemp.getMonth();

      if (year === selectedYear) monthRange.push(month);

      dateTemp.setMonth(month + 1);
    } while (dateTemp <= to);

    return monthRange;
  };

  const changeDateHandler = (
    event: React.ChangeEvent<HTMLSelectElement>,
    mode: string
  ) => {
    let value = parseInt(event.target.value);
    let newDate = new Date(
      (selectedDate || new Date()).getTime()
    );

    if (mode === 'month') newDate.setMonth(value);
    if (mode === 'year') newDate.setFullYear(value);

    changeDate(newDate);
  };

  const renderSelectMonth = () => (
    <select
      value={selectedDate.getMonth()}
      onChange={e => changeDateHandler(e, 'month')}
    >
      {months().map(month => (
        <option key={month} value={month}>
          {monthsNames[month]}
        </option>
      ))}
    </select>
  );

  const renderSelectYear = () => {
    return (
      <select
        value={selectedDate.getFullYear()}
        onChange={e => changeDateHandler(e, 'year')}
      >
        {years().map((year: number) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
    );
  };

  return (
    <div className={[style.root, className].join(' ')}>
      <div>{label}</div>
      {mandatoryData ? renderSelectMonth() : null}
      {mandatoryData ? renderSelectYear() : null}
    </div>
  );
};

export default MonthSelector;
