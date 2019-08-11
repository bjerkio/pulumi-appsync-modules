# AWS AppSync + Pulumi + GraphQL Modules

[![npm version](https://badge.fury.io/js/pulumi-appsync-modules.svg)](https://badge.fury.io/js/pulumi-appsync-modules)

![Pulumi Appsync](assets/banner.png)


This module is inspired by [GraphQL Modules](https://graphql-modules.com) by [@UriGoldshtein](https://twitter.com/UriGoldshtein). It uses *Modern Infrastructure as Code* tool [Pulumi](https://pulumi.com) to push modulized GraphQL APIs to [AWS AppSync](https://aws.amazon.com/appsync/).

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

We love [Separation of Concerns](https://deviq.com/separation-of-concerns/) design, and we really like where [GraphQL Modules](https://graphql-modules.com) are going. We work on both Google Cloud Platform and AWS for different projects, and having a few larger projects under our belt with AWS Appsync, and having experience working with GCP, Kubernetes and Node.js-based backends, we tought
there would be a good match to build something simular to GraphQL Modules – but for AWS Appsync. Our goal was to build something
that looked simular in design (having the same API was key). Using Pulumi made most sense, because with it we could keep our
library lightweight.

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/Bjerkio/pulumi-appsync-modules/issues).

## Show your support

Give a ⭐️ if this project helped you!

## License

**[MIT](LICENSE)** Licensed
