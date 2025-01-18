import { FC } from 'react';

const Register: FC = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Sign up</h2>
                <form className="space-y-4">
                    {/* Nome */}
                    <div>
                        <label htmlFor="name" className="sr-only">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Name"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>
                    {/* Email */}
                    <div>
                        <label htmlFor="email" className="sr-only">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Email"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>
                    {/* Senha */}
                    <div>
                        <label htmlFor="password" className="sr-only">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Password"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>
                    {/* Confirmar Senha */}
                    <div>
                        <label htmlFor="confirm-password" className="sr-only">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            id="confirm-password"
                            placeholder="Confirm Password"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>
                    {/* Botão de Cadastro */}
                    <button
                        type="submit"
                        className="w-full py-2 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700"
                    >
                        Sign up
                    </button>
                    {/* Lembre-se */}
                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            id="terms"
                            className="mr-2 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                        />
                        <label htmlFor="terms" className="text-sm text-gray-600">
                            I agree to the terms and conditions
                        </label>
                    </div>
                </form>
                <div className="mt-6 text-center text-sm text-gray-500 relative">
                    <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gray-300"></div>
                    <span className="bg-white px-3">or sign up quickly</span>
                </div>
                <div className="flex justify-center mt-6">
                    <button
                        type="button"
                        className="flex items-center px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100"
                    >
                        <img
                            src="images/google.png"
                            alt="Google"  
                            className="w-5 h-5 mr-2"
                        />
                        Google
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Register;
