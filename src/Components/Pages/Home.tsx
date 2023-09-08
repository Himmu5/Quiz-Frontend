import { FC } from 'react'
import { withUser } from '../Hoc/withUser'
import { Navigate } from 'react-router-dom'
import { User } from '../../Types/User'

type P = {
    user: User
}

const Home: FC<P> = ({ user }) => {
    if (!user) {
        return <Navigate to={"/Auth"} />
    }
    return <div>
        test
    </div>
}

export default withUser(Home);