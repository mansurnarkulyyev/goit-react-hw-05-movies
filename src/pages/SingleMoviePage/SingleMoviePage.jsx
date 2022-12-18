import {
  useParams,
  useNavigate,
  useLocation,
  Outlet,
  NavLink,
} from "react-router-dom";
import { useEffect, useState } from "react";

import MovieCard from "../../components/MovieCard/MoviesCard";

import { getMovieById } from "../../shared/Api-services/movies";

import st from "./singlePage.module.css";
import Button from "shared/Button/Button";
import { TailSpin } from "react-loader-spinner";

const SingleMoviePage = () => {
  const { id: StrId } = useParams();
  const id = Number(StrId);

  const [state, setState] = useState({
    item: {},
    error: null,
    loading: false,
  });

  useEffect(() => {
    const fetchMovie = async () => {
      setState((prevState) => {
        return { ...prevState, loading: true, error: false };
      });
      try {
        const data = await getMovieById(id);

        setState((prevState) => {
          return { ...prevState, loading: false, item: { ...data } };
        });
      } catch (error) {
        setState((prevState) => {
          return { ...prevState, loading: false, error };
        });
      }
    };
    if (id) {
      fetchMovie();
    }
  }, [id]);

  const navigate = useNavigate();
  const location = useLocation();
  const prevPageLocation = location.state?.from || "/";

  const goBack = () => navigate(prevPageLocation);

  const { item, error, loading } = state;

  return (
    <div className={st.wrapper}>
      <Button type="button" onClick={goBack} text="Go Back" />

      {error && (
        <p className={st.error}>We are sorry, a server error occurred</p>
      )}
      {loading && <p className={st.error}><TailSpin /></p>}
      {item?.id && <MovieCard item={item} />}
      <div className={st.linkWrapper}>
        <NavLink
          className={({ isActive }) =>
            isActive ? `${st.activeLink}` : `${st.link}`
          }
          to={`/movies/${id}/reviews`}
        >
          Reviews
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? `${st.activeLink}` : `${st.link}`
          }
          to={`/movies/${id}/cast`}
        >
          Cast
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
};

export default SingleMoviePage;
