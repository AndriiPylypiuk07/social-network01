export const getUsers = (state) => {
    return state.usersPage.users;
}

export const getPageSize = (state) => {
    return state.usersPage.pageSize;
}

export const getTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount;
}

export const getIsFinite = (state) => {
    return state.usersPage.isFinite;
}

export const getCurrentPage = (state) => {
    return state.usersPage.currentPage;
}

export const getFollowingInProgress = (state) => {
    return state.usersPage.followingInProgress;
}