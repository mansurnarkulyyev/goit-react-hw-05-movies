import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import s from '../src/shared/style.module.css';

const HomePage = lazy(() => import("./pages/HomePage"));
const MoviesPage = lazy(() => import("./pages/MoviesPage"));
const SingleMoviePage = lazy(() => import("./pages/SingleMoviePage"));
const ReviewsPage = lazy(() => import("./pages/ReviewsPage"));
const CastsPage = lazy(() => import("./pages/CastsPage"));
const DarkModePage = lazy(() => import("./pages/DarkModePage"));
const RegisterPage = lazy(() => import("./pages/DarkModePage/RegisterPage/RegisterPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

const UserRoutes = () => {
    return (
        <Suspense fallback={<p>...Loading page</p>}>
            <main className={s.main}>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/login" element={<DarkModePage />} />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/movies-search" element={<MoviesPage />} />
                    <Route path="/movies/:id" element={<SingleMoviePage />}>
                        <Route path="reviews" element={<ReviewsPage />} />
                        <Route path="cast" element={<CastsPage />} />
                    </Route>
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </main>
        </Suspense>
    )
}

export default UserRoutes;