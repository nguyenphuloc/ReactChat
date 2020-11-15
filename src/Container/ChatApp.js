import React from "react";
import FormComponent from "../Component/HandleForm/FormComponent";
import TextMess from "../Component/ListMess/TextMess";
import Users from "../Component/ListUsers/Users";
import "../styles/chatApp.scss";

export default class ChatApp extends React.Component {
  render() {
    return (
      <div className="ChatApp">
        <div className="ListUsers">
          <Users
            usersImg="https://www.avartajewellery.com/wp-content/uploads/2020/09/Avarta-New-Logo-copy.png"
            names="Loc"
          />
        </div>
        <div className="right">
          <div className="TextMessenger">
            <TextMess mess="sdasfakj jwhdjka lhdladk alcjC" />
          </div>
          <div className="form">
            <FormComponent />
          </div>
        </div>
      </div>
    );
  }
}
