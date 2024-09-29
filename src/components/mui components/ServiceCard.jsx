
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

// eslint-disable-next-line react/prop-types
const ServiceCard = ({ header, description, image }) => {

  console.log(header, description, "check")
  return (
    // <Card sx={{ maxWidth: 345 }} className='hover:shadow-2xl'>
    <Card sx={{ width: 345 }} className='hover:shadow-2xl hover:shadow-slate-700'>
      <CardMedia className='border-b-2 border-slate-200 '
        component="img"
        height="140"
        image={image}
        sx={{
          height: 200,  
          width: '100%',  
          objectFit: 'cover' 
        }}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" fontFamily="serif" component="div">
          {header}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default ServiceCard