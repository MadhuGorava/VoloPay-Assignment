import styled from 'styled-components'

export const VCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
export const Heading = styled.h1`
  color: #252525;
  font-size: 30px;
  font-family: 'Roboto';
  font-weight: 600;
`
export const BtnLink = styled.button`
  background-color: transparent;
  border: none;
  text-decoration: none;
  margin-left: 10px;
  display: flex;
  align-items: center;
`
export const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;
`
export const Text = styled.p`
  color: blue;
  font-size: 19px;
  font-family: 'Roboto';
  font-weight: 600;
  margin-left: 5px;
  text-decoration: none;
`
export const ShadowContainer = styled.div`
  display: flex;
  align-items: center;
  box-shadow: 0px 4px 16px 0px #bfbfbf;
  margin-right: 25px;
  border-radius: 12px;
`
export const SubHeading = styled(Heading)`
  font-size: 20px;
  padding: 5px;
`
export const TabContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const ListItemsContainer = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
`
