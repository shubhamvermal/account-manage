/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import WithDashboardHeader from "../../HOC/WithDashboardHeader";
import { account_list } from "./accountList";
import { Card } from "../../component";
import Stack from "../../component/layout/Stack";
import { Delete, Edit } from "../../component/icon";

const Dashboard = () => {
  return (
    <Stack className="flex flex-col p-2 gap-2">
      {account_list.map((item: any) => {
        const { name, credit, debit } = item;
        return (
          <Card>
            <Stack className="flex flex-col gap-2">
              <Stack className="flex  justify-between">
                <h1 className="font-extrabold text-white">{name}</h1>
                <Stack className="flex">
                  <Edit />
                  <Delete />
                </Stack>
              </Stack>
              <Stack className="flex justify-between">
                <Card>
                  <Stack className="flex flex-col items-center">
                    <p className="text-white">Credit</p>
                    <p className="text-white"> {credit}</p>
                  </Stack>
                </Card>
                <Card>
                  <Stack className="flex flex-col items-center">
                    <p className="text-white">Debit</p>
                    <p className="text-white"> {debit}</p>
                  </Stack>
                </Card>
                <Card>
                  <Stack className="flex flex-col items-center">
                    <p className="text-white">Balance</p>
                    <p className="text-white"> {credit - debit}</p>
                  </Stack>
                </Card>
              </Stack>
            </Stack>
          </Card>
        );
      })}
    </Stack>
  );
};

export default WithDashboardHeader(Dashboard);
