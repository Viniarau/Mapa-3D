import styled from 'styled-components/native';
import { COLORS } from '../../constants'

export const Container = styled.ScrollView`
    flex: 1;
    margin-top: 5px;
    padding-horizontal: 15px;
    background-color: ${COLORS.white};
`;

export const TextExit = styled.Text`
    font-size: 35px;
    color: ${COLORS.black};
`;