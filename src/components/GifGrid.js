import React, { useState, useEffect } from 'react'
import { GifGridItem } from './GifGridItem'
import { useFetchgifs } from '../hooks/useFetchgifs'
//import { getGifs } from '../helpers/getGifs'

export const GifGrid = ({category}) => {

    const {data, loading} = useFetchgifs(category);

    return (
        <>
           
            <h3 className="animate__animated animate__fadeIn">{category}</h3>
            {loading && <p className="animate__animated animate__flash">Loading</p>}
            {<div className="card-grid">
                {
                    data.map( img => (
                        <GifGridItem key={img.id} {...img}/>
                    ))
                }
            </div>}
        </>
    )
}
