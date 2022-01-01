export class NoteFilter extends React.Component {

  state = {
    filterBy: {
      searchValue: '',
      searchType: 'all',
    },
  };

  handleChange = ({ target }) => {
    const field = target.name;
    const value = (target.type === 'number') ? +target.value : target.value;
    this.setState(
      (prevState) => ({ filterBy: { ...prevState.filterBy, [field]: value } }), () => {
        this.props.onSetFilter(this.state.filterBy)
      });
  }
  onSubmitFilter = (ev) => {
    ev.preventDefault();
    this.props.onSetFilter(this.state.filterBy);
    this.cleanFrom();
  }

  cleanFrom = () => {
    this.setState({ filterBy: { searchValue: '', searchType: '' } })
  }

  render() {
    const { filterBy: { searchValue, searchType } } = this.state

    return (
      <div className="notes-filter-container">
        <form className="note-filter-form" onSubmit={this.onSubmitFilter}>
          <input
            className="note-filter-input"
            placeholder="Search A Note:"
            type="text"
            id="note-search"
            name="searchValue"
            value={searchValue}
            onChange={this.handleChange}
          />
          <select
            className="note-filter-select"
            name="searchType"
            id="noteType"
            onChange={this.handleChange}
            value={searchType}>
            <option value="all">All Notes</option>
            <option value="note-txt">Text Notes</option>
            <option value="note-todos">Todo Notes</option>
            <option value="note-video">Video Notes</option>
            <option value="note-img">Image Notes</option>
          </select>
        </form>
      </div>
    );
  }
}