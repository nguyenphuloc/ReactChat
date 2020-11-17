import React from "react";
import { dataUsers } from "../assets/data/mock_data";
import HandleForm from "../component/HandleForm/HandleForm";
import Mess from "../component/Mess/Mess";
import User from "../component/User/User";

//style
import '../styles/index.scss';

export default class ChatApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      indexUser: 0,
      listChat: dataUsers[0].listChat ,
      text: ''
    }
  }

  _renderListUser = (data) => {
    if (!data || data.length <= 0) return;

    return data.map((user, index) => {
      return <User
        key={index}
        usersImg={user.avatar}
        name={user.name}
        handleChoiceUser={() => this._handleChoiceUser(user, index)}
      />
    })
  }
  _renderListChat = (data) => {
    if (!data || data.length <= 0) return;

    return data.map((item, index) => {
      return <Mess key={index} mess={item} />
    })
  }

  _handleChoiceUser = (user, index) => {
    this.setState({
      listChat: user.listChat,
      indexUser: index
    })
  }

  _onChangeInput = (e) => {
    const { value } = e.target;
    this.setState({
      text: value
    })
  }

  _submitForm = (e) => {
    e.preventDefault();
    dataUsers[this.state.indexUser].listChat.push(this.state.text);
    this.setState({
      text: ''
    })
  }

  render() {
    return (
      <div className="ChatApp">
        <div className="left-container">
          {
            this._renderListUser(dataUsers)
          }
        </div>
        <div className="right-container">
          <div className="list-mess">
            {
              this._renderListChat(this.state.listChat)
            }
          </div>
          <div className="section-form">
            <HandleForm
              submitForm={(e) => this._submitForm(e)}
              onChangeInput={(e) => this._onChangeInput(e)}
              value={this.state.text}
            />
          </div>
        </div>
      </div>
    );
  }
}
