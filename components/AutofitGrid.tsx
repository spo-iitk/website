import styled from "styled-components"

const AutofitGrid = styled.div`
  --autofit-grid-item-size: 30rem;

  gap:10px;
   @media (max-width: 768px) {
    flex-direction: column;
  }
`

export default AutofitGrid
