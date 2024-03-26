import React from 'react'
import { useFormStatus } from 'react-dom'
import { FaPaperPlane } from 'react-icons/fa';

export default function BtnSend() {
    const { pending } = useFormStatus();

  return (
    <button type='submit' className='group font-medium flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-[#ffb114] text-black rounded-xl outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-neutral-450 active:scale-105 disable:scale-100' disabled={pending}>
        {pending ? (
        <div className="h-5 w-5 animate-spin rounded-xl border-b-2 border-black"></div>
      ) : (
        <>
          Send{" "}
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1"></FaPaperPlane>
        </>
      )}
    </button>
  )
}
