import Link from "next/link";
import Image from "next/image";
import "../styles/_app";

const Login = () => {
  return (
    <div className="flex h-screen">
      {/* Lado esquerdo com imagem */}
      <div className="hidden lg:flex flex-1 items-center justify-center bg-gray-900 relative">
        <Image
          src="/images/login.jpg" // Caminho da imagem
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="opacity-80"
        />
        <div className="absolute z-10 bg-white p-8 rounded-full shadow-lg">
          <Image
            src="/images/logoo.jpg" // Caminho do logo
            alt="Logo"
            width={120}
            height={120}
          />
        </div>
      </div>

      {/* Lado direito com formulário */}
      <div className="flex flex-1 flex-col justify-center items-center bg-white">
        <div className="w-80"> {/* Ajustando a largura máxima dos campos */}
          <h1 className="text-4xl font-bold text-gray-700 mb-4 text-center">
            Barbearia<span className="text-gray-500">MeuCheff</span>
          </h1>
          <form className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                E-mail
              </label>
              <input
                type="text"
                id="email"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-red-500 focus:border-red-500"
                placeholder="Digite seu E-mail"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                SENHA
              </label>
              <input
                type="password"
                id="password"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-red-500 focus:border-red-500"
                placeholder="Digite sua senha"
              />
              <p className="text-xs text-gray-500 mt-1">
                8 dígitos, com pelo menos 1 letra maiúscula.
              </p>
            </div>

            <button
              type="submit"
              className="w-full bg-red-700 text-white py-2 px-4 rounded-lg hover:bg-red-800 transition"
            >
              ENTRAR
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-red-600 text-sm">ou</p>
            {/* Adicionando Link para /signup */}
            <Link
              href="/signup"
              className="block border border-gray-700 text-gray -700 py-2 px-4 rounded-lg hover:bg-red-50 transition mt-2"
            >
              CADASTRE-SE
            </Link>
            <Link
              href="/forgot-password"
              className="block text-sm text-red-500 hover:underline mt-4"
            >
              Esqueceu sua senha?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
