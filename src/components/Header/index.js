import React from 'react';

import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';

import { Container, Content, Profile } from './styles';

export default function Header() {
  // const profile = useSelector(state => state.user.profile);

  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="GoBarber" />
          <Link to="/dashboard">Dashboard</Link>
        </nav>

        <aside>
          <Profile>
            <div>
              <strong>Tiago Bogoni</strong>
              <Link to="/profile">Meu Perfil</Link>
            </div>
            <button type="button">Sair</button>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
