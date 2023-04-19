import styles from './LikeCard.module.css'
import StateHandler from '@/utils/Statehandler.js'

const LikeCard = (props) => 
{
    const deleteUserLikes = StateHandler((state) => { return state.deleteUserLikes })
    
    return (
        <>
            <button className = { styles.container }>
                <span className = { styles.title }>{ props.title.length >= 25 ? props.title.substr(0, 25) + '…' : props.title }</span>
                <button className = { styles.delete } onClick = { () => { deleteUserLikes(props.title, props.index) } }>
                    <span className = { styles.deleteIcon }>x</span>
                </button>
            </button>
        </>
    )
}

export default LikeCard