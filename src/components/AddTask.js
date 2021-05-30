import { useState } from 'react'

const AddTask = ({ onAdd }) => {

  const [name, setName] = useState('')
  const [birthday, setBirthday] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')

  const onSubmit = (e) => {
  e.preventDefault()

  if (!name) {
    alert('Please add name')
    return
  }

  if (!birthday) {
    alert('Please add date')
    return
  }

  onAdd({ name, birthday, phone })

  setName('')
  setBirthday('')
  setPhone('')
  setAddress('')
}

  return (

    <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control'>
        <input
          type='text'
          placeholder='Name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <input
          type='date'
          placeholder='Birthday'
          value={birthday}
          onChange={(e) => setBirthday(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <input
          type='tel'
          placeholder='Phone'
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <input
          type='text'
          placeholder='Address'
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>

      <input type='submit' value='Save Item' className='btn btn-block' />

    </form>

  )
}

export default AddTask
