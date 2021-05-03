import * as React from 'react'
import { Global, css } from '@emotion/react'
import styled from '@emotion/styled'
import global from '../styles/global'

const StyledLayoutRoot = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

interface LayoutRootProps {
  className?: string
}

const LayoutRoot: React.FC<LayoutRootProps> = ({ children, className }) => (
  <>
    <Global styles={() => css(global)} />
    <StyledLayoutRoot className={className}>{children}</StyledLayoutRoot>
  </>
)

export default LayoutRoot
