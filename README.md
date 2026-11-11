# React Native albums example

Album-list learning app using React Native 0.54.1 and Axios. Includes reusable cards, album details, and buttons.

## Layout

- `src/`: application components and state.
- `android/` and `ios/`: native platform projects.
- `package.json`: dependency versions and npm scripts.

## Development

This is a legacy React Native project. Use a Node, Android, and Xcode toolchain compatible with the versions in `package.json`; current React Native instructions may not apply.

The existing scripts provide:

```bash
npm install
npm start
npm test
```

`npm start` starts the development packager. Launching a device or simulator also requires the matching native platform toolchain.

The album data depends on the endpoint configured in `src/components/AlbumList.js`; its availability has not been verified.

Dependency installation and native builds have not been verified during this documentation update.
