import { useParams, Navigate, useNavigate } from "react-router-dom"
import { useMemo } from 'react';
import { getHeroById } from '../../helpers/getHeroById';


export const HeroScreen = () => {

    const { heroId } = useParams();
    const navigate = useNavigate();
    const hero =  useMemo( () => getHeroById(heroId), [heroId]); 

    const handleReturn = () => {
        navigate(-1);
    }
    
    if (!hero) {
        return <Navigate to='/'/>;
    }

    const {
        id,
        superhero, 
        publisher, 
        alter_ego,
        first_appearance,
        characters
    } = hero;

    const imgPath = `../../assets/${id}.jpg`;

    return (
        <div className="row mt-5  animate__animated animate__animated animate__fadeInLeft">
            <div className="col-4">
                <img 
                    src={imgPath}
                    alt={superhero} 
                    className="img-thumbnail" 
                />
            </div>
            <div className="col-8">
                <h3>{superhero}</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"> <b>Alter ego:</b>  {alter_ego}  </li>
                    <li className="list-group-item"> <b>Publisher:</b>  {publisher}  </li>
                    <li className="list-group-item"> <b>First Appearence:</b>  {first_appearance}  </li>
                </ul>

                <h5 className="mt-3">Characters</h5>
                <p>{characters}</p>

                <button
                    className="btn btn-outline-success mt-3"
                    onClick={handleReturn}
                >
                    Return
                </button>
            </div>
        </div>
    )
}
