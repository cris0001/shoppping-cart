import styled from 'styled-components'
import Button from '@material-ui/core/Button'
import { CartItemType } from './App'

type Props = {
  item: CartItemType
  addToCart: (clickedItem: CartItemType) => void
  removeItem: (id: number) => void
}

const CartItem: React.FC<Props> = ({ item, addToCart, removeItem }) => {
  return (
    <Wrapper>
      <div>
        <h3>{item.title}</h3>
        <div className='info'>
          <p>price: $ {item.price}</p>
          <p>total: $ {(item.price * item.amount).toFixed(2)}</p>
        </div>
        <div className='buttons'>
          <Button
            size='small'
            variant='contained'
            onClick={() => removeItem(item.id)}
          >
            -
          </Button>
          <p>{item.amount}</p>
          <Button
            size='small'
            variant='contained'
            onClick={() => addToCart(item)}
          >
            +
          </Button>
        </div>
      </div>
      <img src={item.image} alt='zzz' />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 3em 0;
  div {
    flex: 1;
  }

  .info,
  .buttons {
    display: flex;
    justify-content: space-between;
  }

  img {
    max-width: 100px;
    object-fit: cover;
    margin-left: 2em;
  }
  p {
    text-align: center;
  }
`

export default CartItem
