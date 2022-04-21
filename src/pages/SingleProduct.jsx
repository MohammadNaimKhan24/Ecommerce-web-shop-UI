import { Add, Remove } from "@material-ui/icons";
import styledComponents from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import { mobile } from "../responsive";

// Single Product Design
const Container = styledComponents.div`
    
`;

const Wrapper = styledComponents.div`
    padding: 50px;
    display: flex;
    ${mobile({flexDirection: "column", padding: "10px"})};
`;

const ImageContainer = styledComponents.div`
    flex: 1;
    background-color: #fbf0f4;
`;

const Image = styledComponents.img`
    width: 90%;
    height: 90vh;
    object-fit: contain;
    padding: 10px;
    ${mobile({height: "40vh"})};
`;

const InfoContainer = styledComponents.div`
    flex: 1;
    padding: 0px 50px;
    margin-top: 20px;
    ${mobile({padding: "0px 10px"})};
`;

const Title = styledComponents.h2`
    font-weight: 400;
`;

const Desc = styledComponents.p`
    margin: 20px 0px;
`;

const Price = styledComponents.p`
    font-weight: 200;
    font-size: 40px;
`;

// Filter Functionality Design
const FilterContainer = styledComponents.div`
    display: flex;
    justify-content: space-between;
    width: 50%;
    margin: 30px 0px;
    ${mobile({width: "100%"})};
`;

const Filter = styledComponents.div`
    display: flex;
    align-items: center;
`;

const FilterTitle = styledComponents.span`
    font-size: 20px;
    font-weight: 400;
`;

const FilterColor = styledComponents.span`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props=> props.color};
    margin: 0px 5px;
    cursor: pointer;
`;

const FilterSize = styledComponents.select`
  padding: 5px;
  margin-left: 10px;
`;

const FilterSizeOption = styledComponents.option`
`;

// Amount setup designe
const AddContainer = styledComponents.div`
    display: flex;
    align-items: center;
    width: 50%;
    justify-content: space-between;
    ${mobile({width: "100%"})};
`;

const AmountContainer = styledComponents.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`;

const Amount = styledComponents.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`;

const Button = styledComponents.button`
    padding: 15px;
    border: 2px solid teal;
    background-color: white;
    cursor: pointer;
    font-weight: 500;

    &:hover {
        background-color: teal;
        color: white;
    }

    ${mobile({ })};
`;

const SingleProduct = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImageContainer>
          <Image src="https://d3o2e4jr3mxnm3.cloudfront.net/Mens-Jake-Guitar-Vintage-Crusher-Tee_68382_1_lg.png" />
        </ImageContainer>
        <InfoContainer>
          <Title>Cool T-shirt</Title>
          <Desc>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab
            veritatis nulla ipsa iusto, nobis adipisci natus, dolores molestias
            suscipit, voluptates veniam cum ad. In laboriosam cum qui quisquam
            perspiciatis deleniti voluptas numquam commodi recusandae. Facilis
            dolorem amet qui perspiciatis quod nisi similique neque culpa. Animi
            repellat a perferendis architecto necessitatibus.
          </Desc>
          <Price>$ 20</Price>

            <FilterContainer>
                <Filter>
                    <FilterTitle>Color</FilterTitle>
                    <FilterColor  color="black"/>
                    <FilterColor  color="darkblue"/>
                    <FilterColor  color="gray"/>
                </Filter>
                <Filter>
                    <FilterTitle >Size</FilterTitle>
                    <FilterSize>
                        <FilterSizeOption>XS</FilterSizeOption>
                        <FilterSizeOption>S</FilterSizeOption>
                        <FilterSizeOption>M</FilterSizeOption>
                        <FilterSizeOption>L</FilterSizeOption>
                        <FilterSizeOption>XL</FilterSizeOption>
                    </FilterSize>
                </Filter>
            </FilterContainer>
            <AddContainer>
                <AmountContainer>
                    <Remove />
                    <Amount>1 </Amount>
                    <Add />
                </AmountContainer>
                <Button>ADD TO CART</Button>
            </AddContainer>

        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default SingleProduct;
