import React, { useState } from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import '../index.css';

const Mealinfo = () => {
    const { mealId } = useParams()
    const navigate = useNavigate();
    const [info, setInfo] = useState();

    const handleGoBack = () => {
        navigate(-1); 
    };

    const getInfo = async () => {
        const get = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
        const jsonData = await get.json();
        console.log(jsonData.meals[0]);
        setInfo(jsonData.meals[0])

    }
    if (info != "") {
        getInfo();
    }

    return (
        <div>
            {
                !info ? "Data Not Found" :
                    <div className='mealInfo'>
                        <img src={info.strMealThumb}/>
                        <div className='info'>
                            <h1>Recipe Detail</h1>
                            <button>{info.strMeal}</button>
                            <h3>Instruction's</h3>
                            <p>{info.strInstructions}</p>
                            <button onClick={handleGoBack}>Go back</button>
                        </div>

                    </div>
            }
        </div>
    )
}

export default Mealinfo

