/**
 * @file SearchBar.jsx
 * @description
 *   This component provides a search bar for users to search videos by title.
 *   It uses React hooks for local state management and Redux for global state.
 *   The component dispatches a search action to fetch videos matching the input query,
 *   and displays loading, error, and search result states accordingly.
 *
 * @component
 * @example
 *   <SearchBar />
 *
 * @dependencies
 *   - React: For component and state management.
 *   - react-redux: For accessing Redux store and dispatching actions.
 *   - searchVideos (Redux thunk): Action to fetch videos based on search query.
 *
 * @state
 *   - input: Local state for the search input value.
 *   - searchResults: List of videos matching the search query from Redux store.
 *   - searchLoading: Boolean indicating if the search is in progress.
 *   - searchError: Error message if the search fails.
 *
 * @functions
 *   - handleSearch: Handles form submission, dispatches search action if input is not empty.
 *
 * @returns {JSX.Element} The rendered search bar, loading/error messages, and search results.
 */
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchVideos } from "../features/videos/videoSlice";

const SearchBar = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const { searchResults, searchLoading, searchError } = useSelector(state => state.videos);

  const handleSearch = (e) => {
    e.preventDefault();
    if (input.trim() !== "") {
      dispatch(searchVideos(input));
    }
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search videos by title..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit" disabled={searchLoading}>
          Search
        </button>
      </form>

      {searchLoading && <p>Loading...</p>}
      {searchError && <p>Error: {searchError}</p>}
      <ul>
        {searchResults.map((video) => (
          <li key={video._id}>{video.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBar;
