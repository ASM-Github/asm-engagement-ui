import React from 'react';
import useFetch from '../../../../hooks/useFetch';
import CountUp from 'react-countup';
import { Spinner } from 'react-bootstrap';

function Card(props) {

    const { data, loading, error } = useFetch(`http://localhost:8080/api/`
        + props.subURL + `/count`);
    if (loading) return <Spinner />
    if (error) return <p>Error boss</p>
    return (
        <>
            <div className="col-sm-3">
                <div className="card border-0">
                    <div className="card-body cs-gradient">
                        <div className="cs-warp-content text-center">
                            <i
                                className={"bx-border-circle "
                                    + props.icon
                                    + " mb-4 "
                                    + props.class}>
                            </i>
                            <h2 className="cs-count fw-bold">
                                <CountUp end={data} duration={5} />
                            </h2>
                            <h5 className="mt-3 fw-bolder text-capitalize">
                                {props.title}
                            </h5>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;