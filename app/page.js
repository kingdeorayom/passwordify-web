'use client'

import { useState } from "react"

export default function Home() {

  const [generatedPassword, setGeneratedPassword] = useState('')

  const generatePassword = () => {
    let password = '';
    let string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + 'abcdefghijklmnopqrstuvwxyz0123456789@#$!^&*()<>?/';
    for (let i = 1; i <= 10; i++) {
      let char = Math.floor(Math.random()
        * string.length + 1);
      password += string.charAt(char)
    }
    setGeneratedPassword(password)
  }

  return (
    <main className="w-full max-w-xl mx-auto mt-16 pl-3 pr-3 text-center">
      <div className="mb-5">
        <h1 className='text-7xl font-bold mb-2'>Passwordify</h1>
        <h2 className='text-2xl'>Security. Simplified.</h2>
      </div>
      <div className="mt-10">
        {
          generatedPassword !== '' ?
            <p className="mb-5 font-bold text-blue-700">Generated Password:</p> :
            null
        }
        <input type="text" className="bg-white border border-gray-200 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="Generated Password will appear here" required disabled value={generatedPassword} />
        <button type="button" onClick={generatePassword} className="text-white bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm px-5 py-2.5 mt-10">Generate</button>
      </div>
    </main>
  )
}
