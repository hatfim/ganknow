import { ref, onMounted, onUnmounted, computed } from 'vue'

export default function useTimeAgo(dateInput) {
  const timeAgo = ref('')

  const updateTimeAgo = () => {
    const now = new Date()
    const date = new Date(dateInput)
    const diffInSeconds = Math.floor((now - date) / 1000)

    if (diffInSeconds < 60) {
      timeAgo.value = 'Just now'
    } else if (diffInSeconds < 3600) {
      timeAgo.value = `${Math.floor(diffInSeconds / 60)} minutes ago`
    } else if (diffInSeconds < 86400) {
      timeAgo.value = `${Math.floor(diffInSeconds / 3600)} hours ago`
    } else {
      timeAgo.value = `${Math.floor(diffInSeconds / 86400)} days ago`
    }
  }

  let interval

  onMounted(() => {
    updateTimeAgo()
    interval = setInterval(updateTimeAgo, 60000) // Update every minute
  })

  onUnmounted(() => {
    clearInterval(interval)
  })

  return computed(() => timeAgo.value)
}
