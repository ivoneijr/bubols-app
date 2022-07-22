import { useNavigate } from "react-router-dom";
import { useTheme } from "../../hooks/useTheme";
import { Icon } from "../Icon";

export const NavBar = () => {
  const navigate = useNavigate();
  const { handleChangeTheme, theme } = useTheme();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <>
      <nav className="pt-3 pr-4 text-primary">
        <div className="flex justify-end items-center">
          <span
            className="w-10 h-10 p-2 dark:bg-dark-bg-primary bg-light-bg-primary rounded-full shadow-lg cursor-pointer flex items-center justify-center"
            onClick={() => handleChangeTheme()}
          >
            {theme === "light" ? (
              <Icon
                name="theme-dark"
                className="dark:text-dark-main-text text-light-main-text"
              />
            ) : (
              <Icon
                name="theme-light"
                className="dark:text-dark-main-text text-light-main-text"
              />
            )}
          </span>
          <button onClick={logout}>Logout</button>
        </div>
      </nav>
    </>
  );
};
