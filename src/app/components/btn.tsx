import React from 'react'

interface IBtn {
    text: string;
    size: string;
}

export default function Btn(btn: IBtn) {
  return (
    <>
        <button className={`h-9 ${btn.size} bg-btn-purple rounded-2xl font-semibold text-white shadow-xl`}>{btn.text}</button>
    </>
  )
}
