import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import Menu from '../components/Menu.js';

const mapStateToProps = state => ({
    menu: state
})

const mapDispatchToProps = (dispatch) => ({
    menu_request: () => { dispatch({ type: 'MENU_REQUEST' }) },
})

export default connect(mapStateToProps, mapDispatchToProps)(Menu)