import { useMutation, useQuery } from "@tanstack/react-query"
import axios from "axios"

interface Data {
    userId: number,
    id: number,
    title: string,
    completed: boolean
  }


export const usePost = (postId: number) => {
    const { data, isLoading, isError } = useQuery({
        queryFn: async () => {
          const { data } = await axios.post('https://jsonplaceholder.typicode.com/todos/1',{myvar: "string"}
          )
          return data as Data
        },
    })
      return {data, isLoading}
    }