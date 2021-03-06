import React from 'react';
import styled from 'styled-components';
import Rating from '@material-ui/lab/Rating';
import { withStyles } from '@material-ui/core/styles';

const RatingComponent = ({id,rating}) => {
    return(
        <StyledRevsBox id={id}>
            <StyledRating id={id} name="read-only" value={rating && rating.average} precision={0.1} readOnly />
            <span id={id} className="numRev">{rating && rating.average} ({rating && rating.numberOfRatings})</span>
        </StyledRevsBox>
    );
}

const StyledRevsBox = styled.div`
    display: flex;
    align-items: center;
    .numRev{
        font-size: 0.9rem;
    }
    z-index: -1;
    
`

const StyledRating = withStyles({
    iconFilled: {
      color: '#18D47C',
    },
  })(Rating);


export default RatingComponent;