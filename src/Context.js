import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPalette } from '@fortawesome/free-solid-svg-icons';
export const LIGHT_THEME = 'light-theme';
export const DARK_THEME = 'dark-theme';
export const ThemeContext = React.createContext();

// wrapper to make theme and changeTheme available 
// down the tree
function ThemeWrapper({ children }) {
  const [theme, setTheme] = React.useState(LIGHT_THEME);
  React.useEffect(() => {
      let CurrentTheme = localStorage.getItem('theme')
      if(CurrentTheme){
        applyTheme(CurrentTheme)
        }
    }, [])
  const applyTheme = (newTheme) => {
    // TODO: apply new theme on app
    document.getElementById('app').className = newTheme;
    localStorage.setItem('theme',newTheme)
    setTheme(newTheme);
  }

  return (
    <ThemeContext.Provider value={{ theme, applyTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
export function ToggleTheme() {
    const { theme, applyTheme } = React.useContext(ThemeContext);
  
    const altTheme = theme === LIGHT_THEME ? DARK_THEME : LIGHT_THEME;
  
    const toggle = () => {
      applyTheme(altTheme);
    }
  
    return (
      <div className={"list-item-color"}> 
       <FontAwesomeIcon width='30' height='30' onClick={()=>toggle()} icon={faPalette}/>
      </div>
    )
  }
export default ThemeWrapper