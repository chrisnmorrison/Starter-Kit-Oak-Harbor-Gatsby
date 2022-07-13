const React = require("react")

exports.onRenderBody = ({setPostBodyComponents}) => {
          setPostBodyComponents([
            <script key="1" src={'./static/js/scroll.js'} type="text/javascript" ></script>,
          ]);
  };