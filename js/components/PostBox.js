import React from "react";

export default class PostBox extends React.Component {
  render() {
    const { title, content } = this.props;

    return (
      <div class="col-lg-6">
        <div class="well">
          <h4>{title}</h4>
          <p>{content}</p>
          <a class="btn btn-default btn-xs" href="#">Leia mais</a>
        </div>
      </div>
    );
  }
}