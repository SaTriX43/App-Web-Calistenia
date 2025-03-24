import { faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function Foto() {
  return (
    <FontAwesomeIcon
      icon={faUser}
      className={`d-flex w-[40px] h-[40px] p-[10px] bg-gray-200 rounded-[50%] text-[40px]`}
    />
  )
}
