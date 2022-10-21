import StarRatings from "react-star-ratings/build/star-ratings";
import { useEffect, useState} from "react";

const StarRating = ({rating = 0, starDimension, starSpacing}) => {
    const [stateRating, setstateRating] = useState(0);

    useEffect(() => {
        setstateRating(rating);
    }, [])

       const changeRating = (newRating, name) => {
           setstateRating(newRating)
        }

            // rating = 2;
            return (
                <StarRatings
                    rating={stateRating}
                    starRatedColor="blue"
                    changeRating={changeRating}
                    numberOfStars={10}
                    name='rating'
                />
            )
}
export { StarRating }