import { Box } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

const ContactIcons = () => (
  <Box sx={styles.container}>
    <Box
      component="a"
      href="https://github.com/kavalcio/"
      target="_blank"
      rel="noreferrer"
      sx={styles.iconButton}
    >
      <GitHubIcon sx={styles.icon} />
    </Box>
    <Box
      component="a"
      href="https://www.linkedin.com/in/sarp-kavalcioglu/"
      target="_blank"
      rel="noreferrer"
      sx={styles.iconButton}
    >
      <LinkedInIcon sx={styles.icon} />
    </Box>
    <Box
      component="a"
      href="https://www.instagram.com/turkish_ravioli/"
      target="_blank"
      rel="noreferrer"
      sx={styles.iconButton}
    >
      <InstagramIcon sx={styles.icon} />
    </Box>
  </Box>
);
const styles = {
  container: {},
  iconButton: {
    p: 1,
    '&:hover > svg:nth-of-type(1)': {
      color: 'purple3',
      top: -3,
    },
  },
  icon: {
    fontSize: 30,
    color: 'purple2',
    position: 'relative',
    transition: 'top 0.15s ease',
    top: 0,
  },
};

export default ContactIcons;
