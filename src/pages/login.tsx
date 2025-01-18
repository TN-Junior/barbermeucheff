"use client";

import React from "react";

const Login: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-black flex items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full px-4">
        {/* Login Section */}
        <div className="bg-blue-950 text-white rounded-lg shadow-lg p-6 w-full max-w-sm mx-auto">
          <h2 className="text-2xl font-bold mb-4 text-center">Já estuda com a gente?</h2>
          <p className="text-sm mb-4 text-center">Faça seu login e boa aula!</p>
          <form>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                E-mail
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 rounded bg-blue-800 text-white border border-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium mb-1">
                Senha
              </label>
              <div className="relative">
                <input
                  type="password"
                  id="password"
                  className="w-full px-4 py-2 rounded bg-blue-800 text-white border border-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-3 flex items-center text-gray-300"
                >
                  👁
                </button>
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-green-500 text-black font-semibold py-3 rounded-full mt-4 transition hover:bg-green-600"
            >
              ENTRAR
            </button>
            <button
              type="button"
              className="w-full border border-red-500 text-red-500 font-semibold py-3 rounded-full mt-4 transition hover:bg-red-500 hover:text-white"
            >
              ENTRAR COM GOOGLE
            </button>
          </form>
          <p className="mt-4 text-sm text-center">
            <a href="#" className="underline hover:text-blue-400">
              Primeiro acesso
            </a>{" "}
            /{" "}
            <a href="#" className="underline hover:text-blue-400">
              Esqueci minha senha
            </a>
          </p>
        </div>

        {/* Course Section */}
        <div className="text-white">
          <h2 className="text-3xl font-bold mb-4">Faça seu login para agendar um horário</h2>
          <p className="text-sm mb-6">Serviços:</p>
          <div className="grid grid-cols-2 gap-4">
            {[
              { title: "Barba", description: "Barba" },
              { title: "Corte", description: "Corte" },
              { title: "Barba e Corte", description: "Barba + Corte" },
            ].map((course, index) => (
              <div
                key={index}
                className="bg-blue-950 p-4 rounded-lg shadow hover:shadow-lg transition"
              >
                <p className="text-sm text-gray-300">{course.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
