![P5.js logo](./img/asterisk.png) **scaffold-p5-ccapture**
====================

Scaffold setup for capturing video of `p5.js` animation.

\
Used `CCapture.all.min.js` from [spite/ccapture.js](https://github.com/spite/ccapture.js/tree/master/build) repository, and `p5.js` from [p5.js official website](https://p5js.org/download/)

\
Setup
======

1. Clone this repo and navigate to project directory:

    ```bash
    git clone https://github.com/dkostmii/scaffold-p5-ccapture.git
    cd scaffold-p5-ccapture
    ```

2. Install dependencies:

    `npm install`

3. [Download](https://ffmpeg.org/download.html) `ffmpeg` and add it to your `PATH`

4. If your are on Windows, downoad [7-Zip](https://www.7-zip.org/). Add it yo your `PATH` if you want to use `7z` CLI utility

5. Write your sketch in `sketch.js`

6. Start project:

    `npm run start`

7. Download the **TAR** archive with images:

    ![Screenshot with TAR archive download option](./img/screenshot-tar-archive.png)

8. Unpack the TAR arhive:

    `7z x -oC:\YOUR_DIRECTORY YOUR_ARCHIVE.tar`

    or use the `7zfm` utility

9. Proceed to directory with unpacked images, copy here any of following scripts in `ffmpeg-scripts`:
    - `render.bat` for `CMD`
    - `render.ps1` for `PowerShell`
    - `render.sh` for `bash`

    for example: `.\render.ps1`

    Resulting video will be written to `output.mp4` file.


> - - > - - > - - > - -
> - - > - - > - - > - -
> - - > - - > - - > - -
>
> ## **You have done that!**
> ### Enjoy ;)
>
