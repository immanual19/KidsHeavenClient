import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });
  
const OutletCard = (props) => {
  const {name,location,imageURL}=props.branch;
    const classes = useStyles();
    return (
        <div className="my-2">
        <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={imageURL}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Name: {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Location: {location}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={{justifyContent: 'center'}}>
      <Button variant="contained" color="secondary">Explore Now</Button>
      </CardActions>
    </Card>
        </div>
    );
};

export default OutletCard;