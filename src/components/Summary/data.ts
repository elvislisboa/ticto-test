export interface ISummary { }

export interface ISummaryLayout extends ISummary {
	summary: {
		deposits: number;
		withdraw: number;
		total: number;
	}
}
