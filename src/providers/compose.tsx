import React from 'react'

function composeProviders(
  ...providers: Array<React.JSXElementConstructor<React.PropsWithChildren<any>>>
): React.JSXElementConstructor<React.PropsWithChildren<any>> {
  return (props) =>
    providers.reduceRight(
      (children, Provider) => <Provider {...props}>{children}</Provider>,
      props.children
    )
}

export default composeProviders
