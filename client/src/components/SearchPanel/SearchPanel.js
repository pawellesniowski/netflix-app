import React from 'react';
import {Field, reduxForm} from 'redux-form';
import Button from "../ui-elements/Button/Button";
import './SearchPanel.scss';
import {connect} from 'react-redux';
import { loadInitial } from './searchPanelLoadInitial';
const data = {searchBy: 'title'};

export class SearchPanel extends React.Component {

    componentDidMount() {
        this.props.loadInitial(data);
    }

    render() {
        const { handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit} className="search-panel" data-cy="search-panel">
                <label htmlFor="titleInput" data-cy="search-input">
                    <span className="label-text">Find Your Movie</span>
                    <Field
                        name="searchTerm"
                        component="input" type="text"
                        className="input"
                        placeholder="Find Your Movie"
                        autoComplete="off"
                    />
                </label>
                <div className="search-option-container" data-cy="search-option-container">
                    <span className="search-option-text">Search by</span>

                    <div className="search-radio-buttons">
                        <label><Field name="searchBy" component="input" type="radio" value="title"/><span>Title</span></label>
                        <label><Field name="searchBy" component="input" type="radio" value="genre"/><span>Genre</span></label>
                    </div>
                    <Button type="submit" message="search" mode="submit"/>
                </div>
            </form>
        );
    }
}

SearchPanel = reduxForm({
    form: 'searchForm'
})(SearchPanel);

SearchPanel = connect(
    state => ({
        initialValues: state.formInitial.data,
        searchForm: state.form.searchForm,
    }),
    {loadInitial},
)(SearchPanel);

export default SearchPanel;
