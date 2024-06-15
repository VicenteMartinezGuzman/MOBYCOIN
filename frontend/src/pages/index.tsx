// src/components/LoginForm.tsx

import React, { useState } from "react";

type LoginFormProps = {
  onSubmit: (username: string, password: string) => Promise<void>;
  loading: boolean;
};

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit, loading }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showRecoverPassword, setShowRecoverPassword] = useState(false);
  const [recoveryName, setRecoveryName] = useState("");
  const [recoveryPhone, setRecoveryPhone] = useState("");
  const [recoveryCurp, setRecoveryCurp] = useState("");

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };

  const handleShowRecoverPassword = () => {
    setShowRecoverPassword(true);
  };

  const handleRecoveryNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRecoveryName(event.target.value);
  };

  const handleRecoveryPhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRecoveryPhone(event.target.value);
  };

  const handleRecoveryCurpChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRecoveryCurp(event.target.value);
  };

  const handleRecoverSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Implementar lógica de recuperación aquí
    console.log("Recover password form submitted with:", recoveryName, recoveryPhone, recoveryCurp);
    // Puedes añadir lógica para mostrar mensaje de éxito o redirigir
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    await onSubmit(username, password);
    resetForm();
  };

  const resetForm = () => {
    setUsername("");
    setPassword("");
  };

  return (
    <div className="min-h-screen bg-blue-50">
      <div className="min-h-screen bg-cover bg-center bg-fixed" style={{ backgroundImage: 'url("https://example.com/your-background-image.jpg")' }}>
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <img
              className="mx-auto h-12 w-auto"
              src="https://example.com/your-logo-image.jpg" // Enlace de tu imagen de logo
              alt="Logo de tu aplicación"
            />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Transparencia Digital</h2>
          </div>

          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
              {showRecoverPassword ? (
                <form className="space-y-6" onSubmit={handleRecoverSubmit}>
                  <div>
                    <label htmlFor="recovery-name" className="block text-sm font-medium text-gray-700">
                      Nombre Completo
                    </label>
                    <input
                      id="recovery-name"
                      name="recovery-name"
                      type="text"
                      autoComplete="name"
                      required
                      value={recoveryName}
                      onChange={handleRecoveryNameChange}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 shadow-sm placeholder-gray-400 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                      placeholder="Nombre Completo"
                    />
                  </div>

                  <div>
                    <label htmlFor="recovery-phone" className="block text-sm font-medium text-gray-700">
                      Número de Teléfono
                    </label>
                    <input
                      id="recovery-phone"
                      name="recovery-phone"
                      type="tel"
                      autoComplete="tel"
                      required
                      value={recoveryPhone}
                      onChange={handleRecoveryPhoneChange}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 shadow-sm placeholder-gray-400 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                      placeholder="Número de Teléfono"
                    />
                  </div>

                  <div>
                    <label htmlFor="recovery-curp" className="block text-sm font-medium text-gray-700">
                      CURP
                    </label>
                    <input
                      id="recovery-curp"
                      name="recovery-curp"
                      type="text"
                      autoComplete="off"
                      required
                      value={recoveryCurp}
                      onChange={handleRecoveryCurpChange}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 shadow-sm placeholder-gray-400 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                      placeholder="CURP"
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <button
                      type="submit"
                      className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                      Enviar
                    </button>
                  </div>
                </form>
              ) : (
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                      Placa Vehicular
                    </label>
                    <input
                      id="username"
                      name="username"
                      type="text"
                      autoComplete="Placa vehicular"
                      required
                      value={username}
                      onChange={handleUsernameChange}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 shadow-sm placeholder-gray-400 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                      placeholder="Placa vehicular"
                    />
                  </div>

                  <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                      Curp
                    </label>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      value={password}
                      onChange={handlePasswordChange}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 shadow-sm placeholder-gray-400 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                      placeholder="Curp"
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        checked={rememberMe}
                        onChange={handleRememberMeChange}
                        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                      />
                      <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                        Recuérdame
                      </label>
                    </div>

                    <div className="text-sm">
                      <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500" onClick={handleShowRecoverPassword}>
                        ¿Olvidaste tu contraseña?
                      </a>
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className={`w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
                      disabled={loading}
                    >
                      {loading ? "Ingresando..." : "INGRESA"}
                    </button>
                  </div>
                </form>
              )}
              {showRecoverPassword && (
                <p className="text-center mt-4">
                  <a href="#" className="text-indigo-600 hover:text-indigo-500" onClick={() => setShowRecoverPassword(false)}>
                    Volver al inicio de sesión
                  </a>
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
