import Home from "../Pages/Home"
import KnowMe from "../Pages/Knowme"

const publicRoutes = [
    {path: '/', component: Home },
    {path: '/knowMe/*', component: KnowMe},
]

export {publicRoutes}