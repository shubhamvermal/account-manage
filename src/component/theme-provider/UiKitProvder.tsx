import ThemeContext from './ThemeContext'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const UiKitProvider = ({color, children}: any) => {
    document.documentElement.style.setProperty('accent-color', color)

  return (
    <ThemeContext.Provider value={color}>
        {children}
    </ThemeContext.Provider>
  )
}
