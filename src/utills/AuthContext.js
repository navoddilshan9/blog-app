import React, { createContext } from 'react'
import { CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js'
import Pool from '../utills/Userpool'

const AuthContext = createContext()
const Context = (props) => {
  const getSession = async () => {
    return await new Promise((resolve, reject) => {
      const user = Pool.getCurrentUser()
      if (user) {
        user.getSession((err, session) => {
          if (err) {
            reject()
          } else {
            resolve(session)
          }
        })
      } else {
        reject()
      }
    })
  }
  const authenticate = async (Username, Password) => {
    return await new Promise((resolve, reject) => {
      const user = new CognitoUser({ Username, Pool })
      const authDetails = new AuthenticationDetails({ Username, Password })
      user.authenticateUser(authDetails, {
        onSuccess: (dtata) => {
          console.log(dtata)
          resolve(dtata)
        },
        onFailure: (err) => {
          console.log(err)
          reject(err)
        },
        newPasswordRequired: (data) => {
          console.log(data)
          resolve(data)
        },
      })
    })
  }
  const logout = () => {
    const user = Pool.getCurrentUser()
    if (user) {
      user.signOut()
    }
  }
  return (
    <AuthContext.Provider value={{ authenticate, getSession, logout }}>
      {props.children}
    </AuthContext.Provider>
  )
}

export { Context, AuthContext }