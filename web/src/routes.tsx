import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from './pages/landing';
import Teachers from './pages/teachers';
import TeacherForm from './pages/teacherForm';

function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Landing} />
            <Route path="/study" component={Teachers} />
            <Route path="/teach" component={TeacherForm} />
        </BrowserRouter>
    )
}


export default Routes;