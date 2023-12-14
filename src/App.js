import {Component} from 'react'
import styled from 'styled-components'
import IconStyle from './components/IconStyle'
import './App.css'

const TextArea = styled.textarea`
  background: #25262c;
  height: 90%;
  width: 100%;
  border: 0;
  outline: none;
  padding: 5px 10px;
  color: #f8fafc;
  font-size: 20px;
  text-decoration: ${prevState =>
    prevState.filters.includes('UNDERLINE') ? 'underline' : 'normal'};
  font-style: ${prevState =>
    prevState.filters.includes('ITALIC') ? 'italic' : 'normal'};
  font-weight: ${prevState =>
    prevState.filters.includes('BOLD') ? 'bold' : 'normal'};
`

const filterLists = [
  {
    id: 'BOLD',
  },
  {
    id: 'ITALIC',
  },
  {
    id: 'UNDERLINE',
  },
]

// Replace your code here
class App extends Component {
  state = {text: '', filters: []}

  onChangeText = event => {
    this.setState({text: event.target.value})
  }

  addOrRemoveFilter = id => {
    const {filters} = this.state
    if (filters.includes(id)) {
      const removeOnFilter = filters.filter(each => each !== id)
      this.setState({filters: removeOnFilter})
    } else {
      this.setState(prevState => ({filters: [...prevState.filters, id]}))
    }
  }

  render() {
    const {text, filters} = this.state
    return (
      <div className="bg-cont">
        <div className="card">
          <div className="left-part">
            <h1 className="heading">Text Editor</h1>
            <img
              className="img"
              alt="text editor"
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
            />
          </div>
          <div className="right-part">
            <ul className="icons">
              {filterLists.map(each => (
                <IconStyle
                  addOrRemoveFilter={this.addOrRemoveFilter}
                  iconDetails={each}
                  key={each.id}
                  filters={filters}
                />
              ))}
            </ul>

            <TextArea
              cols={40}
              onChange={this.onChangeText}
              value={text}
              filters={filters}
            >
              {' '}
            </TextArea>
          </div>
        </div>
      </div>
    )
  }
}

export default App
