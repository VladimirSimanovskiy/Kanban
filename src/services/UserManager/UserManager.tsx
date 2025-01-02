export interface User {
	id: string;
	name: string;
	email: string;
	avatar: AvatarUrl;
}

export type AvatarUrl = string | undefined;
