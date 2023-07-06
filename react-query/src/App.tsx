import axios from "axios"
import { useMutation, useQuery } from "@tanstack/react-query"

/*
Use query is used for get requests(Read)
Use mutation is used for everything else(Create, update, delete)
*/


interface Data {

  userId: number,
  id: number,
  title: string,
  completed: boolean

}

const App = () => {
  const wait = (ms: number) => new Promise((res) => setTimeout(res, ms))
  const myvar = ''
  const myvar2 = ''
  const { data, isLoading, isError } = useMutation({
    mutationFn: async () => {
      const { data } = await axios.post('https://jsonplaceholder.typicode.com/todos/1',{myvar: "string"}
      )
      return data as Data
    }
  })

  return (

    <div>
      {
        isLoading ? (
          <div>
            LOADING
          </div>
        ) :
        (
          <div>
          {JSON.stringify(data)}
        </div>
        )
      }
    

    </div>
  )}

  export default App;