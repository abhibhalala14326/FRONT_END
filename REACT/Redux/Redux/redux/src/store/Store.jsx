import {createStore} from 'redux'
import { BuyReducer } from '../reducer/buyReducer'


export const Store = createStore(BuyReducer);