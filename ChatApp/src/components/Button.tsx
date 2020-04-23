import React from 'react';
import styled from 'styled-components/native'



const StyledView = styled.TouchableOpacity`
  background-color: ${ props => props.theme.colors.background};
  width:80%;
  height:70;
  justifyContent:space-around;
  flexDirection:row;
  alignItems:center;
  alignSelf:center;
  borderRadius:20;
`

const StyledText = styled.Text`
  color: ${ props => props.theme.colors.primary};
  fontSize: ${props => props.theme.fontSizes.small};
 
  
`

export class Button extends React.Component {
  render() {
    return (
      <StyledView>
        <StyledText> {this.props.children} </StyledText>
      </StyledView>
    )
  }
}