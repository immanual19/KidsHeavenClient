import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './BasicServiceCard.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });
const BasicServiceCard = (props) => {
    const classes = useStyles();
    const {imageURL,name,price,validity,_id}=props.service;
    return (
        <div className="my-2 basic-service-card">
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
             Price: ${price}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Validity: {validity}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions style={{justifyContent: 'center'}}>
        <Link to={`/manage/${_id}`}><Button variant="contained" color="secondary">Buy Now</Button></Link>
        </CardActions>
      </Card>
        </div>
    );
};

export default BasicServiceCard;