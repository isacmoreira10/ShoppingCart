import { Routes, Route } from 'react-router-dom'
import { Menu } from './pages/menu'
import { FinalizeCompare } from './pages/FinalazeCompare'
import { DefaultLayout } from './layouts/DefaultLayout'
import { CompareComplete } from './pages/CompareComplete'

export function Router() {
    return (
        <Routes>
            <Route path='/' element={<DefaultLayout></DefaultLayout>}>
                <Route path='/' element={<Menu></Menu>}></Route>
                <Route path='/FinalizeCompare' element={<FinalizeCompare></FinalizeCompare>}></Route>
                <Route path='/compareComplete' element={<CompareComplete></CompareComplete>}></Route>
            </Route>
        </Routes>
    )

}