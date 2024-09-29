import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

// eslint-disable-next-line react/prop-types
const QuoteCard = ({ quote }) => {
    return (
        <div>
            <Card>
                <CardContent>
                    <Typography variant="body2" component="article" sx={{ fontSize: 15, color: '#688', lineHeight: 1.6, fontFamily:'monospace' }}>
                        {quote}
                    </Typography>
                    <h4 className='flex justify-end font-bold'>- ROSHIN K (CEO,PRIMACTIVE)</h4>
                </CardContent>
            </Card>
        </div>
    )
}

export default QuoteCard