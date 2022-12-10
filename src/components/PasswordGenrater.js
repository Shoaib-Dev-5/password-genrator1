import React,{useState} from 'react'
import './PasswordGenrater.css';

export const PasswordGenrater = () => {
    const [password, setPassword] = useState('');
    const [Length, setLength] = useState(12);
    const [UpperCase, setUpperCase] = useState(false);
    const [Symbols, setSymbols] = useState(false);
    const [Lower, setLower] = useState(true);
    const [Numbers, setNumbers] = useState(false);
    const sym="!@#$%^&*()~<>?/,.-_=+{}[]";
    const num="0123456789";
    const upper='ABCDEFGHIKLMNOPQRSTVXYZ';
    const lower='abcdefghijklmnopqrstvxyz';
  const  GenrateFun=()=>{
    let list='';
    if(UpperCase){
        list=list+upper;
    }
    if(Lower){
        list=list+lower;
    }
    if(Numbers){
        list=list+num;
    }
    if(Symbols){
        list=list+sym;
    }
    setPassword(createpassword(list)); 
    }
    const createpassword=(list)=>{
        let data='';
            const charLength=list.length;
            for(let i=0;i<Length;i++){
                const ind=Math.round(Math.random() *charLength);
                 data=data+list.charAt(ind);
            }
            return data;
    }
    const handleCopy=()=>{
       let text=document.createElement('textarea');
       text.innerHTML=password;
       document.body.appendChild(text);
       text.select();
        document.execCommand('copy');
        text.remove();
    }
  return (
    <>
    <div className="main">
    <h2>Password Genrator</h2>
        <div className="inner">
        <div className="content">
            <div className="show">
            <h4 id='cop'>{password}</h4>
            <button className='show-btn' onClick={handleCopy}>
            <i className="bi bi-clipboard" title='Copy'></i>
            </button>
            </div>
            <div className="form-group">
                        <label htmlFor="lenght">Password Length</label>
                        <input type="number" name="lenght" id="len" 
                        onChange={e=>setLength(e.target.value)} value={Length} />
                    </div>  
                    <div className="form-group">
                        <label htmlFor="upper">Includes UperCase</label>
                        <input type="checkbox" name="upper" id="" 
                        checked={UpperCase} onChange={e=>setUpperCase(e.target.checked)}/>
                    </div>  
                    <div className="form-group">
                        <label htmlFor="lower">Includes LowerCase</label>
                        <input type="checkbox" name="lower" id="" 
                        checked={Lower} onChange={e=>setLower(e.target.checked)}/>
                    </div>  
                    <div className="form-group">
                        <label htmlFor="symbols">Includes Symbols</label>
                        <input type="checkbox" name="symbols" id="" 
                        checked={Symbols} onChange={e=>setSymbols(e.target.checked)}/>
                    </div>  
                    <div className="form-group">
                        <label htmlFor="numbers">Includes Numbers</label>
                        <input type="checkbox" name="numbers" id="" 
                        checked={Numbers} onChange={e=>setNumbers(e.target.checked)}/>
                    </div> 
                    <button className='btn btn-primary genrate' onClick={GenrateFun}>Genrate</button>   
        </div>
    </div>
    </div>
    </>
  )
}
