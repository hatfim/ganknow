import { ref } from 'vue'

const useHttpClient = () => {
  const isLoading = ref(false)
  const error = ref(null)

  const makeRequest = async (method, url, data = null) => {
    isLoading.value = true
    error.value = null

    try {
      const config = {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: data ? JSON.stringify(data) : null,
      }

      const response = await fetch(url, config)
      const responseData = await response.json()

      if (!response.ok) {
        throw new Error(responseData.message || 'Failed to fetch.')
      }

      isLoading.value = false
      return responseData
    } catch (err) {
      error.value = err.message
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
