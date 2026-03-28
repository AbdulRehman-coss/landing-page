import React, { FC, useState } from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import IconButton from '@mui/material/IconButton'
import useMediaQuery from '@mui/material/useMediaQuery'
import { Logo } from '@/components/logo'
import { Navigation, AuthNavigation } from '@/components/navigation'
import { useTheme } from '@mui/material/styles'
import { Menu, Close } from '@mui/icons-material'

const Header: FC = () => {
  const [visibleMenu, setVisibleMenu] = useState<boolean>(false)
  const { breakpoints } = useTheme()
  const matchMobileView = useMediaQuery(breakpoints.down('md'))

  return (
    <Box sx={{ backgroundColor: 'background.paper' }}>
      <Container sx={{ py: { xs: 2, md: 3 } }}>
        
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          
          <Logo />

          {/* Hamburger Button */}
          <Box sx={{ ml: 'auto', display: { xs: 'inline-flex', md: 'none' } }}>
            <IconButton onClick={() => setVisibleMenu(true)}>
              <Menu />
            </IconButton>
          </Box>

          {/* NAV MENU */}
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexDirection: { xs: 'column', md: 'row' },
              transition: (theme) => theme.transitions.create(['top']),

              ...(matchMobileView && {
                py: 6,
                backgroundColor: 'background.paper',
                zIndex: 1300,
                position: 'fixed',
                height: '100vh',
                top: visibleMenu ? 0 : '-120vh',
                left: 0,
              }),
            }}
          >
            <Box /> {/* spacing fix */}

            {/* IMPORTANT: closeMenu pass kiya */}
            <Navigation closeMenu={() => setVisibleMenu(false)} />

            <AuthNavigation />

            {/* Close button */}
            {matchMobileView && visibleMenu && (
              <IconButton
                sx={{
                  position: 'fixed',
                  top: 10,
                  right: 10,
                }}
                onClick={() => setVisibleMenu(false)}
              >
                <Close />
              </IconButton>
            )}
          </Box>

        </Box>
      </Container>
    </Box>
  )
}

export default Header