import DOMPurify from 'dompurify'
import { watch, ref } from 'vue'

const safeHtmlConverter = (htmlDataProp) => {
  const safeHtml = ref('')

  const convertEntitiesToText = (newHtmlData) => {
    const textarea = document.createElement('textarea')
    textarea.innerHTML = newHtmlData
    safeHtml.value = DOMPurify.sanitize(textarea.value, {
      USE_PROFILES: { html: true },
    })
  }

  // Watch the prop and convert/sanitize its value
  watch(htmlDataProp, convertEntitiesToText, { immediate: true })

  return { safeHtml }
}

export default safeHtmlConverter
