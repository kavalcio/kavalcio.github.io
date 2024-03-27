import { Box, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import NotesIcon from '@mui/icons-material/Notes';

import { Pill } from '@/components';

// TODO: what should clicking the title do if there is no playUrl? maybe it should just open a project details page
// TODO: what should clicking the image do? maybe it should open a project details page
// TODO: where should description go?
const ProjectTile = ({ project }) => {
  return (
    <Box sx={styles.container}>
      <Box component="img" sx={styles.image} src={project.img} />
      <Box sx={styles.textContainer}>
        <a href={project.playUrl} target="_blank" rel="noreferrer">
          <Typography sx={styles.title}>{project.title}</Typography>
        </a>
        <Typography sx={styles.hook}>{project.hook}</Typography>
        {/* <Typography sx={styles.description}>{project.description}</Typography> */}
        {project.tech?.length > 0 && (
          <Box sx={styles.pillContainer}>
            {project.tech.map((tech, index) => (
              <Pill key={index} text={tech} />
            ))}
          </Box>
        )}
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
          {/* <Box sx={styles.iconButton}>
            <NotesIcon sx={styles.icon} />
          </Box> */}
        </Box>
      </Box>
    </Box>
  );
};

// TODO: dont use loose colors, get from theme
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    border: '2px solid transparent',
    borderRadius: 4,
    p: 3,
    // mb: 3,
    textAlign: 'left',
    transition: 'all 0.15s ease',
    maxWidth: 350,
    '&:hover': {
      borderColor: 'rgba(110, 80, 220, 0.5)',
      backgroundColor: 'rgba(110, 80, 220, 0.1)',
    },
  },
  image: {
    objectFit: 'cover',
    width: '100%',
    mb: 2,
    borderRadius: 2,
    // mr: 3,
    border: '2px solid rgba(110, 80, 220, 0.5)',
    aspectRatio: '4 / 3',
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    // alignItems: 'left',
    width: '100%',
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
    fontSize: 14,
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
    // alignItems: 'left',
    // mt: 2,
  },
  iconButton: {
    mt: 2,
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
