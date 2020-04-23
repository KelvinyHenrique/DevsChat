import React from 'react';
import { SafeAreaView } from 'react-native';
import styled from "styled-components/native";
import { Button } from '../../components/Button';



const Container = styled.View`
  width: 100%;
  height: 100%;
  justifyContent:space-around;
  font-family: ${props => props.theme.fonts[0]};
`;


export default function Intro() {

  return (
    <SafeAreaView>
      <Container>
        <Button> Botao</Button>
      </Container>
    </SafeAreaView>
  );
}



