import React from 'react';
import { Pagina404Base } from './styles';
import Menu from '../Menu';

function Pagina404() {
  return (
    <>
      <Menu />
      <Pagina404Base>
        <label>Página não localizada :(</label>
      </Pagina404Base>
    </>
  );
}

export default Pagina404;
