import { ThemeContext } from '../contexts/themeContext'
import { useContext } from 'react'

export const useThemeContext = () => {
    const context = useContext(ThemeContext)

    if (!context) {
        console.log(
            'Theme Context can only be used in a theme context provider.'
        )
    }

    return context
}
