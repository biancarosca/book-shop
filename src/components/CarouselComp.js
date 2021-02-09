
import styled from 'styled-components';
import Carousel from 'react-elastic-carousel';
import { useSelector } from 'react-redux';

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 850, itemsToShow: 3 },
    { width: 1150, itemsToShow: 4},
    { width: 1450, itemsToShow: 5 },
    { width: 1750, itemsToShow: 6 },
  ]

const CarouselComp = () => {
    const allCategoriesObj = useSelector(store =>  store.booksReducer );
    const allCategories = Object.keys(allCategoriesObj);

    return(
        <StyWrapper>
            <StyCarousel breakPoints={breakPoints} itemsToShow={4} pagination={false}>
                {allCategories && allCategories.map((category,idx) => 
                    <StyCategory key={idx}>{category}</StyCategory>
                )}
            </StyCarousel>
        </StyWrapper>
    );
}

const StyWrapper = styled.div`
    width: 100%;
    margin: 1rem;
    margin-top: 1.5rem;
    height: fit-content;
    display: flex;
    justify-content: center;
`

const StyCarousel = styled(Carousel)`
  .rec-arrow{
      &:hover,&:focus{
          background-color: #18D47C;
          color: white;
      }
      size: smaller;
      font-size: 0.8rem;
      width: 30px;
      min-width: 30px;
      height: 30px;
      line-height: 0;
  }
`

const StyCategory = styled.span`
    height: 25px;
    width: 130px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    background-color: #8dd6b1;
    border-radius: 1rem;
    &:hover{
        background-color:#18D47C;
    }
`

export default CarouselComp;