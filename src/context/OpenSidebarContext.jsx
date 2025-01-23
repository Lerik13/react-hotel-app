import { createContext, useState, useContext } from 'react'

const OpenSidebarContext = createContext()

function OpenSidebarProvider({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  function openSidebar() {
    setIsSidebarOpen(true)
  }

  function closeSidebar() {
    setIsSidebarOpen(false)
  }

  return (
    <OpenSidebarContext.Provider
      value={{
        isSidebarOpen,
        openSidebar,
        closeSidebar,
      }}
    >
      {children}
    </OpenSidebarContext.Provider>
  )
}

function useOpenSidebar() {
  const context = useContext(OpenSidebarContext)

  if (context === undefined) {
    throw new Error('useOpenSidebar must be used within a OpenSidebarProvider')
  }
  return context
}

export { OpenSidebarProvider, useOpenSidebar }
