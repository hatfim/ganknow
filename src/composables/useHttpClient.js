import { ref } from 'vue'

const useHttpClient = () => {
  const isLoading = ref(false)
  const error = ref(null)

  const makeRequest = async (method, url, data) => {
    isLoading.value = true
    error.value = null

    try {
      const config = {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
      }

      if (data) {
        config.body = JSON.stringify(data)
      }

      const response = await fetch(url, config)
      isLoading.value = false
      return response
    } catch (err) {
      error.value = err
      isLoading.value = false
      throw err
    }
  }

  const get = (url) => makeRequest('GET', url)
  const post = (url, data) => makeRequest('POST', url, data)
  const put = (url, data) => makeRequest('PUT', url, data)
  const del = (url) => makeRequest('DELETE', url)

  return { get, post, put, delete: del, isLoading, error }
}

export default useHttpClient
