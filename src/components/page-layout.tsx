import React, { ReactNode, FC } from 'react';
import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

interface Props {
  children: ReactNode;
}

const PageLayout: FC<Props> = function PageLayout({ children }) {
  return (
    <Box
      display="flex"
      flexDirection="column"
      height="100vh"
      margin={0}
      padding={0}
    >
      <AppBar position="sticky">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} noWrap>
            Spunion
          </Typography>
        </Toolbar>
      </AppBar>

      <main>{children}</main>
    </Box>
  );
};

export default PageLayout;
