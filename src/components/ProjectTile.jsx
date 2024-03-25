import { Box, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';

import { Pill } from '@/components';

const ProjectTile = ({ project }) => {
  return (
    <Box sx={styles.container}>
      <Box component="img" sx={styles.image} src={project.img} />
      <Box sx={styles.textContainer}>
        <a href="https://google.com" target="_blank" rel="noreferrer">
          <Typography sx={styles.title}>{project.title}</Typography>
        </a>
        <Typography sx={styles.hook}>{project.hook}</Typography>
        {/* <Typography sx={styles.description}>{project.description}</Typography> */}
        <Box sx={styles.pillContainer}>
          {project.tech?.map((tech, index) => (
            <Pill key={index} text={tech} />
          ))}
        </Box>
        <Box sx={styles.bottomContainer}>
          {project.githubUrl && (
            <Box
              component="a"
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              sx={styles.iconButton}
            >
              <GitHubIcon sx={styles.icon} />
            </Box>
          )}
          {project.playUrl && (
            <Box
              component="a"
              href={project.playUrl}
              target="_blank"
              rel="noreferrer"
              sx={styles.iconButton}
            >
              <PlayArrowRoundedIcon sx={styles.icon} />
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    border: '2px solid transparent',
    borderRadius: 2,
    p: 3,
    mb: 3,
    textAlign: 'left',
    transition: 'all 0.15s ease',
  },
  image: {
    objectFit: 'cover',
    minWidth: 400,
    height: 300,
    // mb: 2,
    borderRadius: 2,
    mr: 3,
    border: '2px solid rgba(110, 80, 220, 0.5)',
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'textPrimary',
    transition: 'all 0.15s ease',
    '&:hover': {
      color: 'purple2',
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
  },
  description: {
    fontSize: 14,
    color: 'textSecondary',
  },
  pillContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    mt: 1,
  },
  bottomContainer: {
    display: 'flex',
    alignItems: 'center',
    mt: 2,
  },
  iconButton: {
    mr: 1,
    // cursor: 'pointer',
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

export default ProjectTile;
