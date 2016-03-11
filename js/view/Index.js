import React from "react";

export default class Index extends React.Component {
  render() {
    const welcome = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum urna mi, mattis a consequat in, pulvinar et justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque augue, fringilla a tortor ut, vestibulum ullamcorper erat. Ut sodales nunc vitae ante laoreet faucibus. Duis tincidunt nulla et velit mattis convallis. Vivamus rutrum ligula ut ex pretium facilisis. Duis vulputate auctor nunc a viverra.\nInteger dictum a ipsum commodo condimentum. Morbi tristique nisl id neque molestie viverra. Morbi et lorem ut lorem sodales tincidunt. Etiam a tortor varius, aliquam diam vel, rutrum augue. Praesent nec velit laoreet, vulputate ligula nec, vehicula arcu. Sed pretium massa ut dui efficitur maximus a id tellus. Donec velit purus, congue id sagittis et, rutrum vitae augue. Duis sit amet lectus mi. Suspendisse massa velit, accumsan eget mollis nec, molestie vel dolor. Donec finibus ut tellus a mattis. Cras sodales mattis iaculis.\nDonec id lorem nisi. Donec dictum nec eros sed eleifend. Nam dignissim metus ut eros vulputate, at rhoncus mauris feugiat. Sed placerat elit lacus, id interdum risus vulputate eget. Donec nec leo nibh. Suspendisse potenti. Ut elementum ex sapien, id convallis massa pharetra in.\nInteger ut enim ut ex dictum ultricies. Aliquam venenatis dolor in nisl sodales, a sollicitudin nunc mollis. Sed et vestibulum ex. Nunc elementum lacinia varius. Integer sed elementum arcu, nec fringilla mi. Etiam bibendum laoreet pulvinar. Vestibulum sit amet imperdiet ante, nec vestibulum ante. Aliquam erat volutpat. Vivamus nec nunc nibh. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."
    return (
      <div>
        <div class="row">
          <div class="col-lg-12">
            <div class="text-left">
              {welcome}
            </div>
          </div>
        </div>
      </div>
    );
  }
}