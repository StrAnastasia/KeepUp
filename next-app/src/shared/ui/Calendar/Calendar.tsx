import { useMemo } from "react";

function daysNumByMonth(month: number, year?: number) {
  // january == 0
  if ([3, 5, 8, 10].includes(month)) return 30;
  if (month === 1 && year && !(year % 4)) return 29;
  if (month === 1 && year && year % 4) return 28;
  // if ([0, 2, 4, 6, 7, 9, 11].includes(month)) return 31;
  return 31;
}

export default function Calendar() {
  const today = useMemo(() => new Date(), []);

  const calendarLayout = useMemo(() => {
    const daysPerWeek = 7;
    const todayWeekDay = today.getDay();
    const daysPerMonth = daysNumByMonth(today.getMonth());
    const cellsPerCalendarPage = daysPerMonth + (todayWeekDay - 1);
    const weeksPerMonth = Math.ceil(cellsPerCalendarPage / daysPerWeek);

    const layout: number[][] = [];

    let date = 1;
    let emptyCells = cellsPerCalendarPage - daysPerMonth;
    for (let i = 0; i < weeksPerMonth; i++) {
      const week = [];
      for (let j = 0; j < daysPerWeek; j++) {
        if (emptyCells) {
          week[j] = 0;
          emptyCells--;
        } else if (date <= daysPerMonth) {
          week[j] = date;
          date++;
        } else {
          week[j] = 0;
        }
      }
      layout[i] = week;
    }

    return layout;
  }, [today]);

  return (
    <div>
      <div>{today.toString()}</div>
      <div>{today.getDate().toString()}</div>
      <div>{today.getDate().toString()}</div>
      <div>{today.getMonth().toString()}</div>
      <div>{today.getDay().toString()}</div>

      <div className={`grid row-row-4  gap-4`}>
        {calendarLayout.map((week, weekN) => (
          <div key={weekN} className="grid grid-cols-7 gap-4">
            {week.map((day: number, dayN: number) => (
              <div
                key={weekN + "-" + dayN}
                className="p-4 border w-[60px] h-[60px]"
              >
                {!!day && day}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
