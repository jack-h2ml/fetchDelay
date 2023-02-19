/**
 * @author Jack Notman
 * @version 1.0.3
 * @module @h2mlagency/fetchreplace
 */

import {Timeout, Timer} from '@h2ml/bettertimeout';

"use strict";

/** 
 * The {@link fetchDelay} function.
 * @param {String} url                       - The url to fetch.
 * @param {Object} options                   - fetchDelay Configuration options.
 * @param {Number} [options.minDelay=1000]   - The minimum delay before the Promise resolves.
 * @param {Number} [options.maxDelay=3000]   - The maximum amount of time before the Promise rejects.
 * @param {Object} [options.fetchOptions={}] - The configuration options to pass to fetch().
 * @returns {(Promise<Response> | Error)} 
 */

export const fetchDelay = async (url, options = {}) => {
	const {
		minDelay = 1000,
		maxDelay = 3000,
		fetchOptions = {}
	} = options;
	//
	if(minDelay > maxDelay) console.debug('@h2ml/fetchMinMaxDelay: Passed minDelay greater than maxDelay. Using maxDelay for both.');
	//
	const controller = new AbortController();
	const maxDelayTimeout = new Timeout(() => controller.abort(), maxDelay);
	//
	const [
		response
	] = await Promise.all([
		fetch(url, {
			...fetchOptions,
			signal: controller.signal
		}),
		new Timer({
			duration: Math.min(minDelay, maxDelay)
		}).start().done
	]);
	//
	maxDelayTimeout.clear();
	return response;
};


