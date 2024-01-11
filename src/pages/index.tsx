import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const TasksListPage = lazy(() => import("./ui/postsListPage"));
const TaskDetailsPage = lazy(() => import("./ui/postDetailsPage"));

export const Routing = () => {
    return (
        <Routes>
            <Route path="/" element={<TasksListPage/>} />
            <Route path="/Details/:id" element={<TaskDetailsPage/>} />
        </Routes>
    );
};