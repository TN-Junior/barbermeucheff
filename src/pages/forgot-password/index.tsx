import Link from "next/link";
import Image from "next/image";

const ForgotPassword = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <Image
        src="/images/logo.svg" // Certifique-se que o caminho está correto e acessível
        alt="Logo"
        width={190} // Ajustando o tamanho maior
        height={110}
        priority // Evita carregamento assíncrono no SSR
      />
      <h1 className="text-4xl font-bold text-blue-700 mt-4">
        Barbearia<span className="text-blue-500">MeuCheff</span>
      </h1>
      <h2 className="text-lg font-medium text-gray-700 mt-4">
        Solicitar redefinição de senha
      </h2>
      <p className="text-center text-gray-500 mt-2">
        Insira seu e-mail abaixo para receber o código de autenticação por e-mail.
      </p>
      <form className="mt-6 w-full max-w-sm space-y-4">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            E-mail*
          </label>
          <input
            type="text"
            id="cpf"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="exemple@gmail.com"
          />
        </div>
        <div className="flex justify-center space-x-4">
          <Link
            href="/login"
            className="w-full text-center border border-blue-700 text-blue-700 py-2 px-4 rounded-lg hover:bg-blue-50 transition"
          >
            Voltar
          </Link>
          <button
            type="submit"
            className="w-full bg-blue-700 text-white py-2 px-4 rounded-lg hover:bg-blue-800 transition"
          >
            Receber código
          </button>
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword;