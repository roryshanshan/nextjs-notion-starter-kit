import React from 'react'

export function Pdf({ block }) {
  const source = block?.format?.display_source
  if (!source) return null

  return (
    <div style={{ width: '100%', height: '600px', margin: '1rem 0' }}>
      <iframe
        src={source}
        title="Notion PDF"
        width="100%"
        height="100%"
        style={{ border: 'none' }}
        sandbox="allow-scripts allow-same-origin"
        allow="fullscreen"
      />
    </div>
  )
}
