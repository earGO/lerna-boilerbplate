import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { DynamicModuleLoader } from 'redux-dynamic-modules'

import NorrisDuck, { selectors as norrisSelectors, actions as norrisActions } from './norris-duck'
import Loading from '../common/Loading'
import List from './List'

function NorrisJoke({ loading }) {

    return (
        <DynamicModuleLoader modules={[NorrisDuck]}>
            {loading && <Loading overlay>Loading funniest jokes...</Loading>}
            <List />
        </DynamicModuleLoader>
    )
}

NorrisJoke.propTypes = {
    loading: PropTypes.bool,
}

NorrisJoke.defaultProps = {
    loading: false,
}

export default connect(
    state => ({
        loading: norrisSelectors.loading(state),
    }),
)(NorrisJoke)
