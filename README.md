<p align="center">
    <img src="docs/images/logos/circle.png" alt="rainbow logo" />
    <h1 align="center"><a href="https://techous.github.io/rainbow/">rainbow</a></h1>
    <h2 align="center">Best Java library to create colorful User Interfaces for Linux terminals.</h2>
    <h4 align="center">
        <img alt="GitHub tag (latest by date)" src="https://img.shields.io/github/v/tag/techous/rainbow">
        <img alt="GitHub repo size" src="https://img.shields.io/github/repo-size/TechOUs/rainbow"/>
        <img alt="GitHub issues" src="https://img.shields.io/github/issues/techous/rainbow">
        <img alt="GitHub pull requests" src="https://img.shields.io/github/issues-pr/TechOUs/rainbow">
        <img alt="GitHub forks" src="https://img.shields.io/github/forks/techous/rainbow?style=social">
        <img alt="GitHub stars" src="https://img.shields.io/github/stars/techous/rainbow?style=social">
    </h4>
</p>

Rainbow is the best library to create colorful User Interfaces for Linux Terminals.

* **Simple and Easy to use:** Rainbow is very simple and easy to use. You don't have to learn anything for using this library except java and terminal.

* **Declare once, use anytime:** You have to declare a rainbow instance only once and then you can use any where in your project.

* **No need to learn hexadecimal color codes:** For using rainbow you don't have to learn or find the color codes which you need for your project.

* **Minified Library:** Rainbow has very less size as compared to other java libraries. Rainbow core is very small that's why it has ![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/TechOUs/rainbow) only.

## Projects using Rainbow

* [RAINBOW core](https://github.com/GauravWalia19/RAINBOW)
* [TETRIS](https://github.com/GauravWalia19/TETRIS)
* [BATTLESHIPS-GAME](https://github.com/GauravWalia19/Java-Projects/tree/master/BATTLESHIPS-GAME)
* [MAZE RUNNER](https://github.com/GauravWalia19/Java-Projects/tree/master/MAZE-RUNNER)
and many more

## Supported OS

* Linux (all distributions)
* Mac

## Supported Languages

![GitHub top language](https://img.shields.io/github/languages/top/TechOUs/rainbow)

## Installation

Rainbow has three methods from which you can use in your project.

* [For Developers](https://techous.github.io/rainbow/#developer-use-hr)
* [For jar lovers](https://techous.github.io/rainbow/#library-jar-use-hr)
* [By using package registory(in progress)](https://techous.github.io/rainbow/#github-java-package-use-hr)

For detailed installation guidelines according to your IDE read [installation instructions here](https://techous.github.io/rainbow/#getting-started-hr).

## Examples

Here is the example which shows usage of rainbow library of java. For [more read more tutorials here](). For running this project read our [documentation](#documentation) for getting started.

```java
import org.techous.rainbow.*;

public class Main{
    public static void main(String[] args) {
        Rainbow rain = new Rainbow();
        System.out.println();
        System.out.println(rain.getFormatColorString("bold","y"," *****      *      *****  *    *  ****    ***   *   * ", true));
        System.out.println(rain.getFormatColorString("bold","y"," *   *     * *       *    **   *  *   *  *   *  *   * ", true));
        System.out.println(rain.getFormatColorString("bold","y"," *****    *****      *    * *  *  ****   *   *  * * * ", true));
        System.out.println(rain.getFormatColorString("bold","y"," *  *    *     *     *    *  * *  *   *  *   *  ** ** ", true));
        System.out.println(rain.getFormatColorString("bold","y"," *   *  *       *  *****  *   **  ****    ***   *   * ", true));
        System.out.println();
    }
}
```

<p align="center">
    <a href="https://repl.it/@techous/RainbowPlayground4">Try on Rainbow PlayGround</a>
</p>

Here is the output of the program when you run the sample code.

![rainbow image](docs/images/readme1.png)

## Documentation

For documentation take look at our [![Website](https://img.shields.io/website?down_color=red&down_message=offline&up_color=blue&up_message=online&url=https%3A%2F%2Ftechous.github.io%2Ftreasurejs.github.io%2F) here](https://techous.github.io/rainbow/#rainbow-java-package-hr).

## Contributing to rainbow ![GitHub contributors](https://img.shields.io/github/contributors/TechOUs/rainbow)

For contributing read our contribution guidelines [here](.github/CONTRIBUTING.md).

## LICENSE

rainbow uses [![GitHub](https://img.shields.io/github/license/TechOUs/rainbow)](LICENSE)

Copyright :copyright: 2020 TechOUs
