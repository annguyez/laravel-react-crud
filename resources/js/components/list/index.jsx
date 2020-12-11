import React from 'react'
import PropTypes from 'prop-types'



ListStudent2.propTypes = {
    st: PropTypes.array,
}

ListStudent2.defaultProps = {
    st: [],
}

const ListStudent2 = props => {
    const {st} = props;
    return (
        <ListGroup>
            {st.map(post=> (
                <ListGroupItem key={st.id}>{st.name}</ListGroupItem>
                )
            )}
        </ListGroup>
    )
}


export default ListStudent2
