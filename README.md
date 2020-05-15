# AWS AppSync + Pulumi + GraphQL Modules

[![npm version](https://badge.fury.io/js/pulumi-appsync-modules.svg)](https://badge.fury.io/js/pulumi-appsync-modules)
[![Build Status](https://travis-ci.org/Bjerkio/pulumi-appsync-modules.svg?branch=master)](https://travis-ci.org/Bjerkio/pulumi-appsync-modules)
[![codecov](https://codecov.io/gh/Bjerkio/pulumi-appsync-modules/branch/master/graph/badge.svg)](https://codecov.io/gh/Bjerkio/pulumi-appsync-modules) [![Greenkeeper badge](https://badges.greenkeeper.io/Bjerkio/pulumi-appsync-modules.svg)](https://greenkeeper.io/)

![Pulumi Appsync](assets/banner.png)


This module is inspired by [GraphQL Modules](https://graphql-modules.com) by [@UriGoldshtein](https://twitter.com/UriGoldshtein). It uses [Pulumi](https://pulumi.com) (*Modern Infrastructure as Code* tool) to deploy modulized GraphQL APIs to [AWS AppSync](https://aws.amazon.com/appsync/).

<small>*Elevator Pitch 👆 Documentation 👇*</small>

## Installation

```bash
$ npm i pulumi-appsync-modules
```

or

```bash
$ yarn add pulumi-appsync-modules
```

## Motivation

We love [Separation of Concerns](https://deviq.com/separation-of-concerns/) design, and we like where [GraphQL Modules](https://graphql-modules.com) are going. We use AWS for different projects, so we have a few larger projects under our belt with AWS Appsync. We tought there would be an excellent match to build something similar to GraphQL Modules – but for AWS Appsync. Our goal was to build something that looked similar in design (having the same API was vital). Using Pulumi made the most sense because we could keep our library lightweight.

# Documentation
Apart from this README, you can find details and examples of using the SDK in the following places:  

- [SDK Documentation](docs/README.md)
- [Pulumi AppSync Documentation](https://www.pulumi.com/docs/reference/pkg/aws/appsync/)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/Bjerkio/pulumi-appsync-modules/issues).

## Show your support

Give an ⭐️ if this project helped you!

## License

**[MIT](LICENSE)** Licensed
