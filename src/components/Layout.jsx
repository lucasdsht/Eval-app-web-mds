import Nav from "./Nav";

export const Layout = ({ children }) => (
  <>
    <Nav />
    <main>{children}</main>
  </>
)
