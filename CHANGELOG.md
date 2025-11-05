
<a name="v0.2.2"></a>
## [v0.2.2] - 2025-11-05
### Chore
- Replace PWA icon
- Modify manual

### Docs
- **changelog:** update for v0.2.2


<a name="v0.2.1"></a>
## [v0.2.1] - 2025-11-05
### Chore
- Update makefile
- Add release targets to the makefile
- dev

### Docs
- **changelog:** update for v0.2.1
- **changelog:** update for v0.2.1
- **changelog:** update for v0.2.1
- **changelog:** update for v0.2.1


<a name="v0.2.0"></a>
## [v0.2.0] - 2025-11-04
### Chore
- Stream events implementation
- Add events
- Improve logs
- Fix log sorting
- Logs
- Print mpegts error
- Update docker base image and the manual

### Feat
- Add stream events
- Add file/console logs


<a name="v0.1.10"></a>
## [v0.1.10] - 2025-11-02
### Chore
- Add SRT license restriction


<a name="backup/pre-filter-"></a>
## [backup/pre-filter-] - 2025-11-02
### Chore
- Srt error handling
- ignore local built binaries
- Add Srt
- Update dependencies
- Add WebRTC debug console manual
- Doc
- Modify webrtc debug

### Docs
- add WebRTC debug console manual

