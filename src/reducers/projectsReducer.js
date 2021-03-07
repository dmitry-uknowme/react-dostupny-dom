const SET_PROJECTS = 'SET_PROJECTS';
const SET_ACTIVE_ID = 'SET_ACTIVE_ID';
const PREV_ACTIVE_ID = 'PREV_ACTIVE_ID';
const NEXT_ACTIVE_ID = 'NEXT_ACTIVE_ID';

const defaulState = {
	items: [],
	activeId: 0,
	isFetching: false,
};

const projectsReducer = (state = defaulState, action) => {
	switch (action.type) {
		case SET_PROJECTS:
			return {
				...state,
				items: action.payload,
			};
		case SET_ACTIVE_ID:
			return {
				...state,
				activeId: action.payload,
			};
		case PREV_ACTIVE_ID:
			return {
				...state,
				activeId: state.activeId - 1,
			};

		case NEXT_ACTIVE_ID:
			return {
				...state,
				activeId: state.activeId + 1,
			};
		default:
			return state;
	}
};

export const setProjects = (items) => ({ type: SET_PROJECTS, payload: items });
export const setActiveId = (id) => ({ type: SET_ACTIVE_ID, payload: id });
export const prevActiveId = () => ({ type: PREV_ACTIVE_ID });
export const nextActiveId = () => ({ type: NEXT_ACTIVE_ID });

export default projectsReducer;
