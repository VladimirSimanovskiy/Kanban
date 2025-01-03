export interface User {
	id: number;
	name: string;
	email: string;
	avatar: AvatarUrl;
}

export type AvatarUrl = string | undefined;
