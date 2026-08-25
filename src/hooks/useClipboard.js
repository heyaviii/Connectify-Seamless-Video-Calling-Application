import { useState, useCallback } from 'react'

/**
 * Custom hook for clipboard copy with visual feedback
 */
export const useClipboard = (timeout = 2000) => {
  const [copied, setCopied] = useState(false)

  const copy = useCallback(async (text) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), timeout)
      return true
    } catch (err) {
      // Fallback for older browsers
      try {
        const textarea = document.createElement('textarea')
        textarea.value = text
        textarea.style.position = 'fixed'
        textarea.style.opacity = '0'
        document.body.appendChild(textarea)
        textarea.focus()
        textarea.select()
        document.execCommand('copy')
        document.body.removeChild(textarea)
        setCopied(true)
        setTimeout(() => setCopied(false), timeout)
        return true
      } catch {
        console.error('Failed to copy:', err)
        return false
      }
    }
  }, [timeout])

  return { copied, copy }
}
