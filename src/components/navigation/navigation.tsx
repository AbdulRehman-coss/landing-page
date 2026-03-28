import React, { FC } from 'react'
import Box from '@mui/material/Box'
import { Link as ScrollLink } from 'react-scroll'
import { navigations } from './navigation.data'

type Props = {
  closeMenu?: () => void
}

const Navigation: FC<Props> = ({ closeMenu }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
      
      {navigations.map(({ path: destination, label }) => (
        <Box
          component={ScrollLink}
          key={destination}
          to={destination}
          spy={true}
          smooth={true}
          duration={500}
          offset={-70}
          activeClass="current"

          onClick={() => {
            closeMenu?.()   // 🔥 MENU CLOSE FIX
          }}

          sx={{
            position: 'relative',
            color: 'text.disabled',
            cursor: 'pointer',
            fontWeight: 600,
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            px: { xs: 0, md: 3 },
            mb: { xs: 3, md: 0 },
            fontSize: { xs: '1.2rem', md: 'inherit' },

            '& > div': { display: 'none' },
            '&.current > div': { display: 'block' },

            '&:hover': {
              color: 'primary.main',
              '& > div': {
                display: 'block',
              },
            },
          }}
        >
          
          {/* underline / curve */}
          <Box
            sx={{
              position: 'absolute',
              top: 12,
              transform: 'rotate(3deg)',
              '& img': { width: 44, height: 'auto' },
            }}
          >
            <img src="/images/headline-curve.svg" alt="Headline curve" />
          </Box>

          {label}
        </Box>
      ))}

    </Box>
  )
}

export default Navigation