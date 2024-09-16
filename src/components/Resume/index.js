import React from 'react';
import * as C from './styles';
import ResumeItem from '../ResumeItem';
import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaDollarSign,
} from 'react-icons/fa';

const Resume = () => {
  return (
    <C.Container>
      <ResumeItem tittle='Entradas' Icon={FaRegArrowAltCircleUp} value='1000' />
      <ResumeItem tittle='Saídas' Icon={FaRegArrowAltCircleDown} value='1000' />
      <ResumeItem tittle='Total' Icon={FaDollarSign} value='1000' />
    </C.Container>
  )
}

export default Resume;
