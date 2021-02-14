import React from "react"
import styled from "styled-components"


/**
 * 
 * @param {string} props.name 
 */
export default function PageTitle(props) {
    const Container = styled.h1`
        font-size: 2em;
        font: Helvetica;
        text-align: center;
    `

    return (
        <Container>{props.name}</Container>
    )
}