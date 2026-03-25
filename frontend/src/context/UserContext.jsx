import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'

export const userDataContext = createContext()

function UserContext({ children }) {

  const serverUrl = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000"

  const [userData, setUserData] = useState(null)
  const [frontendImage, setFrontendImage] = useState(null)
  const [backendImage, setBackendImage] = useState(null)
  const [selectedImage, setSelectedImage] = useState(null)

  // 🔥 GET TOKEN FROM LOCAL STORAGE
  const getToken = () => localStorage.getItem("token")

  // 🔥 GET CURRENT USER
  const handleCurrentUser = async () => {
    try {
      const token = getToken()

      if (!token) return

      const result = await axios.get(`${serverUrl}/api/user/current`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      setUserData(result.data)
      console.log(result.data)

    } catch (error) {
      console.log(error)
    }
  }

  // 🔥 GEMINI REQUEST WITH TOKEN
  const getGeminiResponse = async (command) => {
    try {
      const token = getToken()

      const result = await axios.post(
        `${serverUrl}/api/user/asktoassistant`,
        { command },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )

      return result.data

    } catch (error) {
      console.log(error)
      return null
    }
  }

  useEffect(() => {
    handleCurrentUser()
  }, [])

  const value = {
    serverUrl,
    userData,
    setUserData,
    backendImage,
    setBackendImage,
    frontendImage,
    setFrontendImage,
    selectedImage,
    setSelectedImage,
    getGeminiResponse
  }

  return (
    <userDataContext.Provider value={value}>
      {children}
    </userDataContext.Provider>
  )
}

export default UserContext