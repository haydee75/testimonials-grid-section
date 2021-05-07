import React from "react"
import PropTypes from "prop-types"

function TestimonialCard(props) {
    const styles = {
        backgroundColor: props.cardColor
    }

    return (
        <div className={`Card Card-${props.index + 1}`} style={styles}>
            <div className="PersonalInfo">
                <span className="photo-circle"><img src={props.img} alt={`${props.name}-picture`} /></span>
                <div className="info">
                    <h2>{props.firstname} {props.name}</h2>
                    <span>{props.status}</span>
                </div>
            </div>
            <p className="TextImportant">{props.quote}</p>
            <p>“ {props.resume} ”</p>
        </div>
    )
}

TestimonialCard.propTypes = {
    src: PropTypes.string.isRequired,
    firstname: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    status: PropTypes.string,
    resume: PropTypes.string.isRequired,
    quote: PropTypes.string.isRequired
}

export default TestimonialCard