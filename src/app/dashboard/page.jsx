"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

export default function DashboardPage() {
  const router = useRouter();
  const [sleepLogs, setSleepLogs] = useState([
    { day: "Mon", hours: 6 },
    { day: "Tue", hours: 7 },
    { day: "Wed", hours: 5 },
    { day: "Thu", hours: 8 },
    { day: "Fri", hours: 7 },
    { day: "Sat", hours: 6 },
    { day: "Sun", hours: 8 }
  ]);

  const [newSleepHours, setNewSleepHours] = useState("");

  const handleLogSleep = () => {
    if (newSleepHours) {
      const today = new Date().toLocaleString("en-US", { weekday: "short" });
      setSleepLogs([
        ...sleepLogs.slice(1),
        { day: today, hours: Number(newSleepHours) }
      ]);
      setNewSleepHours("");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-2xl p-6 max-w-lg w-full text-center">
        <h1 className="text-2xl font-bold text-gray-900">
          Sleep Tracking Dashboard
        </h1>

        {/* Sleep Log Form */}
        <div className="mt-4">
          <input
            type="number"
            placeholder="Enter sleep hours"
            value={newSleepHours}
            onChange={(e) => setNewSleepHours(e.target.value)}
            className="border p-2 rounded-lg w-2/3"
          />
          <button
            onClick={handleLogSleep}
            className="ml-2 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 transition"
          >
            Log Sleep
          </button>
        </div>

        {/* Sleep Chart */}
        <div className="mt-6 w-full h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={sleepLogs}>
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="hours" fill="#3b82f6" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Navigation */}
        <button
          className="mt-6 bg-green-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-green-700 transition"
          onClick={() => router.push("/relaxation")}
        >
          Relaxation & Sleep Sounds
        </button>
      </div>
    </div>
  );
}
