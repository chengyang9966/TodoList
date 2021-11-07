const InputComponent=({errorText,title,onChange,value})=>{

    return(
        <div className='inputContainerWrapper'>

        <div className='inputContainer'>
        <label>{title}</label>
    <input 
    autoFocus
    className='InputField'
    onChange={onChange}  
  value={value}
  />
    </div>  
  {errorText&&<p>{errorText}</p>}
    </div>
    )
}
export default InputComponent