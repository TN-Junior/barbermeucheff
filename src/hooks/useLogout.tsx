import { useRouter } from "next/router";

const useLogout = () => {
  const router = useRouter();

  const logout = () => {
    // Remove o token de autenticação do localStorage
    localStorage.removeItem("token");

    // Redireciona o usuário para a página de login
    router.push("/login");
  };

  return logout;
};

export default useLogout;
