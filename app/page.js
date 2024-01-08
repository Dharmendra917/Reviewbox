"use client";
import React, { useState } from "react";
import Sidebar from "@/components/Sidebar";
import Show from "@/components/Show";

const page = () => {
  const [data, setData] = useState([
    {
      mail: {
        from: "Tejas Poojara",
        subject: "Coffee?",
        time: Date.now(),
        composemail:
          "Hey Dharmedra, Was wondering if you'd be intrested in metting my team at Phiz Coffee at 11 AM today, No Pressure if you can't make it, although i think you guys would really get along!",
      },
      event: {
        availabletime: "time",
        compose:
          "Would you like to create an event for Coffee with Marisa at 11 AM?",
      },
      location: {
        cafe: "Philz Coffee",
        street: "20686 Stevens Creek Bivd Cupertino, CA 95014",
      },
    },
    {
      mail: {
        from: "Tejas Poojara",
        subject: "Dinner?",
        time: Date.now(),
        composemail:
          "Hey Dharmedra, Was wondering if you'd be intrested in metting my team at Phiz Coffee at 11 AM today, No Pressure if you can't make it, although i think you guys would really get along!",
      },
      event: {
        availabletime: "time",
        compose:
          "Would you like to create an event for Coffee with Marisa at 11 AM?",
      },
      location: {
        cafe: "Philz Coffee",
        street: "20686 Stevens Creek Bivd Cupertino, CA 95014",
      },
    },
    {
      mail: {
        from: "Tejas Poojara",
        subject: "Feedback",
        time: Date.now(),
        composemail:
          "Hey Dharmedra, Was wondering if you'd be intrested in metting my team at Phiz Coffee at 11 AM today, No Pressure if you can't make it, although i think you guys would really get along!",
      },
      event: {
        availabletime: "time",
        compose:
          "Would you like to create an event for Coffee with Marisa at 11 AM?",
      },
      location: {
        cafe: "Philz Coffee",
        street: "20686 Stevens Creek Bivd Cupertino, CA 95014",
      },
    },
  ]);
  return (
    <div className="h-full w-full flex ">
      <Sidebar data={data} setData={setData} />
      <Show />
    </div>
  );
};

export default page;
