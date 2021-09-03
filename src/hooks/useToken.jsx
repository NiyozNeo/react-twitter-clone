import { useContext } from 'react'
import { Context } from '../contexts/Authhetication'

const useToken = () => {
    const {state , setState} = useContext(Context)
  
    return [state, setState]
}

export default useToken