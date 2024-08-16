import {Route , Routes, BrowserRouter as Router} from 'react-router-dom'
import HomePage from '../Pages/HomePage/HomePage'
import CollectionPage from '../Pages/Collection/CollectionPage'
import Account from '../Pages/Account/Account'
import Product from '../Pages/Product/Product'
import Profile from '../Pages/Profile/Profile'

export const publicRoutes = [
    {path: "/", component: HomePage},
    {path: "/collections", component: CollectionPage},
    {path: "/account", component: Account},
    {path: "/product/:id", component: Product},
    {path: "/profile/:id", component: Profile},
]
