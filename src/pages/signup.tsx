// src/pages/signup.tsx
import Image from "next/image";
import "../styles/_app";

const Signup = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-6">
      <div className="w-full max-w-3xl bg-white shadow-md rounded-lg p-8">
        {/* Título */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-blue-700">Barbearia <span className="text-blue-500">MeuCheff</span></h1>
          <p className="text-gray-600 font-semibold">Informações Pessoais</p>
        </div>

        {/* Formulário */}
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Nome Completo */}
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="fullName">
              NOME COMPLETO *
            </label>
            <input
              type="text"
              id="fullName"
              placeholder="Digite o nome completo"
              className="mt-1 w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Data de Nascimento */}
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="birthDate">
              DATA DE NASCIMENTO *
            </label>
            <input
              type="text"
              id="birthDate"
              placeholder="dd/mm/aaaa"
              className="mt-1 w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="email">
              E-MAIL *
            </label>
            <input
              type="email"
              id="email"
              placeholder="Digite o e-mail"
              className="mt-1 w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Número de Celular */}
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="phone">
              NÚMERO DE CELULAR *
            </label>
            <input
              type="text"
              id="phone"
              placeholder="Digite o número de celular"
              className="mt-1 w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Senha */}
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="password">
              SENHA *
            </label>
            <input
              type="password"
              id="password"
              placeholder="Digite sua senha"
              className="mt-1 w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <p className="text-xs text-gray-500 mt-1">8 dígitos, com pelo menos 1 letra maiúscula.</p>
          </div>
        </form>

        {/* Botão de Cadastro */}
        <div className="mt-8 text-center">
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-bold py-2 rounded-lg hover:bg-blue-600 transition"
          >
            CADASTRAR
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
