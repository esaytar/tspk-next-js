import React from 'react'

export default function FormPart({labelName, placeholderName, nameFor, inputType}) {
    return (
        <div className="flex flex-col gap-1">
            <label htmlFor={nameFor}>{labelName}</label>
            {inputType !== '' ? (
                <input type={inputType} name={nameFor} placeholder={placeholderName}
                className='bg-mainBlue/5 text-grayText/50 p-4 rounded-[10px]' />
            ) : (
                <textarea name={nameFor} placeholder={placeholderName}
                className='bg-mainBlue/5 text-grayText/50 p-4 rounded-[10px] resize-none min-h-28'></textarea>
            )}
        </div>
    )
}
