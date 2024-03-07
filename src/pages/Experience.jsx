import { Box, Typography } from '@mui/material';

import { EXPERIENCE } from '../constants/content';

const Experience = () => {
  return (
    <Box sx={styles.pageContainer}>
      <Typography>Experience</Typography>
      {EXPERIENCE.map((exp) => (
        <Box
          key={exp.id}
          sx={styles.itemContainer}
          component="a"
          href="https://google.com"
          target="_blank"
        >
          <Box component="img" sx={styles.icon} src={exp.icon} />
          <Typography sx={styles.title}>
            {exp.title} - <i>{exp.employer}</i>
          </Typography>
          <Typography sx={styles.date}>
            {exp.dateFrom} - {exp.dateTo}
          </Typography>
          <Typography sx={styles.hook}>{exp.hook}</Typography>
          <Box component="ul" sx={styles.descriptionContainer}>
            {exp.description?.map((desc, index) => (
              <li key={index}>
                <Typography sx={styles.descriptionItem}>{desc}</Typography>
              </li>
            ))}
          </Box>
          <Box sx={styles.pillContainer}>
            {exp.tech?.map((tech, index) => (
              <Typography key={index} sx={styles.pill}>
                {tech}
              </Typography>
            ))}
          </Box>
        </Box>
      ))}
    </Box>
  );
};

const styles = {
  pageContainer: {
    // display: 'flex',
    // flexDirection: 'column',
    // flex: 1,
    // width: '100%',
    // alignItems: 'flex-center',
    // p: 3,
  },
  itemContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    border: '2px solid transparent',
    borderRadius: 2,
    p: 3,
    mb: 3,
    textAlign: 'left',
    transition: 'all 0.15s ease',
    '&:hover': {
      borderColor: 'rgba(110, 80, 220, 0.5)',
      backgroundColor: 'rgba(110, 80, 220, 0.1)',
    },
    '&:hover > p:nth-of-type(1)': {
      color: 'textHighlight',
    },
  },
  icon: {
    width: 50,
    height: 50,
    // mb: 2,
    borderRadius: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'textPrimary',
    transition: 'all 0.15s ease',
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
  },
  descriptionItem: {
    fontSize: 14,
  },
  pillContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    mt: 1,
  },
  pill: {
    color: 'textPrimary',
    fontSize: 14,
    backgroundColor: 'rgba(110, 80, 220, 0.5)',
    // opacity: 0.8,
    lineHeight: 1,
    px: 1.5,
    py: 1,
    mr: 1,
    // mb: 1,
    mt: 1,
    // height: 50,
    borderRadius: 4,
    cursor: 'inherit',
  },
};

export default Experience;
