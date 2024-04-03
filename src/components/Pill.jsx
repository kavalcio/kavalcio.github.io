import { Typography } from '@mui/material';

const Pill = ({ text }) => <Typography sx={styles.pill}>{text}</Typography>;

const styles = {
  pill: {
    color: 'textPrimary',
    fontSize: 14,
    backgroundColor: 'purpleBorder',
    lineHeight: 1,
    px: 1.5,
    py: 1,
    my: 0.5,
    ml: 0,
    mr: 1,
    borderRadius: 4,
    cursor: 'inherit',
  },
};

export default Pill;
