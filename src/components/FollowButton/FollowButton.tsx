import React from 'react';
import s from './FollowButton.module.scss';
import {useSelector} from 'react-redux';
import {AppStateType} from '../../app/redux-store';

type PropsType = {
	followed: boolean
	userId: number | string
	followUserHandler: (userID: number | string) => void
	unfollowUserHandler: (userID: number | string) => void
};

export const FollowButton = React.memo(({
											followUserHandler,
											unfollowUserHandler,
											followed,
											userId,
										}: PropsType) => {

	const usersPageIsFollowing = useSelector<AppStateType, Array<number | string>>(state => state.usersPage.isFollowing);
	const disabledButton = usersPageIsFollowing.some(id => id === userId);
	return (
		<div>
			{followed
				? <button className={s.unfollowBtn} onClick={() => unfollowUserHandler(userId)}
						  disabled={disabledButton}>UNFOLLOW
				</button>
				: <button className={s.followBtn} onClick={() => followUserHandler(userId)}
						  disabled={disabledButton}>FOLLOW
				</button>}
		</div>
	);
});


