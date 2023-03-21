import {useContext} from 'react'
import AppContext from '../context/Provider'

function AppHook() {
  return useContext(AppContext)
}

export default AppHook;