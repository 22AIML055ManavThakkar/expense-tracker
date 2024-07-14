import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState('');
    const [errors, setErrors] = useState({
        title: '',
        amount: ''
    });
    const { addTransaction } = useContext(GlobalContext);

    const validate = () => {
        let error = {};
        if (!text.length) {
            error = { ...error, title: 'Text is required' };
        }
        if (!amount?.length) {
            error = { ...error, amount: 'Amount is required' };
        }
        setErrors(error);
        return Object.values(error).every(x => x === '');
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        if (name === 'title') {
            if(text.length){
                setErrors({ ...errors, title: '' });
            }
            setText(value);
    }
        else if (name === 'amount') {
            if(amount?.length){
                setErrors({ ...errors, amount: '' });
            }
            setAmount(value);
        }
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            const newTransaction = {
                id: Math.floor(Math.random() * 100000000),
                text: text,
                amount: +amount
            };
            addTransaction(newTransaction);
            setText('');
            setAmount('');
        }
    };

    return (
        <>
            <h3>Add new transaction</h3>
            <form onSubmit={onSubmit}>
                <div className='form-control'>
                    <label htmlFor='text'>Text</label>
                    <input
                        name='title'
                        type='text'
                        value={text}
                        onChange={(e) => handleChange(e)}
                        placeholder='Enter text...'
                    />
                    {errors?.title?.length ? <div className="error">{errors.title}</div> : null}
                </div>
                <div className='form-control'>
                    <label htmlFor='amount'>
                        Amount<br />
                        (negative - expense, positive - income)
                    </label>
                    <input
                        name='amount'
                        type='number'
                        value={amount}
                        onChange={(e) => handleChange(e)}
                        placeholder='Enter amount...'
                    />
                    {errors?.amount?.length ? <div className="error">{errors?.amount}</div> : null}
                </div>
                <button className='btn'>Add transaction</button>
            </form>
        </>
    );
};
