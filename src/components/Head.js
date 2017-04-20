import React from "react"
import Helmet from "react-helmet"

export default function WrappedHelmet(props) {
  const siteTitle = 'React DatoCMS Starter'
  return (
    <Helmet
      defaultTitle={siteTitle}
      titleTemplate={`%s |  ${siteTitle}`}
      {...props}
    />
  )
}
