import React from 'react'
import { useAppSelector } from '../../store/hook'

export const PopUp = () => {
  const { title, content} = useAppSelector((state) => state.popUp);
  return (
    <div>
        <h2>{title}</h2>
        <p>{content}</p>
    </div>
  );
}
