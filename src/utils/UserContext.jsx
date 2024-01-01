import React ,{useState} from 'react'
export const UserContexts = React.createContext()

function UserContext({children}) {
    const [user,setUser] = useState([{
        id : 1,
        name : "Dharanish",
        mobile : "6382617437",
        email : "dharanishsk9698@gmail.com",
        department : "Mechanical",
      },
      {
        id : 2,
        name : "Abi",
        mobile : "6382617437",
        email : "abi9698@gmail.com",
        department : "ECE",
      },
      {
        id : 3,
        name : "Vikram",
        mobile : "6382617437",
        email : "vikram9698@gmail.com",
        department : "EEE",
      },
      {
        id : 4,
        name : "Manoj",
        mobile : "6382617845",
        email : "manoj9698@gmail.com",
        department : "EEE",
      },
    ])
    
  return (
    <UserContexts.Provider value ={{user,setUser}}>
        {children}
    </UserContexts.Provider>
  )
}

export default UserContext