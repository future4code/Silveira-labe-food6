import React from 'react';
import { useProtectPage } from '../../routes/coordinator';

const PaginaPerfil = () => {
  useProtectPage();

  return (
    <div>PaginaPerfil</div>
  )
}

export default PaginaPerfil;