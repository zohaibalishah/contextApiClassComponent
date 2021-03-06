import React, { Component } from "react";
import { ThemeContext } from "../context/ThemeContext";

class BookList extends Component {
  // static contextType=ThemeContext;

  render() {
    return (
      <ThemeContext.Consumer>
        {(context) => {
          const { isLightTheme, dark, light } = context;
          const theme = isLightTheme ? light : dark;
          return (
            <div
              className="book-list"
              style={{ color: theme.syntax, background: theme.bg }}
            >
              <ul>
                <li style={{ background: theme.ui }}>the way of kings</li>
                <li style={{ background: theme.ui }}>the name of the wind</li>
                <li style={{ background: theme.ui }}>the final empire</li>
              </ul>
            </div>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}

export default BookList;
