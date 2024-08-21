import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';

// material-ui
import { useTheme } from '@mui/material/styles';

// project import
import DrawerHeaderStyled from './DrawerHeaderStyled';

// ==============================|| DRAWER HEADER ||============================== //

export default function DrawerHeader({ open }) {
  const theme = useTheme();

  return (
    <DrawerHeaderStyled theme={theme} open={!!open}>
      <Typography
        variant="h5"
        component={'h1'}
        color="primary"
        sx={{
          fontWeight: '800'
        }}
      >
        AMBIDEXTERS
      </Typography>
    </DrawerHeaderStyled>
  );
}

DrawerHeader.propTypes = { open: PropTypes.bool };
