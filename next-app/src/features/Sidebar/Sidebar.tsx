import Button from "@/shared/ui/Button/Button";
import "./Sidebar.css";

import Calendar from "@/shared/ui/icons/Calendar";
import Settings from "@/shared/ui/icons/Settings";
import Shop from "@/shared/ui/icons/Shop";
import { Box, Flex } from "@radix-ui/themes";

export default function Sidebar() {
  // className="SidebarWrapper"
  return (
    <div
      // Box
      // width="200px" height="100vh" p="4"
      className="p-4 w-[200px] h-[100vh] border-r-2 border-r-black"
    >
      <Flex gap="3" direction="column">
        <Button>
          <Calendar /> Calendar
        </Button>
        <a href="/tear-tracker">
          <Button className="w-full"> Tear Tracker </Button>
        </a>
        <Button>
          <Shop /> Shop
        </Button>
        <Button>
          <Settings /> Settings
        </Button>
      </Flex>
    </div>
  );
}
