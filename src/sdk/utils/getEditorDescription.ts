import { formatDistance } from 'date-fns'

export default function getEditorDescription(editorCreatedAt: Date){
  
  const distance = formatDistance(editorCreatedAt, new Date())

  return `editor for ${distance}`

}