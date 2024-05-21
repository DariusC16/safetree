// Use Material UI to style it like CSS
// Import makeStyles function from Material-UI
import { makeStyles } from '@material-ui/core/styles'; 

const useStyles = makeStyles((theme) => ({
    calendar: {
      fontFamily: 'Arial, sans-serif',
      border: '1px solid #ccc',
      borderRadius: '5px',
      padding: '20px',
      backgroundColor: '#fff',
    },
    month: {
      textAlign: 'center',
      fontSize: '1.5rem',
      fontWeight: 'bold',
      marginBottom: '10px',
    },
    day: {
      width: '40px',
      height: '40px',
      textAlign: 'center',
      lineHeight: '40px',
      border: '1px solid #ccc',
      borderRadius: '50%',
      cursor: 'pointer',
      '&.other-month': {
        color: '#ccc',
      },
      '&.today': {
        backgroundColor: '#f0f0f0',
      },
    },
    // Add more styles as needed
  }));
  
  export default useStyles;