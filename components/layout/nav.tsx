import React from "react"
import styled from "styled-components"
import NavIcon from "./nav-icon"
import NavList from "./nav-list"
import { useToggle } from "@hooks/toggle"

interface NavProps {
  className: string
}

const Nav: React.FC<NavProps> = ({ className }) => {
  const { state: iconHasBeenClicked, toggle: toggleIconHasBeenClicked } = useToggle()
  return (
    <nav className={className} data-testid="layout-main-nav">
      <h3>Logo goes here</h3>
      <NavIcon on={iconHasBeenClicked} toggle={toggleIconHasBeenClicked} />
      <NavList className="main-nav-list" />
    </nav>
  )
}
export default styled(Nav)`
  align-items: center;
  background-color: var(--background);
  border: 2px solid red;
  box-shadow: var(--shadowMd);
  color: var(--textColor);
  display: flex;
  justify-content: space-between;
  padding: 1em;
`
