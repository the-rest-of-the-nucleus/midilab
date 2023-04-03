import { ServiceMessages } from './constants';
import { Logger } from '@nestjs/common';

export async function onEnabled(logger: Logger) {
	logger.log(ServiceMessages.Enabled);
}

export async function onDisabled(logger: Logger) {
	logger.log(ServiceMessages.Disabled);
}

export async function onError(logger: Logger, e: Error) {
	logger.error(e);
}
