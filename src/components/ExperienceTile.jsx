import { Box, Typography } from '@mui/material';
import { Pill } from '@/components';

// TODO: try to fix the phantom border on hover
// TODO: test this app in safari, see if we need -webkit css properties
const ExperienceTile = ({ experience }) => {
  return (
    <Box sx={styles.container}>
      <Box
        component="a"
        href={experience.employerUrl}
        target="_blank"
        rel="noreferrer"
      >
        <Box component="img" sx={styles.icon} src={experience.icon} />
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Typography sx={styles.title}>
          {experience.title}
          <Typography
            component="a"
            href={experience.employerUrl}
            target="_blank"
            rel="noreferrer"
            sx={styles.employer}
          >
            &nbsp;@ {experience.employer}
          </Typography>
        </Typography>
        <Typography sx={styles.date}>
          {experience.dateFrom} - {experience.dateTo}
        </Typography>
        <Typography sx={styles.hook}>{experience.hook}</Typography>
        <Box component="ul" sx={styles.descriptionContainer}>
          {experience.description?.map((desc, index) => (
            <li key={index}>
              <Typography sx={styles.description}>{desc}</Typography>
            </li>
          ))}
        </Box>
        <Box sx={styles.pillContainer}>
          {experience.tech?.map((tech, index) => (
            <Pill key={index} text={tech} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    border: '2px solid transparent',
    borderRadius: 2,
    p: 3,
    mb: 3,
    textAlign: 'left',
    transition: 'all 0.15s ease',
    '&:hover': {
      borderColor: 'purpleBorder',
      backgroundColor: 'purpleTransparent',
    },
    // '&:hover > p:nth-of-type(1)': {
    //   color: 'purple2',
    // },
  },
  icon: (theme) => ({
    width: 50,
    height: 50,
    // mb: 2,
    mr: 3,
    borderRadius: 1,
    // transition: 'all 0.15s ease',
    filter: 'sepia(100%) hue-rotate(210deg) saturate(300%)',
    // '&:hover': {
    //   opacity: 0.8,
    // },
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  }),
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'textPrimary',
    transition: 'all 0.15s ease',
  },
  employer: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'purple2',
    transition: 'all 0.15s ease',
    '&:hover': {
      color: 'purple3',
    },
  },
  hook: {
    fontSize: 16,
    color: 'textSecondary',
  },
  date: {
    fontSize: 14,
    color: 'textSecondary',
    mb: 1,
  },
  descriptionContainer: {
    listStyleType: 'circle',
    color: 'textSecondary',
    pl: 2,
  },
  description: {
    fontSize: 14,
    mb: 0.25,
  },
  pillContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    mt: 1,
  },
};

export default ExperienceTile;
