import React from "react";
import { Link } from "react-router";
import PostBox from "../components/PostBox";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

export default class Layout extends React.Component {
  render() {
    const { location } = this.props;
    const Posts = [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis vestibulum tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia",
      "Aenean tristique tempus sagittis. Sed consequat leo at pulvinar congue. Duis sodales, ipsum ac congue dignissim, est velit ultricies libero, ac finibus felis purus sit amet ante."
    ].map((title, i) => <PostBox key={i} title={title}/> );

    return (
      <div>
        <Header />
        <Nav location={location} />
          <div class="row">
            <div class="col-lg-9">
              <div class="row">
                <div class="col-lg-12 container-main">
                  {this.props.children}
                </div>
              </div>
              <div class="row container-postbox">
                {Posts}
              </div>
            </div>
            <div class="col-lg-3 container-sidebar well">
              <img src="https://lh4.ggpht.com/ike-jviZQ32RHuhkwLcAt_9vdpBX1oWKU00NX7QRe5GPl7-5sapzZ0u91_ssg_-Ednak2Hj-Hg=w162"/>
            </div>
          </div>
        <Footer/>
      </div>
    );
  }
}