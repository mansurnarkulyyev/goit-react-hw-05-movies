
import useLocalStorage from 'use-local-storage'


function useDark({ dataTheme}) {
       const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light')

    const switchTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme)
        dataTheme({...theme})
    }
  return {theme, setTheme, switchTheme}
}

export default useDark;
