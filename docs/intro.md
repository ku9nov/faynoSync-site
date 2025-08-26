---
sidebar_position: 1
---

# Introduction to FaynoSync

FaynoSync derives its name from the Ukrainian word "файно" (fayno), meaning "excellent," "fine," or "great." This informal term captures the positive and enjoyable experience that FaynoSync aims to provide.

FaynoSync is a comprehensive, powerful auto-updater service written in Golang. Its primary purpose is to keep your applications up-to-date effortlessly across multiple platforms and update mechanisms. With FaynoSync, you can upload your application to various cloud storage providers and set the version number. The client application then communicates with the FaynoSync API to check for updates. If a newer version is available, FaynoSync provides a link to the updated service, and your application will notify the user with an alert.

One of FaynoSync's key strengths is its flexibility and user control. Users can create custom channels, platforms, and architectures with any names they choose, allowing the same workflow to support various application types such as desktop apps, browser extensions, mobile applications, and more. Our goal is to ensure that your creativity is the only limit.

## Key Features

- **Unified Registry**: FaynoSync serves as a central registry for different types of applications, providing a streamlined, intuitive API that simplifies managing your updates.

- **Multi-Updater Support**: Support for various update mechanisms including Squirrel Windows/macOS, Electron Builder, and custom manual updates with artifact isolation for proper file organization.

- **Seamless Updates**: Keep your applications always up-to-date with a straightforward and efficient auto-updating process that adapts to your specific update mechanism.

- **Maximum Flexibility**: Define your channels, platforms, and architectures freely, giving you complete control over how your updates are managed.

- **Security**: Keep your cloud storage buckets and applications private — downloads are only accessible through authenticated access with granular permissions.

- **Team Management**: Create and manage team users with fine-grained permissions, controlling access to applications and resources across your organization.

- **Performance Mode**: Enable intelligent caching to reduce server load and minimize response times, optimizing your application's performance.

- **Telemetry System**: Gain valuable insights with detailed analytics about your application's usage, version distribution, and user base across platforms.

- **Required Intermediate Builds**: Enforce specific update paths for breaking changes and critical updates, ensuring safe and controlled application upgrades.

- **Multi-Cloud Storage**: Seamless integration with AWS S3, MinIO, Digital Ocean Spaces, and GCP Cloud Storage for maximum flexibility and reliability.

- **Universal Platform Support**: Designed to work with desktop applications, browser extensions, mobile applications, and any other software that requires updates.

## Supported Update Mechanisms

FaynoSync supports multiple update mechanisms to ensure compatibility with various application frameworks:

- **Manual Updates**: Custom update logic for applications with specific requirements
- **Squirrel Windows**: Native support for Windows applications using Squirrel update mechanism
- **Squirrel macOS**: Optimized updates for macOS applications using Squirrel
- **Electron Builder**: Full compatibility with Electron applications using electron-builder

## Getting Started

This documentation is designed to help you get started with FaynoSync smoothly and enjoyably. Whether you're setting up your first application or configuring complex multi-platform deployments, our comprehensive guides will walk you through every step.

Don't hesitate to request new features or start discussions on our GitHub. We are always looking to improve and make FaynoSync even better for our users. FaynoSync is designed to grow with your needs, from simple single-application deployments to complex enterprise-scale update management systems.