import React, { useMemo } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { useForm } from '../../hooks/useForm'
// Helpers
import { getHeroByName } from '../../helpers/getHeroeByName';
// Components
import { HeroCard } from '../hero/HeroCard';

export const SearchScreen = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const { q = ''} = queryString.parse(location.search);
    
    const [formValues, handleInputChange] = useForm({
        searchText:q
    });

    const { searchText } = formValues;
    const heroFiltered = useMemo( () => (getHeroByName(q)), [q]);

    const handleSearch = (e) => {
        e.preventDefault();
        navigate(`?q=${searchText}`);
    }

    return (
        <>
            <h1>Search Screen</h1>
            <hr></hr>

            <div className="row">
                <div className="col-5">
                    <h4>Search</h4>
                    <hr></hr>
                    
                    <form onSubmit={handleSearch}>
                        <input
                            type="text"
                            placeholder="Search an Hero"
                            className="form-control"
                            name="searchText"
                            autoComplete="off"
                            value= { searchText }
                            onChange={handleInputChange}
                        >
                        </input>

                        <button type="submit" className="btn btn-primary mt-3 col-12"> Search...</button>
                    </form>

                </div>

                <div className="col-7">
                    <h4>Results</h4>
                    <hr></hr>

                    {
                        (q === '')
                        ?  <div className="alert alert-warning animate__animated animate__bounce">Please search some</div>   
                        : (heroFiltered.length === 0) && 
                        <div className="alert alert-danger animate__animated animate__bounce">
                            No heros with this filter with: {q}
                        </div>
                    }

                    { heroFiltered.map ( (hero) => (
                       <HeroCard 
                            key={hero.id}
                            {...hero} />
                        ))    
                    }
                </div>
            </div>
        </>
    )
}
