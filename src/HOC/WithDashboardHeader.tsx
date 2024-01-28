import React from "react";
import Header from "../layouts/Header";
import { DotMenu, HamBurger } from "../component/icon";
import Stack from "../component/layout/Stack";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const WithDashboardHeader = (Component: any) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const MyComponent = (props: any) => {
    return (
      <div>
        <Header>
          <Stack className="flex w-full">
            <Stack className="flex w-full">
              <HamBurger />
              <label>Dashboard</label>
            </Stack>
            <div>
              <DotMenu />
            </div>
          </Stack>
        </Header>
        <Component {...props} />
      </div>
    );
  };
  return MyComponent;
};

export default WithDashboardHeader;
