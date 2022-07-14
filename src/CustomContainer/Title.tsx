import Typography from '@mui/material/Typography'
import * as React from 'react'

interface TitleProps {
  children?: React.ReactNode
}

export default function Title(props: TitleProps) {
  return (
    <Typography
      data-cy="custom-title"
      data-testid="custom-title"
      component="h2"
      variant="h6"
      color="primary"
      gutterBottom
    >
      {props.children}
    </Typography>
  )
}
