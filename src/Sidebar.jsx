import { Link } from "react-router-dom";
import "./Sidebar.css";
import Button from "./Button";
import { Calendar, Settings, Shop, Tasks } from "./icons";
import { COLORS } from "./CONST/colors";
import { Tooltip } from 'react-tooltip'

function Sidebar() {
  return (
    <div className="SidebarWrapper">
      <Link href="/" data-tooltip-id="today" data-tooltip-content="Here you can edit today!">
        <Button mainColor={COLORS.PINK} shadeColor={COLORS.RED}>
          TOD
        </Button>
      </Link>
      <Link href="/">
        <Button mainColor={COLORS.BLUE} shadeColor={COLORS.TEAL}>
          <Calendar />
        </Button>
      </Link>
      <Link href="/">
        <Button mainColor={COLORS.YELLOW} shadeColor={COLORS.GREEN}>
          {/* HAB */}
          <Tasks />
        </Button>
      </Link>
      <Link href="/">
        <Button mainColor={COLORS.GREEN} shadeColor={COLORS.BLUE}>
          <Shop />
        </Button>
      </Link>
      <Link href="/">
        <Button mainColor={COLORS.TEAL} shadeColor={COLORS.GREEN}>
          <Settings />
        </Button>
      </Link>
    </div>
  );
}

export default Sidebar;
