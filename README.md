
<div align="center">
  <a >
    <img src="images/impleo_logo.png" alt="Logo" >
  </a>
</div>

# SkyView

**SkyView** is a web application designed for live playback and analysis of **STANAG 4609** video streams.  
Built as a Progressive Web Application (**PWA**), SkyView can run seamlessly on your **local host**, **local network**, or in the
**cloud** and can even be installed as a desktop app for standalone use.

![SkyView](./images/main.jpg)

More [info](https://impleotv.com/content/skyview/help/).

## System Requirements

OS: Linux x64.

## Installation (using Docker Compose)
*Sky View** is a STANAG 4609 player that ships as a single Docker container with an embedded web UI. Once deployed, you can access the interface from any browser and optionally install it as a Progressive Web App (PWA) for offline use and a native-like experience.

## Prerequisites

- **Docker** 24+ installed on your system
  - Linux: Native Docker Engine
  - Windows: Docker Desktop (with limitations on multicast support) or VM
- **Docker Compose** (recommended for easier management)

## Quick Start

The fastest way to get Sky View running:

**Create a `docker-compose.yml` file:**  
```yaml  
  services:
    sky-view:
      image: impleo/sky-view:latest
      network_mode: host
      environment:
        SKY_VIEW_SERVER_ADDR: ":8100"
        SKY_VIEW_DB_PATH: "/data/sky-view.db"
      volumes:
        - sky-view-data:/data
      restart: unless-stopped

  volumes:
    sky-view-data:
```

> ℹ️ For multicast UDP stream support, Sky View requires `network_mode: host`, which is only available on Linux. Docker Desktop (Mac/Windows) has limited multicast capabilities.


**Start the container:**
```bash
  docker compose up -d
```

**Access the UI:**

Open your browser and navigate to `http://localhost:8100`

That's it! For more deployment options and configuration details, see [Running Sky View with Docker](./running-docker.md).

---

Additional installation instructions can be found [here](hhttps://impleotv.com/content/skyview/help/user-guide/getting-started.html)


## Direct Download link

|          | Version             | Download link                                                           | 
|:---------|:-------------------:|:------------------------------------------------------------------------|
| **SkyView (Linux x64)** |  0.2.1 | [sky-view-install.tar.gz](https://github.com/impleotv/sky-view-release/releases/download/v0.2.1/sky-view-install.tar.gz)  | 


*Released on Wed, 5 Nov 2025, 15:52 GMT+2*

## Components versions

Current server version uses the following components:  

|                  | Version             | CHANGELOG                                                          | 
|:-----------------|:-------------------:|:------------------------------------------------------------------------|
| **Backend**      |  0.2.1 | [CHANGELOG-SERVER.md](./CHANGELOG-SERVER.md) | 
  

## License

Without a license, SkyView application will operate in demo mode with certain restrictions. To remove these limitations, you need to obtain a license and upload it through the application's user interface.

![License](../images/server-config-license.png)


### License options

SkyView optional features are enabled by License

Options:  

**User & Group Management** - Built-in **JWT-based authentication and authorization** system for secure and controlled access.
**SRT playback** - Secure Reliable Transport (SRT) support



### Getting license

To obtain a license, please follow these steps:

- Install the server software on your target machine.  
- Complete the [online form](https://docs.google.com/forms/d/e/1FAIpQLSd_XW6bDsFce1G1cpds4gMQNlwNax0CvkWzcMbscxZ5rLaIbA/viewform) and provide the **Node Info** string for the target machine (IMPORTANT!!!).  
If the computer is offline or you’re unable to copy and paste the Node Info for any reason, please take a clear photo of the screen showing the QR code and send it to us.

*Please note that licenses will be issued after the product has been purchased.*



## Getting the license

To obtain a license, please contact ImpleoTV support and provide the Node Info string, which can be found in the License dialog.

![License upload](../images/server-config-license-upload.png)





---

## Known issues

In the Firefox browser, pop-up windows (KLV and Map) may sometimes open blank. To resolve this, try touching or resizing your main application window.

----  
*Please don't hesitate to contact us at support@impleotv.com should you have any question.*
