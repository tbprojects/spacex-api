# SpaceX api

A JavaScript / TypeScript wrapper for fetching data from [SpaceX api](https://docs.spacexdata.com/).

## Installation

`npm install spacex-api`

## Usage

See [available methods](lib/spacex.ts)

### TypeScript

```
import { SpaceX } from 'spacex-api';

SpaceX
    .getLatestLaunch()
    .then(launch => alert(launch.mission_name))
```

### JavaScript

```javascript
var SpaceX = require('spacex-api').SpaceX;

SpaceX.
    .getLatestLaunch()
    .then(launch => alert(launch.mission_name))

```

## Limitations

* Lib is using [Fetch API](https://caniuse.com/#feat=fetch), so Internet Explorer is not supported.

## Thanks for

* [Thomas Smyth](https://github.com/Thomas-Smyth) for creating [SpaceX-API-Wrapper](https://github.com/Thomas-Smyth/SpaceX-API-Wrapper)
* [Timmy Kokke](https://timmykokke.com/) for creating [json2ts](http://json2ts.com/)
