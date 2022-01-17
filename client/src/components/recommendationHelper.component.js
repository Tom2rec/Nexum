import React, {Component} from "react";
import RecommendationService from "../services/recommendation.service";
import {useParams} from "react-router-dom";
import RecommendationComponent from "./recommendation.component";

const RecommendationHelperComponent = () => {
        const { id } = useParams();
        return (
            <RecommendationComponent id = {id}/>
        )
}

export default RecommendationHelperComponent;