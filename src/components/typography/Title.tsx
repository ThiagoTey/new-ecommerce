import React, { ReactNode } from 'react'

type TitleProps = {
    children: ReactNode;
    as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    size?: "base" | "xl" | "2xl"
    className?: string;
}

const sizeClasses = {
    base: "",
    xl: "text-3xl",
    "2xl": "text-2xl md:text-5xl ",
}

const Title = ({ children, as: Tag = "h1", size = "base", className = "" }: TitleProps) => {
    return <Tag className={`font-extrabold text-gray-900 ${className} ${sizeClasses[size]}`}>{children}</Tag>;
};

export default Title