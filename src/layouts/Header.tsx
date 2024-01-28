import React from 'react'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Header = (props: any) => {
    const {children} = props;
  return (
    <div className='bg-red-500'>{children}</div>
  )
}

export default Header