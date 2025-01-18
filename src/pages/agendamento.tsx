"use client";

import React, { useState } from "react";

const Agendamento: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date()); // Data atual

  const generateAvailableTimes = () => {
    const times = [];
    const startTime = 8 * 60; // 8:00 AM em minutos
    const endTime = 18 * 60; // 6:00 PM em minutos

    for (let minutes = startTime; minutes < endTime; minutes += 30) {
      const hour = Math.floor(minutes / 60);
      const minute = minutes % 60;
      times.push(`${hour}:${minute === 0 ? "00" : minute}`);
    }

    return times;
  };

  const handleSelectTime = (time: string) => {
    alert(`Horário selecionado: ${time}`);
  };

  return (
    <div className="min-h-screen bg-beige-100 py-10">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-4xl font-bold text-center mb-6 text-orange-500">
          Agendamento - {currentDate.toLocaleDateString()}
        </h1>

        <ul className="grid grid-cols-2 gap-4">
          {generateAvailableTimes().map((time, index) => (
            <li
              key={index}
              className="py-4 px-6 bg-orange-500 text-white text-center rounded cursor-pointer hover:bg-orange-600 transition"
              onClick={() => handleSelectTime(time)}
            >
              {time}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Agendamento;
