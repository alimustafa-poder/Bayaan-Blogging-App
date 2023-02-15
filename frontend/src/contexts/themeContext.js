import { createContext, useReducer } from 'react'

export const ThemeContext = createContext()

export const themeReducer = (state, action) => {
    switch (action.type) {
        case 'darkMode':
            return {
                theme: 'dark',
            }
        case 'lightMode':
            return {
                theme: 'light',
            }
        default:
            return state
    }
}

export const ThemeContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(themeReducer, {
        theme: localStorage.getItem('theme') || 'dark',
    })

    return (
        <ThemeContext.Provider value={{ ...state, dispatch }}>
            {children}
        </ThemeContext.Provider>
    )
}
