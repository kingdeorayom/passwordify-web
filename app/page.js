'use client'

import { useEffect, useState } from "react"
import CopyToClipboard from "react-copy-to-clipboard"
import Header from "./components/Header"
import Footer from "./components/Footer"

export default function Home() {

  const [generatedPassword, setGeneratedPassword] = useState('')
  const [isCopied, setIsCopied] = useState(false)
  const [isPasswordGenerating, setIsPasswordGenerating] = useState(true)
  const [passwordLength, setPasswordLength] = useState(8)

  const generatePassword = () => {

    setIsPasswordGenerating(true)
    setIsCopied(false)

    let password = '';
    let string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + 'abcdefghijklmnopqrstuvwxyz0123456789@#$!^&*()<>?/';
    for (let i = 1; i <= passwordLength; i++) {
      let char = Math.floor(Math.random() * string.length + 1);
      password += string.charAt(char)
    }
    setGeneratedPassword(password)

    setTimeout(() => {
      setIsPasswordGenerating(false)
    }, 1000);

  }

  useEffect(() => {
    generatePassword()
    setIsPasswordGenerating(false)
  }, [passwordLength])

  const copyToClipboard = () => {
    setIsCopied(true)
  }

  return (
    <>
      <Header />
      <main>

        {
          !isPasswordGenerating ? (
            <div className="mt-14 mb-14">
              <label for="steps-range" class="block mb-2 text-md font-medium text-gray-900">{`Password length: ${passwordLength}`}</label>
              <input
                type="range"
                className="transparent h-[4px] w-full cursor-pointer appearance-none border-transparent bg-neutral-200 dark:bg-neutral-600"
                id="customRange1"
                step='1'
                min='4'
                max='20'
                value={passwordLength}
                onChange={(e) => setPasswordLength(parseInt(e.target.value))}
              />
            </div>
          ) : null
        }

        {
          isPasswordGenerating ?
            <div className="flex justify-center items-center mt-10">
              <div role="status">
                <svg aria-hidden="true" className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                  <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                </svg>
                <span className="sr-only">Loading...</span>
              </div>

              <p className="ms-2">Generating your password...</p>
            </div> :
            <input type="text" className="bg-slate-50 border border-gray-100 text-gray-900 text-lg rounded-lg block w-full p-3.5" placeholder="Generated Password will appear here" required disabled value={generatedPassword} />
        }

        {
          isCopied && (
            <div className="text-center mt-8 flex justify-center">
              <div className="flex items-center max-w-xs p-4 space-x-4 text-gray-500 bg-white divide-x divide-gray-200 rounded-lg shadow" role="alert">
                <div class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
                  <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  <span class="sr-only">Check icon</span>
                </div>
                <span className="sr-only">Check icon</span>
                <div className="pl-4 text-sm font-normal">Successfully copied to Clipboard</div>
              </div>
            </div>
          )
        }

        <div className="flex items-center justify-center mt-10">
          <button
            type="button"
            onClick={generatePassword}
            className={`text-white ${isPasswordGenerating ? 'bg-blue-300 cursor-not-allowed' : 'bg-blue-700 hover:bg-blue-800'} font-medium rounded-lg text-sm px-5 py-2.5 mx-2`}
            disabled={isPasswordGenerating}
          >
            <div className="flex items-center">
              <svg className="w-3.5 h-3.5 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 1v5h-5M2 19v-5h5m10-4a8 8 0 0 1-14.947 3.97M1 10a8 8 0 0 1 14.947-3.97" />
              </svg>
              Regenerate
            </div>
          </button>

          <CopyToClipboard text={generatedPassword} onCopy={copyToClipboard}>
            <button
              type="button"
              className={`py-2.5 px-5 mx-2 text-sm font-medium text-gray-900 focus:outline-none ${isPasswordGenerating ? 'bg-gray-100 cursor-not-allowed rounded-lg border border-gray-50 text-slate-500' : 'bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-800'} focus:z-10 focus:ring-4`}
              disabled={isPasswordGenerating}
            >
              <div className="flex items-center">
                <svg className="w-3.5 h-3.5 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 2h4a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h4m6 0a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1m6 0v3H6V2M5 5h8m-8 5h8m-8 4h8" />
                </svg>
                Copy result to Clipboard
              </div>
            </button>
          </CopyToClipboard>
        </div>

        <div className="flex items-center p-4 mt-10 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400" role="alert">
          <svg className="flex-shrink-0 inline w-4 h-4 mr-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
          </svg>
          <span className="sr-only">Info</span>
          <div>
            <span className="font-bold"></span>
            <span>The passwords generated by Passwordify are meant to enhance your online security and <span className="font-bold">remain private to you</span>. Please use this service for its intended purpose of safeguarding your accounts and use it responsibly.</span>
          </div>
        </div>

      </main>
      <Footer />
    </>
  )
}
