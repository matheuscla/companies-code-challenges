import styled from 'styled-components';
import ReactFlagsSelect from 'react-flags-select';

export const LanguageSelector = styled(ReactFlagsSelect)`
  color: #fff;

  button {
    color: #fff;
    font-family: 'Recursive', sans-serif;
    font-weight: bold;
    text-transform: uppercase;
  }

  ul {
    border: 0;
    color: #fff;
    background: #18181B;
    border-radius: 4px;

    li {
      &:hover {
        background: #1A1B22 !important;
      }
    }
  }
`