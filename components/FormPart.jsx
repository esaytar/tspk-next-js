export default function FormPart({labelName, placeholderName, nameFor, inputType, toChange, value, inputRef}) {
    return (
        <div className="flex flex-col gap-1">
            <label htmlFor={nameFor}>{labelName}</label>
            {inputType !== '' ? (
                <input 
                    type={inputType} 
                    name={nameFor} 
                    placeholder={placeholderName} 
                    onChange={toChange} 
                    value={value}
                    ref={inputRef}
                    className='bg-main-blue/5 text-main-gray/50 p-4 rounded-[10px]' 
                />
            ) : (
                <textarea 
                    name={nameFor} 
                    placeholder={placeholderName} 
                    onChange={toChange} 
                    value={value}
                    className='bg-main-blue/5 text-main-gray/50 p-4 rounded-[10px] resize-none min-h-28'
                ></textarea>
            )}
        </div>
    )
}
