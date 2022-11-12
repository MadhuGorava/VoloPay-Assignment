import {Component} from 'react'
import {FiVideo} from 'react-icons/fi'
import {AiOutlinePlus} from 'react-icons/ai'
import {BsGridFill} from 'react-icons/bs'
import {GiHamburgerMenu} from 'react-icons/gi'
import TabItem from '../TabItem'
import {
  VCardContainer,
  Heading,
  BtnLink,
  FilterContainer,
  Text,
  ShadowContainer,
  SubHeading,
  TabContainer,
  ListItemsContainer,
} from './styledComponents'

const tabsList = [
  {tabId: 'YOUR', displayText: 'Your'},
  {tabId: 'ALL', displayText: 'All'},
  {tabId: 'BLOCKED', displayText: 'Blocked'},
]

class Header extends Component {
  state = {activeTabId: tabsList[1].tabId}

  updateActiveTabId = tabId => {
    this.setState({activeTabId: tabId})
  }

  render() {
    const {activeTabId} = this.state
    return (
      <>
        <VCardContainer>
          <FilterContainer>
            <Heading>Virtual Cards</Heading>
            <BtnLink as="a" href="#">
              <FiVideo size={18} />
              <Text>Learn more</Text>
            </BtnLink>
          </FilterContainer>
          <ShadowContainer>
            <AiOutlinePlus size={25} />
            <SubHeading>Virtual Cards</SubHeading>
          </ShadowContainer>
        </VCardContainer>
        <TabContainer>
          <ListItemsContainer>
            {tabsList.map(tabDetails => (
              <TabItem
                key={tabDetails.tabId}
                tabDetails={tabDetails}
                updateActiveTabId={this.updateActiveTabId}
                isActive={tabDetails.tabId === activeTabId}
              />
            ))}
          </ListItemsContainer>
          <ShadowContainer>
            <BsGridFill size={20} />
            <GiHamburgerMenu size={20} />
          </ShadowContainer>
        </TabContainer>
      </>
    )
  }
}

export default Header
