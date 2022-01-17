import * as React from 'react';
import styled from '@mui/material/styles/styled'
import {
  OutlinedInput,
  OutlinedInputProps,
  outlinedInputClasses,
} from '@mui/material'

export interface FbmOutlinedProps extends OutlinedInputProps {}

const FbmOutlinedInput = styled(OutlinedInput)(({ theme }) => {
  return {
    backgroundColor: '#FFF',
    [`.${outlinedInputClasses.notchedOutline}`]: {
      borderColor: 'rgba(0,0,0,0.08)',
    },
    [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
      borderColor: 'rgba(0,0,0,0.26)',
    },
    [`& .${outlinedInputClasses.input}`]: {
      padding: '12px'
    },
    [`&.${outlinedInputClasses.focused} .${outlinedInputClasses.notchedOutline}`]: {
      borderColor: theme.palette.primary.main,
      borderWidth: 1,
    },
    [`&.${outlinedInputClasses.error} .${outlinedInputClasses.notchedOutline}`]: {
      borderColor: theme.palette.error.main,
    },
    [`&.${outlinedInputClasses.disabled} .${outlinedInputClasses.notchedOutline}`]: {
      borderColor: 'rgba(0, 0, 0, 0.08)',
      backgroundColor: theme.palette.action.disabledBackground
    },
  }
})

const FbmInput: React.FC<FbmOutlinedProps> = React.forwardRef((props, ref) => {
  return (
    <FbmOutlinedInput inputRef={ref} {...props} />
  )
})

export default FbmInput

