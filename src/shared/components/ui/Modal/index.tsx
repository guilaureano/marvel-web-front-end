import { NavLink } from 'react-router-dom';
import { ModalWrap } from './styled';

const Modal = (id: string) => {
  if (!id) return;
  return (
    <ModalWrap>
      <NavLink to={`/characters/${id}/series`}>
        <h6>Séries</h6>
      </NavLink>
      <NavLink to={`/characters/${id}/Edit`}>
        <h6>Editar</h6>
      </NavLink>
    </ModalWrap>
  );
};

export default Modal;
