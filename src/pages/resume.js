import React from "react"
import styled from "styled-components"
import { useHistory } from "react-router-dom"
import PageTemplate from "../components/pageTemplate/pageTemplate"


const PageWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

/**
 * Resume Page
 * @returns {JSX.Element}
 * @constructor
 */
export default function ResumePage(props) {
    const history = useHistory()
    return (
        <PageTemplate title="Resume">
            <PageWrapper>
                <div>"Hello World"</div>
            </PageWrapper>
        </PageTemplate>
    )
}