import React, { useState } from 'react';
import './Message.css';


function Message( props ){
    const {onSubmitValue} = props;
    const [update, setUpdate] = useState( '' );
    const [updateError, setUpdateError] = useState( ' ' );
    const [count, setCount] = useState( 1 );

    setTimeout(()=>{
        if(count>2){
            setCount(1);
        }
        else{
            setCount(count+1);
        }
    }, 2000);

    const handleUpdate = e => {
        setUpdate( e.target.value );
        ( e.target.value.length === 0 || ( e.target.value >= 0 && e.target.value <= 100 ) ) ? setUpdateError( ' ' ) :
                                                                            setUpdateError( 'Value out of range.' );
    };

    const onSubmit = e => {
        e.preventDefault();
        if( update >= 0 && update <= 100){
            onSubmitValue( {update} );
        }
    };

    return (
        <div className={count===1 ? "message green" : count===2 ? "message yellow" : count===3 ? "message red" : "message"}>
            <form onSubmit={onSubmit}>
                <div className='inp-container'>
                    <label htmlFor='update' className='inp'>
                        <input type='number' id='update' className='inp-input' placeholder=' ' value={update} step="0.01" 
                            onChange={handleUpdate}/>
                        <span className='inp-label'>Message to Update</span>
                        <span className='inp-focus'></span>
                        <p className='inp-error'>{updateError}</p>
                    </label>
                </div>
                <button type={( update.length < 1 || updateError.length > 1 ) ? 'reset' : 'submit'}
                        className={( update.length < 1 || updateError.length > 1 ) ? 'submit not-submit' : 'submit'}>
                    <span className="material-icons-outlined">keyboard_return</span>
                </button>
            </form>
        </div>
    )
};

export default Message;