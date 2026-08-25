import { v4 as uuidv4 } from 'uuid'

/**
 * Generates a short, readable room ID
 * Format: xxx-xxxx-xxx (alphanumeric, easy to share)
 */
export const generateRoomId = () => {
  const chars = 'abcdefghijklmnopqrstuvwxyz0123456789'
  const segment = (len) =>
    Array.from({ length: len }, () => chars[Math.floor(Math.random() * chars.length)]).join('')
  return `${segment(3)}-${segment(4)}-${segment(3)}`
}

/**
 * Generates a UUID-based room ID for internal use
 */
export const generateUUID = () => uuidv4()

/**
 * Validates a room ID format
 */
export const isValidRoomId = (id) => {
  if (!id) return false
  // Accept both short format (xxx-xxxx-xxx) and UUID format
  const shortFormat = /^[a-z0-9]{3}-[a-z0-9]{4}-[a-z0-9]{3}$/
  const uuidFormat = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i
  return shortFormat.test(id) || uuidFormat.test(id)
}

/**
 * Sanitizes room ID input — strips whitespace, lowercases
 */
export const sanitizeRoomId = (id) => {
  return id?.trim().toLowerCase() || ''
}
