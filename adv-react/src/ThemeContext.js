import { useContext } from "react";

const ThemeContext = React.createContext(undefined);

function toggleTheme() {
    return theme=="light" ? "dark" : "light"
}


export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = React.useState("light");

    return (
        <ThemeContext.Provider
            value={{
                theme, toggleTheme: () => setTheme(theme == "light" ? "dark" : "light"),
            }}
        >{children}</ThemeContext.Provider>
    )
};

export const useTheme = () => useContext(ThemeContext)
