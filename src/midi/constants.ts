export enum ServiceMessages {
	Enabled = '::WebMidi enabled::',
	Disabled = '::WebMidi disabled::',
}

export const Constants = {
	WebMidi: {
		Disabled: {
			Error: 'Failed to disable WebMidi',
			Success: 'WebMidi disabled',
		},
		Enabled: {
			Error: 'Failed to enable WebMidi',
			Success: 'WebMidi enabled',
		},
	
	}
}
