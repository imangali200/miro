import React from 'react';

type ButtonProps = {
    children:React.ReactNode,
    className:string
}

export default function Button({children,className}:ButtonProps){
    return(
        <button
        className={`bg-[#4262FF] rounded-2xl text-white ${className ?? ''}`}
        >{children}</button>
    )
}