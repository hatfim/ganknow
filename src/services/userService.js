import { useHttpClient } from '@/composables/httpClient'

const userService = () => {
  const { get } = useHttpClient()

  const fetchUsers = async () => get('https://jsonplaceholder.typicode.com/users')

  return { fetchUsers }
}

export default userService
