import { useRouteError } from 'react-router-dom'


const Error = () => {
    const error:any = useRouteError()
    
  return (
    <div>
        <h1>Error:</h1>
        <span>This is the error: {error.message}</span>
    </div>
  )
}

export default Error