const Layout2 = ({ children }) => {
  return (
    <>
      <div className="layout2">
        <button>This</button>
        <button>is</button>
        <button>a</button>
        <button>basic</button>
        <button>(ugly)</button>
        <button>NESTED LAYOUT</button>
        <button>which</button>
        <button>applies</button>
        <button>to all</button>
        <button>JSON_FETCHING</button>
        <button>directories</button>
        <button>(flexbot)</button>
      </div>
      {children}
    </>
  )
}

export default Layout2
