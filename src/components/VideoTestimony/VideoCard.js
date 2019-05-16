import React, { Fragment } from "react"
export default ({ url, desc }) => (
  <Fragment key={desc}>
    <iframe
      title="capstone"
      src={url}
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
    <h1>{desc}</h1>
    <hr />
  </Fragment>
)
