import React, { Component } from 'react';
import styled from 'styled-components';
import Preloader from './Preloader';
const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
`;

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Preloader />
      </Wrapper>
    );
  }
}
export default App;