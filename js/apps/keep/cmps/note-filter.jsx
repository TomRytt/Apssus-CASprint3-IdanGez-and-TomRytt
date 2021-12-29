export class NoteFilter extends React.Component {

    state = {
        filterBy: {
            search: '',
            type: '',
        },
    };

    onSubmitFilter = (ev) => {
        ev.preventDefault();
        this.props.onSetFilter(this.state.filterBy);
        this.cleanFrom();
    }

    handleChange = ({ target }) => {
        const field = target.name;
        const value = (target.type === 'number') ? +target.value : target.value;
        this.setState((prevState) => ({ filterBy: { ...prevState.filterBy, [field]: value } }), () => {
            this.props.onSetFilter(this.state.filterBy)
        });
    }

    cleanFrom= () => {
        this.setState({ filterBy: {search: '', type: ''}})
    }

    render() {
        const { filterBy: {search, type} } = this.state

        return (
            <form className="note-filter" onSubmit={this.onSubmitFilter}>
            <label htmlFor="by-search">By Title:</label>
            <input
              type="text"
              id="by-title"
              name="title"
              value={title}
              onChange={this.handleChange}
            />
            <label htmlFor="by-min-price">Min price:</label>
            <input
              type="number"
              id="by-min-price"
              name="minPrice"
              value={minPrice}
              min="0"
              onChange={this.handleChange}
            />
            <label htmlFor="by-max-price">Max price:</label>
            <input
              type="number"
              id="by-max-price"
              name="maxPrice"
              value={maxPrice}
              min="0"
              onChange={this.handleChange}
            />
            <button>Filter</button>
          </form>
        );
      }
}