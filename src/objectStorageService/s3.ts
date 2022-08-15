/*
 *  Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *  SPDX-License-Identifier: Apache-2.0
 */

import AWS from '../AWS';

const { IS_OFFLINE } = process.env;

let binaryBucket = process.env.FHIR_BINARY_BUCKET || '';
let s3KMSKey = process.env.S3_KMS_KEY || '';
let s3EndpointURL = process.env.S3_ENDPOINT_URL || '';

if (IS_OFFLINE === 'true') {
    binaryBucket = process.env.OFFLINE_BINARY_BUCKET || '';
    s3KMSKey = process.env.OFFLINE_S3_KMS_KEY || '';
}

export const FHIR_BINARY_BUCKET = binaryBucket;
export const S3_KMS_KEY = s3KMSKey;
export const S3_ENDPOINT_URL = s3EndpointURL;

export const S3 = new AWS.S3({ signatureVersion: 'v4', sslEnabled: true, endpoint: S3_ENDPOINT_URL});

export default S3;
