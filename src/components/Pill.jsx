import { Typography } from '@mui/material';

const Pill = ({ text }) => <Typography sx={styles.pill}>{text}</Typography>;

const styles = {
  pill: {
    color: 'textPrimary',
    fontSize: 14,
    backgroundColor: 'rgba(110, 80, 220, 0.5)',
    lineHeight: 1,
    px: 1.5,
    py: 1,
    m: 0.5,
    borderRadius: 4,
    cursor: 'inherit',
  },
};

export default Pill;
