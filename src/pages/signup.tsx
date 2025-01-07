import { useState, FormEvent } from "react";

const Signup = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
  
    setMessage("");
    setErrorMessage("");
  
    if (!fullName || !email || !password) {
      setErrorMessage("Todos os campos são obrigatórios.");
      return;
    }
  
    try {
      const response = await fetch("http://localhost:8081/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: fullName, email, password }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        setMessage(data.message || "Cadastro realizado com sucesso!");
        setFullName("");
        setEmail("");
        setPassword("");
      } else {
        setErrorMessage(data.error || "Erro ao cadastrar.");
      }
    } catch (error) {
      setErrorMessage("Erro ao processar a solicitação.");
    }
  };
  

  return (
    <div className="min-h-screen bg-gray-100 py-6 px-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-black-700">
          Barbearia<span className="text-gray-500">MeuCheff</span>
        </h1>
        <p className="text-gray-600 font-semibold">Informações Pessoais</p>
      </div>

      <form
        className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto"
        onSubmit={handleSubmit}
      >
        <div>
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="fullName"
          >
            NOME COMPLETO *
          </label>
          <input
            type="text"
            id="fullName"
            placeholder="Digite o nome completo"
            className="mt-1 w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>

        <div>
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="email"
          >
            E-MAIL *
          </label>
          <input
            type="email"
            id="email"
            placeholder="Digite o e-mail"
            className="mt-1 w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="password"
          >
            SENHA *
          </label>
          <input
            type="password"
            id="password"
            placeholder="Digite sua senha"
            className="mt-1 w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className="text-xs text-gray-500 mt-1">
            8 dígitos, com pelo menos 1 letra maiúscula.
          </p>
        </div>

        {errorMessage && (
          <p className="text-sm text-red-500 col-span-2 text-center">
            {errorMessage}
          </p>
        )}
        {message && (
          <p className="text-sm text-green-500 col-span-2 text-center">
            {message}
          </p>
        )}

        <div className="col-span-2 text-right">
          <button
            type="submit"
            className="bg-red-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-red-600 transition"
          >
            CADASTRAR
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
