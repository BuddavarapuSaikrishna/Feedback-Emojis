// Write your React code here.

import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {isFeedback: true}

  onClickEmoji = () => {
    this.setState({isFeedback: false})
  }

  ThankYouBlock = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources

    return (
      <div>
        <img
          className="emojis-img"
          src={loveEmojiUrl}
          alt="love emoji"
          onClick={this.onClickEmoji}
        />
        <h1>Thank You!</h1>
        <p>We use your feedback to improve our customer support performance</p>
      </div>
    )
  }

  EmojisBlock = () => {
    const {resources} = this.props
    const {emojis} = resources

    return (
      <div>
        <h1>How satisfied are you with our customer support performance</h1>
        <ul className="Emojis-Image-Container">
          {emojis.map(eachemoji => (
            <li key={eachemoji.id}>
              <button
                className="Emoji-btn"
                type="button"
                onClick={this.onClickEmoji}
              >
                <img
                  className="emojis-img"
                  src={eachemoji.imageUrl}
                  alt={eachemoji.name}
                />
                <br />
                <span className="emoji-name">{eachemoji.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {isFeedback} = this.state

    return (
      <div className="Main-Container">
        <div className="Emojis-Container">
          {isFeedback ? this.EmojisBlock() : this.ThankYouBlock()}
        </div>
      </div>
    )
  }
}

export default Feedback
