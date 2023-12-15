/* eslint-disable prettier-vue/prettier */
import { computed } from 'vue'

const useConvertText = (feedContentProp) => {
  if (!feedContentProp) return { formattedFeedContent: computed(() => '') }

  const urlRegex = /(\b(https?):\/\/[-A-Z0-9+&@#/%?=~_|!:,.;]*[-A-Z0-9+&@#/%=~_|])/gi

  const convertUrlsToLinks = (text) =>
    text.replace(
      urlRegex,
      (url) => `<a href="${url}" class="text-indigo-600" target="_blank">${url}</a>`
    )

  const convertNewlinesToBreaks = (text) => text.replace(/\n/g, '<br />')

  const formattedFeedContent = computed(() =>
    feedContentProp
      .split('\n\n')
      .map(
        (paragraph) =>
          `<p>${convertUrlsToLinks(convertNewlinesToBreaks(paragraph))}</p>`
      )
      .join('')
  )

  return { formattedFeedContent }
}

export default useConvertText
