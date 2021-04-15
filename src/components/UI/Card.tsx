import {ReactNode}from 'react'
import classes from './Card.module.css'

type Props = {
    children: ReactNode
}

const Card = ({children}: Props) => {
    return (
        <div className={classes.card}>
            {children}
        </div>
    )
}

export default Card
