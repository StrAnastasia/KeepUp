import { useCallback } from "react";
import {
  CanceledCheckbox,
  CheckedCheckbox,
  EmptyCheckbox,
  PostponedCheckbox,
} from "./icons";
import "./Today.css";
import { COLORS } from "./CONST/colors";
import { TASKS } from "./CONST/mockTasks";

function Today() {
  const getIcon = useCallback((status, points = 0) => {
    const bgColor = points > 0 ? COLORS.RED : "";
    const icons = {
      PENDING: <EmptyCheckbox bgColor={bgColor} />,
      DONE: <CheckedCheckbox bgColor={bgColor} />,
      POSTPONED: <PostponedCheckbox bgColor={bgColor} />,
      CANCELED: <CanceledCheckbox bgColor={bgColor} />,
    };
    return icons[status];
  }, []);

  return (
    <div className="TodayWrapper">
      <div className="ListContainer">
        <div>
          {TASKS.map(({ status, text, points }, id) => (
            <div className="Task">
              <button className="PseudoCheckbox">{getIcon(status, points)}</button>
              <p>{text}</p>
            </div>
          ))}
        </div>
        <div>habbits</div>
      </div>
      <div className="Diary">diary</div>
    </div>
  );
}

export default Today;
