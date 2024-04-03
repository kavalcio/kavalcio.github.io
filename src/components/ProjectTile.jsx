import { Box, Link, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';

import { Pill } from '@/components';

const ProjectTile = ({ project }) => {
  return (
    <Box sx={styles.container}>
      <Link
        sx={[
          styles.image,
          { background: `url(${project.img}) center / cover no-repeat` },
        ]}
        href={project.playUrl}
        target="_blank"
        rel="noreferrer"
      >
        {project.playUrl && (
          <Box sx={styles.imageHoverOverlay}>
            <PlayArrowRoundedIcon
              sx={{
                fontSize: 70,
                color: 'white',
                m: 'auto',
              }}
            />
          </Box>
        )}
      </Link>
      <Box sx={styles.textContainer}>
        <Link
          sx={[styles.title, project.playUrl && styles.titleInteractive]}
          href={project.playUrl}
          target="_blank"
          rel="noreferrer"
          underline="none"
        >
          {project.title}
        </Link>
        <Typography sx={styles.hook}>{project.hook}</Typography>
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
        </Box>
      </Box>
    </Box>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    border: '2px solid transparent',
    borderRadius: 4,
    p: 3,
    textAlign: 'left',
    transition: 'all 0.15s ease',
    maxWidth: 350,
    '&:hover': {
      borderColor: 'purpleBorder',
      backgroundColor: 'purpleTransparent',
    },
  },
  image: {
    width: '100%',
    borderRadius: 2,
    border: (theme) => `2px solid ${theme.palette.purpleBorder}`,
    aspectRatio: '4 / 3',
    transition: 'all 0.15s ease',
    overflow: 'hidden',
  },
  imageHoverOverlay: {
    transition: 'all 0.15s ease',
    background: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    height: '100%',
    width: '100%',
    opacity: 0,
    '&:hover': {
      opacity: 1,
    },
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    mt: 2,
  },
  title: {
    width: 'fit-content',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'textPrimary',
    transition: 'all 0.15s ease',
  },
  titleInteractive: {
    '&:hover': {
      color: 'purple2',
    },
  },
  hook: {
    fontSize: 14,
    color: 'textSecondary',
    mb: 'auto',
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
  },
  iconButton: {
    mt: 2,
    mr: 1,
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
