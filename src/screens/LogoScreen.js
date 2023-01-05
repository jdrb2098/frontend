import React from "react";
import Banner from "../assets/logos/BannerPrincipal.png";
import Header from "../components/Header";
import {
  LineChart,
  PieChart,
  Pie,
  Sector,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Line,
  AreaChart,
  Area,
  Tooltip,
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  RadialBarChart, RadialBar, Legend,
} from "recharts";
function LogoScreen() {
  const data = [
    { name: "A", uv: 400, pv: 2400, amt: 2400 },
    { name: "C", uv: 800, pv: 2200, amt: 2400 },
    { name: "B", uv: 200, pv: 200, amt: 2400 },
  ];
  const data2 = [
    { name: "Page A", uv: 4000, pv: 2400, amt: 2400 },
    { name: "Page B", uv: 3000, pv: 1398, amt: 2210 },
    { name: "Page C", uv: 2000, pv: 9800, amt: 2290 },
    { name: "Page D", uv: 2780, pv: 3908, amt: 2000 },
    { name: "Page E", uv: 1890, pv: 4800, amt: 2181 },
    { name: "Page F", uv: 2390, pv: 3800, amt: 2500 },
    { name: "Page G", uv: 3490, pv: 4300, amt: 2100 },
  ];
  const data3 = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: -1000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 500,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: -2000,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: -250,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  const data4 = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 },
  ];

  const data5 = [
    {
      subject: "A",
      A: 120,
      B: 110,
      fullMark: 150
    },
    {
      subject: "B",
      A: 98,
      B: 130,
      fullMark: 150
    },
    {
      subject: "C",
      A: 86,
      B: 130,
      fullMark: 150
    },
    {
      subject: "D",
      A: 99,
      B: 100,
      fullMark: 150
    },
    {
      subject: "E",
      A: 85,
      B: 90,
      fullMark: 150
    },
    {
      subject: "F",
      A: 65,
      B: 85,
      fullMark: 150
    }
  ];
  const data6 = [
    {
      name: "18-24",
      uv: 31.47,
      pv: 2400,
      fill: "#8884d8"
    },
    {
      name: "25-29",
      uv: 26.69,
      pv: 4567,
      fill: "#83a6ed"
    },
    {
      name: "30-34",
      uv: 15.69,
      pv: 1398,
      fill: "#8dd1e1"
    },
    {
      name: "35-39",
      uv: 8.22,
      pv: 9800,
      fill: "#82ca9d"
    },
    {
      name: "40-49",
      uv: 8.63,
      pv: 3908,
      fill: "#a4de6c"
    },
    {
      name: "50+",
      uv: 2.63,
      pv: 4800,
      fill: "#d0ed57"
    },
    {
      name: "unknow",
      uv: 6.67,
      pv: 4800,
      fill: "#ffc658"
    }
  ];
  const style = {
    top: 0,
    left: 350,
    lineHeight: "24px"
  };
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
  const gradientOffset = () => {
    const dataMax = Math.max(...data3.map((i) => i.uv));
    const dataMin = Math.min(...data3.map((i) => i.uv));

    if (dataMax <= 0) {
      return 0;
    }
    if (dataMin >= 0) {
      return 1;
    }

    return dataMax / (dataMax - dataMin);
  };
  const off = gradientOffset();
  return (
    <div className="container">
      <Header />
      <div className="mb-5">
        <img className="mb-5 mw-100" src={Banner} alt="banner"></img>
      </div>
      
     
    </div>
  );
}

export default LogoScreen;
