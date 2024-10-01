// SidebarDemo.js
import React, { useEffect, useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "./ui/sidebardemo";
import {
  IconArrowLeft,
  IconBrandTabler,
  IconSettings,
  IconUserBolt,
} from "@tabler/icons-react";
import { cn } from "../lib/utils";
import ApexCharts from "apexcharts";
import Navbar from "./navbar";
import { useTheme } from './ui/ThemeContext';
import Gauge from "./ui/gauage";
import CallToAction from './ui/calltoaction';

export function SidebarDemo() {
  const links = [
    { label: "Dashboard", href: "#", icon: <IconBrandTabler className="text-neutral-700 dark:text-neutral-200 h-7 w-7 flex-shrink-0" /> },
    { label: "Profile", href: "#", icon: <IconUserBolt className="text-neutral-700 dark:text-neutral-200 h-7 w-7 flex-shrink-0" /> },
    { label: "Settings", href: "#", icon: <IconSettings className="text-neutral-700 dark:text-neutral-200 h-7 w-7 flex-shrink-0" /> },
    { label: "Logout", href: "#", icon: <IconArrowLeft className="text-neutral-700 dark:text-neutral-200 h-7 w-7 flex-shrink-0" /> },
  ];

  const { isDarkMode } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <>
      <Navbar />
      <div className={cn("flex flex-col md:flex-row", isDarkMode ? 'bg-black' : 'bg-gray-100', "w-full hide-scrollbar h-screen")}>
        <Sidebar open={open} setOpen={setOpen}>
          <SidebarBody className="justify-between gap-10">
            <div className="flex flex-col flex-1 overflow-y-auto">
              <div className="flex flex-col gap-3">
                {links.map((link, idx) => (
                  <SidebarLink key={idx} link={link} />
                ))}
              </div>
            </div>
            <div>
              <SidebarLink link={{
                label: "User1",
                href: "#",
                icon: <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" className="h-7 w-7 flex-shrink-0 rounded-full" alt="Avatar" />
              }} />
            </div>
          </SidebarBody>
        </Sidebar>
        <div className="flex flex-1 h-full hide-scrollbar scroll-smooth overflow-y-auto p-2 md:p-10">
          <Dashboard isDarkMode={isDarkMode} />
        </div>
      </div>
    </>
  );
}

// Dashboard component with the chart integrated
const Dashboard = ({ isDarkMode }) => {
  useEffect(() => {
    const chartConfig = {
      series: [{ name: "Sales", data: [50, 40, 300, 320, 450, 350, 200, 230, 470, 300, 370, 400] }],
      chart: { type: "line", height: 340, toolbar: { show: false } },
      colors: [isDarkMode ? "#ffffff" : "#000000"],
      stroke: { lineCap: "round", curve: "smooth" },
      xaxis: {
        categories: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar"],
        labels: { style: { colors: isDarkMode ? "#ffffff" : "#000000", fontSize: "12px" } },
      },
      yaxis: {
        labels: { style: { colors: isDarkMode ? "#ffffff" : "#000000", fontSize: "12px" } },
      },
      grid: { borderColor: isDarkMode ? "#444444" : "#dddddd" },
      tooltip: { theme: "dark" },
    };

    const chart = new ApexCharts(document.querySelector("#line-chart"), chartConfig);
    chart.render();

    return () => {
      chart.destroy(); // Clean up on unmount
    };
  }, [isDarkMode]);

  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="grid gap-2 md:grid-cols-3">
        <InfoCard title="Revenue" value="$192.1k" change="32k increase" isDarkMode={isDarkMode} />
        <InfoCard title="New Customers" value="1340" change="3% decrease" isDecrease isDarkMode={isDarkMode} />
        <InfoCard title="New Orders" value="3543" change="7% increase" isDarkMode={isDarkMode} />
      </div>

      {/* Line chart */}
      <div className={`relative flex flex-col mx-0 rounded-xl border-neutral-200 ${isDarkMode ? 'bg-neutral-800' : 'bg-white'} shadow-md`}>
        <div className="flex items-center p-4">
          <h6 className={`from-neutral-100 text-${isDarkMode ? 'white' : 'black'} text-4xl`}>Line Chart</h6>
        </div>
        <div id="line-chart" className="p-4" />
      </div>

      <div>
        <Gauge value={75} isDarkMode={isDarkMode} />  
        <CallToAction /> 
        </div>
    </div>
  );
};

// Info Card Component
const InfoCard = ({ title, value, change, isDecrease, isDarkMode }) => (
  <div className={`relative p-6 rounded-2xl ${isDarkMode ? 'bg-neutral-800' : 'bg-white'} shadow`}>
    <div className="space-y-2">
      <div className={`text-sm font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{title}</div>
      <div className={`text-3xl ${isDarkMode ? 'text-gray-100' : 'text-black'}`}>{value}</div>
      <div className="flex items-center space-x-1 text-sm font-medium">
        <span className={isDecrease ? "text-red-600" : "text-green-600"}>{change}</span>
      </div>
    </div>
  </div>
);

export default SidebarDemo;
