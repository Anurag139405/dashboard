"use client"; // If you're using a framework that supports this, otherwise remove it.
import React, { useEffect, useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "./ui/sidebardemo";
import {
  IconArrowLeft,
  IconBrandTabler,
  IconSettings,
  IconUserBolt,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import { cn } from "../lib/utils";
import ApexCharts from "apexcharts"; // Ensure you have this installed

export function SidebarDemo() {
  const links = [
    { label: "Dashboard", href: "#", icon: <IconBrandTabler className="text-neutral-700 dark:text-neutral-200 h-7 w-7 flex-shrink-0" /> },
    { label: "Profile", href: "#", icon: <IconUserBolt className="text-neutral-700 dark:text-neutral-200 h-7 w-7 flex-shrink-0" /> },
    { label: "Settings", href: "#", icon: <IconSettings className="text-neutral-700 dark:text-neutral-200 h-7 w-7 flex-shrink-0" /> },
    { label: "Logout", href: "#", icon: <IconArrowLeft className="text-neutral-700 dark:text-neutral-200 h-7 w-7 flex-shrink-0" /> },
  ];

  const [open, setOpen] = useState(false);

  return (
    <div className={cn("flex flex-col md:flex-row bg-gray-100 dark:bg-neutral-800 w-full h-screen")}>
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-col flex-1 overflow-y-auto">
            {open ? <Logo /> : <LogoIcon />}
            <div className="mt-8 flex flex-col gap-3">
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
            </div>
          </div>
          <div>
            <SidebarLink link={{
              label: "User1",
              href: "#",
              icon: <img src="https://assets.aceternity.com/manu.png" className="h-7 w-7 flex-shrink-0 rounded-full" alt="Avatar" />
            }} />
          </div>
        </SidebarBody>
      </Sidebar>
      <div className="flex flex-1 h-full hide-scrollbar scroll-smooth overflow-y-auto p-2 md:p-10">
        <Dashboard />
      </div>
    </div>
  );
}

const Logo = () => (
  <a href="#" className="flex items-center text-sm text-black py-1">
    <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
    <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="font-medium text-black dark:text-white whitespace-pre">Acet Labs</motion.span>
  </a>
);

const LogoIcon = () => (
  <a href="#" className="flex items-center text-sm text-black py-1">
    <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
  </a>
);

// Dashboard component with the chart and gauge integrated
const Dashboard = () => {
  useEffect(() => {
    const chartConfig = {
      series: [{ name: "Sales", data: [50, 40, 300, 320, 450, 350, 200, 230, 470, 300, 370, 400] }],
      chart: { type: "line", height: 340, toolbar: { show: false } },
      colors: ["#ffffff"],
      stroke: { lineCap: "round", curve: "smooth" },
      xaxis: {
        categories: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar"],
        labels: { style: { colors: "#616161", fontSize: "12px" } },
      },
      yaxis: {
        labels: { style: { colors: "#616161", fontSize: "12px" } },
      },
      grid: { borderColor: "#dddddd" },
      tooltip: { theme: "dark" },
    };

    const chart = new ApexCharts(document.querySelector("#line-chart"), chartConfig);
    chart.render();

    return () => {
      chart.destroy(); // Clean up on unmount
    };
  }, []);

  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="grid gap-2 md:grid-cols-3">
        <InfoCard title="Revenue" value="$192.1k" change="32k increase" />
        <InfoCard title="New Customers" value="1340" change="3% decrease" isDecrease />
        <InfoCard title="New Orders" value="3543" change="7% increase" />
      </div>
      <div className="relative flex flex-col mx-0 rounded-xl border-neutral-200 bg-white dark:bg-neutral-800 dark:border-neutral-600 shadow-md">
        <div className="flex items-center p-4">
          <h6 className="from-neutral-100 text-white text-4xl">Line Chart</h6>
        </div>
        <div id="line-chart" className="p-4" />
      </div>
      <Gauge value={75} />
    </div>
  );
};

// Info Card Component
const InfoCard = ({ title, value, change, isDecrease }) => (
  <div className="relative p-6 rounded-2xl bg-white shadow dark:bg-neutral-800">
    <div className="space-y-2">
      <div className="text-sm font-medium text-gray-500 dark:text-gray-400">{title}</div>
      <div className="text-3xl dark:text-gray-100">{value}</div>
      <div className="flex items-center space-x-1 text-sm font-medium">
        <span className={isDecrease ? "text-red-600" : "text-green-600"}>{change}</span>
      </div>
    </div>
  </div>
);

// Gauge Component
const Gauge = ({ value }) => {
  const percentage = (value / 100) * 360;

  return (
    <div className="max-w-sm mx-auto mt-4 pb-10 bg-white rounded-lg shadow-md">
      <div className="p-4 text-center">
        <h2 className="text-lg font-semibold text-gray-800">Gauge Value</h2>
        <div className="flex items-center justify-center w-20 h-20 relative mt-4 rounded-md">
          <div className="absolute w-full h-full rounded-full border-8 border-gray-400"></div>
          <div
            className="absolute w-full h-full rounded-full"
            style={{
              clipPath: `polygon(50% 50%, 0% 0%, 100% 0%, 100% 100%, 0% 100%)`,
              backgroundColor: '#9333ea',
              transform: `rotate(${percentage}deg)`,
            }}
          ></div>
          <div className="absolute w-12 h-12 bg-white border-4 border-gray-300 rounded-full"></div>
          <div className="absolute text-xl font-bold text-gray-800">{value}%</div>
        </div>
      </div>
    </div>
  );
};

export default SidebarDemo;
