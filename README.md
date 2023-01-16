<div align="center">
<h1>Bookmarker Extension</h1>

<p>Manage your bookmark easily</p>
</div>

---

[![MIT License][license-badge]][license]
[![PRs Welcome][prs-badge]][prs]
[![Code of Conduct][coc-badge]][coc]


## Table of Contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Table of Contents](#table-of-contents)
- [Tech Stack](#tech-stack)
- [How to run](#how-to-run)
  - [Development](#development)
- [Known Issue](#known-issue)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->



## Tech Stack

This template included most used libraries and pattern that commonly used, which are:

[v] React (v18)
[v] React Router DOM
[v] Typescript
[v] Vite
[v] SWC
[v] Tailwind
[v] ESLint + Prettier with mature rules & configuration
[v] MSW (Mock Service Worker)
[v] Folder Structure
[v] Zustand
[v] Zod
[v] TanStack Query
[v] Joy UI 
[v] date-fns 
[] Jest (Soon)
[] React Testing Library


## How to run

### Development

To run in the development, you can run with this command:

```
pnpm build:watch
```

Then, install the extension by pointing to `/dist` folder. Every changes you did, you should reloading the pages or the extensions


## Known Issue

* This repository does not support HMR
* Whenever you changed the `manifest.config.ts` you should reload the extension as well. However sometimes that is not help, because the `manifest.json` in `/dist` folder did not update. To solve that you should delete `/dist` folder and restart the build command.

[license-badge]: https://img.shields.io/npm/l/react-vite-starter.svg?style=flat-square
[license]: https://github.com/fyfirman/react-vite-starter/blob/master/LICENSE
[prs-badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square
[prs]: http://makeapullrequest.com
[coc-badge]: https://img.shields.io/badge/code%20of-conduct-ff69b4.svg?style=flat-square
[coc]: https://github.com/fyfirman/react-vite-starter/blob/master/other/CODE_OF_CONDUCT.md
