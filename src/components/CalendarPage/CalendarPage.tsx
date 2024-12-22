"use client";
import React, { useState } from "react";
import Calendar from "react-calendar";
import Footer from "../footer/Footer"; // Importe o Footer
import "react-calendar/dist/Calendar.css";
import "../../styles/_app";


type Value = Date | Date[] | null;

const CalendarPage: React.FC = () => {
  const [date, setDate] = useState<Value>(new Date());

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      {/* Conteúdo Principal */}
      <main className="flex-grow flex items-center justify-center p-4">
        <div className="bg-white text-gray-900 shadow-lg rounded-lg p-8 w-full max-w-md">
          <h1 className="text-4xl font-extrabold text-center text-red-500 mb-4">
            Escolha sua Data
          </h1>
          <p className="text-center text-gray-600 mb-6">
            Selecione um dia para agendar seu corte.
          </p>
          <Calendar
            onChange={setDate}
            value={date}
            className="rounded-lg border-0 shadow-md"
          />
          <div className="text-center mt-4">
            <p className="text-gray-800 font-semibold">
              Data selecionada:{" "}
              <span className="text-red-500">
                {Array.isArray(date)
                  ? `${date[0]?.toLocaleDateString()} - ${date[1]?.toLocaleDateString()}`
                  : date instanceof Date
                  ? date.toLocaleDateString()
                  : "Nenhuma data selecionada"}
              </span>
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default CalendarPage;
