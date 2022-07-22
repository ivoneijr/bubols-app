import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token") !== null) {
      navigate("/dashboard");
    }
  }, [navigate, loading]);

  const login = () => {
    setLoading(true);

    setTimeout(() => {
      localStorage.setItem("token", "token");
      setLoading(false);
    }, 1000);
  };

  return (
    <div>
      <div className="lg:flex">
        <div className="lg:w-1/2 xl:max-w-screen-sm">
          <div className="py-12 bg-indigo-100 lg:bg-white flex justify-center lg:justify-start lg:px-12">
            <div className="cursor-pointer flex items-center">
              <div className="text-2xl text-indigo-800 tracking-wide ml-2 font-semibold">
                #TEAMBUBOLS
              </div>
            </div>
          </div>

          <div className="mt-10 px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 xl:max-w-2xl">
            <div className="mt-12">
              <div>
                <div className="text-sm font-bold text-gray-700 tracking-wide">
                  Email
                </div>
                <input
                  className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                  type=""
                  placeholder="mike@gmail.com"
                />
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <div className="text-sm font-bold text-gray-700 tracking-wide">
                    Senha
                  </div>
                </div>
                <input
                  className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                  type=""
                  placeholder="Enter your password"
                />
              </div>
              <div className="mt-10">
                <button
                  disabled={loading}
                  onClick={login}
                  className="bg-light-bg-primary
                  dark:bg-dark-bg-primary text-gray-100 p-4 w-full  tracking-wide
                                font-semibold font-display focus:outline-none focus:shadow-outline hover:opacity-60
                                shadow-lg"
                >
                  Entrar
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden lg:flex items-center justify-center bg-indigo-100 flex-1 h-screen">
          <div className="max-w-xs transform duration-200 hover:scale-110 cursor-pointer"></div>
        </div>
      </div>
    </div>
  );
};
