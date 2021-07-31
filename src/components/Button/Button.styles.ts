import styled from "styled-components";
import { transparentize } from "polished"

const THEME = {
  primary: {
    bg: '#0099FF',
    color: '#FFFFFF',
    onHover: `
      box-shadow: 0 3px 6px rgba(0,0,0,.2);
    `,
    disabled : {
      color: '#fff',
      bg: transparentize(.44, "#0099FF")
    }
  },
  danger: {
    bg: '#F84735',
    color: '#FFF',
    onHover: `
      box-shadow: 0 3px 6px rgba(0,0,0,.2);
    `,
    disabled : {
      color: '#F84735',
      bg: transparentize(.75, "#F84735")
    }
  },
  text: {
    bg: 'transparent',
    color: '#274060',
    onHover: `
      border-color: #274060;
    `,
    disabled : {
      color: '#274060',
      bg: transparentize(.44, "#508AC9")
    }
  }
}

export const Wrapper = styled.button<{
  variant: 'primary' | 'danger' | 'text'
}>`
  padding: 6px 8px 4px;

  border: solid 1px ${p => THEME[p.variant].bg};

  color: ${p => THEME[p.variant].color};
  background-color: ${p => THEME[p.variant].bg};

  &:focus,
  &:hover{
    ${p => THEME[p.variant].onHover};
  } 

  &:disabled {
    color: ${p => THEME[p.variant].disabled.color};
    background-color: ${p => THEME[p.variant].disabled.bg};

    pointer-events: none;
    border-color: transparent;
  }

`