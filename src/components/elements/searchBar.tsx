import { useState } from 'react';
import { MdGpsFixed } from 'react-icons/md';
import { BiSearch } from 'react-icons/bi';

interface Props {
    findCoordinates(): void,
    searchCallback(term: string): void,
    error: boolean,
}

function SearchBar({ findCoordinates, searchCallback, error }: Props) {
    const [searchTerm, setSearchTerm] = useState('');

    const doChangeInput = (e) => {
        const { value } = e.target;
        setSearchTerm(value);
    };

    const doSearch = () => {
        searchCallback(searchTerm);
        setSearchTerm('');
    };

    return (
        <div className="search_bar">
            <div className="search_content">
                <div className="search-color">
                    <BiSearch />
                </div>
                <div className="search__box">
                    <input
                      type="text"
                      placeholder="Search for places..."
                      onChange={doChangeInput}
                      onKeyDown={(e) => e.key === 'Enter' && doSearch()}
                      value={searchTerm}
                    />
                </div>
                <div className="gray-border">
                    <button type="button" onMouseDown={findCoordinates}>
                        <MdGpsFixed />
                    </button>
                </div>
            </div>
            {error && <div className="error">Place not found. Try another!</div>}
        </div>
    );
}
export default SearchBar;
