import React from 'react';
import propTypes from 'prop-types';
import moment from 'moment';
import {
  Card, CardContent, CardMedia, Typography, CardActions, Button
} from '@material-ui/core';
import {
  Favorite
} from '@material-ui/icons';

export default function PhotoCard({
  imageUrl,
  liked,
  dateCaptured,
  title,
  toggleAction
}) {
  return (
    <Card className="photo-card">
      <CardMedia component="img" image={imageUrl} title={title} />
      <CardContent className="photo-card__content">
        <Typography variant="body2" color="textSecondary" component="p" className="b photo-card__content__title">
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {moment(dateCaptured).format('YYYY-MM-DD')}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Button onClick={toggleAction} variant="outlined" className="photo-card__like-button">
          { liked ? <Favorite style={{ color: '#FF0000' }} /> : 'Like' }
        </Button>
      </CardActions>
    </Card>
  );
}

PhotoCard.propTypes = {
  imageUrl: propTypes.string.isRequired,
  liked: propTypes.bool.isRequired,
  dateCaptured: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  toggleAction: propTypes.func.isRequired
};
