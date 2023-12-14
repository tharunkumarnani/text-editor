import styled from 'styled-components'
import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'
import './index.css'

const Button = styled.button`
  background-color: transparent;
  border: 0;
  outline: none;
  color: ${prevState => (prevState.clickedIcon ? '#faff00' : '#f1f5f9')};
`

const IconStyle = props => {
  const {filters, iconDetails, addOrRemoveFilter} = props
  const {id} = iconDetails
  const clickedIcon = filters.includes(id)
  const style = clickedIcon ? 'selected' : ''
  const request = () => {
    addOrRemoveFilter(id)
  }
  const getIcon = () => {
    switch (id) {
      case 'BOLD':
        return (
          // eslint-disable-next-line jsx-a11y/control-has-associated-label
          <Button
            onClick={request}
            clickedIcon={clickedIcon}
            type="button"
            data-testid="bold"
          >
            <VscBold size={25} className={`icon-style ${style}`} />
          </Button>
        )
      case 'ITALIC':
        return (
          // eslint-disable-next-line jsx-a11y/control-has-associated-label
          <Button
            onClick={request}
            clickedIcon={clickedIcon}
            type="button"
            data-testid="italic"
          >
            <GoItalic size={25} className={`icon-style ${style}`} />
          </Button>
        )
      case 'UNDERLINE':
        return (
          // eslint-disable-next-line jsx-a11y/control-has-associated-label
          <Button
            onClick={request}
            clickedIcon={clickedIcon}
            type="button"
            data-testid="underline"
          >
            <AiOutlineUnderline size={25} className={`icon-style ${style}`} />
          </Button>
        )
      default:
        return null
    }
  }

  return <li>{getIcon()}</li>
}

export default IconStyle
