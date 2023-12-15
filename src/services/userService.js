import useHttpClient from '@/composables/useHttpClient'

const { get } = useHttpClient()

const fetchUsers = () => get('https://jsonplaceholder.typicode.com/users')

export default {
  fetchUsers,
}
