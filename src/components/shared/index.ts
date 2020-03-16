import styled, { css } from 'styled-components';

/* ===== Shared CSS: ===== */
const CommonInputCss = css`
  display: block;
  font-size: 16px;
  color: #444;
  line-height: 1.3;
  padding: .6em 1.4em .5em .8em;
  width: 100%;
  max-width: 100%; 
  box-sizing: border-box;
  margin: 0;
  border: 1px solid #aaa;
  box-shadow: 0 1px 0 1px rgba(0,0,0,.04);
  border-radius: .5em;
  transition: 0.2s;
`;

const CommonInputCssFocus = css`
  border-color: #aaa;
  box-shadow: 0 0 1px 3px #1978d4;
  box-shadow: 0 0 0 3px -moz-mac-focusring;
  color: #222; 
  outline: none;
`;

/* ===== Components: ===== */
export const Select = styled.select`
  ${CommonInputCss};
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  background-color: #fff;
  background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E'),
    linear-gradient(to bottom, #ffffff 0%,#e5e5e5 100%);
  background-repeat: no-repeat, repeat;
  background-position: right .7em top 50%, 0 0;
  background-size: .65em auto, 100%;

  &:hover {
    border-color: #888;
  }

  &:focus {
    ${CommonInputCssFocus};
  }

  option {
    font-weight:normal;
  }
`;

export const TextInput = styled.input`
  ${CommonInputCss};
  &:focus {
    ${CommonInputCssFocus}
  }
`;

export const SubmitButton = styled.button`
  ${CommonInputCss};
  background-color: #1978d4;
  color: #fff;
  margin-top: 2.5rem;
  font-weight: bold;

  &:hover {
    background-color: #5ea1e1;
    border-color: #fff;
    cursor: pointer;
  }

  &:active {
    background-color: #0d3f72;
  }
`;

export const LabelText = styled.h3`
  margin-bottom: 0.4rem;
  color: #fff;
`;

export const Separator = styled.div`
  text-align: center;
  color: #fff;
  margin: 1rem 0;
`;

export const TextLink = styled.a`
  color: #1978d4;
  display: block;
  margin: 1.2rem 0;
  text-align: center;
  cursor: pointer;

  transition: 0.3s;

  &:hover {
    color: #5ea1e1
  }
`;
