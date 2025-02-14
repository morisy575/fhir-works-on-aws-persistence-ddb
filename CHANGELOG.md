# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [3.11.0](https://github.com/awslabs/fhir-works-on-aws-persistence-ddb/compare/v3.10.1...v3.11.0) (2022-04-06)


### Features

* add Batch Bundle support ([#144](https://github.com/awslabs/fhir-works-on-aws-persistence-ddb/issues/144)) ([dc17145](https://github.com/awslabs/fhir-works-on-aws-persistence-ddb/commit/dc17145ebd73eba2c6fe9fe519263f92617ce493))

### [3.10.1](https://github.com/awslabs/fhir-works-on-aws-persistence-ddb/compare/v3.10.0...v3.10.1) (2022-03-07)


### Bug Fixes

* fix update query for Subscriptions ([#142](https://github.com/awslabs/fhir-works-on-aws-persistence-ddb/issues/142)) ([3c41f05](https://github.com/awslabs/fhir-works-on-aws-persistence-ddb/commit/3c41f0534fb5cf99ce0ecce7ca27b34793154226))

## [3.10.0](https://github.com/awslabs/fhir-works-on-aws-persistence-ddb/compare/v3.9.0...v3.10.0) (2022-03-03)


### Features

* add support for FHIR Subscriptions ([#138](https://github.com/awslabs/fhir-works-on-aws-persistence-ddb/issues/138)) ([f73ed96](https://github.com/awslabs/fhir-works-on-aws-persistence-ddb/commit/f73ed96ffb0f4ca9886a96e9049530ce9a008040)), closes [#131](https://github.com/awslabs/fhir-works-on-aws-persistence-ddb/issues/131) [#132](https://github.com/awslabs/fhir-works-on-aws-persistence-ddb/issues/132) [#135](https://github.com/awslabs/fhir-works-on-aws-persistence-ddb/issues/135) [#139](https://github.com/awslabs/fhir-works-on-aws-persistence-ddb/issues/139) [#140](https://github.com/awslabs/fhir-works-on-aws-persistence-ddb/issues/140)

## [3.9.0](https://github.com/awslabs/fhir-works-on-aws-persistence-ddb/compare/v3.8.2...v3.9.0) (2021-10-13)


### Features

* pass jobOwnerId param to bulk export job ([#124](https://github.com/awslabs/fhir-works-on-aws-persistence-ddb/issues/124)) ([85a5912](https://github.com/awslabs/fhir-works-on-aws-persistence-ddb/commit/85a59129b293d858f29189dda9281fe9e7addf2e))
* support custom bulk export results URLs ([#123](https://github.com/awslabs/fhir-works-on-aws-persistence-ddb/issues/123)) ([37e3473](https://github.com/awslabs/fhir-works-on-aws-persistence-ddb/commit/37e34732817d5053e9a3f57d69ed16e63147c979))

### [3.8.2](https://github.com/awslabs/fhir-works-on-aws-persistence-ddb/compare/v3.8.1...v3.8.2) (2021-09-30)

### [3.8.1](https://github.com/awslabs/fhir-works-on-aws-persistence-ddb/compare/v3.8.0...v3.8.1) (2021-09-17)


### Bug Fixes

* have bulk export return the correct content type ([#112](https://github.com/awslabs/fhir-works-on-aws-persistence-ddb/issues/112)) ([bbf22ae](https://github.com/awslabs/fhir-works-on-aws-persistence-ddb/commit/bbf22ae94bf03d843966d8b62c9aeee5410e7bf7))

## [3.8.0](https://github.com/awslabs/fhir-works-on-aws-persistence-ddb/compare/v3.7.0...v3.8.0) (2021-08-30)


### Features

* add config options to DdbToEsSync ([#108](https://github.com/awslabs/fhir-works-on-aws-persistence-ddb/issues/108)) ([f9c9414](https://github.com/awslabs/fhir-works-on-aws-persistence-ddb/commit/f9c9414a326f2e458b4e1c82ad29a694facee70e))


### Bug Fixes

* reroute locking errors from server errors to conflict errors where applicable ([#102](https://github.com/awslabs/fhir-works-on-aws-persistence-ddb/issues/102)) ([fbe19c7](https://github.com/awslabs/fhir-works-on-aws-persistence-ddb/commit/fbe19c75acaa7b8cf5777578aad83b778e93579f))

## [3.7.0](https://github.com/awslabs/fhir-works-on-aws-persistence-ddb/compare/v3.6.1...v3.7.0) (2021-08-17)


### Features

* implement multi-tenancy and group export ([#106](https://github.com/awslabs/fhir-works-on-aws-persistence-ddb/issues/106)) ([860e27d](https://github.com/awslabs/fhir-works-on-aws-persistence-ddb/commit/860e27dac6711ff0b8998d4ab43e983304effa59)), closes [#87](https://github.com/awslabs/fhir-works-on-aws-persistence-ddb/issues/87) [#86](https://github.com/awslabs/fhir-works-on-aws-persistence-ddb/issues/86) [#91](https://github.com/awslabs/fhir-works-on-aws-persistence-ddb/issues/91) [#90](https://github.com/awslabs/fhir-works-on-aws-persistence-ddb/issues/90) [#94](https://github.com/awslabs/fhir-works-on-aws-persistence-ddb/issues/94) [#98](https://github.com/awslabs/fhir-works-on-aws-persistence-ddb/issues/98) [#100](https://github.com/awslabs/fhir-works-on-aws-persistence-ddb/issues/100)

### [3.6.1](https://github.com/awslabs/fhir-works-on-aws-persistence-ddb/compare/v3.6.0...v3.6.1) (2021-08-02)


### Bug Fixes

* change ES writes to use Bulk APIs ([#97](https://github.com/awslabs/fhir-works-on-aws-persistence-ddb/issues/97)) ([7eee06e](https://github.com/awslabs/fhir-works-on-aws-persistence-ddb/commit/7eee06e5955bb980abd17dced35a86236ea10189))

## [3.6.0](https://github.com/awslabs/fhir-works-on-aws-persistence-ddb/compare/v3.5.0...v3.6.0) (2021-07-09)


### Features

* Adding support for versioned reference links ([#88](https://github.com/awslabs/fhir-works-on-aws-persistence-ddb/issues/88)) ([acef8d1](https://github.com/awslabs/fhir-works-on-aws-persistence-ddb/commit/acef8d17b934214e49b47bff0ddc438acedf99e8))

## [3.5.0](https://github.com/awslabs/fhir-works-on-aws-persistence-ddb/compare/v3.4.0...v3.5.0) (2021-06-11)


### Features

* add alias for new and existing index ([#83](https://github.com/awslabs/fhir-works-on-aws-persistence-ddb/issues/83)) ([af637d4](https://github.com/awslabs/fhir-works-on-aws-persistence-ddb/commit/af637d442ca328507ce2dcf457f173c07bb8e3aa))

## [3.4.0](https://github.com/awslabs/fhir-works-on-aws-persistence-ddb/compare/v3.3.4...v3.4.0) (2021-06-01)


### Features

* support update as create in bundle service ([#80](https://github.com/awslabs/fhir-works-on-aws-persistence-ddb/issues/80)) ([bf1366d](https://github.com/awslabs/fhir-works-on-aws-persistence-ddb/commit/bf1366dd82d08afe9eea862c792518505ed8bf54))


### Bug Fixes

* initialize ES client only once ([#79](https://github.com/awslabs/fhir-works-on-aws-persistence-ddb/issues/79)) ([b6e6b80](https://github.com/awslabs/fhir-works-on-aws-persistence-ddb/commit/b6e6b8097cec335ec12a4e28b822387615add5e5))

### [3.3.4](https://github.com/awslabs/fhir-works-on-aws-persistence-ddb/compare/v3.3.3...v3.3.4) (2021-05-17)

### [3.3.3](https://github.com/awslabs/fhir-works-on-aws-persistence-ddb/compare/v3.3.2...v3.3.3) (2021-04-26)


### Bug Fixes

* improve error logging for ddbToEs sync ([#68](https://github.com/awslabs/fhir-works-on-aws-persistence-ddb/issues/68)) ([5774b34](https://github.com/awslabs/fhir-works-on-aws-persistence-ddb/commit/5774b3428392d828132bca1b611f02b5c6479d48))

### [3.3.2](https://github.com/awslabs/fhir-works-on-aws-persistence-ddb/compare/v3.3.1...v3.3.2) (2021-04-14)


### Bug Fixes

* return the newly create meta field from bundle processer ([#65](https://github.com/awslabs/fhir-works-on-aws-persistence-ddb/issues/65)) ([a2b5206](https://github.com/awslabs/fhir-works-on-aws-persistence-ddb/commit/a2b5206d353c25d464e5290d08d375cb1b6d806e))

### [3.3.1](https://github.com/awslabs/fhir-works-on-aws-persistence-ddb/compare/v3.3.0...v3.3.1) (2021-04-09)


### Bug Fixes

* don't overwrite meta param in Resource update/create ([#62](https://github.com/awslabs/fhir-works-on-aws-persistence-ddb/issues/62)) ([e913c71](https://github.com/awslabs/fhir-works-on-aws-persistence-ddb/commit/e913c711c842d922a9aa1902b6705d240af6ad68))
* Only add customUserAgent when code is running on AWS, not when code is running locally ([#61](https://github.com/awslabs/fhir-works-on-aws-persistence-ddb/issues/61)) ([c304ffd](https://github.com/awslabs/fhir-works-on-aws-persistence-ddb/commit/c304ffd5b1a5d7bf1f9dc5bc2e1088859f4a4968))

## [3.3.0](https://github.com/awslabs/fhir-works-on-aws-persistence-ddb/compare/v3.2.1...v3.3.0) (2021-03-26)


### Features

* add support for Update as Create ([#57](https://github.com/awslabs/fhir-works-on-aws-persistence-ddb/issues/57)) ([14a254e](https://github.com/awslabs/fhir-works-on-aws-persistence-ddb/commit/14a254e7c290b459660506c637de4601a0c36aa8))

### [3.2.1](https://github.com/awslabs/fhir-works-on-aws-persistence-ddb/compare/v3.2.0...v3.2.1) (2021-02-08)


### Bug Fixes

* match on resourceType as well as id when executing Read/VRead/DeleteVersionedRes operations ([#51](https://github.com/awslabs/fhir-works-on-aws-persistence-ddb/issues/51)) ([4f433d2](https://github.com/awslabs/fhir-works-on-aws-persistence-ddb/commit/4f433d2eacdd81c25bdc6e5a2d5e9ea755a33204))
* resolve vid and meta attribute mismatch on concurrent Update requests ([#53](https://github.com/awslabs/fhir-works-on-aws-persistence-ddb/issues/53)) ([2ecc1cd](https://github.com/awslabs/fhir-works-on-aws-persistence-ddb/commit/2ecc1cd894c9b10b984598f654654a92a1ae5c50))

## [3.2.0](https://github.com/awslabs/fhir-works-on-aws-persistence-ddb/compare/v3.1.0...v3.2.0) (2021-01-27)


### Features

* Change ES mapping for keyword parameters ([#48](https://github.com/awslabs/fhir-works-on-aws-persistence-ddb/issues/48)) ([1a72433](https://github.com/awslabs/fhir-works-on-aws-persistence-ddb/commit/1a72433817752e707af9ea52508b083415149ecc))

## [3.1.0](https://github.com/awslabs/fhir-works-on-aws-persistence-ddb/compare/v3.0.0...v3.1.0) (2021-01-20)


### Features

* Add reference to data model ([#44](https://github.com/awslabs/fhir-works-on-aws-persistence-ddb/issues/44)) ([7a74313](https://github.com/awslabs/fhir-works-on-aws-persistence-ddb/commit/7a74313e88b8620346791d865b35787914889306))


### Bug Fixes

* We no longer need to store presignedS3Urls as they are now dynamically generated when a user request for the S3 files ([#42](https://github.com/awslabs/fhir-works-on-aws-persistence-ddb/issues/42)) ([823fb57](https://github.com/awslabs/fhir-works-on-aws-persistence-ddb/commit/823fb573e29a37ba2c83f1c4c33e2cdd1cfef449))

## [3.0.0] - 2020-11-10

### Added
- Support for DB export by implementing BulkDataAccess interfaces in `fhir-works-on-aws-interface` v3.0.0

## [2.0.1] - 2020-10-31
- chore: Upgrade fhir-works-on-aws-interface dependency

## [2.0.0] - 2020-08-31

### Added

- feat: Assume that the Resource DDB sort key is a number not a String
  - BREAKING CHANGE: This change will not be successful if sort key is still a String

## [1.1.0] - 2020-08-31

### Added

- feat: X-Ray integration

## [1.0.0] - 2020-08-31

### Added

- Initial launch! :rocket:
