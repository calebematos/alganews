import styled from "styled-components"
import { NavLink } from "react-router-dom";

export default function Navbar() {


  return <List>
      <Item><NavLink exact to="/">Home</NavLink></Item>
      <Item><NavLink exact to="/editors">Editors</NavLink></Item>
      <Item><NavLink exact to="/post/new">new post</NavLink></Item>
    </List>
}

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
  list-style: none;  
`

const Item = styled.li`
  text-transform: lowercase;
  font-size: 18px;
  a {
    text-decoration: none;
    color: #274060;
    &.active {
     color : #09f;
    }
  }
`