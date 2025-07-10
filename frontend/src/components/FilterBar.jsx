
/**
 * FilterBar component renders a horizontal list of filter buttons for content categories.
 *
 * @fileoverview
 * This file defines the FilterBar React component, which displays a set of filter options
 * (such as 'All', 'Music', 'Gaming', etc.) as horizontally scrollable buttons. The currently
 * selected filter is visually highlighted. Clicking a button triggers the onSelectFilter callback
 * with the selected filter value.
 *
 * @component
 * @param {Object} props - Component props.
 * @param {string} props.selectedFilter - The currently selected filter.
 * @param {function} props.onSelectFilter - Callback function invoked when a filter is selected.
 *
 * @example
 * <FilterBar
 *   selectedFilter="Music"
 *   onSelectFilter={(filter) => setSelectedFilter(filter)}
 * />
 */
const filters = ['All', 'Music', 'Gaming', 'News', 'Sports', 'Education', 'Entertainment'];

export default function FilterBar({ selectedFilter, onSelectFilter }) {
  return (
    <div className="flex gap-6 overflow-x-auto py-3 px-4 scrollbar-hide">
      {filters.map((filter) => {
        const isActive = selectedFilter === filter;
        return (
          <button
            key={filter}
            onClick={() => onSelectFilter(filter)}
            className={`
              px-6 py-2 text-base font-semibold rounded-full whitespace-nowrap
              transition-colors duration-300 shadow-sm
              ${isActive
                ? 'bg-black text-white shadow-md'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300 hover:text-black'}
              focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1
            `}
          >
            {filter}
          </button>
        );
      })}
    </div>
  );
}
