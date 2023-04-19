import { Html } from '@react-three/drei'
import styles from './Genre.module.css'

const Genre = () => 
{
    const genres = 
    [
        'Action', 'Adventure', 'Animation', 'Children', 'Comedy', 'Crime', 'Documentary', 'Drama', 'Fantasy', 'Film-Noir',
        'Horror', 'IMAX', 'Musical', 'Mystery', 'Romance', 'Sci-Fi', 'Thriller', 'War'
    ]

    return (
        <Html transform>
            <div className = { styles.genre }>
                <ul className = { styles.genres }>
                    {
                        genres.map((genre, index) => 
                        {
                            return (
                                <li className = { styles.genreTag } key = { index }>
                                    <span className = { styles.genreTitle }>{ genre }</span>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </Html>
    )
}

export default Genre