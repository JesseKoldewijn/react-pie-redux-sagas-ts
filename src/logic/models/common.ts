// Base interfaces and types used across the application

export interface ApiResponse<T> {
	data: T;
	message?: string;
	success: boolean;
}

export interface ApiError {
	message: string;
	code?: string | number;
	details?: unknown;
}

export interface LoadingState {
	loading: boolean;
	error: string | null;
}

// Common action payload types
export interface IdPayload {
	id: string | number;
}

export interface PaginationParams {
	page: number;
	limit: number;
	sortBy?: string;
	sortOrder?: "asc" | "desc";
}

export interface PaginatedResponse<T> {
	data: T[];
	total: number;
	page: number;
	limit: number;
	hasNext: boolean;
	hasPrev: boolean;
}
