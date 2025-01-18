import { FC } from 'react';

const ForgotPassword: FC = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Forgot Password</h2>
                <p className="text-sm text-gray-600 text-center mb-6">
                    Enter your email to receive password reset instructions.
                </p>
                <form className="space-y-4">
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
                    {/* Botão de Enviar */}
                    <button
                        type="submit"
                        className="w-full py-2 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700"
                    >
                        Send Reset Link
                    </button>
                </form>
                {/* Voltar para Login */}
                <div className="mt-6 text-center">
                    <a
                        href="/login"
                        className="text-sm text-indigo-500 hover:underline"
                    >
                        Back to login
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;
