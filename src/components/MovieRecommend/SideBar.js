import React from 'react'
import styles from './SideBar.module.css'

const SideBar = () => 
{
    const genres = ['Action', 'Adventure', 'Animation', 'Children', 'Comedy', 'Crime', 'Documentary', 'Drama', 'Fantasy', 'Film-Noir',
                    'Horror', 'IMAX', 'Musical', 'Mystery', 'Romance', 'Sci-Fi', 'Thriller', 'War', 'Western', 'other']

    return (
        <>
            <div className = { styles.sideBar }>
                {
                    genres.map((genre, index) => 
                    {
                        return (
                            <span className = { styles.genreTag } key = { index }>
                                { genre }
                            </span> 
                        )
                    })

                }
            </div>
        </>
    )
}

export default SideBar