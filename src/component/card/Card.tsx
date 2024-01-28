import React from 'react'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const Card = (props: any) => {
    const {className, children} = props;
  return (
    <div className={'border bg-zinc-800 p-2 rounded-md ' + className}>{children}</div>
  )
}
