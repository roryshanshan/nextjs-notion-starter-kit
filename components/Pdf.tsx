import * as React from 'react'

export const Pdf = ({ block }) => {
  const source = block?.format?.display_source
  if (!source) return null

  return (
    <div style={{ width: '100%', height: '600px', margin: '1rem 0' }}>
      <iframe
        src={source}
        width="100%"
        height="100%"
        allowFullScreen
        frameBorder="0"
      />
    </div>
  )
}
