"use client";
import React, { useState } from "react";
import Calendar from "react-calendar";
import Footer from "../footer/Footer"; // Importe o Footer
import "react-calendar/dist/Calendar.css"; // Importação do CSS do React Calendar
import "../../styles/_app"; // Importação de estilos globais

// Define o tipo de valor do calendário
type Value = Date | Date[] | null;

const CalendarPage: React.FC = () => {
  const [date, setDate] = useState<Value>(new Date()); // Estado para a data selecionada

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      {/* Conteúdo Principal */}
      <main className="flex-grow flex items-center justify-center p-4">
        <div className="bg-white text-gray-900 shadow-lg rounded-lg p-8 w-full max-w-md">
          {/* Título */}
          <h1 className="text-4xl font-extrabold text-center text-red-500 mb-4">
            Escolha sua Data
          </h1>
          <p className="text-center text-gray-600 mb-6">
            Selecione um dia para agendar seu corte.
          </p>

          {/* Componente do Calendário */}
          <Calendar
            onChange={setDate} // Atualiza o estado com a data selecionada
            value={date}
            className="rounded-lg border-0 shadow-md"
          />

          {/* Exibição da Data Selecionada */}
          <div className="text-center mt-4">
            <p className="text-gray-800 font-semibold">
              Data selecionada:{" "}
              <span className="text-red-500">
                {Array.isArray(date)
                  ? `${date[0]?.toLocaleDateString("pt-BR")} - ${date[1]?.toLocaleDateString("pt-BR")}`
                  : date instanceof Date
                  ? date.toLocaleDateString("pt-BR")
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
