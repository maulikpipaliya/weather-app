import React, { FC, FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { getWeather } from "../store/actions/weatherActions";

interface SearchProps {
  title: string;
}

const Search: FC<SearchProps> = ({ title }) => {
  const [city, setCity] = useState("");
  const dispatch = useDispatch();

  const changeHandler = (e: FormEvent<HTMLInputElement>) => {
    setCity(e.currentTarget.value);
  };

  const submitHandler = (e: FormEvent<HTMLAnchorElement>) => {
    e.preventDefault();
      dispatch(getWeather(city))
      setCity('')
  };
  return (
    <>
      <section className='vh-100'>
        <div className='container py-5 h-100'>
          <div className='row d-flex justify-content-center align-items-center h-100'>
            <div className='col-md-8 col-lg-6 col-xl-4'>
              <h3 className='mb-4 pb-2 fw-normal'>
                Check the weather forecast
              </h3>

              <div className='input-group rounded mb-3'>
                <input
                  type='search'
                  className='form-control rounded'
                  placeholder='City'
                  aria-label='Search'
                  aria-describedby='search-addon'
                  onChange={changeHandler}
                />
                <a href='#!' type='button' onClick={submitHandler}>
                  <span
                    className='input-group-text border-0 fw-bold'
                    id='search-addon'
                  >
                    Check!
                  </span>
                </a>
              </div>

              

             
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Search;
