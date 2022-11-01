import React from 'react'
import { Button } from '@mui/material'

const BookNow = () => {
  return (
    <Button contained sx = {{
      backgroundColor: 'var(--color-primary)',
      color: 'white',
      fontFamily: 'var(--font-family)',
      fontWeight: '400',
      borderRadius: '20px',
      padding: '0.5rem 2rem'
    }}>
      request booking
    </Button>
  )
}

export default BookNow