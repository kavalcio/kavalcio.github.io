import { Button as MuiButton } from '@mui/material';

// TODO: make the style of this more interesting, add a weird hover animation
const Button = (props) => (
  <MuiButton
    {...props}
    sx={{
      p: 1.5,
      px: 2,
      fontSize: 14,
      fontWeight: 600,
      borderRadius: 1,
      lineHeight: 1.5,
      border: (theme) => `3px solid ${theme.palette.purpleBorder}`,
      textDecoration: 'none',
      color: 'textPrimary',
      textTransform: 'none',
      cursor: 'pointer',
      transition: 'all 0.15s ease',
      '&:hover': {
        backgroundColor: 'purpleTransparent',
      },
      ...props.sx,
    }}
  />
);

export default Button;
