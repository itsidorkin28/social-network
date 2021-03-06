import axios from 'axios';

const instance = axios.create({
	withCredentials: true,
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	headers: {
		'API-KEY': '1e90b645-3ab8-4f0b-b1bb-01b70c47396d'
	},
});

export const authAPI = {
	async authMe() {
		return instance.get<ResponseType<AuthMeData>>('auth/me');
	},
	async login(email: string, password: string, rememberMe: boolean = false) {
		return instance.post<ResponseType<LoginData>>('auth/login', {email, password, rememberMe});
	},
	async logout() {
		return instance.delete<ResponseType<{}>>('auth/login');
	}
};

export type ResponseType<T> = {
	data: T
	messages: Array<string>
	fieldsErrors: Array<string>
	resultCode: number
};

type LoginData = {
	userId: number
};
export type AuthMeData = {
	id: number | null
	login: string | null
	email: string | null
};