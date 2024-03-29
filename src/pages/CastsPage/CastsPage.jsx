import { useState, useEffect } from "react";
import { TailSpin } from "react-loader-spinner";
import { useParams } from "react-router-dom";
import { getMovieCreditsById } from "../../shared/Api-services/movies";

import st from "./castsPage.module.css";
const CastsPage = () => {
  const [state, setState] = useState({
    items: [],
    error: null,
    loading: false,
  });
  const { id: StrId } = useParams();
  const id = Number(StrId);

  useEffect(() => {
    const fetchCastsById = async () => {
      setState((prevState) => {
        return { ...prevState, loading: true, error: false };
      });
      try {
        const { cast } = await getMovieCreditsById(id);

        const dataCast = cast.length > 11 ? cast.slice(0, 10) : cast;

        setState((prevState) => {
          return { ...prevState, loading: false, items: dataCast };
        });
      } catch (error) {
        setState((prevState) => {
          return { ...prevState, loading: false, error };
        });
      }
    };
    if (id) {
      fetchCastsById();
    }
  }, [id]);

  const { items, error, loading } = state;

  const elements = items.map((el) => {
    const { id, name, profile_path, character } = el;
    const profileImg = profile_path
      ? profile_path
      : "/xcaHWHQZsqxFDig9Qw6CYRVXtW2.jpg";

    return (
      <li key={id} className={st.item}>
        <img
          className={st.icon}
          src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${profileImg}`}
          alt={name}
          width="100"
          height="150"
        />
        <p className={st.nameReal}>{name}</p>
        <p className={st.name}>{character}</p>{" "}
      </li>
    );
  });

  return (
    <div>
      <h3>Cast</h3>
      {error && (
        <p className={st.error}>We are sorry, a server error occurred</p>
      )}
      {loading && <p className={st.error}><TailSpin /></p>}
      {elements.length > 0 && <ul className={st.list}>{elements}</ul>}
    </div>
  );
};

export default CastsPage;
