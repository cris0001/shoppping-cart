import styled from 'styled-components'
import Button from '@material-ui/core/Button'
import { CartItemType } from './App'

type Props = {
  item: CartItemType
  handleAddToCart: (clickedItem: CartItemType) => void
}

const Item: React.FC<Props> = ({ item, handleAddToCart }) => {
  return (
    <Wrapper>
      <img src={item.image} alt='B)' />
      <div className='item'>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <h3>${item.price} </h3>
      </div>
      <Button onClick={() => handleAddToCart(item)}>add to cart</Button>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  height: 100%;
  border: 1px solid black;
  border-radius: 2em;
  padding: 0.5em;

  button {
    width: 100%;
    border-radius: 2em;
  }
  img {
    height: 277px;
    object-fit: cover;
    border-radius: 2em;
  }
  .item {
    height: 100%;
  }
`

export default Item
