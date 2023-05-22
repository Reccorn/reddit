import React from 'react';

interface IItem {
  id: string,
  text: string,
  onClick: (id: string) => void,
  className?: string | undefined,
  As?: 'a' | 'li' | 'button' | 'div',
  href?: string
}

interface IGenericProps {
  list: IItem[]
}

export function GenericList({list}: IGenericProps) {
  return (
    <>
    {
      list.map(({ As='div', text, onClick, className, id, href}) => (
        <As
          className={className}
          onClick={() => onClick(id)}
          id={id}
          href={href}
        >
          {text}
        </As>
      ))
    }
    </>
  );
}
