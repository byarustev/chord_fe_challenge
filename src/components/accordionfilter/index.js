import React, {useState} from "react";
import styled from 'styled-components';
import Checkbox from '../checkbox'

import {BsPlus} from 'react-icons/bs'
import {FiMinus} from 'react-icons/fi'

export default function AccordionFilter ({title, itemsList}) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <AccordionWrapper>
            <AccordionTitleDiv onClick={() => setIsOpen(!isOpen)}>
                {isOpen? <FiMinus size={18}/> : <BsPlus size={18}/> }
                <Title>{title}</Title>
            </AccordionTitleDiv>

            {isOpen && itemsList.map(item =>(
                <Checkbox key={item.id} id={item.id} name={item.name} label={item.name}/>
            ))}
        </AccordionWrapper>
    )

}

const AccordionWrapper = styled.div`
    margin-top:10px;
    display: flex;
    flex-direction: column;
`;

const AccordionTitleDiv = styled.div`
    display: inline-flex;
    align-items: center;
    cursor: pointer;
`

const Title = styled.p`
  font-size: 20;
  margin:0;
  margin-left: 8px;
  font-weight: 700;
`