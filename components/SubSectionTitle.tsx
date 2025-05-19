import styled from "styled-components"

import { media } from "utils/media"

const SubSectionTitle = styled.div`
  font-size: 4rem;
  font-weight: bold;
  line-height: 1.1;
  letter-spacing: -0.03em;
  text-align: center;
  opacity: 0.7;
  margin: 2rem;
  ${media("<=tablet")} {
    font-size: 3.2rem;
  }
`

export default SubSectionTitle