### Pull Requests
- Merge pull request [#26](https://github.com/impleotv/sky-view/issues/26) from impleotv/codex/document-webrtc-debug-page-options


<a name="v0.1.9"></a>
## [v0.1.9] - 2025-11-01
### Chore
- Change SKY_VIEW_ACCESS_TOKEN_TTL default
- Add nginx manual
- Add ftp upload
- Modify manual
- Doc

### Docs
- Explain JWT token lifetimes

### Fix
- Fix crash on the first run without DB
- compute turn server flag after formik

### Pull Requests
- Merge pull request [#25](https://github.com/impleotv/sky-view/issues/25) from impleotv/codex/enable-force-relay-based-on-turn-server
- Merge pull request [#24](https://github.com/impleotv/sky-view/issues/24) from impleotv/codex/add-jwt-implementation-explanation


<a name="v0.1.8"></a>
## [v0.1.8] - 2025-10-28
### Chore
- ver0.1.8
- Update manual


<a name="v0.1.7"></a>
## [v0.1.7] - 2025-10-28
### Chore
- Modify Manual
- Add purge for users and platforms from relevant entities
- Add manual for users and usergroups
- Add user profile data
- Implement usergroup access to platforms
- Buttons
- users config manual
- Platforms/streams config manual
- Server config manual
- WebRtc manual
- Manual
- Manual

### Docs
- describe users and usergroups
- document platforms and streams
- Document server configuration options
- document WebRTC configuration

### Feat
- Add users count badge to usergroups
- Add Platform selection to usergroups

### Pull Requests
- Merge pull request [#23](https://github.com/impleotv/sky-view/issues/23) from impleotv/codex/add-user-and-usergroup-definitions
- Merge pull request [#22](https://github.com/impleotv/sky-view/issues/22) from impleotv/codex/create-manual-for-platforms-and-streams
- Merge pull request [#21](https://github.com/impleotv/sky-view/issues/21) from impleotv/codex/add-server-configuration-explanation-to-config-server.md
- Merge pull request [#20](https://github.com/impleotv/sky-view/issues/20) from impleotv/codex/add-webrtc-configuration-explanation-to-manual


<a name="v0.1.6"></a>
## [v0.1.6] - 2025-10-27
### Chore
- Platform type select
- Update dependencies, including map

### Feat
- Add Platform type and color to the map
- Add platform color
- Add Platform icons


<a name="v0.1.5"></a>
## [v0.1.5] - 2025-10-26
### Chore
- dev
- Add protocol adornment in Stream Add/Edit
- Fix tests
- Update go dependecies
- Clean some code
- Implement max clients reject
- ver0.1.4

### Feat
- Implement MaxStream restriction

### Fix
- Fix error handling for stream errors


<a name="v0.1.4"></a>
## [v0.1.4] - 2025-10-24
### Chore
- Streams and Platforms sync between the clients
- Lots of changes
- dev
- Websockets
- License parse
- Refactor demo mode code
- GUI improvements
- WebRtc config gui improvements
- Broadcast demo mode change
- Modify license validation api
- Align chips
- Add new line to the expiration message
- Add icons
- Refactor license
- dev
- License gui improvements
- Firefox
- Firefox improvements (still does not work without moving main window)
- Codex re-work
- dev
- Flip disable user management
- Login improvements
- Modify login
- Update base image, fix detection
- Dynamic webrtc server restart
- Improve detection
- dev
- Add Caddy docker
- Update map (radar animation)
- Change Klv and Map button status if user closed the window externally
- Update map
- Decrease edit steps
- Modify help build process

### Docs
- inline stream autostart guidance
- explain stream autostart flow

### Feat
- add 10min DEMO_TIMEOUT and IsDemoMode flag; start/stop demo timer on license changes
- License
- Add docker and Caddy
- Implement Show stream button
- Add Show stream button
- Autostart active streams after changes
- **license:** schedule demo mode when license exp claim hits; add expiry timer with safe start/stop
- **ui:** add orange 'Demo Mode' banner at bottom when IsDemoMode is active

### Fix
- Fix detection info when stream goes offline
- propagate stream start failures

### Pull Requests
- Merge pull request [#18](https://github.com/impleotv/sky-view/issues/18) from impleotv/codex/auto-start-active-streams-after-creation


<a name="v0.1.3"></a>
## [v0.1.3] - 2025-10-18
### Chore
- Caching versin issues
- Update Readme


<a name="v0.1.2"></a>
## [v0.1.2] - 2025-10-18

<a name="v0.1.1"></a>
## [v0.1.1] - 2025-10-18

<a name="v0.1.0"></a>
## v0.1.0 - 2025-10-18
### Build
- enforce frontend embed verification

### Chore
- Fix map update after reopening
- Production fixes
- Runtime fixes
- Fix makefile
- Update buttons
- Refactor platform edit
- Update platform cards
- Filter inactive streams in the player page
- Add Autostart config
- Refactor stream edit
- Platform gui updates
- Add Dark Theme menu
- Video config
- Add codec specific params
- clean webrtc sessions on stop
- Video params
- Modify stream page
- Add AGENTS.md
- Update [@impleotv](https://github.com/impleotv)/misb601-tag2detailed
- Update KlvView
- Update web dependencies
- KlvWindow theme and tools
- Adjust color
- Gui update
- Change cards background
- GUI improvements
- Stream control toolbar
- Make layout dense
- Add unkown state
- Replace icons
- Refactor
- Code refactor
- Code refactor
- Fix show help
- Update makefile for help build
- Add Doc
- vp8 pipeline and frontend params
- Add codex setup scripts
- Update map version
- Video params
- Update howto
- QR
- Rest nodeinfo
- QR
- Move stream-detections handler
- Implement rest detection
- Detection json
- Clean up
- Add network interface support
- Theme
- Show no streams error under the combo
- Replace favicon
- Add nodeinfo
- Add backend QR code
- usergroups
- Update map
- Modify dialogs
- Update menu logic
- Update map control
- Map and Klv improvements
- Add Enable WebRtc debug menu
- Update gui
- Modify appbar
- Change default port from 8080 to 8100
-  Replace stang-player library with internal PlayerWheep comopnent
- Add frame provider
- Modify whep debug page
- Fix log in
- Fix iceServers cfg
- Improve frontend config
- Add JWT tests
- Add error handling to the player
- update web dependencies
- replace uav-map package manager
- Add whep player
- Replace autocomplete with select
- Add stream select
- Add go modules
- Add launch.json
- Add launch.json
- Update map
- Klv Window update
- Add player toolbar
- remove files from source control
- Fix initial drawer state and debug cfg
- drawer
- Update icons
- Update icons
- Add changelog

### Feat
- Pipeline restart
- Add KlvWindow portal
- Add stream progress
- Add dynamic detection
- Add Platform fister to sensors
- Add dark theme to webrtc debug page
- configure stream codec and params
- Add version info presentation
- Add stream info detection to the player page
- Implement stream Online/Timeout state reporting
- Add congfig tabs
- Implement stream config
- **web:** add structured video parameters editor
- **web:** make navigation drawer persistent

### Fix
- Fix caching issues for new versions
- Disable clients badge when disconnected
- Fix detection
- Fix slow shutdown
- Show version info on load
- Fix map load in production
- Fix Klv Portal in production
- Webrtc without platform name
- Fix Enable WebRtc

### Pull Requests
- Merge pull request [#16](https://github.com/impleotv/sky-view/issues/16) from impleotv/codex/verify-build-and-embedding-issues
- Merge pull request [#15](https://github.com/impleotv/sky-view/issues/15) from impleotv/codex/replace-edit/delete-buttons-with-toolbar
- Merge pull request [#14](https://github.com/impleotv/sky-view/issues/14) from impleotv/codex/update-backend-stream-state-for-unknown
- Merge pull request [#13](https://github.com/impleotv/sky-view/issues/13) from impleotv/codex/add-api-for-querying-connected-clients
- Merge pull request [#12](https://github.com/impleotv/sky-view/issues/12) from impleotv/codex/fix-help-manual-build-issue
- Merge pull request [#11](https://github.com/impleotv/sky-view/issues/11) from impleotv/codex/add-help-menu-to-application
- Merge pull request [#10](https://github.com/impleotv/sky-view/issues/10) from impleotv/codex/add-streamstate-display-in-playerpage
- Merge pull request [#9](https://github.com/impleotv/sky-view/issues/9) from impleotv/codex/verify-codex-environment-setup
- Merge pull request [#8](https://github.com/impleotv/sky-view/issues/8) from impleotv/codex/update-stream-struct-for-livevideo-management
- Merge pull request [#6](https://github.com/impleotv/sky-view/issues/6) from impleotv/codex/add-disableusermanagement-configuration
- Merge pull request [#7](https://github.com/impleotv/sky-view/issues/7) from impleotv/codex/find-required-private-repositories
- Merge pull request [#5](https://github.com/impleotv/sky-view/issues/5) from impleotv/codex/modify-edit-stream-general-page-layout
- Merge pull request [#3](https://github.com/impleotv/sky-view/issues/3) from impleotv/codex/add-api-endpoint-for-player-command
- Merge pull request [#2](https://github.com/impleotv/sky-view/issues/2) from impleotv/codex/implement-user-registration-and-admin-menu
- Merge pull request [#1](https://github.com/impleotv/sky-view/issues/1) from impleotv/codex/scaffold-sky-view-project-structure


[Unreleased]: https://github.com/impleotv/sky-view/compare/v0.2.2...HEAD
[v0.2.2]: https://github.com/impleotv/sky-view/compare/v0.2.1...v0.2.2
[v0.2.1]: https://github.com/impleotv/sky-view/compare/v0.2.0...v0.2.1
[v0.2.0]: https://github.com/impleotv/sky-view/compare/v0.1.10...v0.2.0
[v0.1.10]: https://github.com/impleotv/sky-view/compare/backup/pre-filter-...v0.1.10
[backup/pre-filter-]: https://github.com/impleotv/sky-view/compare/v0.1.9...backup/pre-filter-
[v0.1.9]: https://github.com/impleotv/sky-view/compare/v0.1.8...v0.1.9
[v0.1.8]: https://github.com/impleotv/sky-view/compare/v0.1.7...v0.1.8
[v0.1.7]: https://github.com/impleotv/sky-view/compare/v0.1.6...v0.1.7
[v0.1.6]: https://github.com/impleotv/sky-view/compare/v0.1.5...v0.1.6
[v0.1.5]: https://github.com/impleotv/sky-view/compare/v0.1.4...v0.1.5
[v0.1.4]: https://github.com/impleotv/sky-view/compare/v0.1.3...v0.1.4
[v0.1.3]: https://github.com/impleotv/sky-view/compare/v0.1.2...v0.1.3
[v0.1.2]: https://github.com/impleotv/sky-view/compare/v0.1.1...v0.1.2
[v0.1.1]: https://github.com/impleotv/sky-view/compare/v0.1.0...v0.1.1
