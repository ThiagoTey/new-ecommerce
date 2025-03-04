import React, { ReactNode } from 'react'

type ContainerProps = {
    children: ReactNode;
    className?: string;
}

const Container = ({ children, className = "" }: ContainerProps) => {
  return (
    <div className={`px-24 ${className}`}>{children}</div>
  )
}

export default Container