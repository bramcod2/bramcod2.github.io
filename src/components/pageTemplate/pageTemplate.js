import React from "react"
import styled from "styled-components"
import PageTitle from "../common/title"

/**
 * 
 * @param {JSX.Element} props.children: page components
 * @param {*} param0 
 */
const PageTemplate = ({children, title}) => {
    const Container = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        min-height: 100vh;
        > * {
        // inner padding for all items
        padding: 0 40px;
        }
    `

    const PageContent = styled.div`
        flex:1;
    `
    return (
        <div>
            <PageTitle name={title} />
            <Container>
                <PageContent>{children}</PageContent>
            </Container>
        </div>
    )
}
export default PageTemplate