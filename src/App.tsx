import { Grid } from '@mui/material'
import { Route, Routes } from 'react-router-dom'
import AuthLayout from './_authentification/AuthLayout'
import SigninForm from './_authentification/forms/SigninForm'
import SignupForm from './_authentification/forms/SignupForm'
import RootLayout from './_root/RootLayout'
import { Home } from './_root/pages'
import Clothes_form from './_root/pages/Clothes_form'
import './globalstyle.css'
import NotFound from './components/NotFound'

const App = () => {


  return (
    <>
    <Grid >
        <Routes>

            {/*public routes*/}
            <Route element={<AuthLayout />}>
                <Route path='sign-in' element={<SigninForm />}></Route>
                <Route path='sign-up' element={<SignupForm />}></Route>
            </Route>
            {/*private routes*/} 
            <Route element={ <RootLayout />}>
                <Route path='/' element={ <Home />}></Route>
                <Route path='/add_clothes' element={ <Clothes_form />}></Route>
            </Route>
            <Route path="*" element={<NotFound />} />
        </Routes>
    </Grid>
    </>
  )
}

export default App
